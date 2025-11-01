import ProductGrid from '@/shared/components/ui/custom/product-card';

interface PopularProductProps {
	isFilterVisible: boolean;
}

const PopularProduct = ({ isFilterVisible }: PopularProductProps) => {
	return (
		<div>
			<ProductGrid isFilterVisible={isFilterVisible} />
		</div>
	);
};

export default PopularProduct;
