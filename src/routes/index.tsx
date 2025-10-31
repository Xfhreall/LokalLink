import { createFileRoute } from '@tanstack/react-router';
import HomeContainer from '@/features/home/containers/home-container';

export const Route = createFileRoute('/')({ component: HomeContainer });
