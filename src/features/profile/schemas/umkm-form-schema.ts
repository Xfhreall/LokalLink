import { z } from 'zod';

export const umkmFormSchema = z.object({
	namaToko: z
		.string()
		.min(3, { message: 'Nama toko minimal 3 karakter' })
		.max(100, { message: 'Nama toko maksimal 100 karakter' }),
	namaNarahubung: z
		.string()
		.min(3, { message: 'Nama narahubung minimal 3 karakter' })
		.max(100, { message: 'Nama narahubung maksimal 100 karakter' }),
	telepon: z
		.string()
		.min(9, { message: 'Nomor telepon minimal 9 digit' })
		.max(13, { message: 'Nomor telepon maksimal 13 digit' })
		.regex(/^[0-9]+$/, { message: 'Nomor telepon hanya boleh angka' }),
	jamBuka: z.object({
		hour: z.number().min(0).max(23),
		minute: z.number().min(0).max(59),
	}),
	jamTutup: z.object({
		hour: z.number().min(0).max(23),
		minute: z.number().min(0).max(59),
	}),
	alamat: z
		.string()
		.min(10, { message: 'Alamat minimal 10 karakter' })
		.max(500, { message: 'Alamat maksimal 500 karakter' }),
	pinpoint: z
		.object({
			lat: z.number(),
			lng: z.number(),
			address: z.string().optional(),
		})
		.optional(),
});

export type UmkmFormValues = z.infer<typeof umkmFormSchema>;
