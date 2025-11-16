import { ChevronLeft } from 'lucide-react';
import { Button } from '@/shared/components/ui/shadcn/button';

interface ToggleSidebarButtonProps {
	isOpen: boolean;
	onClick: () => void;
}

export const ToggleSidebarButton = ({
	isOpen,
	onClick,
}: ToggleSidebarButtonProps) => {
	return (
		<Button
			onClick={onClick}
			className={`${
				isOpen ? 'left-[calc(100%-3rem)]' : 'left-4'
			} absolute top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary shadow-lg transition-all duration-300 lg:hidden`}
			size="icon"
		>
			<ChevronLeft
				className={`w-5 h-5 transition-transform duration-300 ${
					isOpen ? '' : 'rotate-180'
				}`}
			/>
		</Button>
	);
};
