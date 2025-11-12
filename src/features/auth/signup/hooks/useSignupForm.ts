import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { SignupFormData } from '../schemas/signup.schema';
import { signupSchema } from '../schemas/signup.schema';

export const useSignupForm = () => {
	const navigate = useNavigate();
	const form = useForm<SignupFormData>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			fullName: '',
			whatsapp: '',
			password: '',
			confirmPassword: '',
			acceptTerms: false,
		},
	});

	const onSubmit = async (data: SignupFormData) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		if (data.fullName && data.password && data.acceptTerms) {
			toast.success('Signup successful!');
			return navigate({ to: '/profile' });
		}
	};

	return {
		form,
		onSubmit,
	};
};
