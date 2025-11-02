export function generateWhatsAppLink(
	phoneNumber: string,
	message: string,
): string {
	const encodedMessage = encodeURIComponent(message);
	return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function generateOrderMessage(
	storeName: string,
	productName: string,
	quantity: number,
): string {
	return `Halo ${storeName}, saya ingin memesan ${productName} sebanyak ${quantity}.`;
}
