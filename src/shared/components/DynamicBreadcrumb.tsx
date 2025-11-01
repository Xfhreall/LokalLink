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
};

// Function to generate label from segment
function getSegmentLabel(segment: string, fullPath: string): string {
	if (pathNames[fullPath]) {
		return pathNames[fullPath];
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
	for (const segment of pathSegments) {
		currentPath += `/${segment}`;
		const label = getSegmentLabel(segment, currentPath);
		breadcrumbItems.push({ path: currentPath, label });
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
