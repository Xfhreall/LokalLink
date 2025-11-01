import { Link, useLocation } from '@tanstack/react-router';
import { AnimatePresence, motion } from 'framer-motion';
import {
	Bell,
	ChevronDown,
	Heart,
	MapPin,
	Search,
	SlidersHorizontal,
} from 'lucide-react';
import { useFilter } from '../context/filter-context';
import DynamicBreadcrumb from './DynamicBreadcrumb';
import { Button } from './ui/shadcn/button';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from './ui/shadcn/input-group';

const Header = () => {
	const location = useLocation();
	const { isFilterVisible, toggleFilter } = useFilter();
	const isHomePage = location.pathname === '/';

	return (
		<motion.header className="w-full px-12 p-4 grid sticky top-0 bg-white shadow-xs z-50 pt-10 transition-all duration-300">
			<nav className="flex items-center justify-between">
				<Link to="/" className="text-lg font-bold">
					LokalLink
				</Link>
				<ul className="flex space-x-14">
					<li>
						<Link
							to="/tour-umkm"
							activeProps={{ className: 'text-primary' }}
							inactiveProps={{ className: 'text-gray-400' }}
							className="font-semibold"
						>
							Tour UMKM
						</Link>
					</li>
					<li>
						<Link
							to="/"
							activeProps={{ className: 'text-primary' }}
							inactiveProps={{ className: 'text-gray-400' }}
							className="font-semibold"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/upselling-umkm"
							activeProps={{ className: 'text-primary' }}
							inactiveProps={{ className: 'text-gray-400' }}
							className="font-semibold"
						>
							Upselling UMKM
						</Link>
					</li>
				</ul>
				<div className="flex items-center gap-2">
					<Link to="/">
						<Button variant={'ghost'}>Daftar</Button>
					</Link>

					<Link to="/">
						<Button className="rounded-3xl px-10">Masuk</Button>
					</Link>
				</div>
			</nav>
			<div className="flex items-center justify-between mt-4 gap-4">
				{/* Breadcrumb or Filter Toggle */}
				<AnimatePresence mode="wait">
					{isHomePage ? (
						<motion.div
							key="filter-toggle"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.2 }}
							className="flex-1 max-w-3xs"
						>
							<Button
								onClick={toggleFilter}
								className="flex items-center px-8 gap-2 rounded-full w-full justify-between"
							>
								Cari semua kategori
								<ChevronDown
									className={`${!isFilterVisible ? 'rotate-180' : ''} transition-transform duration-300`}
								/>
							</Button>
						</motion.div>
					) : (
						<motion.div
							key="breadcrumb"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.2 }}
						>
							<DynamicBreadcrumb />
						</motion.div>
					)}
				</AnimatePresence>

				{/* Search and Location Inputs */}
				<div className="flex gap-2 flex-1 ml-auto max-w-4xl">
					<InputGroup className="flex-2 border-black">
						<InputGroupInput
							type="text"
							placeholder="Cari Produk UMKM disini"
						/>
						<InputGroupAddon>
							<Search className="w-4 h-4 text-black" />
						</InputGroupAddon>
					</InputGroup>
					<InputGroup className="flex-1 border-black">
						<InputGroupAddon>
							<MapPin className="w-4 h-4 text-black" />
						</InputGroupAddon>
						<InputGroupAddon align={'inline-end'}>
							<Search className="w-4 h-4 text-black" />
						</InputGroupAddon>
						<InputGroupInput
							type="text"
							placeholder="Your Location"
							className=""
						/>
					</InputGroup>
				</div>

				{/* Favorites and Notifications */}
				<div className="flex items-center gap-6">
					<Button
						variant="blank"
						size="icon"
						className="w-max group flex items-center gap-2 "
					>
						<div className="relative">
							<Heart className="w-5 h-5" />
							<span className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full text-xs flex items-center justify-center text-white">
								2
							</span>
						</div>
						<span className="group-hover:text-primary transition-colors">
							Favorit
						</span>
					</Button>
					<Button
						variant="blank"
						size="icon"
						className="flex items-center gap-2 w-max group"
					>
						<div className="relative">
							<Bell className="w-5 h-5" />
							<span className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full text-xs flex items-center justify-center text-white">
								8
							</span>
						</div>
						<span className="group-hover:text-primary transition-colors">
							Notifikasi
						</span>
					</Button>
				</div>
			</div>
		</motion.header>
	);
};

export default Header;
