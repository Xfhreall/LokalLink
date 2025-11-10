import { createFileRoute } from '@tanstack/react-router';
import { OtpContainer } from '@/features/step/otp/containers/otp-container';

export const Route = createFileRoute('/step/otp')({
	component: RouteComponent,
});

function RouteComponent() {
	return <OtpContainer />;
}
