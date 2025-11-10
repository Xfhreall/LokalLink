import { Image } from '@unpic/react';
import { SignupForm } from '../components/signup-form';

export const SignupContainer = () => {
	return (
		<div className="flex h-screen w-full">
			<div className="w-full lg:w-2/5 bg-white relative">
				<SignupForm />
				{/* <img
        alt='fg'
					src="/assets/fragments/green-circle.svg"
					className="absolute bottom-0 left-0 size-48 z-0"
				/> */}
			</div>
			<div className="w-3/5 hidden lg:block">
				<Image
					src="/assets/ads/auth.png"
					layout="fullWidth"
					className="w-full h-full object-fill"
				/>
			</div>
		</div>
	);
};
