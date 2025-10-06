import { Spinner } from './ui/spinner';

const Loading = () => {
	return (
		<div className="h-screen flex justify-center items-center">
			<Spinner className="w-16 h-16 text-primary" />
		</div>
	);
};

export default Loading;
