import { TrendingDown, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/shared/components/ui/shadcn/card';

interface ProductStatsCardProps {
	stat: {
		label: string;
		value: string;
		percentage: string;
		trend: 'up' | 'down';
		periodText: string;
	};
	icon: React.ReactNode;
}

export const ProductStatsCard = ({ stat, icon }: ProductStatsCardProps) => {
	return (
		<Card className="border-none p-0 shadow-none w-max">
			<CardContent>
				<div className="flex items-center gap-4">
					<div className="p-3 sm:p-4 bg-gray-50 rounded-full shrink-0">
						{icon}
					</div>
					<div className="flex-1 space-y-2">
						<p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
						<h3 className="text-xl sm:text-2xl font-bold text-gray-900">
							{stat.value}
						</h3>
						<div className="flex items-center gap-2 text-xs sm:text-sm">
							<div
								className={`flex items-center gap-1 ${
									stat.trend === 'up' ? 'text-primary' : 'text-red-500'
								}`}
							>
								{stat.trend === 'up' ? (
									<TrendingUp className="w-4 h-4" />
								) : (
									<TrendingDown className="w-4 h-4" />
								)}
								<span className="font-semibold">{stat.percentage}</span>
							</div>
							<span className="text-gray-500">{stat.periodText}</span>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
