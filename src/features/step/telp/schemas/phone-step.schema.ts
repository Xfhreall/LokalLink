import { z } from 'zod';

export const phoneStepSchema = z.object({
	phone: z
		.string()
		.min(1, 'Nomor HP harus diisi')
		.regex(/^[0-9]+$/, 'Nomor HP hanya boleh berisi angka')
		.min(9, 'Nomor HP minimal 9 digit')
		.max(13, 'Nomor HP maksimal 13 digit'),
});

export type PhoneStepFormData = z.infer<typeof phoneStepSchema>;
