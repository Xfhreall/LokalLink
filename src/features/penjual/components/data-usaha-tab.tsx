import { Edit2, MapPin, Save, X } from 'lucide-react';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@/shared/components/ui/shadcn/avatar';
import { Button } from '@/shared/components/ui/shadcn/button';
import { Card, CardContent } from '@/shared/components/ui/shadcn/card';
import { Input } from '@/shared/components/ui/shadcn/input';
import { Label } from '@/shared/components/ui/shadcn/label';
import { Switch } from '@/shared/components/ui/shadcn/switch';
import { useAddressForm, useBusinessForm, useBusinessProfile } from '../hooks';

export const DataUsahaTab = () => {
	const {
		businessProfile,
		storeAddress,
		updateBusinessProfile,
		updateStoreAddress,
		isLoading,
	} = useBusinessProfile();

	const {
		isEditing: isEditingBusiness,
		displayData: displayBusinessData,
		handleEdit: handleEditBusiness,
		handleCancel: handleCancelBusiness,
		handleSave: handleSaveBusiness,
		handleChange: handleBusinessChange,
	} = useBusinessForm(businessProfile, {
		onSave: updateBusinessProfile,
	});

	const {
		isEditing: isEditingAddress,
		displayData: displayAddressData,
		handleEdit: handleEditAddress,
		handleCancel: handleCancelAddress,
		handleSave: handleSaveAddress,
		handleChange: handleAddressChange,
	} = useAddressForm(storeAddress, {
		onSave: updateStoreAddress,
	});

	if (isLoading) {
		return (
			<div className="flex items-center justify-center py-12">
				<p className="text-muted-foreground">Memuat data...</p>
			</div>
		);
	}

	const storeInitials = displayBusinessData.storeName
		.split(' ')
		.map((n) => n[0])
		.join('')
		.toUpperCase()
		.slice(0, 2);

	return (
		<div className="space-y-6 py-6">
			{/* Ubah Data Usaha Card */}
			<Card className="border-none shadow-none">
				<CardContent>
					<div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-8">
						{/* Left side - Avatar */}
						<div className="flex flex-col items-center gap-4 sm:gap-6 shrink-0 w-full lg:w-auto">
							<Avatar className="size-32 sm:size-40 lg:size-48">
								<AvatarImage
									src="https://images.unsplash.com/photo-1762170317668-dd2891594658?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=719"
									alt={displayBusinessData.storeName}
								/>
								<AvatarFallback className="text-xl sm:text-2xl bg-primary/10 text-primary">
									{storeInitials}
								</AvatarFallback>
							</Avatar>
							<Button
								variant="outline"
								className="rounded-full w-full max-w-xs lg:max-w-none transition-colors duration-300 border-primary text-primary hover:bg-primary/5"
							>
								Pilih Foto
							</Button>
						</div>

						<div className="flex-1 w-full">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 xl:gap-x-16 gap-y-6 sm:gap-y-8">
								<div className="space-y-4 sm:space-y-6">
									<h3 className="text-base sm:text-lg font-semibold">
										Ubah Data Usaha
									</h3>
									<div className="flex flex-col sm:flex-row w-full sm:items-center gap-2 sm:gap-4">
										<Label className="text-sm text-muted-foreground sm:w-32 lg:w-40 shrink-0">
											Nama Toko
										</Label>
										{isEditingBusiness ? (
											<Input
												value={displayBusinessData.storeName}
												onChange={(e) =>
													handleBusinessChange('storeName', e.target.value)
												}
												placeholder="Masukkan nama toko"
												className="w-full"
											/>
										) : (
											<p className="text-sm font-medium">
												{displayBusinessData.storeName}
											</p>
										)}
									</div>
									<div className="flex flex-col sm:flex-row w-full sm:items-center gap-2 sm:gap-4">
										<Label className="text-sm text-muted-foreground sm:w-32 lg:w-40 shrink-0">
											No HP
										</Label>
										{isEditingBusiness ? (
											<Input
												value={displayBusinessData.phone}
												onChange={(e) =>
													handleBusinessChange('phone', e.target.value)
												}
												placeholder="Masukkan nomor HP"
												className="w-full"
											/>
										) : (
											<p className="text-sm font-medium">
												{displayBusinessData.phone}
											</p>
										)}
									</div>
								</div>

								<div className="space-y-4 sm:space-y-6">
									<div className="flex flex-row justify-between items-center gap-3">
										<h3 className="text-base sm:text-lg font-semibold">
											Nama Pemilik Usaha
										</h3>
										<div className="flex items-center">
											{!isEditingBusiness ? (
												<button onClick={handleEditBusiness} type="button">
													<Edit2 className="size-4" />
												</button>
											) : (
												<div className="flex gap-2">
													<Button
														onClick={handleCancelBusiness}
														variant="outline"
														size="sm"
													>
														<X className="size-4 mr-2" />
														Batal
													</Button>
													<Button
														onClick={handleSaveBusiness}
														size="sm"
														className="bg-primary hover:bg-primary/90"
													>
														<Save className="size-4 mr-2" />
														Simpan
													</Button>
												</div>
											)}
										</div>
									</div>

									<div className="flex flex-col sm:flex-row w-full sm:items-center gap-2 sm:gap-4">
										<Label className="text-sm text-muted-foreground sm:w-32 lg:w-40 shrink-0">
											Nama
										</Label>
										{isEditingBusiness ? (
											<Input
												value={displayBusinessData.ownerName}
												onChange={(e) =>
													handleBusinessChange('ownerName', e.target.value)
												}
												placeholder="Masukkan nama pemilik"
												className="w-full"
											/>
										) : (
											<p className="text-sm font-medium">
												{displayBusinessData.ownerName}
											</p>
										)}
									</div>

									<div className="flex flex-col sm:flex-row w-full sm:items-center gap-2 sm:gap-4">
										<Label className="text-sm text-muted-foreground sm:w-32 lg:w-40 shrink-0">
											No KTP
										</Label>
										{isEditingBusiness ? (
											<Input
												value={displayBusinessData.idNumber}
												onChange={(e) =>
													handleBusinessChange('idNumber', e.target.value)
												}
												placeholder="Masukkan nomor KTP"
												className="w-full"
											/>
										) : (
											<p className="text-sm font-medium">
												{displayBusinessData.idNumber}
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<Card className="border-none shadow-none">
				<CardContent>
					<div className="flex flex-row justify-between items-center gap-3 mb-6">
						<h3 className="text-base sm:text-lg text-primary font-semibold">
							Alamat Toko
						</h3>
						<div className="flex items-center">
							{!isEditingAddress ? (
								<button onClick={handleEditAddress} type="button">
									<Edit2 className="size-4" />
								</button>
							) : (
								<div className="flex gap-2">
									<Button
										onClick={handleCancelAddress}
										variant="outline"
										size="sm"
									>
										<X className="size-4 mr-2" />
										Batal
									</Button>
									<Button
										onClick={handleSaveAddress}
										size="sm"
										className="bg-primary hover:bg-primary/90"
									>
										<Save className="size-4 mr-2" />
										Simpan
									</Button>
								</div>
							)}
						</div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 xl:gap-x-16 gap-y-6">
						{/* Left Column */}
						<div className="space-y-4">
							<div className="flex flex-col sm:flex-row w-full sm:items-center gap-2 sm:gap-4">
								<Label className="text-sm text-muted-foreground sm:w-32 lg:w-40 shrink-0">
									Nama Gudang
								</Label>
								{isEditingAddress ? (
									<Input
										value={displayAddressData.warehouseName}
										onChange={(e) =>
											handleAddressChange('warehouseName', e.target.value)
										}
										placeholder="Masukkan nama gudang"
										className="w-full"
									/>
								) : (
									<p className="text-sm font-medium">
										{displayAddressData.warehouseName}
									</p>
								)}
							</div>

							<div className="flex flex-col sm:flex-row w-full sm:items-center gap-2 sm:gap-4">
								<Label className="text-sm text-muted-foreground sm:w-32 lg:w-40 shrink-0">
									No. telepon
								</Label>
								{isEditingAddress ? (
									<div className="flex w-full">
										<span className="inline-flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50 text-gray-500 text-sm">
											+62
										</span>
										<Input
											value={displayAddressData.phoneNumber}
											onChange={(e) =>
												handleAddressChange('phoneNumber', e.target.value)
											}
											placeholder="812345678"
											className="rounded-l-none"
										/>
									</div>
								) : (
									<p className="text-sm font-medium">
										+62 {displayAddressData.phoneNumber}
									</p>
								)}
							</div>

							<div className="flex flex-col sm:flex-row w-full sm:items-center gap-2 sm:gap-4">
								<Label className="text-sm text-muted-foreground sm:w-32 lg:w-40 shrink-0">
									Narahubung
								</Label>
								{isEditingAddress ? (
									<Input
										value={displayAddressData.contactPerson}
										onChange={(e) =>
											handleAddressChange('contactPerson', e.target.value)
										}
										placeholder="Masukkan nama narahubung"
										className="w-full"
									/>
								) : (
									<p className="text-sm font-medium">
										{displayAddressData.contactPerson}
									</p>
								)}
							</div>
						</div>

						{/* Right Column */}
						<div className="space-y-4">
							<div className="flex flex-col sm:flex-row w-full sm:items-center gap-2 sm:gap-4">
								<Label className="text-sm text-muted-foreground sm:w-32 lg:w-40 shrink-0">
									Negara/wilayah
								</Label>
								{isEditingAddress ? (
									<Input
										value={displayAddressData.country}
										onChange={(e) =>
											handleAddressChange('country', e.target.value)
										}
										placeholder="Masukkan negara"
										className="w-full"
									/>
								) : (
									<p className="text-sm font-medium">
										{displayAddressData.country}
									</p>
								)}
							</div>

							<div className="flex flex-col sm:flex-row w-full sm:items-start gap-2 sm:gap-4">
								<Label className="text-sm text-muted-foreground sm:w-32 lg:w-40 shrink-0 sm:pt-2">
									Alamat
								</Label>
								{isEditingAddress ? (
									<Input
										value={displayAddressData.address}
										onChange={(e) =>
											handleAddressChange('address', e.target.value)
										}
										placeholder="Masukkan alamat lengkap"
										className="w-full"
									/>
								) : (
									<p className="text-sm font-medium">
										{displayAddressData.address}
									</p>
								)}
							</div>

							<div className="flex flex-col sm:flex-row w-full sm:items-center gap-2 sm:gap-4">
								<Label className="text-sm text-muted-foreground sm:w-32 lg:w-40 shrink-0">
									Wilayah
								</Label>
								{isEditingAddress ? (
									<Input
										value={displayAddressData.region}
										onChange={(e) =>
											handleAddressChange('region', e.target.value)
										}
										placeholder="Masukkan wilayah"
										className="w-full"
									/>
								) : (
									<p className="text-sm font-medium">
										{displayAddressData.region}
									</p>
								)}
							</div>
						</div>

						{/* Pinpoint - Full Width */}
						<div className="lg:col-span-2">
							<div className="flex flex-col sm:flex-row w-full sm:items-start gap-2 sm:gap-4">
								<Label className="text-sm text-muted-foreground sm:w-32 lg:w-40 shrink-0 sm:pt-2">
									Pinpoint
								</Label>
								<div className="flex-1 w-full">
									{isEditingAddress ? (
										<Button
											type="button"
											variant="outline"
											className="w-full h-32 sm:h-40 relative overflow-hidden bg-muted hover:bg-muted/80"
										>
											<div
												className="absolute inset-0"
												style={{
													backgroundImage:
														"url('/assets/fragments/point-form.svg')",
													backgroundSize: 'cover',
													backgroundPosition: 'center',
													filter: 'brightness(0.6)',
												}}
											/>
											<div className="absolute inset-0 flex items-center justify-center">
												<div className="flex items-center bg-white p-2 rounded-full border-2 gap-2 text-muted-foreground text-xs">
													<MapPin className="h-5 w-5" />
													<span>Tentukan pinpoint</span>
												</div>
											</div>
										</Button>
									) : (
										<div className="w-full h-32 sm:h-40 relative rounded-lg overflow-hidden border">
											<div
												className="absolute inset-0"
												style={{
													backgroundImage:
														"url('/assets/fragments/point-form.svg')",
													backgroundSize: 'cover',
													backgroundPosition: 'center',
												}}
											/>
											<div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
												{displayAddressData.pinpoint
													? `${displayAddressData.pinpoint.lat}, ${displayAddressData.pinpoint.lng}`
													: 'Pinpoint belum diatur'}
											</div>
										</div>
									)}
								</div>
							</div>

							{/* Toggle Switch */}
							<div className="flex flex-col sm:flex-row w-full sm:items-center gap-2 sm:gap-4 mt-4">
								<Label className="text-sm text-muted-foreground sm:w-32 lg:w-40 shrink-0" />
								<div className="flex items-center gap-3">
									<Switch
										checked={displayAddressData.isMainAddress}
										onCheckedChange={(checked) =>
											handleAddressChange('isMainAddress', checked)
										}
										disabled={!isEditingAddress}
									/>
									<span className="text-sm font-medium">
										Tetapkan sebagai Alamat Gudang
									</span>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
