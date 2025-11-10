import { Link } from '@tanstack/react-router';
import { ChevronRight, FileEdit, ShoppingBag } from 'lucide-react';
import { Card, CardContent } from '@/shared/components/ui/shadcn/card';

const ActionCard = () => {
	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<Link to="/step">
					<Card className="border-green-500 relative hover:shadow-md transition-shadow cursor-pointer">
						<CardContent>
							<div className="flex items-start gap-4">
								<div className="p-3 bg-green-100 rounded-lg self-center">
									<ShoppingBag className="w-6 h-6 text-green-600" />
								</div>
								<div>
									<h4 className="font-semibold mb-1">Buka Toko</h4>
									<p className="text-sm text-muted-foreground max-w-72">
										Jual Beli produk UMKM semuah itu! Tinggal daftarkan Usahamu
										di LokalLink semuanya bisa pakai Link!
									</p>
								</div>
							</div>
						</CardContent>
						<ChevronRight
							className="absolute right-4 top-1/2 transform -translate-y-1/2"
							size={32}
						/>
					</Card>
				</Link>

				<Card className="border-green-500 relative hover:shadow-md transition-shadow cursor-pointer">
					<CardContent>
						<div className="flex items-start gap-4">
							<div className="p-3 bg-green-100 rounded-lg self-center">
								<FileEdit className="w-6 h-6 text-green-600" />
							</div>
							<div>
								<h4 className="font-semibold mb-1">Buat Artikel</h4>
								<p className="text-sm text-muted-foreground max-w-72">
									Jual Beli produk UMKM semuah itu! Tinggal daftarkan Usahamu di
									LokalLink semuanya bisa pakai Link!
								</p>
							</div>
						</div>
					</CardContent>
					<ChevronRight
						className="absolute right-4 top-1/2 transform -translate-y-1/2"
						size={32}
					/>
				</Card>
			</div>
		</div>
	);
};

export default ActionCard;
