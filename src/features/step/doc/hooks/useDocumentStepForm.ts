import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { DocumentStepFormData } from '../schemas/document-step.schema';
import { step1Schema, step2Schema } from '../schemas/document-step.schema';

export const useDocumentStepForm = () => {
	const navigate = useNavigate();
	const [currentStep, setCurrentStep] = useState<1 | 2>(1);

	const form = useForm<DocumentStepFormData>({
		defaultValues: {
			storeName: '',
			ownershipDocuments: [],
			legalName: '',
			ktpNumber: '',
			birthDate: '',
			acceptTerms: false,
		},
		mode: 'onSubmit',
	});

	const onSubmit = async (data: DocumentStepFormData) => {
		console.log('onSubmit called, currentStep:', currentStep);
		console.log('Form data:', data);

		if (currentStep === 1) {
			const step1Data = {
				storeName: data.storeName,
				ownershipDocuments: data.ownershipDocuments,
			};

			console.log('Step 1 data:', step1Data);
			const result = step1Schema.safeParse(step1Data);
			console.log('Step 1 validation result:', result);

			if (result.success) {
				console.log('Step 1 valid, moving to step 2');
				setCurrentStep(2);
			} else {
				console.log('Step 1 validation errors:', result.error.issues);
				result.error.issues.forEach((issue) => {
					const fieldName = issue.path[0] as keyof DocumentStepFormData;
					form.setError(fieldName, {
						type: 'manual',
						message: issue.message,
					});
				});
			}
		} else {
			const step2Data = {
				legalName: data.legalName,
				ktpNumber: data.ktpNumber,
				birthDate: data.birthDate,
				acceptTerms: data.acceptTerms,
			};

			const result = step2Schema.safeParse(step2Data);
			if (result.success) {
				console.log('Document data:', data);
				await new Promise((resolve) => setTimeout(resolve, 1000));
				toast.success('Dokumen berhasil disubmit!');
				navigate({ to: '/profile' });
			} else {
				result.error.issues.forEach((issue) => {
					const fieldName = issue.path[0] as keyof DocumentStepFormData;
					form.setError(fieldName, {
						type: 'manual',
						message: issue.message,
					});
				});
			}
		}
	};

	const goToPreviousStep = () => {
		if (currentStep === 2) {
			setCurrentStep(1);
		}
	};

	return {
		form,
		onSubmit,
		currentStep,
		goToPreviousStep,
	};
};
