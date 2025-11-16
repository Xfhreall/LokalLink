import { FormControl, FormItem } from '@/shared/components/ui/shadcn/form';
import { Switch } from '@/shared/components/ui/shadcn/switch';

export function ProductVariantInfo() {
	return (
		<div className="bg-primary-100 max-w-lg rounded-lg p-3 sm:p-4 mb-4">
			<div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
				<div className="flex-1 space-y-2">
					<h3 className="font-semibold text-gray-900 text-sm sm:text-base">
						Ingin menawarkan opsi lain?
					</h3>
					<p className="text-xs sm:text-sm text-gray-600">
						Aktifkan opsi beberapa varian dan tambahkan varian produk anda untuk
						menunjukkan sejumlah opsi yang tersedia, seperti opsi warna, jenis
						dan ukuran
					</p>
				</div>
				<div className="flex shrink-0 self-center sm:self-start">
					<div className="size-20 sm:size-24 rounded-lg overflow-hidden">
						<img
							src="/assets/fragments/sample.png"
							alt="Product variant"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

interface ProductVariantToggleProps {
	hasVariants: boolean;
	onToggle: (checked: boolean) => void;
}

export function ProductVariantToggle({
	hasVariants,
	onToggle,
}: ProductVariantToggleProps) {
	return (
		<div className="flex items-center gap-2 mb-2">
			<span className="text-sm font-medium">Beberapa Variasi</span>
			<FormItem>
				<FormControl>
					<Switch checked={hasVariants} onCheckedChange={onToggle} />
				</FormControl>
			</FormItem>
		</div>
	);
}
