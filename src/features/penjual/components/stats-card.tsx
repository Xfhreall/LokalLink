import { TrendingDown, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/shared/components/ui/shadcn/card';
import type { SalesStats } from '../types';

interface StatsCardProps {
	stat: SalesStats;
	icon: React.ReactNode;
}

export const StatsCard = ({ stat, icon }: StatsCardProps) => {
	return (
		<Card className="border p-4 border-gray-200 rounded-xl bg-primary-50">
			<CardContent className="p-0">
				<div className="flex items-center gap-4">
					{/* Icon di kiri tengah */}
					<div className="rounded-full border-2 p-2 shrink-0">{icon}</div>

					{/* Info di kanan dengan space-y-2 */}
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
