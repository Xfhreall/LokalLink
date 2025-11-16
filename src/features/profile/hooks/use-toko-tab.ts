import { useState } from 'react';
import type { ProductFormValues } from '../schemas/product-form-schema';
import type { PaymentFormValues } from '../schemas/produk-form-schema';
import type { UmkmFormValues } from '../schemas/umkm-form-schema';

export function useTokoTab() {
	const [activeStep, setActiveStep] = useState<string>('');
	const [completedSteps, setCompletedSteps] = useState<number[]>([]);
	const [umkmData, setUmkmData] = useState<UmkmFormValues | null>(null);
	const [paymentData, setPaymentData] = useState<PaymentFormValues | null>(
		null,
	);
	const [productData, setProductData] = useState<ProductFormValues | null>(
		null,
	);

	const handleUmkmSubmit = (values: UmkmFormValues) => {
		setUmkmData(values);
		handleStepComplete(1);
	};

	const handlePaymentSubmit = (values: PaymentFormValues) => {
		setPaymentData(values);
		handleStepComplete(2);
	};

	const handleProductSubmit = (values: ProductFormValues) => {
		setProductData(values);
		handleStepComplete(3);
	};

	const handleStepComplete = (stepId: number) => {
		if (!completedSteps.includes(stepId)) {
			setCompletedSteps([...completedSteps, stepId]);
		}
		setActiveStep('');
	};

	return {
		activeStep,
		setActiveStep,
		completedSteps,
		umkmData,
		paymentData,
		productData,
		handleUmkmSubmit,
		handlePaymentSubmit,
		handleProductSubmit,
	};
}
