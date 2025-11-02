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
	features: Array<{
		title: string;
		description: string;
	}>;
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
	info: {
		fullDescription: string;
		openedSince: string;
		additionalInfo: {
			title: string;
			content: string;
		};
	};
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
	distribution: {
		5: number;
		4: number;
		3: number;
		2: number;
		1: number;
	};
};

export const products: Product[] = [
	{
		id: '1',
		name: 'Ricebowl Iga Sambal Lombok Ijo',
		category: 'Tersedia',
		seller: 'Kampung Kuliner',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 35.000',
		image:
			'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
		location:
			'Jl. Gajayana No.538, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144',
		phone: '6281234567890',
	},
	{
		id: '2',
		name: 'Kue Putu dan Klepon',
		category: 'Tersedia',
		seller: 'Ratu Kue',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 5.000',
		image:
			'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
		phone: '6281234567891',
	},
	{
		id: '3',
		name: 'Pempek Palembang',
		category: 'Tersedia',
		seller: 'Pempek Palembang Laksanati',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 15.000',
		image:
			'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
		location: 'Pempek Palembang Laksanati',
		phone: '6281234567892',
	},
	{
		id: '4',
		name: 'Jus Buah Naga',
		category: 'Tersedia',
		seller: 'Anjas Jus',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 35.000',
		image:
			'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop',
		location: 'Anjas Jus',
		phone: '6281234567893',
	},
	{
		id: '5',
		name: 'Sambal Cumi',
		category: 'Tersedia',
		seller: 'Sambal Gami Gajuyana',
		rating: 4.0,
		totalReviews: 5,
		price: 'Rp 5.000',
		image:
			'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
		phone: '6281234567894',
	},
	{
		id: '6',
		name: 'Tepung Segitiga Biru',
		category: 'Tersedia',
		seller: 'Medinah Tempo',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 35.000',
		image:
			'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
		phone: '6281234567895',
	},
	{
		id: '7',
		name: 'Sate Ayam',
		category: 'Tersedia',
		seller: 'Warung Lumayan 69',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 15.000',
		image:
			'https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
		phone: '6281234567896',
	},
	{
		id: '8',
		name: 'Tombakar Original',
		category: 'Tersedia',
		seller: 'Toko Tombakar Bangio',
		rating: 4.8,
		totalReviews: 5,
		price: 'Rp 35.000',
		image:
			'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
		phone: '6281234567897',
	},
	{
		id: '9',
		name: 'Nasi Kuning Spesial',
		category: 'Belum Tersedia',
		seller: 'Warung Sedap',
		rating: 4.7,
		totalReviews: 12,
		price: 'Rp 20.000',
		image:
			'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
		phone: '6281234567898',
	},
	{
		id: '10',
		name: 'Es Teh Manis',
		category: 'Belum Tersedia',
		seller: 'Kedai Minuman',
		rating: 4.5,
		totalReviews: 8,
		price: 'Rp 5.000',
		image:
			'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
		phone: '6281234567899',
	},
	{
		id: '11',
		name: 'Ayam Bakar Kampung',
		category: 'Tersedia',
		seller: 'Kampung Kuliner',
		rating: 4.7,
		totalReviews: 15,
		price: 'Rp 28.000',
		image:
			'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
		phone: '6281234567890',
	},
	{
		id: '12',
		name: 'Ayam Crispy Geprek',
		category: 'Tersedia',
		seller: 'Kampung Kuliner',
		rating: 4.9,
		totalReviews: 22,
		price: 'Rp 25.000',
		image:
			'https://images.unsplash.com/photo-1633237308525-cd587cf71926?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
		phone: '6281234567890',
	},
	{
		id: '13',
		name: 'Ayam Goreng Rempah',
		category: 'Tersedia',
		seller: 'Kampung Kuliner',
		rating: 4.8,
		totalReviews: 18,
		price: 'Rp 25.000',
		image:
			'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
		phone: '6281234567890',
	},
	{
		id: '14',
		name: 'Iga Madu Oseng',
		category: 'Tersedia',
		seller: 'Kampung Kuliner',
		rating: 4.6,
		totalReviews: 12,
		price: 'Rp 42.000',
		image:
			'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
		phone: '6281234567890',
	},
	{
		id: '15',
		name: 'Nasi Goreng',
		category: 'Tersedia',
		seller: 'Kampung Kuliner',
		rating: 4.7,
		totalReviews: 25,
		price: 'Rp 20.000',
		image:
			'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
		phone: '6281234567890',
	},
	{
		id: '16',
		name: 'Burger Mini',
		category: 'Tersedia',
		seller: 'Kampung Kuliner',
		rating: 4.5,
		totalReviews: 10,
		price: 'Rp 18.000',
		image:
			'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
		phone: '6281234567890',
	},
	{
		id: '17',
		name: 'Kentang Goreng',
		category: 'Tersedia',
		seller: 'Kampung Kuliner',
		rating: 4.4,
		totalReviews: 8,
		price: 'Rp 15.000',
		image:
			'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop',
		location: 'Kampung Kuliner',
		phone: '6281234567890',
	},
];

export const ratingDistributions: RatingDistribution[] = [
	{
		productId: '1',
		averageRating: 4.9,
		totalReviews: 26,
		buyerSatisfaction: 98,
		distribution: {
			5: 25,
			4: 12,
			3: 0,
			2: 0,
			1: 0,
		},
	},
	{
		productId: '2',
		averageRating: 4.7,
		totalReviews: 18,
		buyerSatisfaction: 95,
		distribution: {
			5: 15,
			4: 10,
			3: 3,
			2: 0,
			1: 0,
		},
	},
	{
		productId: '3',
		averageRating: 4.6,
		totalReviews: 15,
		buyerSatisfaction: 92,
		distribution: {
			5: 10,
			4: 8,
			3: 2,
			2: 0,
			1: 0,
		},
	},
];

export const reviews: Review[] = [
	{
		id: '1',
		productId: '1',
		userName: 'Quintania',
		rating: 4,
		timeAgo: '4 bulan lalu',
		variant: 'Varian : Ricebowl Iga Sambal Lombok',
		comment: 'Makanannya enak , tempatnya bersih juga',
		images: [
			'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop',
			'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop',
			'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop',
		],
	},
	{
		id: '2',
		productId: '1',
		userName: 'Melanie K',
		rating: 5,
		timeAgo: '6 bulan lalu',
		variant: 'Varian : Iga41',
		comment: 'Produk sesuai pesanan, pengiriman cepat sekali.',
	},
	{
		id: '3',
		productId: '1',
		userName: 'Kermie M',
		rating: 5,
		timeAgo: '6 bulan lalu',
		variant: 'Varian : Iga41',
		comment:
			'Tempat yang asik untuk nongkrong. Pilihan menu makanan dan minuman banyak. Jika yang suka bola ada pertandingan live nya. Dan yang paling penting ada toilet umumnya.',
		images: [
			'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop',
			'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&h=200&fit=crop',
			'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop',
		],
	},
	{
		id: '4',
		productId: '2',
		userName: 'Budi Santoso',
		rating: 5,
		timeAgo: '2 minggu lalu',
		variant: 'Varian : Kue Putu',
		comment: 'Kue putu nya enak banget, manis pas dan lembut!',
	},
	{
		id: '5',
		productId: '2',
		userName: 'Siti Rahmawati',
		rating: 4,
		timeAgo: '1 bulan lalu',
		variant: 'Varian : Klepon',
		comment: 'Klepon nya legit, gula merahnya melimpah. Recommended!',
		images: [
			'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop',
		],
	},
	{
		id: '6',
		productId: '3',
		userName: 'Andi Pratama',
		rating: 5,
		timeAgo: '3 minggu lalu',
		variant: 'Varian : Pempek Kapal Selam',
		comment:
			'Pempek nya enak banget! Ikannya terasa banget dan cuko nya pedas manis pas. Mantap!',
		images: [
			'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop',
		],
	},
	{
		id: '7',
		productId: '3',
		userName: 'Dewi Lestari',
		rating: 4,
		timeAgo: '1 bulan lalu',
		variant: 'Varian : Pempek Lenjer',
		comment:
			'Rasanya authentic, mirip pempek asli Palembang. Harga terjangkau.',
	},
];

export const productInfos: ProductInfo[] = [
	{
		productId: '1',
		title: 'Nikmati Kelezatan dalam Setiap Suapan dengan Rice Bowl Kami!',
		description:
			'Apakah kamu mencari hidangan praktis, lezat, dan mengenyangkan? Rice Bowl kami adalah jawabannya! Diracik dengan bahan-bahan pilihan dan bumbu rahasia, setiap suapan akan memanjakan lidahmu.',
		features: [
			{
				title: 'Rice Bowl Chicken Teriyaki',
				description:
					'Potongan ayam juicy dengan saus teriyaki manis gurih, disajikan di atas nasi hangat.',
			},
			{
				title: 'Rice Bowl Salted Egg',
				description:
					'Ayam krispi berlulut saus telur asin creamy yang kaya rasa, favorit banyak orang!',
			},
		],
	},
	{
		productId: '2',
		title: 'Kue Tradisional dengan Cita Rasa Autentik!',
		description:
			'Kue Putu dan Klepon kami dibuat dengan resep tradisional yang diwariskan turun-temurun. Menggunakan bahan-bahan berkualitas.',
		features: [
			{
				title: 'Kue Putu',
				description:
					'Kue tradisional berbahan dasar tepung beras dengan isian gula merah.',
			},
			{
				title: 'Klepon',
				description:
					'Kue klepon dengan isian gula merah cair yang manis, dibalut kelapa parut.',
			},
		],
	},
	{
		productId: '3',
		title: 'Pempek Palembang Original dengan Cuko Khas!',
		description:
			'Rasakan kelezatan Pempek Palembang asli dengan cita rasa yang autentik. Dibuat dari ikan tenggiri pilihan dan tepung sagu berkualitas tinggi.',
		features: [
			{
				title: 'Pempek Kapal Selam',
				description:
					'Pempek dengan telur di dalamnya, gurih dan mengenyangkan.',
			},
			{
				title: 'Pempek Lenjer',
				description:
					'Pempek bentuk panjang dengan tekstur kenyal dan rasa ikan yang kuat.',
			},
			{
				title: 'Pempek Adaan',
				description:
					'Pempek bulat kecil yang cocok untuk camilan atau pelengkap.',
			},
		],
	},
];

export const stores: Store[] = [
	{
		id: '1',
		name: 'Kampung Kuliner',
		description:
			'Kampung Kuliner adalah destinasi kuliner terbaik di Malang yang menawarkan berbagai macam hidangan tradisional dan modern.',
		address:
			'Jl. Gajayana No.538, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144',
		phone: '6281234567890',
		image:
			'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=400&fit=crop',
		rating: 4.8,
		totalReviews: 32,
		openingHours: '11.00 - 22.00',
		categories: ['Makanan', 'Minuman', 'Oleh-oleh'],
		info: {
			fullDescription:
				'Kampung Kuliner merupakan salah satu tempat kuliner yang berada di kawasan Dinoyo, Kec. Lowokwaru, Kota Malang. Kami menyediakan berbagai jenis makanan dan minuman yang beraneka ragam dari makanan tradisional hingga modern. Dengan konsep tempat yang nyaman dan menu yang bervariasi, Kampung Kuliner menjadi pilihan tepat untuk nongkrong bersama keluarga, teman, atau rekan bisnis.',
			openedSince: 'May 2018',
			additionalInfo: {
				title:
					'Beli Aneka Produk Kuliner Online dari Kampung Kuliner di LokalLink',
				content:
					'Nikmati pengalaman berbelanja produk kuliner yang lezat dan berkualitas tanpa perlu repot keluar rumah. Semua produk di Kampung Kuliner telah melalui proses penyimpanan dan pengiriman yang tepat untuk menjamin kesegaran produk. Tanpa perlu repat ke tempat, klik, beli, selesai! Rasakan kepuasan kuliner Malang di meja makan dengan produk pilihan dari Kampung Kuliner. Dari rice bowl, ayam bakar, hingga minuman segar, semuanya tersedia di sini.',
			},
		},
	},
	{
		id: '2',
		name: 'Ratu Kue',
		description:
			'Toko kue tradisional yang menyajikan berbagai jenis kue basah dan kering dengan resep turun-temurun.',
		address: 'Jl. Soekarno Hatta No.123, Malang, Jawa Timur',
		phone: '6281234567891',
		image:
			'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=800&h=400&fit=crop',
		rating: 4.7,
		totalReviews: 28,
		openingHours: '08.00 - 20.00',
		categories: ['Kue', 'Oleh-oleh'],
		info: {
			fullDescription:
				'Ratu Kue adalah toko kue tradisional yang telah berdiri sejak lama dan terkenal dengan kue-kue basah dan kering yang lezat. Dengan resep turun-temurun yang diwariskan, setiap kue dibuat dengan penuh cinta dan kehati-hatian untuk menjaga kualitas dan cita rasa autentik. Kami menggunakan bahan-bahan pilihan dan dibuat fresh setiap hari.',
			openedSince: 'January 2015',
			additionalInfo: {
				title: 'Beli Aneka Kue Tradisional Online dari Ratu Kue di LokalLink',
				content:
					'Nikmati pengalaman berbelanja kue tradisional yang lezat dan autentik tanpa perlu repot keluar rumah. Semua produk di Ratu Kue dibuat fresh setiap hari dengan bahan-bahan berkualitas untuk menjamin kelezatan dan kesegaran. Tanpa perlu repot ke toko, klik, beli, selesai! Rasakan kelezatan kue tradisional Indonesia di rumah Anda dengan produk pilihan dari Ratu Kue. Dari kue putu, klepon, hingga berbagai kue basah lainnya.',
			},
		},
	},
	{
		id: '3',
		name: 'Pempek Palembang Laksanati',
		description:
			'Restoran pempek dengan cita rasa asli Palembang. Menggunakan ikan tenggiri pilihan dan resep rahasia keluarga.',
		address: 'Jl. Veteran No.45, Malang, Jawa Timur',
		phone: '6281234567892',
		image:
			'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=400&fit=crop',
		rating: 4.6,
		totalReviews: 45,
		openingHours: '10.00 - 21.00',
		categories: ['Makanan', 'Pempek'],
		info: {
			fullDescription:
				'Pempek Palembang Laksanati adalah restoran pempek asli Palembang yang telah berdiri sejak tahun 1980. Dengan resep rahasia keluarga yang diwariskan turun-temurun, kami menggunakan ikan tenggiri pilihan dan tepung sagu berkualitas tinggi untuk menghasilkan pempek dengan cita rasa yang autentik. Setiap pempek dibuat fresh setiap hari dan disajikan dengan cuko (kuah) khas Palembang yang pedas manis.',
			openedSince: 'March 1980',
			additionalInfo: {
				title: 'Beli Pempek Palembang Asli Online dari Laksanati di LokalLink',
				content:
					'Nikmati pengalaman berbelanja pempek Palembang asli yang segar dan berkualitas tanpa perlu repot keluar rumah. Semua produk di Pempek Palembang Laksanati dibuat fresh setiap hari dengan ikan tenggiri pilihan untuk menjamin kelezatan dan kesegaran. Tanpa perlu repot ke restoran, klik, beli, selesai! Rasakan kelezatan pempek asli Palembang di rumah Anda dengan produk pilihan dari Laksanati. Dari pempek kapal selam, lenjer, hingga adaan, semuanya tersedia dengan cuko khas Palembang.',
			},
		},
	},
];
