import { Link, useLocation } from '@tanstack/react-router';
import { Image } from '@unpic/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
	Bell,
	ChevronDown,
	Heart,
	MapPin,
	Menu,
	Search,
	X,
} from 'lucide-react';
import { useState } from 'react';
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
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<motion.header
			className="w-full px-4 sm:px-6 lg:px-12 py-3 sm:py-4 lg:py-6 sticky top-0 bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.05, ease: 'easeOut' }}
		>
			<div className="max-w-[1600px] mx-auto">
				{/* Top Navigation */}
				<nav className="flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
					<Link
						to="/"
						className="shrink-0 transition-transform hover:scale-105"
					>
						<Image
							src="/icons/logo/lokallink.png"
							alt="LokalLink Logo"
							loading="lazy"
							className="h-10 sm:h-12 lg:h-14 w-auto"
							layout="fullWidth"
						/>
					</Link>

					{/* Desktop Navigation */}
					<motion.ul
						className="hidden lg:flex items-center space-x-6 xl:space-x-10"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
					>
						<li>
							<Link
								to="/tour-umkm"
								activeProps={{ className: 'text-primary font-bold' }}
								inactiveProps={{
									className: 'text-gray-600 hover:text-primary',
								}}
								className="font-medium transition-all duration-200 relative group"
								viewTransition={{ types: ['slide-left'] }}
							>
								Tour UMKM
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
							</Link>
						</li>
						<li>
							<Link
								to="/"
								activeProps={{ className: 'text-primary font-bold' }}
								inactiveProps={{
									className: 'text-gray-600 hover:text-primary',
								}}
								className="font-medium transition-all duration-200 relative group"
								viewTransition={{
									types: ({ fromLocation }) =>
										fromLocation?.href === '/tour-umkm'
											? ['slide-right']
											: ['slide-left'],
								}}
							>
								Home
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
							</Link>
						</li>
						<li>
							<Link
								to="/upselling-umkm"
								activeProps={{ className: 'text-primary font-bold' }}
								inactiveProps={{
									className: 'text-gray-600 hover:text-primary',
								}}
								viewTransition={{ types: ['slide-right'] }}
								className="font-medium transition-all duration-200 relative group"
							>
								Upselling UMKM
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
							</Link>
						</li>
					</motion.ul>

					{/* Desktop Actions */}
					<motion.div
						className="hidden lg:flex items-center gap-3"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
					>
						<Link to="/auth/singup">
							<Button
								variant="ghost"
								className="hidden xl:inline-flex hover:bg-primary/10 transition-colors"
							>
								Daftar
							</Button>
						</Link>
						<Link to="/auth/signin">
							<Button className="rounded-full px-6 xl:px-8 shadow-md hover:shadow-lg transition-all">
								Masuk
							</Button>
						</Link>
					</motion.div>

					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="icon"
						className="lg:hidden hover:bg-primary/10 transition-colors"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						<AnimatePresence mode="wait">
							{isMobileMenuOpen ? (
								<motion.div
									key="close"
									initial={{ rotate: -90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: 90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<X className="w-6 h-6" />
								</motion.div>
							) : (
								<motion.div
									key="menu"
									initial={{ rotate: 90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: -90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									<Menu className="w-6 h-6" />
								</motion.div>
							)}
						</AnimatePresence>
					</Button>
				</nav>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
							className="lg:hidden overflow-hidden border-t border-gray-100"
						>
							<motion.ul
								className="flex flex-col space-y-1 py-4"
								initial="closed"
								animate="open"
								exit="closed"
								variants={{
									open: {
										transition: { staggerChildren: 0.07, delayChildren: 0.1 },
									},
									closed: {
										transition: { staggerChildren: 0.05, staggerDirection: -1 },
									},
								}}
							>
								{[
									{ to: '/', label: 'Home' },
									{ to: '/tour-umkm', label: 'Tour UMKM' },
									{ to: '/upselling-umkm', label: 'Upselling UMKM' },
								].map((item) => (
									<motion.li
										key={item.to}
										variants={{
											open: { y: 0, opacity: 1 },
											closed: { y: -10, opacity: 0 },
										}}
									>
										<Link
											to={item.to}
											activeProps={{ className: 'text-primary bg-primary/10' }}
											inactiveProps={{
												className: 'text-gray-600 hover:bg-gray-50',
											}}
											className="font-medium block py-3 px-4 rounded-lg transition-all"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{item.label}
										</Link>
									</motion.li>
								))}
								<motion.li
									variants={{
										open: { y: 0, opacity: 1 },
										closed: { y: -10, opacity: 0 },
									}}
									className="flex gap-2 pt-3 px-4"
								>
									<Link to="/auth/singup" className="flex-1">
										<Button variant="outline" className="w-full rounded-full">
											Daftar
										</Button>
									</Link>
									<Link to="/auth/signin" className="flex-1">
										<Button className="w-full rounded-full shadow-md">
											Masuk
										</Button>
									</Link>
								</motion.li>
								<motion.li
									variants={{
										open: { y: 0, opacity: 1 },
										closed: { y: -10, opacity: 0 },
									}}
									className="flex gap-4 justify-center pt-3 px-4 border-t border-gray-100 mt-3"
								>
									<Button variant="blank" size="icon" className="relative">
										<Heart className="w-5 h-5" />
										<span className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full text-xs flex items-center justify-center text-white font-semibold">
											2
										</span>
									</Button>
									<Button variant="blank" size="icon" className="relative">
										<Bell className="w-5 h-5" />
										<span className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full text-xs flex items-center justify-center text-white font-semibold">
											8
										</span>
									</Button>
								</motion.li>
							</motion.ul>
						</motion.div>
					)}
				</AnimatePresence>

				{/* Search Bar & Actions Row */}
				<motion.div
					className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between w-full gap-3 sm:gap-4 mt-4"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.3 }}
				>
					{/* Breadcrumb or Filter Toggle */}
					<AnimatePresence mode="wait">
						{isHomePage ? (
							<motion.div
								key="filter-toggle"
								className="w-full lg:w-auto hidden md:block lg:min-w-[280px]"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
							>
								<Button
									onClick={toggleFilter}
									className="flex items-center px-4 sm:px-6 gap-2 rounded-full w-full justify-between text-sm shadow-sm hover:shadow-md transition-all bg-linear-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90"
								>
									<span className="truncate">Cari semua kategori</span>
									<ChevronDown
										className={`${!isFilterVisible ? 'rotate-180' : ''} transition-transform duration-300 shrink-0`}
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
								className="w-full lg:w-auto"
							>
								<DynamicBreadcrumb />
							</motion.div>
						)}
					</AnimatePresence>

					{/* Search and Location Inputs */}
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full lg:flex-1 lg:ml-auto lg:max-w-3xl">
						<InputGroup className="flex-2 border-gray-300 focus-within:border-primary transition-colors w-full sm:w-auto shadow-sm rounded-lg">
							<InputGroupInput
								type="text"
								placeholder="Cari Produk UMKM disini"
								className="text-sm focus:outline-none"
							/>
							<InputGroupAddon>
								<Search className="w-4 h-4 text-gray-500" />
							</InputGroupAddon>
						</InputGroup>
						<InputGroup className="flex-1 border-gray-300 focus-within:border-primary transition-colors w-full sm:w-auto shadow-sm rounded-lg">
							<InputGroupAddon>
								<MapPin className="w-4 h-4 text-gray-500" />
							</InputGroupAddon>
							<InputGroupInput
								type="text"
								placeholder="Your Location"
								className="text-sm focus:outline-none"
							/>
							<InputGroupAddon align={'inline-end'}>
								<Search className="w-4 h-4 text-gray-500" />
							</InputGroupAddon>
						</InputGroup>
						<Button
							variant="blank"
							size="icon"
							className="relative hidden md:block group hover:scale-110 transition-transform"
						>
							<Heart className="w-5 h-5 group-hover:text-primary transition-colors" />
							<span className="absolute top-0 right-1 w-5 h-5 bg-primary rounded-full text-xs flex items-center justify-center text-white font-semibold shadow-lg">
								2
							</span>
						</Button>
						<Button
							variant="blank"
							size="icon"
							className="relative hidden md:block group hover:scale-110 transition-transform"
						>
							<Bell className="w-5 h-5 group-hover:text-primary transition-colors" />
							<span className="absolute top-0 right-1 w-5 h-5 bg-primary rounded-full text-xs flex items-center justify-center text-white font-semibold shadow-lg">
								8
							</span>
						</Button>
					</div>
				</motion.div>
			</div>
		</motion.header>
	);
};

export default Header;
