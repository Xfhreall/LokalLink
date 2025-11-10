import { z } from 'zod';

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
	'image/jpeg',
	'image/jpg',
	'image/png',
	'image/webp',
	'application/pdf',
];

export const step1Schema = z.object({
	storeName: z.string().min(1, 'Nama toko harus diisi'),
	ownershipDocuments: z
		.array(
			z.object({
				file: z
					.instanceof(File)
					.refine(
						(file) => file.size <= MAX_FILE_SIZE,
						'Ukuran file maksimal 10MB',
					)
					.refine(
						(file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
						'Format file harus JPG, PNG, JPEG, atau PDF',
					),
				preview: z.string(),
			}),
		)
		.min(1, 'Minimal 1 file harus diunggah')
		.max(3, 'Maksimal 3 file'),
});

export const step2Schema = z.object({
	legalName: z.string().min(1, 'Nama perwakilan hukum harus diisi'),
	ktpNumber: z
		.string()
		.min(1, 'Nomor KTP harus diisi')
		.regex(/^[0-9]{16}$/, 'Nomor KTP harus 16 digit'),
	birthDate: z.string().min(1, 'Tanggal lahir harus diisi'),
	acceptTerms: z.boolean().refine((val) => val === true, {
		message: 'Anda harus menyetujui syarat dan ketentuan',
	}),
});

export const documentStepSchema = z.object({
	storeName: z.string().min(1, 'Nama toko harus diisi'),
	ownershipDocuments: z
		.array(
			z.object({
				file: z
					.instanceof(File)
					.refine(
						(file) => file.size <= MAX_FILE_SIZE,
						'Ukuran file maksimal 10MB',
					)
					.refine(
						(file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
						'Format file harus JPG, PNG, JPEG, atau PDF',
					),
				preview: z.string(),
			}),
		)
		.min(1, 'Minimal 1 file harus diunggah')
		.max(3, 'Maksimal 3 file'),
	legalName: z.string().min(1, 'Nama perwakilan hukum harus diisi'),
	ktpNumber: z
		.string()
		.min(1, 'Nomor KTP harus diisi')
		.regex(/^[0-9]{16}$/, 'Nomor KTP harus 16 digit'),
	birthDate: z.string().min(1, 'Tanggal lahir harus diisi'),
	acceptTerms: z.boolean().refine((val) => val === true, {
		message: 'Anda harus menyetujui syarat dan ketentuan',
	}),
});

export type DocumentStepFormData = z.infer<typeof documentStepSchema>;
