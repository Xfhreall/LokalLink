import { useState } from 'react';

export function useProductQuantity(initialQuantity = 1) {
	const [quantity, setQuantity] = useState(initialQuantity);

	const increment = () => {
		setQuantity((prev) => prev + 1);
	};

	const decrement = () => {
		setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
	};

	const setQuantityValue = (value: number) => {
		if (value >= 1) {
			setQuantity(value);
		}
	};

	return {
		quantity,
		increment,
		decrement,
		setQuantity: setQuantityValue,
	};
}
