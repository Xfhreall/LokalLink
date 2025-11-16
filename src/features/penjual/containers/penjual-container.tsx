import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { useState } from 'react';
import { PengaturanTab } from '@/features/profile/components/pengaturan-tab';
import { ProfileSidebar } from '@/features/profile/components/profile-sidebar';
import TokoTab from '@/features/profile/components/toko-tab';
import { DataUsahaTab } from '../components/data-usaha-tab';
import { PenjualanTab } from '../components/penjualan-tab';
import { ProdukTab } from '../components/produk-tab';

export const PenjualContainer = () => {
	const [showTokoTab, setShowTokoTab] = useState(false);

	return (
		<div className="mx-auto py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-12 min-h-screen">
			<div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-6 lg:gap-8 xl:gap-12">
				<aside className="hidden lg:block">
					<ProfileSidebar onShowToko={() => setShowTokoTab(true)} />
				</aside>
				<div className="lg:hidden">
					<ProfileSidebar onShowToko={() => setShowTokoTab(true)} />
				</div>

				<main className="w-full overflow-hidden">
					{showTokoTab ? (
						<TokoTab onBack={() => setShowTokoTab(false)} />
					) : (
						/* profile tab */
						<Tabs defaultValue="penjualan" className="w-full">
							<TabsList className="w-full justify-between grid grid-cols-4 border-b-2 rounded-none h-auto p-0 bg-transparent px-0 overflow-x-auto">
								<TabsTrigger
									value="penjualan"
									className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-green-600 data-[state=active]:border-b-4 text-sm sm:text-base font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none py-2 sm:py-3 data-[state=active]:text-green-600 whitespace-nowrap px-3 sm:px-4"
								>
									Penjualan
								</TabsTrigger>
								<TabsTrigger
									value="produk"
									className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-green-600 data-[state=active]:border-b-4 text-sm sm:text-base font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none py-2 sm:py-3 data-[state=active]:text-green-600 whitespace-nowrap px-3 sm:px-4"
								>
									Produk
								</TabsTrigger>
								<TabsTrigger
									value="data-usaha"
									className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-green-600 data-[state=active]:border-b-4 text-sm sm:text-base font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none py-2 sm:py-3 data-[state=active]:text-green-600 whitespace-nowrap px-3 sm:px-4"
								>
									Data Usaha
								</TabsTrigger>
								<TabsTrigger
									value="pengaturan"
									className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-green-600 data-[state=active]:border-b-4 text-sm sm:text-base font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none py-2 sm:py-3 data-[state=active]:text-green-600 whitespace-nowrap px-3 sm:px-4"
								>
									Pengaturan
								</TabsTrigger>
							</TabsList>

							<div>
								<TabsContent value="penjualan" className="mt-0">
									<PenjualanTab />
								</TabsContent>

								<TabsContent value="produk" className="mt-0">
									<ProdukTab />
								</TabsContent>

								<TabsContent value="data-usaha" className="mt-0">
									<DataUsahaTab />
								</TabsContent>

								<TabsContent value="pengaturan" className="mt-0">
									<PengaturanTab />
								</TabsContent>
							</div>
						</Tabs>
					)}
				</main>
			</div>
		</div>
	);
};
