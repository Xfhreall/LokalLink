import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/shared/components/ui/shadcn/avatar';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/components/ui/shadcn/select';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/shared/components/ui/shadcn/table';
import type { Invoice } from '../types';

interface InvoiceTableProps {
	invoices: Invoice[];
	onStatusFilterChange: (status: string) => void;
	onDateFilterChange: (date: string) => void;
}

const getStatusBadge = (status: Invoice['status']) => {
	const styles = {
		menunggu: 'bg-blue-100 text-blue-700',
		proses: 'bg-yellow-100 text-yellow-700',
		selesai: 'bg-green-100 text-green-700',
	};

	const labels = {
		menunggu: 'Menunggu',
		proses: 'Proses',
		selesai: 'Selesai',
	};

	return (
		<span
			className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
		>
			{labels[status]}
			<ChevronDown className="w-3 h-3" />
		</span>
	);
};

export const InvoiceTable = ({
	invoices,
	onStatusFilterChange,
	onDateFilterChange,
}: InvoiceTableProps) => {
	return (
		<div className="space-y-4">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h3 className="text-lg sm:text-xl font-bold text-gray-900">
						Invoice List
					</h3>
					<p className="text-xs sm:text-sm text-gray-500">
						Histori Invoice yang terdapat di Toko anda dalam 30 Hari
					</p>
				</div>

				<div className="flex gap-2 w-full sm:w-auto">
					<Select onValueChange={onDateFilterChange}>
						<SelectTrigger className="w-full sm:w-[180px] text-xs sm:text-sm">
							<SelectValue placeholder="Rentang Tanggal" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Semua</SelectItem>
							<SelectItem value="7days">7 Hari Terakhir</SelectItem>
							<SelectItem value="30days">30 Hari Terakhir</SelectItem>
							<SelectItem value="90days">90 Hari Terakhir</SelectItem>
						</SelectContent>
					</Select>

					<Select onValueChange={onStatusFilterChange}>
						<SelectTrigger className="w-full sm:w-[150px] text-xs sm:text-sm">
							<SelectValue placeholder="Status" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Semua Status</SelectItem>
							<SelectItem value="menunggu">Menunggu</SelectItem>
							<SelectItem value="proses">Proses</SelectItem>
							<SelectItem value="selesai">Selesai</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className="border border-gray-200 rounded-lg overflow-hidden">
				<div className="overflow-x-auto">
					<Table>
						<TableHeader className="bg-primary">
							<TableRow className="hover:bg-primary">
								<TableHead className="text-white font-semibold text-xs sm:text-sm">
									Invoice Number
								</TableHead>
								<TableHead className="text-white font-semibold text-xs sm:text-sm">
									Produk
								</TableHead>
								<TableHead className="text-white font-semibold text-xs sm:text-sm">
									Pembeli
								</TableHead>
								<TableHead className="text-white font-semibold text-xs sm:text-sm">
									Tanggal Pembelian
								</TableHead>
								<TableHead className="text-white font-semibold text-xs sm:text-sm">
									Total
								</TableHead>
								<TableHead className="text-white font-semibold text-xs sm:text-sm">
									Status
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{invoices.map((invoice) => (
								<TableRow key={invoice.id} className="hover:bg-gray-50">
									<TableCell className="font-medium text-xs sm:text-sm">
										{invoice.invoiceNumber}
									</TableCell>
									<TableCell className="text-xs sm:text-sm">
										{invoice.product}
									</TableCell>
									<TableCell>
										<div className="flex items-center gap-2">
											<Avatar className="w-6 h-6 sm:w-8 sm:h-8">
												<AvatarFallback className="bg-primary/10 text-primary text-xs">
													{invoice.buyer.name.charAt(0)}
												</AvatarFallback>
											</Avatar>
											<span className="text-xs sm:text-sm">
												{invoice.buyer.name}
											</span>
										</div>
									</TableCell>
									<TableCell className="text-xs sm:text-sm">
										{invoice.purchaseDate}
									</TableCell>
									<TableCell className="font-medium text-xs sm:text-sm">
										{invoice.total}
									</TableCell>
									<TableCell>{getStatusBadge(invoice.status)}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		</div>
	);
};
