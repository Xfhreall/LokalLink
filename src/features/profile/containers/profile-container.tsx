import { useState } from 'react';
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/shared/components/ui/shadcn/tabs';
import { DataDiriTab } from '../components/data-diri-tab';
import { PengaturanTab } from '../components/pengaturan-tab';
import { ProfileSidebar } from '../components/profile-sidebar';
import TokoTab from '../components/toko-tab';
import { UlasanTab } from '../components/ulasan-tab';
import { WishlistTab } from '../components/wishlist-tab';

export const ProfileContainer = () => {
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
					{/* toko tab/section */}
					{showTokoTab ? (
						<TokoTab onBack={() => setShowTokoTab(false)} />
					) : (
						/* profile tab */
						<Tabs defaultValue="data-diri" className="w-full">
							<TabsList className="w-full justify-start border-b-2 rounded-none h-auto p-0 bg-transparent px-0 overflow-x-auto">
								<TabsTrigger
									value="data-diri"
									className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-green-600 data-[state=active]:border-b-4 text-sm sm:text-base font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none py-2 sm:py-3 data-[state=active]:text-green-600 whitespace-nowrap px-3 sm:px-4"
								>
									Data Diri
								</TabsTrigger>
								<TabsTrigger
									value="ulasan"
									className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-green-600 data-[state=active]:border-b-4 text-sm sm:text-base font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none py-2 sm:py-3 data-[state=active]:text-green-600 whitespace-nowrap px-3 sm:px-4"
								>
									Ulasan
								</TabsTrigger>
								<TabsTrigger
									value="wishlist"
									className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-green-600 data-[state=active]:border-b-4 text-sm sm:text-base font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none py-2 sm:py-3 data-[state=active]:text-green-600 whitespace-nowrap px-3 sm:px-4"
								>
									Wishlist
								</TabsTrigger>
								<TabsTrigger
									value="pengaturan"
									className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-green-600 data-[state=active]:border-b-4 text-sm sm:text-base font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none py-2 sm:py-3 data-[state=active]:text-green-600 whitespace-nowrap px-3 sm:px-4"
								>
									Pengaturan
								</TabsTrigger>
							</TabsList>

							<div>
								<TabsContent value="data-diri" className="mt-0">
									<DataDiriTab />
								</TabsContent>

								<TabsContent value="ulasan" className="mt-0">
									<UlasanTab />
								</TabsContent>

								<TabsContent value="wishlist" className="mt-0">
									<WishlistTab />
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
