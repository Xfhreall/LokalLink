import { useRouter } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/shared/components/ui/shadcn/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/shared/components/ui/shadcn/form';
import { Input } from '@/shared/components/ui/shadcn/input';
import { usePhoneStepForm } from '../hooks/usePhoneStepForm';

export const PhoneStepForm = () => {
	const router = useRouter();
	const { form, onSubmit } = usePhoneStepForm();

	return (
		<div className="min-h-screen w-full relative overflow-hidden">
			<div className="absolute -top-12 -left-12 sm:-top-24 sm:-left-24 w-48 h-48 sm:size-96 opacity-50 sm:opacity-100">
				<img
					src="/assets/fragments/green-circle.svg"
					alt=""
					className="w-full h-full "
				/>
			</div>
			<div className="absolute top-4 right-4 sm:top-6 sm:right-10 w-20 h-20 sm:w-40 sm:h-40 opacity-50 sm:opacity-100">
				<img
					src="/assets/fragments/green-circle.svg"
					alt=""
					className="w-full h-full "
				/>
			</div>
			<div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 w-24 h-24 sm:w-48 sm:h-48 hidden sm:block">
				<img
					src="/assets/fragments/green-circle.svg"
					alt=""
					className="w-full h-full "
				/>
			</div>
			<div className="absolute bottom-0 right-0 w-40 h-40 sm:size-80 translate-x-1/3 translate-y-1/3 opacity-30 sm:opacity-100">
				<img
					src="/assets/fragments/green-circle.svg"
					alt=""
					className="w-full h-full "
				/>
			</div>
			<div className="absolute bottom-16 right-40 sm:bottom-32 sm:right-80 w-40 h-40 sm:size-80 hidden lg:block">
				<img
					src="/assets/fragments/green-circle.svg"
					alt=""
					className="w-full h-full "
				/>
			</div>

			<div className="relative z-10 flex items-center justify-center min-h-screen p-4">
				<div className="w-full max-w-2xl">
					<div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border-2 border-primary py-6 sm:py-10 px-6 sm:px-12 lg:px-20 relative">
						<button
							type="button"
							onClick={() => router.history.back()}
							className="absolute top-4 left-4 sm:top-6 sm:left-6 p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
						>
							<ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
						</button>
						<div className="flex justify-center mb-4 sm:mb-6 mt-2">
							<img
								src="/icons/logo/lokallink.png"
								alt="LokalLink"
								className="h-8 sm:h-10"
							/>
						</div>
						<h1 className="text-lg sm:text-xl font-bold text-center mb-2">
							Tambahkan No HP
						</h1>
						<p className="text-xs sm:text-sm text-center text-muted-foreground mb-6 sm:mb-8 px-2">
							Tambahkan Nomor HP untuk verifikasi sebagai nomor Toko online
							barumu !
						</p>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-5 sm:space-y-6"
							>
								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<div className="relative flex items-center">
													<div className="absolute left-3 sm:left-4 flex items-center gap-2 pointer-events-none">
														<span className="text-xs sm:text-sm font-medium text-gray-600 border-r border-gray-300 pr-2">
															+62
														</span>
													</div>
													<Input
														{...field}
														type="tel"
														placeholder="Masukan nomor HP"
														className="py-4 sm:py-5 pl-14 sm:pl-16 rounded-xl border-gray-300 border-2 focus:border-green-600 focus:ring-green-600 text-sm sm:text-base"
													/>
												</div>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button
									type="submit"
									className="w-full py-4 sm:py-5 rounded-xl text-sm sm:text-base font-medium"
									disabled={form.formState.isSubmitting}
								>
									{form.formState.isSubmitting ? 'Mengirim...' : 'Kirim'}
								</Button>
							</form>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
};
