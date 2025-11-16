import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
	type ProductFormValues,
	type ProductVariant,
	productFormSchema,
} from '../schemas/product-form-schema';

interface UseProductFormProps {
	defaultValues?: Partial<ProductFormValues>;
}

export function useProductForm({ defaultValues }: UseProductFormProps = {}) {
	const [variants, setVariants] = useState<ProductVariant[]>([]);
	const [isDragging, setIsDragging] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const form = useForm<ProductFormValues>({
		resolver: zodResolver(productFormSchema),
		defaultValues: {
			productImages: defaultValues?.productImages || [],
			productName: defaultValues?.productName || '',
			category: defaultValues?.category || '',
			description: defaultValues?.description || '',
			hasVariants: defaultValues?.hasVariants || false,
			variants: defaultValues?.variants || [],
			price: defaultValues?.price || '',
			stock: defaultValues?.stock || 0,
		},
	});

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = Array.from(e.target.files || []);
		const currentFiles = form.getValues('productImages') || [];

		const newFiles = files.slice(0, 5 - currentFiles.length).map((file) => ({
			file,
			preview: URL.createObjectURL(file),
		}));

		form.setValue('productImages', [...currentFiles, ...newFiles], {
			shouldValidate: true,
		});

		if (fileInputRef.current) {
			fileInputRef.current.value = '';
		}
	};

	const handleBrowseClick = () => {
		fileInputRef.current?.click();
	};

	const handleDragEnter = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(true);
	};

	const handleDragLeave = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
	};

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);

		const files = Array.from(e.dataTransfer.files).filter((file) =>
			file.type.startsWith('image/'),
		);
		const currentFiles = form.getValues('productImages') || [];

		const newFiles = files.slice(0, 5 - currentFiles.length).map((file) => ({
			file,
			preview: URL.createObjectURL(file),
		}));

		if (newFiles.length > 0) {
			form.setValue('productImages', [...currentFiles, ...newFiles], {
				shouldValidate: true,
			});
		}
	};

	const handleRemoveFile = (index: number) => {
		const current = form.getValues('productImages');
		const fileToRemove = current[index];

		if (fileToRemove?.preview) {
			URL.revokeObjectURL(fileToRemove.preview);
		}

		form.setValue(
			'productImages',
			current.filter((_, i) => i !== index),
			{ shouldValidate: true },
		);
	};

	const handleAddVariant = (type: 'warna' | 'rasa' | 'ukuran') => {
		const newVariant: ProductVariant = {
			id: Date.now().toString(),
			type,
			name: '',
			price: '',
			stock: 0,
			image: undefined,
		};
		setVariants([...variants, newVariant]);
	};

	const handleRemoveVariant = (id: string) => {
		setVariants(variants.filter((v) => v.id !== id));
	};

	const handleUpdateVariant = (
		id: string,
		field: keyof ProductVariant,
		value: string | number,
	) => {
		setVariants(
			variants.map((v) => (v.id === id ? { ...v, [field]: value } : v)),
		);
	};

	const updateVariantStock = (id: string, increment: boolean) => {
		setVariants(
			variants.map((v) => {
				if (v.id === id) {
					const newStock = increment ? v.stock + 1 : v.stock - 1;
					return { ...v, stock: Math.max(0, newStock) };
				}
				return v;
			}),
		);
	};

	return {
		form,
		variants,
		isDragging,
		fileInputRef,
		handleFileChange,
		handleBrowseClick,
		handleDragEnter,
		handleDragLeave,
		handleDragOver,
		handleDrop,
		handleRemoveFile,
		handleAddVariant,
		handleRemoveVariant,
		handleUpdateVariant,
		updateVariantStock,
	};
}
