import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@/shared/components/ui/shadcn/avatar';
import { Button } from '@/shared/components/ui/shadcn/button';
import { Card, CardContent } from '@/shared/components/ui/shadcn/card';
import { useUserProfile } from '../hooks/useUserProfile';

export const ProfileSidebar = () => {
	const { profile, isLoading } = useUserProfile();

	if (isLoading || !profile) {
		return null;
	}

	const initials = profile.name
		.split(' ')
		.map((n) => n[0])
		.join('')
		.toUpperCase()
		.slice(0, 2);

	return (
		<Card className="border-primary pb-24 sticky top-44">
			<CardContent className="space-y-6">
				<div className="flex items-center  gap-4 space-y-4">
					<Avatar className="w-24 h-24">
						<AvatarImage src={profile.avatar} alt={profile.name} />
						<AvatarFallback className="text-2xl bg-gray-200">
							{initials}
						</AvatarFallback>
					</Avatar>
					<div>
						<h3 className="font-semibold">{profile.name}</h3>
						<Button className="mt-3 rounded-full px-6">Lengkapi data</Button>
					</div>
				</div>

				<Card className="border-primary shadow-none">
					<CardContent className="space-y-2">
						<h4 className="font-semibold text-sm">
							Nikmati Promo Termurah dan dapatkan Produk terbaru
						</h4>
						<p className="text-xs ">
							Masukkan emailmu dan dapatkan notifikasi produk terbaru dari kami
							!
						</p>
					</CardContent>
				</Card>
			</CardContent>
		</Card>
	);
};
