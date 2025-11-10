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
		<div className="min-h-screen grid w-full relative overflow-hidden">
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

			<div className="relative z-10 place-self-center container max-w-2xl border-2 border-primary rounded-2xl bg-white mx-auto px-20 py-8">
				<button
					type="button"
					onClick={() => router.history.back()}
					className="absolute top-6 left-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
				>
					<ArrowLeft className="w-5 h-5 text-gray-600" />
				</button>
				<div className="flex justify-center mb-12">
					<img
						src="/icons/logo/locallink.svg"
						alt="LokalLink"
						className="h-12"
					/>
				</div>
				<div className="text-center mb-8">
					<h1 className="text-2xl font-bold text-gray-900 mb-3">
						Masukkan Kode Verifikasi
					</h1>
					<p className="text-sm text-gray-600">
						Tambahkan Nomor HP untuk verifikasi sebagai
						<br />
						nomor Toko online barumu !
					</p>
				</div>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="otp"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<div className="flex justify-center">
											<InputOTP
												maxLength={6}
												value={field.value}
												onChange={field.onChange}
											>
												<InputOTPGroup className="gap-3">
													<InputOTPSlot
														index={0}
														className="w-14 h-14 text-xl border border-primary rounded-xl"
													/>
													<InputOTPSlot
														index={1}
														className="w-14 h-14 text-xl border border-primary rounded-xl"
													/>
													<InputOTPSlot
														index={2}
														className="w-14 h-14 text-xl border border-primary rounded-xl"
													/>
													<InputOTPSlot
														index={3}
														className="w-14 h-14 text-xl border border-primary rounded-xl"
													/>
													<InputOTPSlot
														index={4}
														className="w-14 h-14 text-xl border border-primary rounded-xl"
													/>
													<InputOTPSlot
														index={5}
														className="w-14 h-14 text-xl border border-primary rounded-xl"
													/>
												</InputOTPGroup>
											</InputOTP>
										</div>
									</FormControl>
								</FormItem>
							)}
						/>
						<div className="text-center text-sm">
							<span className="text-gray-600">Tidak menerima kode? </span>
							<button
								type="button"
								onClick={handleResend}
								className="text-green-600 font-medium hover:underline"
							>
								Kirim ulang
							</button>
							<span className="text-gray-600"> atau </span>
							<button
								type="button"
								className="text-green-600 font-medium hover:underline"
							>
								Gunakan metode verifikasi lain
							</button>
						</div>

						<Button
							type="submit"
							className="w-full py-5 rounded-xl text-base font-medium"
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
