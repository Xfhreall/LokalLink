import { Card } from '@/shared/components/ui/shadcn/card';
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/shared/components/ui/shadcn/tabs';
import { DataDiriTab } from '../components/data-diri-tab';
import { PengaturanTab } from '../components/pengaturan-tab';
import { ProfileSidebar } from '../components/profile-sidebar';
import { UlasanTab } from '../components/ulasan-tab';
import { WishlistTab } from '../components/wishlist-tab';

export const ProfileContainer = () => {
	return (
		<div className="mx-auto py-8 px-12 min-h-screen">
			<div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12">
				<aside className="hidden lg:block">
					<ProfileSidebar />
				</aside>

				<main>
					<Card className="border-0 shadow-none p-0">
						<Tabs defaultValue="data-diri" className="w-full">
							<TabsList className="w-full justify-start border-b-2 rounded-none h-auto p-0 bg-transparent px-4">
								<TabsTrigger
									value="data-diri"
									className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-green-600 data-[state=active]:border-b-4 text-base font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 data-[state=active]:text-green-600 "
								>
									Data Diri
								</TabsTrigger>
								<TabsTrigger
									value="ulasan"
									className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-green-600 data-[state=active]:border-b-4 text-base font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 data-[state=active]:text-green-600 "
								>
									Ulasan
								</TabsTrigger>
								<TabsTrigger
									value="wishlist"
									className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-green-600 data-[state=active]:border-b-4 text-base font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 data-[state=active]:text-green-600 "
								>
									Wishlist
								</TabsTrigger>
								<TabsTrigger
									value="pengaturan"
									className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-green-600 data-[state=active]:border-b-4 text-base font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 data-[state=active]:text-green-600 "
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
					</Card>
				</main>
			</div>
		</div>
	);
};
