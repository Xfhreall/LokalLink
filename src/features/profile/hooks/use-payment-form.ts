import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
	type PaymentFormValues,
	paymentFormSchema,
} from '../schemas/produk-form-schema';

interface UsePaymentFormProps {
	defaultValues?: Partial<PaymentFormValues>;
}

export function usePaymentForm({ defaultValues }: UsePaymentFormProps = {}) {
	const form = useForm<PaymentFormValues>({
		resolver: zodResolver(paymentFormSchema),
		defaultValues: {
			bankName: defaultValues?.bankName || '',
			accountOwner: defaultValues?.accountOwner || '',
			accountNumber: defaultValues?.accountNumber || '',
		},
	});

	return {
		form,
	};
}
