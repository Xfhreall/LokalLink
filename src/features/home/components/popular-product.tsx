import ProductGrid from '@/shared/components/ui/custom/product-card';

interface PopularProductProps {
	isFilterVisible: boolean;
}

const PopularProduct = ({ isFilterVisible }: PopularProductProps) => {
	return <ProductGrid isFilterVisible={isFilterVisible} />;
};

export default PopularProduct;
