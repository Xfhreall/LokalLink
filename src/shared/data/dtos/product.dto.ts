export type Product = {
	id: string;
	name: string;
	category: string;
	seller: string;
	rating: number;
	totalReviews: number;
	price: string;
	image: string;
	location: string;
	phone?: string;
};

export type ProductInfo = {
	productId: string;
	title: string;
	description: string;
	features: ProductFeature[];
};

export type ProductFeature = {
	title: string;
	description: string;
};

export type Store = {
	id: string;
	name: string;
	description: string;
	address: string;
	phone: string;
	image: string;
	rating: number;
	totalReviews: number;
	openingHours: string;
	categories: string[];
	info: StoreInfo;
};

export type StoreInfo = {
	fullDescription: string;
	openedSince: string;
	additionalInfo: StoreAdditionalInfo;
};

export type StoreAdditionalInfo = {
	title: string;
	content: string;
};

export type Review = {
	id: string;
	productId: string;
	userName: string;
	userAvatar?: string;
	rating: number;
	timeAgo: string;
	variant: string;
	comment: string;
	images?: string[];
};

export type RatingDistribution = {
	productId: string;
	averageRating: number;
	totalReviews: number;
	buyerSatisfaction: number;
	distribution: RatingDistributionBreakdown;
};

export type RatingDistributionBreakdown = {
	5: number;
	4: number;
	3: number;
	2: number;
	1: number;
};

export type CreateProduct = Omit<Product, 'id' | 'rating' | 'totalReviews'>;

export type UpdateProduct = Partial<Omit<Product, 'id'>>;

export type CreateReview = Omit<Review, 'id' | 'timeAgo'> & {
	images?: File[];
};

export type UpdateReview = Partial<
	Omit<Review, 'id' | 'productId' | 'userName'>
>;

export type CreateStore = Omit<Store, 'id' | 'rating' | 'totalReviews'>;

export type UpdateStore = Partial<Omit<Store, 'id'>>;

export type ProductDetailResponse = {
	product: Product;
	info?: ProductInfo;
	ratings?: RatingDistribution;
	reviews: Review[];
};

export type StoreDetailResponse = {
	store: Store;
	products: Product[];
	totalProducts: number;
};

export type ReviewListResponse = {
	reviews: Review[];
	totalReviews: number;
	hasMore: boolean;
};

export type ProductListResponse = {
	products: Product[];
	totalProducts: number;
	hasMore: boolean;
};

export type ProductFilter = {
	category?: string;
	seller?: string;
	minPrice?: number;
	maxPrice?: number;
	minRating?: number;
	search?: string;
};

export type ReviewFilter = {
	productId?: string;
	rating?: number;
	hasImages?: boolean;
};

export type Pagination = {
	page: number;
	limit: number;
	sortBy?: string;
	sortOrder?: 'asc' | 'desc';
};
