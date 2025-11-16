import { z } from 'zod';

export const paymentFormSchema = z.object({
	bankName: z.string().min(1, { message: 'Silakan pilih bank' }),
	accountOwner: z
		.string()
		.min(3, { message: 'Nama pemilik rekening minimal 3 karakter' })
		.max(100, { message: 'Nama pemilik rekening maksimal 100 karakter' }),
	accountNumber: z
		.string()
		.min(8, { message: 'Nomor rekening minimal 8 digit' })
		.max(20, { message: 'Nomor rekening maksimal 20 digit' })
		.refine((val) => /^\d+$/.test(val), {
			message: 'Nomor rekening hanya boleh berisi angka',
		}),
});

export type PaymentFormValues = z.infer<typeof paymentFormSchema>;
