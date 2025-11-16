import { Button } from '@/shared/components/ui/shadcn/button';
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
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/components/ui/shadcn/select';
import { usePaymentForm } from '../../hooks/use-payment-form';
import type { PaymentFormValues } from '../../schemas/produk-form-schema';

interface PaymentFormProps {
	onSubmit: (values: PaymentFormValues) => void;
	onCancel: () => void;
	defaultValues?: Partial<PaymentFormValues>;
}

const bankOptions = [
	'Bank Mandiri',
	'BCA',
	'BNI',
	'BRI',
	'CIMB Niaga',
	'Danamon',
	'Permata Bank',
	'Bank Syariah Indonesia (BSI)',
	'BTPN',
	'Maybank',
];

export function PaymentForm({
	onSubmit,
	onCancel,
	defaultValues,
}: PaymentFormProps) {
	const { form } = usePaymentForm({ defaultValues });

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<h3 className="text-lg font-semibold text-primary">
					Informasi Pembayaran
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="bankName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tambahkan Rekening Pembayaran</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Pilih bank anda" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{bankOptions.map((bank) => (
												<SelectItem key={bank} value={bank}>
													{bank}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="accountOwner"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nama Pemilik Rekening</FormLabel>
									<FormControl>
										<Input placeholder="Nardji Purnomo" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					{/* Kolom Kanan */}
					<div className="space-y-4">
						{/* Nomor Rekening */}
						<FormField
							control={form.control}
							name="accountNumber"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nomor Rekening</FormLabel>
									<FormControl>
										<Input
											placeholder="2316166161616161"
											inputMode="numeric"
											{...field}
										/>
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
