export function storeNameToSlug(storeName: string): string {
	return storeName
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '');
}
export function getStoreId(storeName: string): string {
	const storeIdMap: Record<string, string> = {
		'Kampung Kuliner': '1',
		'Ratu Kue': '2',
		'Pempek Palembang Laksanati': '3',
		'Anjas Jus': '4',
	};

	return storeIdMap[storeName] || storeNameToSlug(storeName);
}
