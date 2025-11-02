import { Image } from '@unpic/react';

interface ProductImageProps {
	src: string;
	alt: string;
}

export function ProductImage({ src, alt }: ProductImageProps) {
	return (
		<div className="relative rounded-lg overflow-hidden">
			<Image
				layout="constrained"
				width={500}
				height={500}
				src={src}
				alt={alt}
				className="w-full h-auto object-cover"
			/>
		</div>
	);
}
