import { Link, useLocation } from '@tanstack/react-router';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from './ui/shadcn/breadcrumb';

const pathNames: Record<string, string> = {
	'/': 'Home',
	'/tour-umkm': 'Tour UMKM',
	'/upselling-umkm': 'Upselling UMKM',
	'/product': 'Produk',
	'/product/review': 'Review Produk',
	'/product/info': 'Info Produk',
	'/product/cart': 'Keranjang',
	'/toko': 'Toko',
};

const staticRouteSegments = new Set([
	'tour-umkm',
	'upselling-umkm',
	'product',
	'review',
	'info',
	'cart',
	'toko',
]);

function isDynamicParam(segment: string): boolean {
	return !staticRouteSegments.has(segment);
}

function getSegmentLabel(
	segment: string,
	fullPath: string,
	previousPath: string,
	pathSegments: string[],
	currentIndex: number,
): string {
	if (pathNames[fullPath]) {
		return pathNames[fullPath];
	}
	if (previousPath === '/product' && isDynamicParam(segment)) {
		return 'Detail Produk';
	}

	if (previousPath === '/toko' && isDynamicParam(segment)) {
		return 'Detail Toko';
	}
	if (currentIndex > 0) {
		const prevSegment = pathSegments[currentIndex - 1];
		const prevPrevPath = pathSegments.slice(0, currentIndex - 1).join('/');

		if (prevPrevPath === 'product' && isDynamicParam(prevSegment)) {
			if (staticRouteSegments.has(segment)) {
				const mappedPath = `/product/${segment}`;
				return (
					pathNames[mappedPath] ||
					segment.charAt(0).toUpperCase() + segment.slice(1)
				);
			}
		}
	}

	return segment.charAt(0).toUpperCase() + segment.slice(1);
}

export default function DynamicBreadcrumb() {
	const location = useLocation();
	const pathSegments = location.pathname.split('/').filter(Boolean);

	if (location.pathname === '/') {
		return null;
	}

	const breadcrumbItems: { path: string; label: string }[] = [
		{ path: '/', label: 'Home' },
	];

	let currentPath = '';
	let previousPath = '';

	for (let i = 0; i < pathSegments.length; i++) {
		const segment = pathSegments[i];
		currentPath += `/${segment}`;
		const label = getSegmentLabel(
			segment,
			currentPath,
			previousPath,
			pathSegments,
			i,
		);
		breadcrumbItems.push({ path: currentPath, label });
		previousPath = currentPath;
	}

	return (
		<Breadcrumb className="min-w-xs">
			<BreadcrumbList>
				{breadcrumbItems.map((item, index) => {
					const isLast = index === breadcrumbItems.length - 1;
					return (
						<div key={item.path} className="flex items-center">
							{index > 0 && <BreadcrumbSeparator />}
							<BreadcrumbItem>
								{isLast ? (
									<BreadcrumbPage>{item.label}</BreadcrumbPage>
								) : (
									<BreadcrumbLink asChild>
										<Link to={item.path}>{item.label}</Link>
									</BreadcrumbLink>
								)}
							</BreadcrumbItem>
						</div>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
