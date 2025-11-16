export interface BusinessProfile {
	storeName: string;
	phone: string;
	ownerName: string;
	idNumber: string;
}

export interface StoreAddress {
	warehouseName: string;
	phoneNumber: string;
	contactPerson: string;
	country: string;
	address: string;
	region: string;
	pinpoint?: {
		lat: number;
		lng: number;
	};
	isMainAddress: boolean;
}
