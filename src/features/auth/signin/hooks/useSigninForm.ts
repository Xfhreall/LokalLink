import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { SigninFormData } from '../schemas/signin.schema';
import { signinSchema } from '../schemas/signin.schema';

export const useSigninForm = () => {
	const navigate = useNavigate();

	const form = useForm<SigninFormData>({
		resolver: zodResolver(signinSchema),
		defaultValues: {
			email: '',
			password: '',
			rememberMe: false,
		},
	});

	const onSubmit = async (data: SigninFormData) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		if (
			data.email === 'lokallink@lokallink.com' &&
			data.password === '123123123'
		) {
			toast.success('Signin successful!');
			return navigate({ to: '/profile' });
		}
	};

	return {
		form,
		onSubmit,
	};
};
