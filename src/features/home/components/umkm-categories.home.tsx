const categories = [
	{ name: 'Kuliner', icon: '/icons/category/kuliner.svg' },
	{ name: 'Fashion', icon: '/icons/category/fashion.svg' },
	{ name: 'Perkebunan', icon: '/icons/category/perkebunan.svg' },
	{ name: 'Jasa', icon: '/icons/category/jasa.svg' },
	{ name: 'Elektronik', icon: '/icons/category/elektronik.svg' },
	{ name: 'Peternakan', icon: '/icons/category/peternakan.svg' },
	{ name: 'Perikanan', icon: '/icons/category/perikanan.svg' },
	{ name: 'Oleh Oleh', icon: '/icons/category/oleh-oleh.svg' },
];

const UMKMCategories = () => {
	return (
		<div className="w-full container mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
			<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
				Beli Kategori UMKM
			</h2>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
				{categories.map((category, index) => {
					return (
						<button
							type="button"
							key={index.toString()}
							className="group bg-linear-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-transparent hover:border-primary/20 active:scale-95"
						>
							<div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<img
									className="size-10 scale-125 md:size-14 group-hover:text-primary transition-colors duration-300"
									src={category.icon}
									alt={category.name}
								/>
							</div>
							<span className="text-xs sm:text-sm font-medium text-gray-800 text-center group-hover:text-primary transition-colors duration-300">
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
