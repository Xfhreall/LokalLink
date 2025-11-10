/** biome-ignore-all lint/complexity/noUselessFragments: <explanation> */
import { Image } from '@unpic/react';
import { Edit2, MoreVertical, Star, Store, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/shared/components/ui/shadcn/button';
import { Card, CardContent } from '@/shared/components/ui/shadcn/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/shared/components/ui/shadcn/dropdown-menu';
import type { Product } from '@/shared/data/dtos/product.dto';
import { products, reviews } from '@/shared/data/products';

type FilterType = 'unrated' | 'rated';

export const UlasanTab = () => {
	const [filter, setFilter] = useState<FilterType>('rated');

	// User's reviewed products
	const userReviews = reviews.slice(0, 3);
	const reviewedProductIds = new Set(userReviews.map((r) => r.productId));

	// Products purchased but not yet reviewed (simulate with first 4 products that aren't reviewed)
	const unratedProducts: Product[] = products
		.filter((p) => !reviewedProductIds.has(p.id))
		.slice(0, 4);

	const getProductInfo = (productId: string) => {
		return products.find((p) => p.id === productId);
	};

	return (
		<div className="space-y-4 pt-6">
			<div className="flex gap-3 mb-6 items-center">
				<span className="text-sm font-medium mr-8">Filter</span>
				<Button
					variant={filter === 'unrated' ? 'default' : 'outline'}
					size="sm"
					onClick={() => setFilter('unrated')}
					className="rounded-full"
				>
					Belum dinilai
				</Button>
				<Button
					variant={filter === 'rated' ? 'default' : 'outline'}
					size="sm"
					onClick={() => setFilter('rated')}
					className="rounded-full"
				>
					Sudah dinilai
				</Button>
			</div>

			<div className="space-y-12 mt-8">
				{/* Unrated Products List */}
				{filter === 'unrated' && (
					<>
						{unratedProducts.length === 0 ? (
							<div className="flex flex-col items-center justify-center py-16 text-center">
								<div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-12 h-12 text-gray-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<title>Icon Produk</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
										/>
									</svg>
								</div>
								<h3 className="text-lg font-semibold mb-2">
									Tidak Ada Produk Belum Dinilai
								</h3>
								<p className="text-sm text-muted-foreground max-w-md">
									Semua produk yang Anda beli sudah dinilai.
								</p>
							</div>
						) : (
							unratedProducts.map((product) => (
								<Card key={product.id} className="border-0 p-0 shadow-none">
									<CardContent>
										<div className="flex gap-4">
											<div className="size-32 aspect-square h-auto shrink-0 rounded-lg overflow-hidden bg-gray-100">
												<Image
													layout="fullWidth"
													src={product.image}
													alt={product.name}
													className="w-full h-full"
												/>
											</div>

											<div className="flex-1 min-w-0">
												<div className="flex items-start justify-between mb-2">
													<div className="flex-1">
														<h3 className="font-semibold text-base mb-1">
															{product.name}
														</h3>
														<div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
															<Store className="w-4 h-4" />
															<span>{product.seller}</span>
														</div>
													</div>
													{/* Dropdown actions */}
													<DropdownMenu>
														<DropdownMenuTrigger asChild>
															<Button
																variant="ghost"
																size="icon"
																className="h-8 w-8 -mt-1"
															>
																<MoreVertical className="w-4 h-4" />
															</Button>
														</DropdownMenuTrigger>
														<DropdownMenuContent align="end" className="w-40">
															<DropdownMenuItem className="cursor-pointer">
																<Edit2 className="w-4 h-4 mr-2" />
																Beri Nilai
															</DropdownMenuItem>
															<DropdownMenuItem
																variant="destructive"
																className="cursor-pointer text-red-600"
															>
																<Trash2 className="w-4 h-4 mr-2" />
																Hapus
															</DropdownMenuItem>
														</DropdownMenuContent>
													</DropdownMenu>
												</div>

												<div className="flex items-center gap-1 mb-3">
													{[1, 2, 3, 4, 5].map((star) => (
														<Star
															key={star}
															className="w-5 h-5 text-gray-300 fill-gray-300"
														/>
													))}
													<p className="text-sm ml-1 text-muted-foreground">
														Nilai Produk ini sekarang
													</p>
												</div>

												<Button
													size={'lg'}
													className="w-full max-w-2xs rounded-full"
												>
													Nilai Sekarang
												</Button>
											</div>
										</div>
									</CardContent>
								</Card>
							))
						)}
					</>
				)}

				{/* Rated Reviews List */}
				{filter === 'rated' && (
					<>
						{userReviews.length === 0 ? (
							<div className="flex flex-col items-center justify-center py-16 text-center">
								<div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-12 h-12 text-gray-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<title>Icon Ulasan</title>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
										/>
									</svg>
								</div>
								<h3 className="text-lg font-semibold mb-2">Belum Ada Ulasan</h3>
								<p className="text-sm text-muted-foreground max-w-md">
									Ulasan produk yang Anda berikan akan muncul di sini.
								</p>
							</div>
						) : (
							userReviews.map((review) => {
								const product = getProductInfo(review.productId);
								return (
									<Card key={review.id} className="border-0 p-0 shadow-none">
										<CardContent>
											<div className="flex gap-4">
												<div className="size-32 shrink-0 rounded-lg overflow-hidden bg-gray-100">
													{product?.image && (
														<Image
															layout="fullWidth"
															src={product.image}
															alt={product.name}
															className="w-full h-full object-cover"
														/>
													)}
												</div>

												<div className="flex-1 min-w-0">
													<div className="flex items-start justify-between mb-2">
														<div className="flex-1">
															<h3 className="font-semibold text-base mb-1">
																{product?.name || 'Produk'}
															</h3>
															<div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
																<Store className="w-4 h-4" />
																<span>{product?.seller || 'Toko'}</span>
															</div>
														</div>
														{/* action button */}
														<DropdownMenu>
															<DropdownMenuTrigger asChild>
																<Button
																	variant="ghost"
																	size="icon"
																	className="h-8 w-8 -mt-1"
																>
																	<MoreVertical className="w-4 h-4" />
																</Button>
															</DropdownMenuTrigger>
															<DropdownMenuContent align="end" className="w-40">
																<DropdownMenuItem className="cursor-pointer">
																	<Edit2 className="w-4 h-4 mr-2" />
																	Edit
																</DropdownMenuItem>
																<DropdownMenuItem
																	variant="destructive"
																	className="cursor-pointer text-red-600"
																>
																	<Trash2 className="w-4 h-4 mr-2" />
																	Hapus
																</DropdownMenuItem>
															</DropdownMenuContent>
														</DropdownMenu>
													</div>

													<div className="flex items-center gap-1 mb-2">
														{[1, 2, 3, 4, 5].map((star) => (
															<Star
																key={star}
																className={`w-4 h-4 ${
																	star <= review.rating
																		? 'fill-yellow-400 text-yellow-400'
																		: 'text-gray-300'
																}`}
															/>
														))}
														<span className="text-xs text-muted-foreground ml-1">
															{review.timeAgo}
														</span>
													</div>

													<p className="text-xs text-muted-foreground mb-2">
														{review.variant}
													</p>
													<p className="text-sm text-gray-700 leading-relaxed">
														{review.comment}
													</p>

													{review.images && review.images.length > 0 && (
														<div className="flex gap-2 mt-3">
															{review.images.map((image, index) => (
																<div
																	key={index.toString()}
																	className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100"
																>
																	<Image
																		layout="fullWidth"
																		src={image}
																		alt={`Review ${index + 1}`}
																		className="w-full h-full object-cover"
																	/>
																</div>
															))}
														</div>
													)}
												</div>
											</div>
										</CardContent>
									</Card>
								);
							})
						)}
					</>
				)}
			</div>
		</div>
	);
};
