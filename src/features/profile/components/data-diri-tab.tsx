import {
	ChevronRight,
	Edit2,
	FileEdit,
	Save,
	ShoppingBag,
	X,
} from 'lucide-react';
import { useId, useState } from 'react';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@/shared/components/ui/shadcn/avatar';
import { Button } from '@/shared/components/ui/shadcn/button';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/shared/components/ui/shadcn/card';
import { Input } from '@/shared/components/ui/shadcn/input';
import { Label } from '@/shared/components/ui/shadcn/label';
import type { UserProfile } from '@/shared/data/user';
import { useUserProfile } from '../hooks/useUserProfile';

export const DataDiriTab = () => {
	const { profile, updateProfile, isLoading } = useUserProfile();
	const [isEditing, setIsEditing] = useState(false);
	const [formData, setFormData] = useState<UserProfile | null>(null);
	const nameId = useId();
	const emailId = useId();
	const phoneId = useId();

	if (isLoading || !profile) {
		return (
			<div className="flex items-center justify-center py-12">
				<p className="text-muted-foreground">Memuat data...</p>
			</div>
		);
	}

	const handleEdit = () => {
		setFormData(profile);
		setIsEditing(true);
	};

	const handleCancel = () => {
		setFormData(null);
		setIsEditing(false);
	};

	const handleSave = () => {
		if (formData) {
			updateProfile(formData);
			setIsEditing(false);
			setFormData(null);
		}
	};

	const handleChange = (field: keyof UserProfile, value: string) => {
		if (formData) {
			setFormData({ ...formData, [field]: value });
		}
	};

	const displayData = isEditing && formData ? formData : profile;
	const initials = displayData.name
		.split(' ')
		.map((n) => n[0])
		.join('')
		.toUpperCase()
		.slice(0, 2);

	return (
		<div className="space-y-6">
			<Card className="border-0 shadow-none">
				<CardContent className="space-x-14 flex">
					<div className="flex items-center gap-6 flex-col">
						<Avatar className="size-[255px]">
							<AvatarImage src={displayData.avatar} alt={displayData.name} />
							<AvatarFallback className="text-3xl bg-gray-200">
								{initials}
							</AvatarFallback>
						</Avatar>
						<Button
							variant="outline"
							className="rounded-full transition-colors duration-300 w-full border-green-600 text-green-600 hover:bg-green-50"
						>
							Pilih Foto
						</Button>
					</div>

					<div className="flex flex-col justify-center max-w-sm w-full gap-6">
						<div className="flex items-center justify-between">
							<div>
								<CardTitle>Ubah Data Diri</CardTitle>
							</div>
							{!isEditing ? (
								<Button onClick={handleEdit} variant="ghost" size="icon">
									<Edit2 className="w-4 h-4" />
								</Button>
							) : (
								<div className="flex gap-2">
									<Button onClick={handleCancel} variant="outline" size="sm">
										<X className="w-4 h-4 mr-2" />
										Batal
									</Button>
									<Button
										onClick={handleSave}
										size="sm"
										className="bg-green-600 hover:bg-green-700"
									>
										<Save className="w-4 h-4 mr-2" />
										Simpan
									</Button>
								</div>
							)}
						</div>
						<div className="grid grid-cols-[120px_1fr] px-4 items-center gap-4">
							<Label htmlFor={nameId} className="text-sm text-muted-foreground">
								Nama
							</Label>
							{isEditing ? (
								<Input
									id={nameId}
									value={displayData.name}
									onChange={(e) => handleChange('name', e.target.value)}
									placeholder="Masukkan nama lengkap"
									className="max-w-md"
								/>
							) : (
								<p className="text-sm font-medium">{displayData.name}</p>
							)}
						</div>

						<div className="grid grid-cols-[120px_1fr] px-4 items-center gap-4">
							<Label
								htmlFor={emailId}
								className="text-sm text-muted-foreground"
							>
								Email
							</Label>
							{isEditing ? (
								<Input
									id={emailId}
									type="email"
									value={displayData.email}
									onChange={(e) => handleChange('email', e.target.value)}
									placeholder="Masukkan email"
									className="max-w-md"
								/>
							) : (
								<p className="text-sm font-medium">{displayData.email}</p>
							)}
						</div>

						<div className="grid grid-cols-[120px_1fr] px-4 items-center gap-4">
							<Label
								htmlFor={phoneId}
								className="text-sm text-muted-foreground"
							>
								No Telp
							</Label>
							{isEditing ? (
								<Input
									id={phoneId}
									type="tel"
									value={displayData.phone}
									onChange={(e) => handleChange('phone', e.target.value)}
									placeholder="Masukkan nomor telepon"
									className="max-w-md"
								/>
							) : (
								<p className="text-sm font-medium">{displayData.phone}</p>
							)}
						</div>
					</div>
				</CardContent>
			</Card>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<Card className="border-green-500 relative hover:shadow-md transition-shadow cursor-pointer">
					<CardContent>
						<div className="flex items-start gap-4">
							<div className="p-3 bg-green-100 rounded-lg">
								<ShoppingBag className="w-6 h-6 text-green-600" />
							</div>
							<div>
								<h4 className="font-semibold mb-1">Buka Toko</h4>
								<p className="text-sm text-muted-foreground">
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

				<Card className="border-green-500 relative hover:shadow-md transition-shadow cursor-pointer">
					<CardContent>
						<div className="flex items-start gap-4">
							<div className="p-3 bg-green-100 rounded-lg">
								<FileEdit className="w-6 h-6 text-green-600" />
							</div>
							<div>
								<h4 className="font-semibold mb-1">Buat Artikel</h4>
								<p className="text-sm text-muted-foreground">
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
