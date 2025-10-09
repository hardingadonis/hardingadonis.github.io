import { Spinner } from '@/components/ui/spinner';

const Loading = () => {
	return (
		<div className="h-screen flex justify-center items-center">
			<Spinner className="size-12 text-primary" />
		</div>
	);
};

export default Loading;
