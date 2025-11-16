import { Plus, X } from 'lucide-react';
import { useId } from 'react';
import { Button } from '@/shared/components/ui/shadcn/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/shared/components/ui/shadcn/dialog';
import { Input } from '@/shared/components/ui/shadcn/input';
import { Label } from '@/shared/components/ui/shadcn/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/components/ui/shadcn/select';
import { Switch } from '@/shared/components/ui/shadcn/switch';
import { Textarea } from '@/shared/components/ui/shadcn/textarea';
import { useAddProductForm } from '../hooks/use-add-product-form';
import { PRODUCT_CATEGORIES } from '../schemas/product-form.schema';

interface AddProductModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export const AddProductModal = ({
	open,
	onOpenChange,
}: AddProductModalProps) => {
	const imageUploadId = useId();
	const productNameId = useId();
	const categoryId = useId();
	const descriptionId = useId();
	const priceId = useId();

	const { formData, handlers } = useAddProductForm();
	const {
		productName,
		category,
		description,
		price,
		stock,
		hasVariants,
		images,
		variants,
	} = formData;

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		handlers.handleImageUpload(e.target.files);
	};

	const handleFormSubmit = () => {
		handlers.handleSubmit();
		onOpenChange(false);
		handlers.resetForm();
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
				<DialogHeader>
					<div className="flex items-center justify-between">
						<DialogTitle className="text-xl font-bold">
							Tambah Produk
						</DialogTitle>
					</div>
				</DialogHeader>

				<div className="space-y-6 py-4">
					{/* Gambar Produk */}
					<div className="space-y-3">
						<Label className="text-base font-semibold">Gambar Produk</Label>
						<div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
							<div className="flex flex-col items-center justify-center gap-2">
								<div className="text-center">
									<p className="text-sm text-gray-600">
										Unggah 5 gambar atau lebih agar eksposur produk dan peluang
										penjualan meningkat!
									</p>
								</div>
								<input
									type="file"
									multiple
									accept="image/*"
									onChange={handleImageChange}
									className="hidden"
									id={imageUploadId}
								/>
								<label htmlFor={imageUploadId}>
									<Button
										type="button"
										variant="outline"
										className="cursor-pointer"
										asChild
									>
										<span>Browse files</span>
									</Button>
								</label>
							</div>

							{/* Preview Images */}
							{images.length > 0 && (
								<div className="grid grid-cols-4 gap-3 mt-4">
									{images.map((image) => (
										<div key={image.id} className="relative group">
											<img
												src={image.preview}
												alt="Product"
												className="w-full h-24 object-cover rounded-lg border"
											/>
											<button
												type="button"
												onClick={() => handlers.removeImage(image.id)}
												className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
											>
												<X className="w-4 h-4 text-gray-600" />
											</button>
											<p className="text-xs text-gray-500 mt-1 truncate">
												{image.file.name}
											</p>
											<p className="text-xs text-gray-400">
												{(image.file.size / 1024).toFixed(1)} KB
											</p>
										</div>
									))}
								</div>
							)}
						</div>
					</div>

					{/* Nama Produk */}
					<div className="space-y-2">
						<Label htmlFor={productNameId}>Nama Produk</Label>
						<Input
							id={productNameId}
							placeholder="Rekomendasi panjang dan menarik"
							value={productName}
							onChange={(e) => handlers.setProductName(e.target.value)}
						/>
						<p className="text-xs text-right text-gray-400">
							{productName.length}/40
						</p>
					</div>

					{/* Kategori Produk */}
					<div className="space-y-2">
						<Label htmlFor={categoryId}>Kategori Produk</Label>
						<Select value={category} onValueChange={handlers.setCategory}>
							<SelectTrigger id={categoryId}>
								<SelectValue placeholder="Kategori" />
							</SelectTrigger>
							<SelectContent>
								{PRODUCT_CATEGORIES.map((cat) => (
									<SelectItem key={cat.value} value={cat.value}>
										{cat.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					{/* Deskripsi Produk */}
					<div className="space-y-2">
						<Label htmlFor={descriptionId}>Deskripsi Produk</Label>
						<Textarea
							id={descriptionId}
							placeholder="Rekomendasi panjang dan menarik"
							value={description}
							onChange={(e) => handlers.setDescription(e.target.value)}
							rows={4}
						/>
						<p className="text-xs text-right text-gray-400">
							{description.length}/40
						</p>
					</div>

					{/* Beberapa Variasi Toggle */}
					<div className="flex items-center justify-between py-2">
						<Label className="text-base font-semibold">Beberapa Variasi</Label>
						<Switch
							checked={hasVariants}
							onCheckedChange={handlers.setHasVariants}
						/>
					</div>

					{!hasVariants ? (
						/* Single Variant */
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor={priceId}>Harga Satuan (Rp)</Label>
								<Input
									id={priceId}
									type="text"
									placeholder="Masukkan Harga"
									value={price}
									onChange={(e) => handlers.setPrice(e.target.value)}
								/>
							</div>
							<div className="space-y-2">
								<Label>Stok</Label>
								<div className="flex items-center gap-2">
									<Button
										type="button"
										variant="outline"
										size="icon"
										className="h-10 w-10 rounded-full"
										onClick={handlers.decrementStock}
									>
										-
									</Button>
									<Input
										type="number"
										value={stock}
										className="text-center"
										readOnly
									/>
									<Button
										type="button"
										variant="outline"
										size="icon"
										className="h-10 w-10 rounded-full bg-primary text-white hover:bg-primary/90"
										onClick={handlers.incrementStock}
									>
										+
									</Button>
								</div>
							</div>
						</div>
					) : (
						/* Multiple Variants */
						<div className="space-y-4">
							{variants.map((variant) => (
								<div key={variant.id} className="space-y-3">
									<div className="flex items-center justify-between">
										<Label className="text-base font-semibold">
											{variant.name}
										</Label>
										<Button
											type="button"
											variant="ghost"
											size="icon"
											onClick={() => handlers.removeVariant(variant.id)}
										>
											<X className="h-4 w-4" />
										</Button>
									</div>

									{variant.options.map((option) => (
										<div
											key={option.id}
											className="flex items-start gap-3 p-3 border rounded-lg"
										>
											{/* Image placeholder */}
											<div className="w-12 h-12 border-2 border-dashed rounded flex items-center justify-center shrink-0">
												<svg
													className="w-6 h-6 text-gray-400"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<title>Upload image</title>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
													/>
												</svg>
											</div>

											<div className="flex-1 grid grid-cols-3 gap-3">
												<Input
													placeholder="Masukkan Harga"
													value={option.name}
													onChange={(e) =>
														handlers.updateVariantOption(
															variant.id,
															option.id,
															'name',
															e.target.value,
														)
													}
												/>

												<div className="space-y-1">
													<Label className="text-xs text-gray-500">
														Harga Satuan (Rp)
													</Label>
													<Input
														placeholder="Masukkan Harga"
														value={option.price}
														onChange={(e) =>
															handlers.updateVariantOption(
																variant.id,
																option.id,
																'price',
																e.target.value,
															)
														}
													/>
												</div>

												<div className="space-y-1">
													<Label className="text-xs text-gray-500">Stok</Label>
													<div className="flex items-center gap-1">
														<Button
															type="button"
															variant="outline"
															size="icon"
															className="h-9 w-9 rounded-full"
															onClick={() =>
																handlers.decrementVariantStock(
																	variant.id,
																	option.id,
																)
															}
														>
															-
														</Button>
														<Input
															type="number"
															value={option.stock}
															className="text-center h-9"
															readOnly
														/>
														<Button
															type="button"
															variant="outline"
															size="icon"
															className="h-9 w-9 rounded-full bg-primary text-white hover:bg-primary/90"
															onClick={() =>
																handlers.incrementVariantStock(
																	variant.id,
																	option.id,
																)
															}
														>
															+
														</Button>
													</div>
												</div>
											</div>

											<Button
												type="button"
												variant="ghost"
												size="icon"
												onClick={() =>
													handlers.removeVariantOption(variant.id, option.id)
												}
											>
												<X className="h-4 w-4" />
											</Button>
										</div>
									))}

									<Button
										type="button"
										variant="ghost"
										className="w-full text-primary"
										onClick={() => handlers.addVariantOption(variant.id)}
									>
										<Plus className="w-4 h-4 mr-2" />
										Tambahkan opsi
									</Button>
								</div>
							))}
						</div>
					)}
				</div>

				{/* Footer Actions */}
				<div className="flex gap-3 pt-4 border-t">
					<Button
						variant="outline"
						className="flex-1 rounded-full"
						onClick={() => onOpenChange(false)}
					>
						Batal
					</Button>
					<Button
						className="flex-1 rounded-full bg-primary hover:bg-primary/90"
						onClick={handleFormSubmit}
					>
						Simpan
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
};
