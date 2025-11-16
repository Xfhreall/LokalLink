import { z } from 'zod';

export const signupSchema = z
	.object({
		email: z.string().email('Email tidak valid'),
		fullName: z.string().min(1, 'Nama lengkap harus diisi'),
		whatsapp: z
			.string()
			.min(1, 'Nomor WhatsApp harus diisi')
			.regex(/^[0-9]+$/, 'Nomor WhatsApp hanya boleh berisi angka')
			.min(9, 'Nomor WhatsApp minimal 9 digit')
			.max(13, 'Nomor WhatsApp maksimal 13 digit'),
		password: z.string().min(6, 'Password minimal 6 karakter'),
		confirmPassword: z
			.string()
			.min(6, 'Konfirmasi password minimal 6 karakter'),
		acceptTerms: z.boolean().refine((val) => val === true, {
			message: 'Anda harus menyetujui syarat dan ketentuan',
		}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Password tidak cocok',
		path: ['confirmPassword'],
	});

export type SignupFormData = z.infer<typeof signupSchema>;
