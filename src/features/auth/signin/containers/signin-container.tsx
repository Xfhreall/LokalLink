import { Image } from '@unpic/react';
import { SigninForm } from '../components/signin-form';

export const SigninContainer = () => {
	return (
		<div className="flex h-screen w-full">
			<div className="w-3/5 hidden lg:block">
				<Image
					src="/assets/ads/auth.png"
					layout="fullWidth"
					className="w-full h-full object-fill"
				/>
			</div>
			<div className="w-full lg:w-2/5 bg-white">
				<SigninForm />
			</div>
		</div>
	);
};
