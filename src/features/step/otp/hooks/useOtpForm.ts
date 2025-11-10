import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { OtpFormData } from '../schemas/otp.schema';
import { otpSchema } from '../schemas/otp.schema';

export const useOtpForm = () => {
	const navigate = useNavigate();

	const form = useForm<OtpFormData>({
		resolver: zodResolver(otpSchema),
		defaultValues: {
			otp: '',
		},
	});

	const onSubmit = async (data: OtpFormData) => {
		console.log('OTP data:', data);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		if (data.otp === '123456') {
			toast.success('OTP verified successfully!');
			return navigate({ to: '/step/doc' });
		}
		toast.error('OTP Salah');
	};

	const handleResend = () => {
		toast.info('Resend OTP');
	};

	return {
		form,
		onSubmit,
		handleResend,
	};
};
