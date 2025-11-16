import { Link } from '@tanstack/react-router';
import { Image } from '@unpic/react';
import { Eye, EyeOff, Lock, Mail, Phone, User } from 'lucide-react';
import { useState } from 'react';
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
import { useSignupForm } from '../hooks/useSignupForm';

export const SignupForm = () => {
	const { form, onSubmit } = useSignupForm();
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	return (
		<div className="w-full h-full flex flex-col items-center z-10 justify-center px-12">
			<div className="w-full max-w-md">
				<div className="flex justify-center mb-4">
					<Image
						src="/icons/logo/lokallink.png"
						layout="fullWidth"
						alt="LokalLink"
						className="h-20"
					/>
				</div>

				<h1 className="text-3xl font-bold text-green-600 text-center mb-4">
					Sign up
				</h1>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<div className="relative">
											<Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
											<Input
												{...field}
												placeholder="Tulis Emailmu disini"
												className="pl-12 rounded-xl border-gray-400 py-5"
											/>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="fullName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nama Lengkap</FormLabel>
									<FormControl>
										<div className="relative">
											<User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
											<Input
												{...field}
												placeholder="Masukkan nama lengkap"
												className="pl-12 rounded-xl border-gray-400 py-5"
											/>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="whatsapp"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nomor WhatsApp</FormLabel>
									<FormControl>
										<div className="relative">
											<Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
											<span className="absolute left-12 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
												+62
											</span>
											<Input
												{...field}
												type="tel"
												placeholder="8123456789"
												className="pl-20 py-5 rounded-xl border-gray-400"
											/>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Kata Sandi</FormLabel>
									<FormControl>
										<div className="relative">
											<Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
											<Input
												{...field}
												type={showPassword ? 'text' : 'password'}
												placeholder="Masukkan kata sandi"
												className="pl-12 pr-10 py-5 rounded-xl border-gray-400"
											/>
											<button
												type="button"
												onClick={() => setShowPassword(!showPassword)}
												className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
											>
												{showPassword ? (
													<EyeOff className="h-5 w-5" />
												) : (
													<Eye className="h-5 w-5" />
												)}
											</button>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Ulang Kata Sandi</FormLabel>
									<FormControl>
										<div className="relative">
											<Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
											<Input
												{...field}
												type={showConfirmPassword ? 'text' : 'password'}
												placeholder="Ulangi kata sandi"
												className="pl-12 pr-10 py-5 rounded-xl border-gray-400"
											/>
											<button
												type="button"
												onClick={() =>
													setShowConfirmPassword(!showConfirmPassword)
												}
												className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
											>
												{showConfirmPassword ? (
													<EyeOff className="h-5 w-5" />
												) : (
													<Eye className="h-5 w-5" />
												)}
											</button>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="acceptTerms"
							render={({ field }) => (
								<FormItem className="flex items-start space-x-2 space-y-0">
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
											className="border-primary border-2 mt-1"
										/>
									</FormControl>
									<div className="space-y-1 leading-none">
										<FormLabel className="text-sm font-normal cursor-pointer">
											By continuing, you agree to Tutormy.id Term and Use and
											Privacy Policy
										</FormLabel>
										<FormMessage />
									</div>
								</FormItem>
							)}
						/>
						<Button
							type="submit"
							className="w-full py-5 rounded-full"
							disabled={form.formState.isSubmitting}
						>
							{form.formState.isSubmitting ? 'Memuat...' : 'Daftar'}
						</Button>
						<p className="text-center text-sm">
							Sudah punya akun?{' '}
							<Link
								to="/auth/signin"
								className="text-green-600 hover:underline font-medium"
							>
								Masuk Sekarang
							</Link>
						</p>
					</form>
				</Form>
			</div>
		</div>
	);
};
