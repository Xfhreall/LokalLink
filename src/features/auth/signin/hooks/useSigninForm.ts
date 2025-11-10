import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { SigninFormData } from '../schemas/signin.schema';
import { signinSchema } from '../schemas/signin.schema';

export const useSigninForm = () => {
	const form = useForm<SigninFormData>({
		resolver: zodResolver(signinSchema),
		defaultValues: {
			email: '',
			password: '',
			rememberMe: false,
		},
	});

	const onSubmit = async (data: SigninFormData) => {
		console.log('Signin data:', data);
		// TODO: Implement signin logic
		// For now, just simulate success
		await new Promise((resolve) => setTimeout(resolve, 1000));
	};

	return {
		form,
		onSubmit,
	};
};
