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

			<div className="relative z-10 flex items-center justify-center min-h-screen p-4">
				<div className="w-full max-w-2xl">
					<div className="bg-white rounded-2xl shadow-sm border-2 border-primary py-10 px-20 relative">
						<button
							type="button"
							onClick={() => router.history.back()}
							className="absolute top-6 left-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
						>
							<ArrowLeft className="w-5 h-5 text-gray-600" />
						</button>
						<div className="flex justify-center mb-6 mt-2">
							<img
								src="/icons/logo/locallink.svg"
								alt="LokalLink"
								className="h-10"
							/>
						</div>
						<h1 className="text-xl font-bold text-center mb-2">
							Tambahkan No HP
						</h1>
						<p className="text-sm text-center text-muted-foreground mb-8">
							Tambahkan Nomor HP untuk verifikasi sebagai nomor Toko online
							barumu !
						</p>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-6"
							>
								<FormField
									control={form.control}
									name="phone"
									render={({ field }) => (
										<FormItem>
											<FormControl>
												<div className="relative flex items-center">
													<div className="absolute left-4 flex items-center gap-2 pointer-events-none">
														<span className="text-sm font-medium text-gray-600 border-r border-gray-300 pr-2">
															+62
														</span>
													</div>
													<Input
														{...field}
														type="tel"
														placeholder="Masukan nomor HP"
														className="py-5 pl-16 rounded-xl border-gray-300 border-2 focus:border-green-600 focus:ring-green-600"
													/>
												</div>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button
									type="submit"
									className="w-full py-5 rounded-xl text-base font-medium"
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
