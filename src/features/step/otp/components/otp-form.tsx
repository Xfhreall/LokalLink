import { useRouter } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/shared/components/ui/shadcn/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
} from '@/shared/components/ui/shadcn/form';
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from '@/shared/components/ui/shadcn/input-otp';
import { useOtpForm } from '../hooks/useOtpForm';

export const OtpForm = () => {
	const { form, onSubmit, handleResend } = useOtpForm();
	const router = useRouter();
	return (
		<div className="min-h-screen grid w-full relative overflow-hidden px-4">
			{/* Background Decoration */}
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

			<div className="relative z-10 place-self-center container max-w-2xl border-2 border-primary rounded-xl sm:rounded-2xl bg-white mx-4 sm:mx-auto px-4 sm:px-12 lg:px-20 py-6 sm:py-8 my-4 sm:my-0">
				<button
					type="button"
					onClick={() => router.history.back()}
					className="absolute top-4 left-4 sm:top-6 sm:left-6 p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
				>
					<ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
				</button>
				<div className="flex justify-center mb-8 sm:mb-12">
					<img
						src="/icons/logo/lokallink.png"
						alt="LokalLink"
						className="h-8 sm:h-12"
					/>
				</div>
				<div className="text-center mb-6 sm:mb-8 px-2">
					<h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
						Masukkan Kode Verifikasi
					</h1>
					<p className="text-xs sm:text-sm text-gray-600">
						Tambahkan Nomor HP untuk verifikasi sebagai
						<br className="hidden sm:inline" />
						<span className="sm:hidden"> </span>
						nomor Toko online barumu !
					</p>
				</div>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6 sm:space-y-8"
					>
						<FormField
							control={form.control}
							name="otp"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<div className="flex justify-center px-2">
											<InputOTP
												maxLength={6}
												value={field.value}
												onChange={field.onChange}
											>
												<InputOTPGroup className="gap-1.5 sm:gap-2 md:gap-3">
													<InputOTPSlot
														index={0}
														className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-lg sm:text-xl border border-primary rounded-lg sm:rounded-xl"
													/>
													<InputOTPSlot
														index={1}
														className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-lg sm:text-xl border border-primary rounded-lg sm:rounded-xl"
													/>
													<InputOTPSlot
														index={2}
														className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-lg sm:text-xl border border-primary rounded-lg sm:rounded-xl"
													/>
													<InputOTPSlot
														index={3}
														className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-lg sm:text-xl border border-primary rounded-lg sm:rounded-xl"
													/>
													<InputOTPSlot
														index={4}
														className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-lg sm:text-xl border border-primary rounded-lg sm:rounded-xl"
													/>
													<InputOTPSlot
														index={5}
														className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-lg sm:text-xl border border-primary rounded-lg sm:rounded-xl"
													/>
												</InputOTPGroup>
											</InputOTP>
										</div>
									</FormControl>
								</FormItem>
							)}
						/>
						<div className="text-center text-xs sm:text-sm px-2 space-y-2">
							<div>
								<span className="text-gray-600">Tidak menerima kode? </span>
								<button
									type="button"
									onClick={handleResend}
									className="text-green-600 font-medium hover:underline"
								>
									Kirim ulang
								</button>
							</div>
							<div>
								<span className="text-gray-600">atau </span>
								<button
									type="button"
									className="text-green-600 font-medium hover:underline"
								>
									Gunakan metode verifikasi lain
								</button>
							</div>
						</div>

						<Button
							type="submit"
							className="w-full py-4 sm:py-5 rounded-xl text-sm sm:text-base font-medium"
							disabled={
								form.formState.isSubmitting || form.watch('otp').length !== 6
							}
						>
							{form.formState.isSubmitting ? 'Memverifikasi...' : 'Verifikasi'}
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};
