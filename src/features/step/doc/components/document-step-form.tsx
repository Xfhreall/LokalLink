import { Link } from '@tanstack/react-router';
import { ArrowLeft, Image, X } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '@/shared/components/ui/shadcn/button';
import { Checkbox } from '@/shared/components/ui/shadcn/checkbox';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/components/ui/shadcn/form';
import { Input } from '@/shared/components/ui/shadcn/input';
import { useDocumentStepForm } from '../hooks/useDocumentStepForm';

export const DocumentStepForm = () => {
	const { form, onSubmit, currentStep, goToPreviousStep } =
		useDocumentStepForm();
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = Array.from(e.target.files || []);
		const currentFiles = form.getValues('ownershipDocuments') || [];

		const newFiles = files.slice(0, 3 - currentFiles.length).map((file) => ({
			file,
			preview: URL.createObjectURL(file),
		}));

		form.setValue('ownershipDocuments', [...currentFiles, ...newFiles], {
			shouldValidate: true,
		});

		if (fileInputRef.current) {
			fileInputRef.current.value = '';
		}
	};

	const handleBrowseClick = () => {
		fileInputRef.current?.click();
	};

	const handleRemoveFile = (index: number) => {
		const current = form.getValues('ownershipDocuments');
		const fileToRemove = current[index];

		if (fileToRemove?.preview) {
			URL.revokeObjectURL(fileToRemove.preview);
		}

		form.setValue(
			'ownershipDocuments',
			current.filter((_, i) => i !== index),
			{ shouldValidate: true },
		);
	};

	return (
		<div className="min-h-screen bg-white relative overflow-hidden">
			{/* Background Decoration */}
			<div className="absolute -top-24 -left-24 size-96">
				<img
					src="/assets/fragments/green-circle.svg"
					alt=""
					className="w-full h-full "
				/>
			</div>
			<div className="absolute top-6 right-10 w-40 h-40">
				<img
					src="/assets/fragments/green-circle.svg"
					alt=""
					className="w-full h-full "
				/>
			</div>
			<div className="absolute bottom-12 left-12 w-48 h-48">
				<img
					src="/assets/fragments/green-circle.svg"
					alt=""
					className="w-full h-full "
				/>
			</div>
			<div className="absolute bottom-0 right-0 size-80 translate-x-1/3 translate-y-1/3">
				<img
					src="/assets/fragments/green-circle.svg"
					alt=""
					className="w-full h-full "
				/>
			</div>
			<div className="absolute bottom-32 right-80 size-80">
				<img
					src="/assets/fragments/green-circle.svg"
					alt=""
					className="w-full h-full "
				/>
			</div>

			<div className="relative my-12 z-10 place-self-center container max-w-3xl border-2 border-primary rounded-2xl bg-white mx-auto px-6 py-8">
				<button
					type="button"
					onClick={currentStep === 1 ? undefined : goToPreviousStep}
					className="absolute top-6 left-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
				>
					{currentStep === 1 ? (
						<Link to="/step/otp">
							<ArrowLeft className="w-6 h-6 text-gray-700" />
						</Link>
					) : (
						<ArrowLeft className="w-6 h-6 text-gray-700" />
					)}
				</button>

				<div className="flex justify-center mb-8">
					<img
						src="/icons/logo/locallink.svg"
						alt="LokalLink"
						className="h-12"
					/>
				</div>

				<div className="mb-8">
					<h1 className="text-2xl font-bold text-gray-900 mb-2">
						Verifikasi Dokumen
					</h1>
					<p className="text-sm text-gray-600">
						Buat Toko UMKM anda dengan mudah sekarang
					</p>
				</div>

				<div className="mb-12">
					<h2 className="text-center text-lg font-semibold mb-6">
						Tambah Jenis usaha Anda
					</h2>
					<div className="flex items-center justify-center gap-4 mb-6">
						<div className="flex flex-col items-center">
							<div
								className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
									currentStep === 1
										? 'bg-green-600 text-white'
										: 'bg-gray-200 text-gray-600'
								}`}
							>
								1
							</div>
							<span className="text-xs mt-2 text-gray-600">Identitas Toko</span>
						</div>

						<div className="w-32 h-0.5 bg-gray-300 mb-6" />

						<div className="flex flex-col items-center">
							<div
								className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
									currentStep === 2
										? 'bg-green-600 text-white'
										: 'bg-gray-200 text-gray-600'
								}`}
							>
								2
							</div>
							<span className="text-xs mt-2 text-gray-600">Detail usaha</span>
						</div>
					</div>
				</div>

				<Form {...form}>
					<form
						onSubmit={(e) => {
							console.log('Form onSubmit event triggered');
							e.preventDefault();
							form.handleSubmit(onSubmit)(e);
						}}
						className="space-y-6"
					>
						{currentStep === 1 && (
							<>
								<FormField
									control={form.control}
									name="storeName"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-base font-semibold">
												Nama Toko
											</FormLabel>
											<p className="text-sm text-gray-600 mb-2">
												Anda bisa menentukan nama sementara sekarang dan
												mengubahnya nanti !
											</p>
											<FormControl>
												<Input
													{...field}
													placeholder=""
													className="py-5 rounded-xl border-gray-300 border-2"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="ownershipDocuments"
									render={() => (
										<FormItem>
											<FormLabel className="text-base font-semibold">
												Verifikasi Pemilik
											</FormLabel>
											<div className="text-sm text-gray-600 mb-4 space-y-1">
												<p>
													1. File yang diunggah harus berupa file pindahan
													berwarna dan kurang dari 10MB dalam format JPG, PNG,
													JPEG, dan PDF
												</p>
												<p>
													2. Pastikan file yang diunggah tampak jelas dan
													menampilkan semua informasi yang relevan, termasuk
													tanda tangan Anda
												</p>
											</div>
											<FormControl>
												<div>
													<input
														ref={fileInputRef}
														type="file"
														accept="image/jpeg,image/png,image/webp,application/pdf"
														multiple
														onChange={handleFileChange}
														className="hidden"
													/>
													<div className="border-2 border-dashed border-primary rounded-xl py-2 px-4 text-center">
														<div className="flex items-center gap-3">
															<Image className="size-6 text-green-600" />
															<div>
																<p className="text-sm text-gray-600">
																	Drag your files(s) to start uploading
																</p>
															</div>
															<Button
																type="button"
																variant="outline"
																onClick={handleBrowseClick}
																className="border-green-600 ml-auto text-green-600 hover:bg-green-50"
															>
																Browse files
															</Button>
														</div>
													</div>
												</div>
											</FormControl>

											{form.watch('ownershipDocuments')?.length > 0 && (
												<div className="mt-4 space-y-2">
													{form
														.watch('ownershipDocuments')
														.map((doc, index) => (
															<div
																key={index.toString()}
																className="flex items-center gap-2 p-3 border rounded-lg bg-gray-50"
															>
																<span className="text-sm flex-1">
																	{doc.file.name}
																</span>
																<Button
																	type="button"
																	variant="ghost"
																	size="sm"
																	onClick={() => handleRemoveFile(index)}
																>
																	<X className="w-4 h-4" />
																</Button>
															</div>
														))}
												</div>
											)}
											<FormMessage />
										</FormItem>
									)}
								/>
							</>
						)}

						{currentStep === 2 && (
							<>
								<FormField
									control={form.control}
									name="legalName"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-base font-semibold">
												Nama Perwakilan Hukum
											</FormLabel>
											<p className="text-sm text-gray-600 mb-2">
												Nama yang dimasukkan harus sesuai dengan nama yang
												tercantumm di tanda pengenal yang anda masukkan
											</p>
											<FormControl>
												<Input
													{...field}
													placeholder="Masukkan nama pemilik bisnis"
													className="py-5 rounded-xl border-gray-300 border-2"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="ktpNumber"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-base font-semibold">
												Nomor KTP
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder="Masukkan nomor KTP"
													className="py-5 rounded-xl border-gray-300 border-2"
													maxLength={16}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="birthDate"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-base font-semibold">
												Tanggal Lahir
											</FormLabel>
											<FormControl>
												<Input
													{...field}
													type="date"
													placeholder="Masukkan tanggal lahir Pemilik"
													className="rounded-xl py-3 h-max border-gray-300 border-2"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
									<p className="text-sm text-yellow-800">
										Pastikan informasi yang dimasukkan disini sama persis dengan
										informasi yang anda unggah
									</p>
								</div>

								<FormField
									control={form.control}
									name="acceptTerms"
									render={({ field }) => (
										<FormItem className="flex items-start space-x-3 space-y-0">
											<FormControl>
												<Checkbox
													checked={field.value}
													onCheckedChange={field.onChange}
													className="mt-1"
												/>
											</FormControl>
											<div className="space-y-1 leading-none">
												<FormLabel className="text-sm font-normal cursor-pointer">
													Dapatkan informasi tentang tren, berita, promosi,
													rekomendasi dan pembaruan akun dari Shop I Tokopedia
												</FormLabel>
												<FormMessage />
											</div>
										</FormItem>
									)}
								/>
							</>
						)}

						<Button
							type="submit"
							className="w-full py-5 rounded-xl text-base font-medium bg-green-600 hover:bg-green-700"
							disabled={form.formState.isSubmitting}
							onClick={() => {
								console.log('Button clicked!');
								console.log('Form errors:', form.formState.errors);
								console.log('Form values:', form.getValues());
							}}
						>
							{form.formState.isSubmitting
								? 'Memproses...'
								: currentStep === 1
									? 'Selanjutnya'
									: 'Selanjutnya'}
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};
