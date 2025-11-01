import {
	Briefcase,
	Fish,
	Flower2,
	Laptop,
	Package,
	ShoppingBag,
	Utensils,
	UtensilsCrossed,
} from 'lucide-react';
import React from 'react';

const categories = [
	{ name: 'Kuliner', icon: Utensils },
	{ name: 'Fashion', icon: ShoppingBag },
	{ name: 'Perkebunan', icon: Flower2 },
	{ name: 'Jasa', icon: Briefcase },
	{ name: 'Elektronik', icon: Laptop },
	{ name: 'Peternakan', icon: Fish },
	{ name: 'Perikanan', icon: UtensilsCrossed },
	{ name: 'Oleh Oleh', icon: Package },
];

const UMKMCategories = () => {
	return (
		<div className="w-full mx-auto px-12 py-8 container mx-auto">
			<h2 className="text-2xl font-bold text-gray-800 mb-6">
				Beli Kategori UMKM
			</h2>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
				{categories.map((category, index) => {
					const Icon = category.icon;
					return (
						<button
							type="button"
							key={index.toString()}
							className={`bg-primary-100 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer`}
						>
							<div className="w-16 h-16 flex items-center justify-center">
								<Icon className="w-12 h-12 text-gray-700" strokeWidth={1.5} />
							</div>
							<span className="text-sm font-medium text-gray-800 text-center">
								{category.name}
							</span>
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default UMKMCategories;
