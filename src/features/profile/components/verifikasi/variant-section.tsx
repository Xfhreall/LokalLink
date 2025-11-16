import { ImagePlus, Minus, Plus, Trash2, X } from 'lucide-react';
import { Button } from '@/shared/components/ui/shadcn/button';
import { FormLabel } from '@/shared/components/ui/shadcn/form';
import { Input } from '@/shared/components/ui/shadcn/input';
import type { ProductVariant } from '../../schemas/product-form-schema';

interface VariantItemProps {
	variant: ProductVariant;
	onUpdate: (
		id: string,
		field: keyof ProductVariant,
		value: string | number,
	) => void;
	onRemove: (id: string) => void;
	onStockUpdate: (id: string, increment: boolean) => void;
}

export function VariantItem({
	variant,
	onUpdate,
	onRemove,
	onStockUpdate,
}: VariantItemProps) {
	return (
		<div className="space-y-3 mb-4">
			<div className="flex items-center gap-2">
				<div className="w-10 h-10 border-2 border-dashed rounded flex items-center justify-center shrink-0">
					<ImagePlus className="h-5 w-5 text-gray-400" />
				</div>
				<Input
					placeholder="Masukkan Nama"
					value={variant.name}
					onChange={(e) => onUpdate(variant.id, 'name', e.target.value)}
					className="flex-1 min-w-0"
				/>
				<Button
					type="button"
					variant="ghost"
					size="icon"
					className="shrink-0"
					onClick={() => onRemove(variant.id)}
				>
					<X className="h-4 w-4" />
				</Button>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
				<div>
					<FormLabel className="text-xs sm:text-sm text-gray-600 mb-2 block">
						Harga Satuan (Rp)
					</FormLabel>
					<Input
						placeholder="Masukkan Harga"
						value={variant.price}
						onChange={(e) => onUpdate(variant.id, 'price', e.target.value)}
						className="text-sm"
					/>
				</div>
				<div>
					<FormLabel className="text-xs sm:text-sm text-gray-600 mb-2 block">
						Stok
					</FormLabel>
					<div className="flex border-2 w-max rounded-full px-3 py-1 items-center gap-2">
						<Button
							type="button"
							variant="ghost"
							size="icon"
							className="h-auto w-auto p-0 hover:bg-transparent"
							onClick={() => onStockUpdate(variant.id, false)}
						>
							<span className="rounded-full border p-1">
								<Minus className="h-4 w-4" />
							</span>
						</Button>
						<input
							value={variant.stock}
							onChange={(e) =>
								onUpdate(
									variant.id,
									'stock',
									Math.max(0, Number.parseInt(e.target.value, 10) || 0),
								)
							}
							className="w-12 text-center text-base font-semibold border-0 outline-none bg-transparent focus:ring-0"
						/>
						<Button
							type="button"
							variant="ghost"
							size="icon"
							className="h-auto w-auto p-0 hover:bg-transparent"
							onClick={() => onStockUpdate(variant.id, true)}
						>
							<span className="rounded-full bg-primary text-white p-1">
								<Plus className="h-4 w-4" />
							</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

interface VariantSectionProps {
	title: string;
	type: 'warna' | 'rasa' | 'ukuran';
	variants: ProductVariant[];
	onAdd: (type: 'warna' | 'rasa' | 'ukuran') => void;
	onRemove: (id: string) => void;
	onUpdate: (
		id: string,
		field: keyof ProductVariant,
		value: string | number,
	) => void;
	onStockUpdate: (id: string, increment: boolean) => void;
	onRemoveAll: () => void;
}

export function VariantSection({
	title,
	type,
	variants,
	onAdd,
	onRemove,
	onUpdate,
	onStockUpdate,
	onRemoveAll,
}: VariantSectionProps) {
	const filteredVariants = variants.filter((v) => v.type === type);

	return (
		<div className="border rounded-lg p-3 sm:p-4">
			<div className="flex items-center justify-between mb-3">
				<h4 className="font-semibold text-sm sm:text-base">{title}</h4>
				<Button
					type="button"
					variant="ghost"
					size="icon"
					className="h-6 w-6"
					onClick={onRemoveAll}
				>
					<Trash2 className="h-4 w-4" />
				</Button>
			</div>
			{filteredVariants.map((variant) => (
				<VariantItem
					key={variant.id}
					variant={variant}
					onUpdate={onUpdate}
					onRemove={onRemove}
					onStockUpdate={onStockUpdate}
				/>
			))}
			<Button
				type="button"
				variant="ghost"
				size="sm"
				onClick={() => onAdd(type)}
				className="text-xs sm:text-sm w-full sm:w-auto"
			>
				<Plus className="h-4 w-4 mr-1" />
				Tambahkan opsi
			</Button>
		</div>
	);
}
