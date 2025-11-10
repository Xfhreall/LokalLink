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
import { Card, CardContent } from '@/shared/components/ui/shadcn/card';
import { Input } from '@/shared/components/ui/shadcn/input';
import { Label } from '@/shared/components/ui/shadcn/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/components/ui/shadcn/select';
import type { UserProfile } from '@/shared/data/user';
import { useUserProfile } from '../hooks/useUserProfile';
import ActionCard from './action-card';

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
				<CardContent className="p-6">
					<div className="flex items-start gap-8">
						<div className="flex flex-col items-center gap-6 shrink-0">
							<Avatar className="size-48">
								<AvatarImage src={displayData.avatar} alt={displayData.name} />
								<AvatarFallback className="text-2xl bg-gray-200">
									{initials}
								</AvatarFallback>
							</Avatar>
							<Button
								variant="outline"
								className="rounded-full w-full transition-colors duration-300 border-green-600 text-green-600 hover:bg-green-50"
							>
								Pilih Foto
							</Button>
						</div>

						{/* Right side - Form */}
						<div className="flex-1">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
								{/* Ubah Biodata Diri */}
								<div className="space-y-6">
									<h3 className="text-lg font-semibold">Ubah Biodata Diri</h3>
									<div className="flex w-full items-center">
										<Label
											htmlFor={nameId}
											className="text-sm text-muted-foreground w-40"
										>
											Nama
										</Label>
										{isEditing ? (
											<Input
												id={nameId}
												value={displayData.name}
												onChange={(e) => handleChange('name', e.target.value)}
												placeholder="Masukkan nama lengkap"
												className="w-full"
											/>
										) : (
											<p className="text-sm font-medium">{displayData.name}</p>
										)}
									</div>{' '}
									<div className="flex w-full items-center">
										<Label className="text-sm text-muted-foreground w-40">
											Tanggal Lahir
										</Label>
										{isEditing ? (
											<Input
												type="date"
												value={displayData.birthDate || ''}
												onChange={(e) =>
													handleChange('birthDate', e.target.value)
												}
												className="w-full"
											/>
										) : displayData.birthDate ? (
											<p className="text-sm font-medium">
												{new Date(displayData.birthDate).toLocaleDateString(
													'id-ID',
													{
														day: 'numeric',
														month: 'long',
														year: 'numeric',
													},
												)}
											</p>
										) : (
											<Button
												variant="link"
												className="text-green-600 hover:text-green-700 p-0 h-auto font-medium"
											>
												Tambahkan sekarang
											</Button>
										)}
									</div>
									<div className="flex w-full items-center">
										<Label className="text-sm text-muted-foreground w-40">
											Jenis Kelamin
										</Label>
										{isEditing ? (
											<Select
												value={displayData.gender || ''}
												onValueChange={(value) => handleChange('gender', value)}
											>
												<SelectTrigger className="w-full">
													<SelectValue placeholder="Pilih jenis kelamin" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="Laki-laki">Laki-laki</SelectItem>
													<SelectItem value="Perempuan">Perempuan</SelectItem>
												</SelectContent>
											</Select>
										) : displayData.gender ? (
											<p className="text-sm font-medium">
												{displayData.gender}
											</p>
										) : (
											<Button
												variant="link"
												className="text-green-600 hover:text-green-700 p-0 h-auto font-medium"
											>
												Tambahkan sekarang
											</Button>
										)}
									</div>
								</div>

								{/* Ubah Kontak */}
								<div className="space-y-6">
									<div className="flex justify-between">
										<h3 className="text-lg font-semibold">Ubah Kontak</h3>
										<div className="flex items-center">
											{!isEditing ? (
												<button onClick={handleEdit} type="button">
													<Edit2 className="size-4" />
												</button>
											) : (
												<div className="flex gap-2">
													<Button
														onClick={handleCancel}
														variant="outline"
														size="sm"
													>
														<X className="size-4 mr-2" />
														Batal
													</Button>
													<Button
														onClick={handleSave}
														size="sm"
														className="bg-green-600 hover:bg-green-700"
													>
														<Save className="size-4 mr-2" />
														Simpan
													</Button>
												</div>
											)}
										</div>
									</div>

									<div className="flex w-full items-center">
										<Label className="text-sm text-muted-foreground w-40">
											Nama
										</Label>
										{isEditing ? (
											<Input
												value={displayData.name}
												onChange={(e) => handleChange('name', e.target.value)}
												placeholder="Masukkan nama lengkap"
												className="w-full"
											/>
										) : (
											<p className="text-sm font-medium">{displayData.name}</p>
										)}
									</div>

									<div className="flex w-full items-center">
										<Label
											htmlFor={emailId}
											className="text-sm text-muted-foreground w-40"
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
												className="w-full"
											/>
										) : (
											<p className="text-sm font-medium">{displayData.email}</p>
										)}
									</div>

									<div className="flex w-full items-center">
										<Label
											htmlFor={phoneId}
											className="text-sm text-muted-foreground w-40"
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
												className="w-full"
											/>
										) : (
											<p className="text-sm font-medium">{displayData.phone}</p>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
			<ActionCard />
		</div>
	);
};
