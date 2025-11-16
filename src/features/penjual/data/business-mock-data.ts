import type { BusinessProfile, StoreAddress } from '../types/business';

export const mockBusinessProfile: BusinessProfile = {
	storeName: 'Kampung Kuliner',
	phone: '082245534806',
	ownerName: 'Salsabillah Rahmadani P',
	idNumber: '35071234567890',
};

export const mockStoreAddress: StoreAddress = {
	warehouseName: 'JL. Pattimura No 12 Jakarta Timur',
	phoneNumber: '82123456789',
	contactPerson: 'Rahmadani',
	country: 'Indonesia',
	address: 'JL. Pattimura No 12 Jakarta Timur',
	region: 'Malang, Jawa Timur',
	pinpoint: {
		lat: -7.9666,
		lng: 112.6326,
	},
	isMainAddress: true,
};
