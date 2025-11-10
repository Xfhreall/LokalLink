import { Link } from '@tanstack/react-router';
import { Image } from '@unpic/react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useState } from 'react';
import { Google } from '@/shared/components/icons/google';
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
import { useSigninForm } from '../hooks/useSigninForm';

export const SigninForm = () => {
	const { form, onSubmit } = useSigninForm();
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="w-full h-full flex flex-col items-center justify-center px-12">
			<div className="w-full max-w-md">
				<div className="flex justify-center mb-8">
					<Image
						src="/icons/logo/locallink.svg"
						layout="fullWidth"
						alt="LokalLink"
						className="h-20"
					/>
				</div>

				<h1 className="text-3xl font-bold text-green-600 text-center mb-8">
					Sign in
				</h1>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
												type="email"
												placeholder="Tulis Emailmu disini"
												className="pl-12 py-5 rounded-xl border-gray-400"
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
												placeholder="Password"
												className="pl-12 py-5 rounded-xl border-gray-400 pr-10"
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

						<div className="flex items-center justify-between">
							<FormField
								control={form.control}
								name="rememberMe"
								render={({ field }) => (
									<FormItem className="flex items-center space-x-2 space-y-0">
										<FormControl>
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
												className="border-primary border-2"
											/>
										</FormControl>
										<FormLabel className="text-sm font-normal text-primary-600 cursor-pointer">
											Ingat saya
										</FormLabel>
									</FormItem>
								)}
							/>
							<button
								type="button"
								className="text-sm text-green-600 hover:underline"
							>
								Lupa Password
							</button>
						</div>
						<Button
							type="submit"
							className="w-full py-5 rounded-full"
							disabled={form.formState.isSubmitting}
						>
							{form.formState.isSubmitting ? 'Memuat...' : 'Masuk'}
						</Button>

						<Button
							type="button"
							variant="outline"
							className="w-full border-2 py-5 rounded-xl border-primary"
						>
							<Google className="size-6" />
							Continue with Google
						</Button>
						<p className="text-center text-sm">
							Belum Punya akun?{' '}
							<Link
								to="/auth/singup"
								className="text-green-600 hover:underline font-medium"
							>
								Daftar Sekarang
							</Link>
						</p>
					</form>
				</Form>
			</div>
		</div>
	);
};
