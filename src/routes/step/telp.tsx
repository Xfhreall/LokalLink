import { createFileRoute } from '@tanstack/react-router';
import { PhoneStepContainer } from '@/features/step/telp/containers/phone-step-container';

export const Route = createFileRoute('/step/telp')({
	component: RouteComponent,
});

function RouteComponent() {
	return <PhoneStepContainer />;
}
