import { MapPin } from 'lucide-react';
import { Button } from '@/shared/components/ui/shadcn/button';
import { Card, CardTitle } from '@/shared/components/ui/shadcn/card';
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/shared/components/ui/shadcn/tabs';
import type { OrderSummary } from '../types/order.types';

interface OrderDetailCardProps {
	storeLocation: string;
	storeName: string;
	summary: OrderSummary;
}

export function OrderDetailCard({
	storeName: _storeName,
	storeLocation: _storeLocation,
	summary,
}: OrderDetailCardProps) {
	return (
		<Card className="px-4 sm:px-6 pt-4 sm:pt-6 sticky top-20 sm:top-24 border-primary rounded-2xl sm:rounded-3xl h-max">
			<CardTitle className="text-base sm:text-lg">Detail Pesanan</CardTitle>
			<Tabs defaultValue="delivery">
				<TabsList className="grid w-full mb-2 grid-cols-2 bg-transparent">
					<TabsTrigger
						className="data-[state=active]:border-b-3 bg-none data-[state=active]:border-primary data-[state=active]:text-primary border-0 rounded-none data-[state=active]:shadow-none text-xs sm:text-sm"
						value="delivery"
					>
						Pesan Antar
					</TabsTrigger>
					<TabsTrigger
						className="data-[state=active]:border-b-3 bg-none data-[state=active]:border-primary data-[state=active]:text-primary border-0 rounded-none data-[state=active]:shadow-none text-xs sm:text-sm"
						value="pickup"
					>
						Pickup
					</TabsTrigger>
				</TabsList>
				<TabsContent value="delivery" className="space-y-4 px-2 h-max">
					<div>
						<h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
							<MapPin className="size-5 text-primary" />
							Alamat Pengiriman
						</h4>
						<p className="text-sm text-muted-foreground mt-1">
							HuangXuxi | (+62) 822-1234-5678
						</p>
						<p className="text-sm text-muted-foreground mt-1">
							Jalan Mt Haryono Gang 8a No.1015
						</p>
					</div>
					<div>
						<h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>bike</title>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M13.7143 0C13.4301 0 13.1576 0.112882 12.9567 0.313814C12.7557 0.514746 12.6429 0.787268 12.6429 1.07143C12.6429 1.35559 12.7557 1.62811 12.9567 1.82904C13.1576 2.02997 13.4301 2.14286 13.7143 2.14286H15.2143V16.2857H13.7143C13.3165 16.2857 12.9349 16.1277 12.6536 15.8464C12.3723 15.5651 12.2143 15.1835 12.2143 14.7857V13.9286C12.2143 11.9571 10.9457 10.2823 9.18 9.67371C9.34356 9.32926 9.42847 8.95274 9.42857 8.57143V4.5C9.42857 3.81801 9.15766 3.16396 8.67542 2.68173C8.19318 2.19949 7.53913 1.92857 6.85714 1.92857H2.57143C1.88944 1.92857 1.23539 2.19949 0.753155 2.68173C0.270919 3.16396 1.42381e-06 3.81801 1.42381e-06 4.5V8.57143C-7.12929e-06 9.02046 0.11757 9.46167 0.341034 9.85116C0.564498 10.2406 0.886057 10.5648 1.27372 10.7914C0.456154 11.6309 -0.000931017 12.7567 1.42381e-06 13.9286V17.3571C1.42381e-06 17.9486 0.480001 18.4286 1.07143 18.4286H3.06514C3.21233 19.0969 3.58333 19.6949 4.11673 20.1236C4.65013 20.5523 5.31395 20.786 5.99829 20.786C6.68262 20.786 7.34644 20.5523 7.87984 20.1236C8.41325 19.6949 8.78425 19.0969 8.93143 18.4286H15.0651C15.2123 19.0969 15.5833 19.6949 16.1167 20.1236C16.6501 20.5523 17.3139 20.786 17.9983 20.786C18.6826 20.786 19.3464 20.5523 19.8798 20.1236C20.4132 19.6949 20.7842 19.0969 20.9314 18.4286H21.3154C22.7726 18.4286 24.2983 17.2063 23.9554 15.4457C23.3177 12.1954 20.9846 9.62057 17.3571 9.43886V8.27657C17.5629 8.32914 17.7771 8.356 18 8.35714H19.7143C19.9416 8.35714 20.1596 8.26684 20.3204 8.10609C20.4811 7.94535 20.5714 7.72733 20.5714 7.5V4.07143C20.5714 3.8441 20.4811 3.62608 20.3204 3.46534C20.1596 3.30459 19.9416 3.21429 19.7143 3.21429H18C17.7771 3.21429 17.5629 3.24114 17.3571 3.29486V1.07143C17.3571 0.787268 17.2443 0.514746 17.0433 0.313814C16.8424 0.112882 16.5699 0 16.2857 0H13.7143ZM17.3571 11.5851V14.8509C17.98 14.7169 18.6293 14.7836 19.2119 15.0414C19.7946 15.2992 20.2807 15.7347 20.6006 16.2857H21.3154C21.3988 16.2875 21.4816 16.2728 21.5593 16.2425C21.6369 16.2122 21.7079 16.1669 21.768 16.1091C21.8486 16.0269 21.8691 15.9463 21.852 15.8571C21.3789 13.44 19.7863 11.7566 17.3571 11.5851ZM10.3937 16.2857C10.1798 15.8147 10.0698 15.3031 10.0714 14.7857V13.9286C10.0714 12.6257 9.01543 11.5714 7.71429 11.5714H4.5C3.19714 11.5714 2.14286 12.6274 2.14286 13.9286V16.2857H3.396C3.65873 15.8277 4.03771 15.4471 4.49463 15.1824C4.95156 14.9178 5.47025 14.7784 5.99829 14.7784C6.52633 14.7784 7.04501 14.9178 7.50194 15.1824C7.95887 15.4471 8.33784 15.8277 8.60057 16.2857H10.3937Z"
									fill="#4EA83F"
								/>
							</svg>
							Pengiriman Barang
						</h4>
						<p className="text-sm text-muted-foreground">
							Estimasi tiba | 20 menit
						</p>
					</div>
					<div className="flex justify-between items-center">
						<p className="font-semibold text-sm sm:text-base">
							Total Pembelian
						</p>
						<p className="font-semibold text-primary text-sm sm:text-base">
							Rp{summary.total.toLocaleString('id-ID')}
						</p>
					</div>
					<Button
						size={'lg'}
						className="w-full rounded-full mt-4 sm:mt-8 text-sm sm:text-base"
					>
						Bayar Sekarang
					</Button>
				</TabsContent>
				<TabsContent value="pickup" className="space-y-4 px-2 h-max">
					<div>
						<h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
							<MapPin className="size-5 text-primary" />
							Alamat Pengiriman
						</h4>
						<p className="text-sm text-muted-foreground mt-1">
							HuangXuxi | (+62) 822-1234-5678
						</p>
						<p className="text-sm text-muted-foreground mt-1">
							Jalan Mt Haryono Gang 8a No.1015
						</p>
					</div>
					<div>
						<h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>bike</title>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M13.7143 0C13.4301 0 13.1576 0.112882 12.9567 0.313814C12.7557 0.514746 12.6429 0.787268 12.6429 1.07143C12.6429 1.35559 12.7557 1.62811 12.9567 1.82904C13.1576 2.02997 13.4301 2.14286 13.7143 2.14286H15.2143V16.2857H13.7143C13.3165 16.2857 12.9349 16.1277 12.6536 15.8464C12.3723 15.5651 12.2143 15.1835 12.2143 14.7857V13.9286C12.2143 11.9571 10.9457 10.2823 9.18 9.67371C9.34356 9.32926 9.42847 8.95274 9.42857 8.57143V4.5C9.42857 3.81801 9.15766 3.16396 8.67542 2.68173C8.19318 2.19949 7.53913 1.92857 6.85714 1.92857H2.57143C1.88944 1.92857 1.23539 2.19949 0.753155 2.68173C0.270919 3.16396 1.42381e-06 3.81801 1.42381e-06 4.5V8.57143C-7.12929e-06 9.02046 0.11757 9.46167 0.341034 9.85116C0.564498 10.2406 0.886057 10.5648 1.27372 10.7914C0.456154 11.6309 -0.000931017 12.7567 1.42381e-06 13.9286V17.3571C1.42381e-06 17.9486 0.480001 18.4286 1.07143 18.4286H3.06514C3.21233 19.0969 3.58333 19.6949 4.11673 20.1236C4.65013 20.5523 5.31395 20.786 5.99829 20.786C6.68262 20.786 7.34644 20.5523 7.87984 20.1236C8.41325 19.6949 8.78425 19.0969 8.93143 18.4286H15.0651C15.2123 19.0969 15.5833 19.6949 16.1167 20.1236C16.6501 20.5523 17.3139 20.786 17.9983 20.786C18.6826 20.786 19.3464 20.5523 19.8798 20.1236C20.4132 19.6949 20.7842 19.0969 20.9314 18.4286H21.3154C22.7726 18.4286 24.2983 17.2063 23.9554 15.4457C23.3177 12.1954 20.9846 9.62057 17.3571 9.43886V8.27657C17.5629 8.32914 17.7771 8.356 18 8.35714H19.7143C19.9416 8.35714 20.1596 8.26684 20.3204 8.10609C20.4811 7.94535 20.5714 7.72733 20.5714 7.5V4.07143C20.5714 3.8441 20.4811 3.62608 20.3204 3.46534C20.1596 3.30459 19.9416 3.21429 19.7143 3.21429H18C17.7771 3.21429 17.5629 3.24114 17.3571 3.29486V1.07143C17.3571 0.787268 17.2443 0.514746 17.0433 0.313814C16.8424 0.112882 16.5699 0 16.2857 0H13.7143ZM17.3571 11.5851V14.8509C17.98 14.7169 18.6293 14.7836 19.2119 15.0414C19.7946 15.2992 20.2807 15.7347 20.6006 16.2857H21.3154C21.3988 16.2875 21.4816 16.2728 21.5593 16.2425C21.6369 16.2122 21.7079 16.1669 21.768 16.1091C21.8486 16.0269 21.8691 15.9463 21.852 15.8571C21.3789 13.44 19.7863 11.7566 17.3571 11.5851ZM10.3937 16.2857C10.1798 15.8147 10.0698 15.3031 10.0714 14.7857V13.9286C10.0714 12.6257 9.01543 11.5714 7.71429 11.5714H4.5C3.19714 11.5714 2.14286 12.6274 2.14286 13.9286V16.2857H3.396C3.65873 15.8277 4.03771 15.4471 4.49463 15.1824C4.95156 14.9178 5.47025 14.7784 5.99829 14.7784C6.52633 14.7784 7.04501 14.9178 7.50194 15.1824C7.95887 15.4471 8.33784 15.8277 8.60057 16.2857H10.3937Z"
									fill="#4EA83F"
								/>
							</svg>
							Pengiriman Barang Sendiri
						</h4>
						<p className="text-sm text-muted-foreground">
							Ambil pesanan dalam | 20 menit
						</p>
					</div>
					<div className="flex justify-between items-center">
						<p className="font-semibold text-sm sm:text-base">
							Total Pembelian
						</p>
						<p className="font-semibold text-primary text-sm sm:text-base">
							Rp{summary.total.toLocaleString('id-ID')}
						</p>
					</div>
					<Button
						size={'lg'}
						className="w-full rounded-full mt-4 sm:mt-8 text-sm sm:text-base"
					>
						Bayar Sekarang
					</Button>
				</TabsContent>
			</Tabs>
		</Card>
	);
}
