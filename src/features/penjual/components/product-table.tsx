import { MoreVertical, Search, SlidersHorizontal, Star } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/shared/components/ui/shadcn/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/shared/components/ui/shadcn/dropdown-menu';
import { Input } from '@/shared/components/ui/shadcn/input';
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
import type { Product } from '../types/product';
import { AddProductModal } from './add-product-modal';

interface ProductTableProps {
	products: Product[];
	searchQuery: string;
	onSearchChange: (query: string) => void;
	onStatusFilterChange: (status: string) => void;
}

export const ProductTable = ({
	products,
	searchQuery,
	onSearchChange,
	onStatusFilterChange,
}: ProductTableProps) => {
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

	return (
		<div className="space-y-4">
			{/* Header */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
				<div>
					<h3 className="text-lg sm:text-xl font-bold text-gray-900">
						List Produk
					</h3>
					<p className="text-xs sm:text-sm text-gray-500 mt-1">
						Histori invoice yang terdapat di Toko anda dalam 30 hari
					</p>
				</div>
				<Button
					className="bg-primary rounded-full hover:bg-primary/90 text-white"
					onClick={() => setIsAddModalOpen(true)}
				>
					<span className="mr-2">+</span>
					Tambah Produk Baru
				</Button>
			</div>

			{/* Add Product Modal */}
			<AddProductModal open={isAddModalOpen} onOpenChange={setIsAddModalOpen} />

			{/* Search and Filters */}
			<div className="flex items-center justify-between">
				<div className="flex flex-row gap-3 flex-1">
					<div className="relative max-w-md w-full">
						<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
						<Input
							placeholder="Cari Produk Anda disini"
							value={searchQuery}
							onChange={(e) => onSearchChange(e.target.value)}
							className="pl-10"
						/>
					</div>
					<Button variant="outline" size="icon">
						<SlidersHorizontal className="w-4 h-4" />
					</Button>
				</div>

				{/* Filters */}
				<div className="flex flex-wrap gap-2">
					<Select onValueChange={onStatusFilterChange}>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Rentang Tanggal" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Semua</SelectItem>
							<SelectItem value="7days">7 Hari Terakhir</SelectItem>
							<SelectItem value="30days">30 Hari Terakhir</SelectItem>
						</SelectContent>
					</Select>
					<Select onValueChange={onStatusFilterChange}>
						<SelectTrigger className="w-[140px]">
							<SelectValue placeholder="Status" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Semua</SelectItem>
							<SelectItem value="active">Aktif</SelectItem>
							<SelectItem value="inactive">Tidak Aktif</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			{/* Table */}
			<div className="border border-gray-200 rounded-lg overflow-hidden">
				<div className="overflow-x-auto">
					<Table>
						<TableHeader>
							<TableRow className="bg-primary hover:bg-primary">
								<TableHead className="text-white font-semibold">No</TableHead>
								<TableHead className="text-white font-semibold">
									Produk
								</TableHead>
								<TableHead className="text-white font-semibold">
									Harga
								</TableHead>
								<TableHead className="text-white font-semibold">Stok</TableHead>
								<TableHead className="text-white font-semibold">
									Pendapatan
								</TableHead>
								<TableHead className="text-white font-semibold">
									Terjual
								</TableHead>
								<TableHead className="text-white font-semibold">
									Rating
								</TableHead>
								<TableHead className="text-white font-semibold">
									Ulasan
								</TableHead>
								<TableHead className="text-white font-semibold w-12" />
							</TableRow>
						</TableHeader>
						<TableBody>
							{products.map((product) => (
								<TableRow key={product.id} className="hover:bg-gray-50">
									<TableCell className="font-medium">{product.no}</TableCell>
									<TableCell>{product.name}</TableCell>
									<TableCell>{product.price}</TableCell>
									<TableCell>{product.stock.toLocaleString()}</TableCell>
									<TableCell>{product.revenue}</TableCell>
									<TableCell>{product.sold}</TableCell>
									<TableCell>
										<div className="flex items-center gap-1">
											<span className="font-semibold">{product.rating}</span>
											<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
										</div>
									</TableCell>
									<TableCell>{product.reviews}</TableCell>
									<TableCell>
										<DropdownMenu>
											<DropdownMenuTrigger asChild>
												<Button variant="ghost" size="icon">
													<MoreVertical className="w-4 h-4" />
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent align="end">
												<DropdownMenuItem>Keterangan</DropdownMenuItem>
												<DropdownMenuItem>Edit</DropdownMenuItem>
												<DropdownMenuItem>Hapus</DropdownMenuItem>
											</DropdownMenuContent>
										</DropdownMenu>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		</div>
	);
};
