import { z } from 'zod';

export const shippingAddressSchema = z.object({
	recipientName: z.string().min(3, 'Nama penerima minimal 3 karakter'),
	phoneNumber: z
		.string()
		.min(10, 'Nomor telepon minimal 10 digit')
		.regex(/^[0-9]+$/, 'Nomor telepon harus berupa angka'),
	address: z.string().min(10, 'Alamat minimal 10 karakter'),
	city: z.string().min(3, 'Nama kota minimal 3 karakter'),
	postalCode: z
		.string()
		.length(5, 'Kode pos harus 5 digit')
		.regex(/^[0-9]+$/, 'Kode pos harus berupa angka'),
	notes: z.string().optional(),
});

export type ShippingAddressFormValues = z.infer<typeof shippingAddressSchema>;
