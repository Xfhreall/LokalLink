import { z } from 'zod';

export const fileWithPreviewSchema = z.object({
	file: z.instanceof(File),
	preview: z.string(),
});
export const productVariantSchema = z.object({
	id: z.string(),
	type: z.enum(['warna', 'rasa', 'ukuran']),
	name: z.string().min(1, { message: 'Nama varian harus diisi' }),
	price: z
		.string()
		.min(1, { message: 'Harga harus diisi' })
		.refine((val) => !Number.isNaN(Number.parseInt(val, 10)), {
			message: 'Harga harus berupa angka',
		}),
	stock: z.number().min(0, { message: 'Stok tidak boleh negatif' }),
	image: z.string().optional(),
});

export const productFormSchema = z.object({
	productImages: z
		.array(fileWithPreviewSchema)
		.min(1, { message: 'Minimal 1 gambar produk' })
		.max(5, { message: 'Maksimal 5 gambar produk' }),
	productName: z
		.string()
		.min(3, { message: 'Nama produk minimal 3 karakter' })
		.max(100, { message: 'Nama produk maksimal 100 karakter' }),
	category: z.string().min(1, { message: 'Kategori harus dipilih' }),
	description: z
		.string()
		.min(10, { message: 'Deskripsi minimal 10 karakter' })
		.max(1000, { message: 'Deskripsi maksimal 1000 karakter' }),
	hasVariants: z.boolean(),
	variants: z.array(productVariantSchema).optional(),
	price: z
		.string()
		.optional()
		.refine(
			(val) => {
				if (!val) return true;
				return !Number.isNaN(Number.parseInt(val, 10));
			},
			{
				message: 'Harga harus berupa angka',
			},
		),
	stock: z.number().optional(),
});

export type FileWithPreview = z.infer<typeof fileWithPreviewSchema>;
export type ProductVariant = z.infer<typeof productVariantSchema>;
export type ProductFormValues = z.infer<typeof productFormSchema>;
