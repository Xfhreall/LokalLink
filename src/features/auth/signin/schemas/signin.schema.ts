import { z } from 'zod';

export const signinSchema = z.object({
	email: z
		.string()
		.min(1, 'Email harus diisi')
		.email('Format email tidak valid'),
	password: z.string().min(6, 'Password minimal 6 karakter'),
	rememberMe: z.boolean().optional(),
});

export type SigninFormData = z.infer<typeof signinSchema>;
