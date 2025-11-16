export const ProductInsightCard = () => {
	return (
		<div className="border-l-3 border-primary pl-4 h-max space-y-2 min-w-[250px]">
			<h5 className="text-base font-semibold text-gray-900">Insight</h5>
			<p className="text-sm text-gray-600 leading-relaxed">
				Penjualan produkmu terus meningkat ! Terus tingkatkan penjualanmu dan
				ikuti konten Upselling UMKM, agar produk kamu semakin pesat !
			</p>
			<button
				type="button"
				className="text-sm text-primary hover:text-primary/80 font-semibold flex items-center gap-1"
			>
				Selengkapnya →
			</button>
		</div>
	);
};
