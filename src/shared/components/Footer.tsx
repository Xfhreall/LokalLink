import { Link } from '@tanstack/react-router';
import { Facebook, Instagram, MessageCircle, Youtube } from 'lucide-react';
import { useState } from 'react';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from './ui/shadcn/input-group';

const Footer = () => {
	const [email, setEmail] = useState('');

	const handleSubmit = () => {
		console.log('Email submitted:', email);
		setEmail('');
	};

	return (
		<footer className="w-full p-12">
			<div className="mx-auto">
				{/* Newsletter Section */}
				<div className="bg-primary-600 rounded-3xl p-8 md:p-12 mb-12">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div className=" space-y-6">
							<h2 className="text-white text-2xl md:text-3xl font-bold max-w-xs">
								Ready to get our new product?
							</h2>
							<InputGroup className="border-0 bg-white rounded-full max-w-md py-6 px-2">
								<InputGroupInput
									type="email"
									placeholder="Your Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<InputGroupAddon align={'inline-end'}>
									<InputGroupButton
										onClick={handleSubmit}
										className=" rounded-full px-8 py-4"
										variant={'default'}
									>
										Send
									</InputGroupButton>
								</InputGroupAddon>
							</InputGroup>
						</div>

						<div className="text-white space-y-2 leading-relaxed">
							<p className=" font-bold">
								Melalui LokalLink, kita hadir untuk mendukung yang ingin
							</p>
							<p>
								membantu masyarakat menemukan, mengenal, dan menyukai UMKM di
								sekitar mereka. Dengan fitur pencarian, review, dan kontak
								langsung, LokalLink bisa menjadi nyata cinta pada sesama, dan
								kita, untuk kita.
							</p>
						</div>
					</div>
				</div>

				{/* Footer Links */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 px-8">
					<div>
						<h3 className="font-semibold text-gray-900 mb-4">About us</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="."
									className="text-gray-600 hover:text-primary transition-colors"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									to="."
									className="text-gray-600 hover:text-primary transition-colors"
								>
									Meet the Team
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-semibold text-gray-900 mb-4">Support</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="."
									className="text-gray-600 hover:text-primary transition-colors"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									to="."
									className="text-gray-600 hover:text-primary transition-colors"
								>
									Shopping
								</Link>
							</li>
						</ul>
					</div>

					<div className="col-span-2 md:col-span-2 flex justify-end">
						<div className="flex gap-3">
							<Link
								to="."
								className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
								aria-label="Facebook"
							>
								<Facebook className="w-5 h-5" />
							</Link>
							<Link
								to="."
								className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
								aria-label="Instagram"
							>
								<Instagram className="w-5 h-5" />
							</Link>
							<Link
								to="."
								className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
								aria-label="YouTube"
							>
								<Youtube className="w-5 h-5" />
							</Link>
							<Link
								to="."
								className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors"
								aria-label="WhatsApp"
							>
								<MessageCircle className="w-5 h-5" />
							</Link>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-gray-200 pt-6 text-center">
					<p className="text-sm font-medium">
						Copyright 2025 LokalLink All Right Reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
