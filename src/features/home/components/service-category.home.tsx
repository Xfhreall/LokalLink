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
		<Card className="max-w-3xs px-5 border-primary">
			<CardTitle className="font-semibold text-lg pb-2 border-b-2">
				Kategori
			</CardTitle>
			<CardContent className="p-0 space-y-5">
				<h3 className="font-medium">Semua</h3>
				<div className="space-y-5">
					{category.map((item, index) => (
						<div
							key={index.toString()}
							className="flex items-center justify-between"
						>
							<Label htmlFor={item.title} className="flex items-center gap-1">
								<Image
									src={item.image}
									alt={item.title}
									width={32}
									height={32}
								/>
								<span className="capitalize font-normal">{item.title}</span>
							</Label>
							<Checkbox className="border-primary" id={item.title} />
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default ServiceCategory;
