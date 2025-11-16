import { Link } from '@tanstack/react-router';
import { ChevronRight, FileEdit, ShoppingBag } from 'lucide-react';
import { Card, CardContent } from '@/shared/components/ui/shadcn/card';

const ActionCard = () => {
	return (
		<div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<Link to="/step">
					<Card className="border-green-500 relative hover:shadow-md transition-shadow cursor-pointer">
						<CardContent className="pr-12 sm:pr-14">
							<div className="flex items-start gap-3 sm:gap-4">
								<div className="p-2 sm:p-3 bg-green-100 rounded-lg self-center shrink-0">
									<ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
								</div>
								<div className="min-w-0">
									<h4 className="font-semibold mb-1 text-sm sm:text-base">
										Buka Toko
									</h4>
									<p className="text-xs sm:text-sm text-muted-foreground">
										Jual Beli produk UMKM semuah itu! Tinggal daftarkan Usahamu
										di LokalLink semuanya bisa pakai Link!
									</p>
								</div>
							</div>
						</CardContent>
						<ChevronRight
							className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 shrink-0"
							size={24}
						/>
					</Card>
				</Link>

				<Card className="border-green-500 relative hover:shadow-md transition-shadow cursor-pointer">
					<CardContent className="pr-12 sm:pr-14">
						<div className="flex items-start gap-3 sm:gap-4">
							<div className="p-2 sm:p-3 bg-green-100 rounded-lg self-center shrink-0">
								<FileEdit className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
							</div>
							<div className="min-w-0">
								<h4 className="font-semibold mb-1 text-sm sm:text-base">
									Buat Artikel
								</h4>
								<p className="text-xs sm:text-sm text-muted-foreground">
									Jual Beli produk UMKM semuah itu! Tinggal daftarkan Usahamu di
									LokalLink semuanya bisa pakai Link!
								</p>
							</div>
						</div>
					</CardContent>
					<ChevronRight
						className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 shrink-0"
						size={24}
					/>
				</Card>
			</div>
		</div>
	);
};

export default ActionCard;
