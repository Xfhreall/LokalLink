import { useNavigate } from '@tanstack/react-router';
import { toast } from 'sonner';
import { Button } from '@/shared/components/ui/shadcn/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/components/ui/shadcn/form';
import { Input } from '@/shared/components/ui/shadcn/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/components/ui/shadcn/select';
import { Textarea } from '@/shared/components/ui/shadcn/textarea';
import { useProductForm } from '../../hooks/use-product-form';
import type { ProductFormValues } from '../../schemas/product-form-schema';
import { ProductImageUpload } from './product-image-upload';
import {
	ProductVariantInfo,
	ProductVariantToggle,
} from './product-variant-info';
import { VariantSection } from './variant-section';

interface ProductFormProps {
	onSubmit: (values: ProductFormValues) => void;
	onCancel: () => void;
	defaultValues?: Partial<ProductFormValues>;
}

const categoryOptions = [
	'Makanan',
	'Minuman',
	'Kerajinan',
	'Fashion',
	'Elektronik',
	'Lainnya',
];

export function ProductForm({
	onSubmit,
	onCancel,
	defaultValues,
}: ProductFormProps) {
	const {
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
	} = useProductForm({ defaultValues });

	const hasVariants = form.watch('hasVariants');
	const nav = useNavigate();

	const handleSubmit = (values: ProductFormValues) => {
		localStorage.setItem('role', 'penjual');
		onSubmit({
			...values,
			variants: hasVariants ? variants : undefined,
		});
		nav({ to: '/profile/penjual' });
		toast.success('Toko berhasil didaftarkan!');
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
				<h3 className="text-lg font-semibold text-primary">Informasi Dasar</h3>

				{/* Gambar Produk */}
				<FormField
					control={form.control}
					name="productImages"
					render={() => {
						const currentImages = form.watch('productImages') || [];
						return (
							<ProductImageUpload
								fileInputRef={fileInputRef}
								currentImages={currentImages}
								isDragging={isDragging}
								handleFileChange={handleFileChange}
								handleBrowseClick={handleBrowseClick}
								handleDragEnter={handleDragEnter}
								handleDragLeave={handleDragLeave}
								handleDragOver={handleDragOver}
								handleDrop={handleDrop}
								handleRemoveFile={handleRemoveFile}
							/>
						);
					}}
				/>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					{/* Nama Produk */}
					<FormField
						control={form.control}
						name="productName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nama Produk</FormLabel>
								<FormControl>
									<div className="relative">
										<Input
											className="py-5 text-sm"
											placeholder="Rekomendasi panjang dan menarik"
											{...field}
										/>
										<p className="text-[10px] absolute right-2 bottom-0.5 text-gray-500">
											{field.value?.length || 0}/40
										</p>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* Kategori Produk */}
					<FormField
						control={form.control}
						name="category"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Kategori Produk</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Kategori" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{categoryOptions.map((category) => (
											<SelectItem key={category} value={category}>
												{category}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				{/* Deskripsi Produk */}
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Deskripsi Produk</FormLabel>
							<FormControl>
								<div className="relative">
									<Textarea
										placeholder="Rekomendasi panjang dan menarik"
										className="resize-none min-h-24"
										{...field}
									/>
									<p className="text-[10px] absolute right-2 bottom-0.5 text-gray-500">
										{field.value?.length || 0}/40
									</p>
								</div>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Info Penjualan */}
				<div className="pt-4">
					<h3 className="text-lg font-semibold text-primary mb-4">
						Info Penjualan
					</h3>

					<ProductVariantInfo />

					<FormField
						control={form.control}
						name="hasVariants"
						render={({ field }) => (
							<ProductVariantToggle
								hasVariants={field.value}
								onToggle={field.onChange}
							/>
						)}
					/>

					{hasVariants && (
						<div className="space-y-4">
							<VariantSection
								title="Warna"
								type="warna"
								variants={variants}
								onAdd={handleAddVariant}
								onRemove={handleRemoveVariant}
								onUpdate={handleUpdateVariant}
								onStockUpdate={updateVariantStock}
								onRemoveAll={() => {
									const warnaVariants = variants.filter(
										(v) => v.type === 'warna',
									);
									for (const v of warnaVariants) {
										handleRemoveVariant(v.id);
									}
								}}
							/>

							<VariantSection
								title="Rasa"
								type="rasa"
								variants={variants}
								onAdd={handleAddVariant}
								onRemove={handleRemoveVariant}
								onUpdate={handleUpdateVariant}
								onStockUpdate={updateVariantStock}
								onRemoveAll={() => {
									const rasaVariants = variants.filter(
										(v) => v.type === 'rasa',
									);
									for (const v of rasaVariants) {
										handleRemoveVariant(v.id);
									}
								}}
							/>

							<VariantSection
								title="Ukuran"
								type="ukuran"
								variants={variants}
								onAdd={handleAddVariant}
								onRemove={handleRemoveVariant}
								onUpdate={handleUpdateVariant}
								onStockUpdate={updateVariantStock}
								onRemoveAll={() => {
									const ukuranVariants = variants.filter(
										(v) => v.type === 'ukuran',
									);
									for (const v of ukuranVariants) {
										handleRemoveVariant(v.id);
									}
								}}
							/>
						</div>
					)}
				</div>
				<div className="flex flex-col sm:flex-row sm:max-w-xs sm:ml-auto gap-2 pt-4">
					<Button
						type="button"
						variant="outline"
						className="flex-1 w-full"
						onClick={onCancel}
					>
						Batal
					</Button>
					<Button type="submit" className="flex-1 w-full">
						Simpan
					</Button>
				</div>
			</form>
		</Form>
	);
}
