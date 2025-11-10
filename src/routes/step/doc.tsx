import { createFileRoute } from '@tanstack/react-router';
import { DocumentStepContainer } from '@/features/step/doc/containers/document-step-container';

export const Route = createFileRoute('/step/doc')({
	component: RouteComponent,
});

function RouteComponent() {
	return <DocumentStepContainer />;
}
