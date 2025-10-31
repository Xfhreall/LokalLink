import {
	Card,
	CardContent,
	CardTitle,
} from '@/shared/components/ui/shadcn/card';
import { Checkbox } from '@/shared/components/ui/shadcn/checkbox';
import { Label } from '@/shared/components/ui/shadcn/label';

const category = [
	{
		title: 'Top Selling',
	},
	{
		title: 'Trending Produk',
	},
	{
		title: 'Terakhir Ditambah',
	},
	{
		title: 'Top Rated',
	},
];

const RateCategory = () => {
	return (
		<Card className="px-5 border-primary w-[248px]">
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
							<Label htmlFor={item.title} className="capitalize font-normal">
								{item.title}
							</Label>
							<Checkbox className="border-primary" id={item.title} />
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default RateCategory;
