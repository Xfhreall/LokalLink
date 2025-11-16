import { MapPin, Minus, Plus } from 'lucide-react';
import { Button } from '@/shared/components/ui/shadcn/button';
import { ButtonGroup } from '@/shared/components/ui/shadcn/button-group';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/components/ui/shadcn/form';
import { Input } from '@/shared/components/ui/shadcn/input';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from '@/shared/components/ui/shadcn/input-group';
import { useUmkmForm } from '../../hooks/use-umkm-form';
import type { UmkmFormValues } from '../../schemas/umkm-form-schema';

interface UmkmFormProps {
	onSubmit: (values: UmkmFormValues) => void;
	onCancel: () => void;
	defaultValues?: Partial<UmkmFormValues>;
}

export function UmkmForm({ onSubmit, onCancel, defaultValues }: UmkmFormProps) {
	const { form, showMapPicker, setShowMapPicker, updateTime } = useUmkmForm({
		defaultValues,
	});

	console.log(showMapPicker); // Temporary to avoid unused warning

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<h3 className="text-lg font-semibold text-primary">
					Siapkan Toko Anda
				</h3>

				{/* 2 Kolom utama */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-4">
						{/* Nama Toko */}
						<FormField
							control={form.control}
							name="namaToko"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nama Toko / Tempat Produksi</FormLabel>
									<FormControl>
										<Input placeholder="Toko Kopi Sulaiman" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>

						{/* No Telepon - Input Group */}
						<FormField
							control={form.control}
							name="telepon"
							render={({ field }) => (
								<FormItem>
									<FormLabel>No. telepon</FormLabel>
									<FormControl>
										<InputGroup>
											<InputGroupAddon align="inline-start">
												<InputGroupText className="border-r pr-2 border-gray-500">
													+62
												</InputGroupText>
											</InputGroupAddon>
											<InputGroupInput
												placeholder="812345678"
												inputMode="numeric"
												{...field}
											/>
										</InputGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Alamat */}
						<FormField
							control={form.control}
							name="alamat"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Alamat</FormLabel>
									<FormControl>
										<div className="relative">
											<MapPin className="absolute left-3 top-2 h-5 w-5 text-muted-foreground" />
											<Input
												placeholder="JL. Pegangsaan Timur No.56 Jakarta"
												className="pl-10"
												{...field}
											/>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="space-y-4">
						{/* Nama Narahubung */}
						<FormField
							control={form.control}
							name="namaNarahubung"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nama Narahubung</FormLabel>
									<FormControl>
										<Input placeholder="Bapak Nardji" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>

						{/* Jam Buka - Button Group + Input Group */}
						<div className="flex items-center gap-2">
							<FormField
								control={form.control}
								name="jamBuka"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Jam Buka</FormLabel>
										<FormControl>
											<div className="flex border-2 rounded-full px-3 p-1 items-center gap-2">
												{/* Hour Button Group */}
												<ButtonGroup>
													<Button
														type="button"
														variant="outline"
														size="icon"
														className="rounded-l-md hover:bg-transparent border-none shadow-none"
														onClick={() => updateTime('jamBuka', 'hour', false)}
													>
														<span className="rounded-full border p-1">
															<Minus className="h-4 w-4" />
														</span>
													</Button>

													<input
														step={'60'}
														type="time"
														value={`${field.value.hour.toString().padStart(2, '0')}:${field.value.minute.toString().padStart(2, '0')}`}
														onChange={() =>
															updateTime('jamBuka', 'hour', false)
														}
														className="w-16 text-center text-lg font-semibold border-0 outline-none bg-transparent focus:ring-0"
													/>
													<Button
														type="button"
														variant="outline"
														size="icon"
														className="rounded-l-md hover:bg-transparent border-none shadow-none"
														onClick={() => updateTime('jamBuka', 'hour', false)}
													>
														<span className="rounded-full bg-primary text-white border p-1">
															<Plus className="h-4 w-4" />
														</span>
													</Button>
												</ButtonGroup>
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							{/* Jam Tutup - Button Group + Input Group */}
							<FormField
								control={form.control}
								name="jamTutup"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Jam Toko</FormLabel>
										<FormControl>
											<div className="flex border-2 rounded-full px-3 p-1 items-center gap-2">
												{/* Hour Button Group */}
												<ButtonGroup>
													<Button
														type="button"
														variant="outline"
														size="icon"
														className="rounded-l-md hover:bg-transparent border-none shadow-none"
														onClick={() =>
															updateTime('jamTutup', 'hour', false)
														}
													>
														<span className="rounded-full  border p-1">
															<Minus className="h-4 w-4" />
														</span>
													</Button>

													<input
														type="time"
														value={`${field.value.hour.toString().padStart(2, '0')}:${field.value.minute.toString().padStart(2, '0')}`}
														onChange={() =>
															updateTime('jamTutup', 'hour', false)
														}
														className="w-16 text-center text-lg font-semibold border-0 outline-none bg-transparent focus:ring-0"
													/>
													<Button
														type="button"
														variant="outline"
														size="icon"
														className="rounded-l-md border-none shadow-none hover:bg-transparent"
														onClick={() =>
															updateTime('jamTutup', 'hour', false)
														}
													>
														<span className="rounded-full bg-primary text-white border p-1">
															<Plus className="h-4 w-4" />
														</span>
													</Button>
												</ButtonGroup>
											</div>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						{/* Pinpoint */}
						<FormField
							control={form.control}
							name="pinpoint"
							render={() => (
								<FormItem>
									<FormLabel>Pinpoint</FormLabel>
									<FormControl>
										<Button
											type="button"
											variant="outline"
											className="w-full h-32 relative overflow-hidden bg-muted hover:bg-muted/80"
											onClick={() => setShowMapPicker(true)}
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
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>
				<div className="flex max-w-xs ml-auto gap-2 pt-4">
					<Button
						type="button"
						variant="outline"
						onClick={onCancel}
						className="flex-1"
					>
						Batal
					</Button>
					<Button type="submit" className="flex-1">
						Simpan
					</Button>
				</div>
			</form>
		</Form>
	);
}
