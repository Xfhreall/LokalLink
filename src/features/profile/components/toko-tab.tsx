import { ArrowLeft, Banknote, Check, ShoppingBag, Store } from 'lucide-react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
} from '@/shared/components/ui/shadcn/accordion';
import { Button } from '@/shared/components/ui/shadcn/button';
import { Card, CardContent } from '@/shared/components/ui/shadcn/card';
import { useTokoTab } from '../hooks/use-toko-tab';
import { PaymentForm } from './verifikasi/payment-form';
import { ProductForm } from './verifikasi/product-form';
import { UmkmForm } from './verifikasi/umkm-form';

interface TokoTabProps {
	onBack: () => void;
}

export default function TokoTab({ onBack }: TokoTabProps) {
	const {
		activeStep,
		setActiveStep,
		completedSteps,
		umkmData,
		paymentData,
		productData,
		handleUmkmSubmit,
		handlePaymentSubmit,
		handleProductSubmit,
	} = useTokoTab();

	const steps = [
		{
			id: 1,
			title: 'Tambahkan UMKM Anda',
			description: 'Mulai atur stok toko dengan isi data berikut',
			icon: Store,
			completed: completedSteps.includes(1),
		},
		{
			id: 2,
			title: 'Tambahkan Pencairan Penjualan',
			description:
				'Masukkan rekeningmu agar hasil penjualan bisa masuk ke rekening kamu !',
			icon: Banknote,
			completed: completedSteps.includes(2),
		},
		{
			id: 3,
			title: 'Tambahkan produk pertama Anda',
			description: 'Mulai atur stok toko dengan',
			icon: ShoppingBag,
			completed: completedSteps.includes(3),
		},
	];

	return (
		<div className="w-full mx-auto p-4 sm:p-6">
			{/* Header */}
			<div className="relative hidden md:block">
				<img
					src="/assets/store/banner-reg.png"
					alt="banner"
					className="object-contain w-full  mb-6 rounded-lg bg-red-200"
				/>
				<Button
					size="icon"
					onClick={onBack}
					className="z-10 absolute top-2 left-2"
				>
					<ArrowLeft className="h-5 w-5" />
				</Button>
			</div>
			<div className="mb-8">
				<div className="flex items-center gap-4 mb-2">
					<h1 className="text-2xl font-bold text-gray-900">
						Menyiapkan toko Anda
					</h1>
				</div>
				<p className="text-gray-600">
					Kembangkan usaha Anda dengan LokalLink dalam beberapa tahap
				</p>
			</div>
			<div className="mb-6">
				<h2 className="text-lg font-semibold text-gray-900 mb-1">
					Siapkan Toko Anda
				</h2>
			</div>
			<div className="space-y-0">
				{steps.map((step, index) => (
					<div key={step.id} className="relative">
						{index < steps.length - 1 && (
							<div
								className="absolute left-[19px] top-12 w-0.5 bg-gray-300 transition-all duration-300"
								style={{
									height:
										activeStep === `step-${step.id}`
											? 'calc(70% + 100px)'
											: '70%',
								}}
							/>
						)}
						<div className="relative flex gap-4 pb-6">
							<div
								className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-lg z-10 ${
									step.completed
										? 'bg-primary text-white'
										: 'bg-none border-primary text-primary border'
								}`}
							>
								{step.id}
							</div>
							<div className="flex-1 space-y-4">
								<Card className="border border-gray-200 p-0">
									<CardContent className="p-6">
										<div className="flex items-start gap-4">
											<Button size={'icon-lg'} variant={'blank'}>
												<step.icon className="size-5 text-gray-600" />
											</Button>
											<div className="flex-1">
												<h3 className="text-lg font-semibold text-gray-900 mb-1">
													{step.title}
												</h3>
												<p className="text-sm text-gray-600 mb-4">
													{step.description}
												</p>

												<Button
													size={'sm'}
													className="rounded-full w-full max-w-40"
													onClick={() => setActiveStep(`step-${step.id}`)}
													disabled={step.completed}
												>
													{step.completed ? 'Selesai' : 'Mulai'}
												</Button>
											</div>
											{step.completed && (
												<div className="shrink-0">
													<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
														<Check className="w-5 h-5 text-white" />
													</div>
												</div>
											)}
										</div>
									</CardContent>
								</Card>

								<Accordion
									type="single"
									collapsible
									value={activeStep}
									onValueChange={setActiveStep}
								>
									<AccordionItem
										value={`step-${step.id}`}
										className="border-none"
									>
										<AccordionContent>
											<Card className="p-0 shadow-none border-none">
												<CardContent className="p-6">
													{step.id === 1 ? (
														<UmkmForm
															onSubmit={handleUmkmSubmit}
															onCancel={() => setActiveStep('')}
															defaultValues={umkmData || undefined}
														/>
													) : step.id === 2 ? (
														<PaymentForm
															onSubmit={handlePaymentSubmit}
															onCancel={() => setActiveStep('')}
															defaultValues={paymentData || undefined}
														/>
													) : (
														<ProductForm
															onSubmit={handleProductSubmit}
															onCancel={() => setActiveStep('')}
															defaultValues={productData || undefined}
														/>
													)}
												</CardContent>
											</Card>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
