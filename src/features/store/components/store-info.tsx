import type { Store } from '@/shared/data/dtos/product.dto';

interface StoreInfoProps {
	store: Store;
}

export function StoreInfo({ store }: StoreInfoProps) {
	return (
		<div className="space-y-6">
			<h2 className="text-xl font-bold text-gray-900">
				Informasi {store.name}
			</h2>

			<div className="space-y-4">
				{/* Full Description */}
				<div>
					<h3 className="text-sm font-semibold text-gray-900 mb-2">
						Deskripsi {store.name}
					</h3>
					<p className="text-sm text-gray-700 leading-relaxed">
						{store.info.fullDescription}
					</p>
				</div>

				{/* Opened Since */}
				<div>
					<h3 className="text-sm font-semibold text-gray-900 mb-2">
						Buka Sejak
					</h3>
					<p className="text-sm text-gray-700">{store.info.openedSince}</p>
				</div>

				{/* Additional Info */}
				<div>
					<h3 className="text-sm font-semibold text-gray-900 mb-2">
						{store.info.additionalInfo.title}
					</h3>
					<p className="text-sm text-gray-700 leading-relaxed">
						{store.info.additionalInfo.content}
					</p>
				</div>
			</div>
		</div>
	);
}
