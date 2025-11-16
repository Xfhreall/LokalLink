import { Image } from '@unpic/react';
import {
	Card,
	CardContent,
	CardTitle,
} from '@/shared/components/ui/shadcn/card';
import { Checkbox } from '@/shared/components/ui/shadcn/checkbox';
import { Label } from '@/shared/components/ui/shadcn/label';

const category = [
	{
		image: '/icons/filter/makanan.svg',
		title: 'makanan',
	},
	{
		image: '/icons/filter/minuman.svg',
		title: 'minuman',
	},
	{
		image: '/icons/filter/jasa.svg',
		title: 'jasa',
	},
	{
		image: '/icons/filter/oleh-oleh.svg',
		title: 'oleh-oleh',
	},
	{
		image: '/icons/filter/lainnya.svg',
		title: 'lainnya',
	},
];

const ServiceCategory = () => {
	return (
		<Card className="w-full sm:max-w-sm lg:max-w-xs xl:max-w-3xs px-4 sm:px-5 border-primary shadow-md hover:shadow-lg transition-shadow duration-300">
			<CardTitle className="font-semibold text-base sm:text-lg pb-2 sm:pb-3 border-b-2 border-primary/20">
				Kategori
			</CardTitle>
			<CardContent className="p-0 pt-4 space-y-4 sm:space-y-5">
				<h3 className="font-medium text-sm sm:text-base text-gray-700">
					Semua
				</h3>
				<div className="space-y-3 sm:space-y-4">
					{category.map((item, index) => (
						<div
							key={index.toString()}
							className="flex items-center justify-between group hover:bg-primary/5 p-2 rounded-lg transition-colors duration-200 cursor-pointer"
						>
							<Label
								htmlFor={item.title}
								className="flex items-center gap-2 cursor-pointer flex-1"
							>
								<div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
									<Image
										src={item.image}
										alt={item.title}
										width={20}
										height={20}
										className="w-5 h-5 sm:w-6 sm:h-6"
									/>
								</div>
								<span className="capitalize font-normal text-sm sm:text-base text-gray-700 group-hover:text-primary transition-colors">
									{item.title}
								</span>
							</Label>
							<Checkbox
								className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
								id={item.title}
							/>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default ServiceCategory;
