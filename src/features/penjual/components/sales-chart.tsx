/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> */
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Button } from '@/shared/components/ui/shadcn/button';
import { Card, CardContent } from '@/shared/components/ui/shadcn/card';
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/shared/components/ui/shadcn/chart';
import { Separator } from '@/shared/components/ui/shadcn/separator';
import type { ChartDataPoint } from '../types';

interface SalesChartProps {
	data: ChartDataPoint[];
	selectedPoint: number | null;
	onPointSelect: (index: number) => void;
	totalSales: number;
	growthPercentage: string;
	selectedDate?: string;
}

const chartConfig = {
	value: {
		label: 'Penjualan',
		color: '#4ea83f',
	},
};

export const SalesChart = ({
	data,
	onPointSelect,
	growthPercentage,
}: SalesChartProps) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
			{/* Chart Card - Col Span 2 */}
			<Card className="border-none shadow-none lg:col-span-2 p-0">
				<CardContent className="p-0">
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
						<div>
							<h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
								Grafik Penjualan
							</h3>
							<p className="text-xs sm:text-sm text-primary">
								{growthPercentage} from last period
							</p>
						</div>
						<div className="flex gap-2">
							<Button
								variant="outline"
								size="sm"
								className="text-xs sm:text-sm bg-primary text-white hover:bg-primary/90 border-primary"
							>
								Week
							</Button>
							<Button
								variant="outline"
								size="sm"
								className="text-xs sm:text-sm"
							>
								Month
							</Button>
							<Button
								variant="outline"
								size="sm"
								className="text-xs sm:text-sm"
							>
								Year
							</Button>
						</div>
					</div>

					<ChartContainer
						config={chartConfig}
						className="h-[250px] sm:h-[300px] w-full"
					>
						<AreaChart
							data={data}
							margin={{
								top: 10,
								right: 10,
								left: 0,
								bottom: 0,
							}}
							onClick={(data) => {
								if (data && data.activeTooltipIndex !== undefined) {
									onPointSelect(data.activeTooltipIndex);
								}
							}}
						>
							<defs>
								<linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
									<stop offset="5%" stopColor="#4ea83f" stopOpacity={0.3} />
									<stop offset="95%" stopColor="#4ea83f" stopOpacity={0} />
								</linearGradient>
							</defs>
							<CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
							<XAxis
								dataKey="day"
								tickLine={false}
								axisLine={false}
								tickMargin={8}
								className="text-xs"
							/>
							<YAxis
								tickLine={false}
								axisLine={false}
								tickMargin={8}
								className="text-xs"
							/>
							<ChartTooltip
								content={
									<ChartTooltipContent
										indicator="dot"
										formatter={(value) => `${value} penjualan`}
									/>
								}
							/>
							<Area
								type="monotone"
								dataKey="value"
								stroke="#4ea83f"
								strokeWidth={2}
								fill="url(#colorValue)"
								fillOpacity={1}
								dot={{
									fill: '#4ea83f',
									r: 4,
								}}
								activeDot={{
									r: 6,
									fill: '#4ea83f',
									strokeWidth: 2,
									stroke: '#fff',
								}}
							/>
						</AreaChart>
					</ChartContainer>
				</CardContent>
			</Card>

			{/* Insight Card - Col Span 1 */}
			<div className="border-l-2 max-h-[80%] place-self-center pl-4 py-4 border-primary shadow-none lg:col-span-1">
				<div className="p-0 h-full flex flex-col">
					<div className="flex-1">
						<h5 className="text-base font-semibold text-gray-900 mb-3">
							Insight
						</h5>
						<p className="text-sm text-gray-600 leading-relaxed mb-4">
							Penjualan produkmu terus meningkat ! Terus tingkatkan penjualanmu
							dan ikuti konten Upselling UMKM, agar produk kamu semakin pesat !
						</p>
						<Separator />
						<Button
							variant={'link'}
							type="button"
							className="text-sm text-primary pl-0 hover:text-primary/80 font-semibold mt-2 flex items-center gap-1"
						>
							Selengkapnya →
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
