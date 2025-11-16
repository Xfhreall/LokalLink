import { useCallback, useState } from 'react';
import type {
	ProductFormData,
	ProductImage,
	VariantOption,
} from '../schemas/product-form.schema';
import { generateId, INITIAL_FORM_STATE } from '../schemas/product-form.schema';

export const useAddProductForm = () => {
	const [formData, setFormData] = useState<ProductFormData>(INITIAL_FORM_STATE);

	// Basic form field handlers
	const setProductName = useCallback((value: string) => {
		setFormData((prev) => ({ ...prev, productName: value }));
	}, []);

	const setCategory = useCallback((value: string) => {
		setFormData((prev) => ({ ...prev, category: value }));
	}, []);

	const setDescription = useCallback((value: string) => {
		setFormData((prev) => ({ ...prev, description: value }));
	}, []);

	const setPrice = useCallback((value: string) => {
		setFormData((prev) => ({ ...prev, price: value }));
	}, []);

	const setStock = useCallback((value: number) => {
		setFormData((prev) => ({ ...prev, stock: value }));
	}, []);

	const setHasVariants = useCallback((value: boolean) => {
		setFormData((prev) => ({ ...prev, hasVariants: value }));
	}, []);

	// Image handlers
	const handleImageUpload = useCallback((files: FileList | null) => {
		if (!files) return;

		const newImages: ProductImage[] = Array.from(files).map((file) => ({
			id: generateId(),
			file,
			preview: URL.createObjectURL(file),
		}));

		setFormData((prev) => ({
			...prev,
			images: [...prev.images, ...newImages],
		}));
	}, []);

	const removeImage = useCallback((id: string) => {
		setFormData((prev) => ({
			...prev,
			images: prev.images.filter((img) => img.id !== id),
		}));
	}, []);

	// Stock handlers for single variant
	const incrementStock = useCallback(() => {
		setFormData((prev) => ({ ...prev, stock: prev.stock + 1 }));
	}, []);

	const decrementStock = useCallback(() => {
		setFormData((prev) => ({
			...prev,
			stock: Math.max(0, prev.stock - 1),
		}));
	}, []);

	// Variant handlers
	const updateVariantOption = useCallback(
		(
			variantId: string,
			optionId: string,
			field: keyof VariantOption,
			value: string | number,
		) => {
			setFormData((prev) => ({
				...prev,
				variants: prev.variants.map((variant) => {
					if (variant.id === variantId) {
						return {
							...variant,
							options: variant.options.map((option) =>
								option.id === optionId ? { ...option, [field]: value } : option,
							),
						};
					}
					return variant;
				}),
			}));
		},
		[],
	);

	const incrementVariantStock = useCallback(
		(variantId: string, optionId: string) => {
			setFormData((prev) => ({
				...prev,
				variants: prev.variants.map((variant) => {
					if (variant.id === variantId) {
						return {
							...variant,
							options: variant.options.map((option) =>
								option.id === optionId
									? { ...option, stock: option.stock + 1 }
									: option,
							),
						};
					}
					return variant;
				}),
			}));
		},
		[],
	);

	const decrementVariantStock = useCallback(
		(variantId: string, optionId: string) => {
			setFormData((prev) => ({
				...prev,
				variants: prev.variants.map((variant) => {
					if (variant.id === variantId) {
						return {
							...variant,
							options: variant.options.map((option) =>
								option.id === optionId && option.stock > 0
									? { ...option, stock: option.stock - 1 }
									: option,
							),
						};
					}
					return variant;
				}),
			}));
		},
		[],
	);

	const addVariantOption = useCallback((variantId: string) => {
		setFormData((prev) => ({
			...prev,
			variants: prev.variants.map((variant) => {
				if (variant.id === variantId) {
					return {
						...variant,
						options: [
							...variant.options,
							{
								id: generateId(),
								name: '',
								price: '',
								stock: 2,
							},
						],
					};
				}
				return variant;
			}),
		}));
	}, []);

	const removeVariantOption = useCallback(
		(variantId: string, optionId: string) => {
			setFormData((prev) => ({
				...prev,
				variants: prev.variants.map((variant) => {
					if (variant.id === variantId) {
						return {
							...variant,
							options: variant.options.filter((o) => o.id !== optionId),
						};
					}
					return variant;
				}),
			}));
		},
		[],
	);

	const removeVariant = useCallback((variantId: string) => {
		setFormData((prev) => ({
			...prev,
			variants: prev.variants.filter((v) => v.id !== variantId),
		}));
	}, []);

	// Form submission
	const handleSubmit = useCallback(() => {
		const submitData = {
			...formData,
			variants: formData.hasVariants ? formData.variants : undefined,
		};

		// TODO: Add API call here
		console.log('Submitting product:', submitData);

		return submitData;
	}, [formData]);

	// Reset form
	const resetForm = useCallback(() => {
		setFormData(INITIAL_FORM_STATE);
	}, []);

	return {
		formData,
		handlers: {
			setProductName,
			setCategory,
			setDescription,
			setPrice,
			setStock,
			setHasVariants,
			handleImageUpload,
			removeImage,
			incrementStock,
			decrementStock,
			updateVariantOption,
			incrementVariantStock,
			decrementVariantStock,
			addVariantOption,
			removeVariantOption,
			removeVariant,
			handleSubmit,
			resetForm,
		},
	};
};
