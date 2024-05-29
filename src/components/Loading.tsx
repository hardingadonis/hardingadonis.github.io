import spinner from '@/assets/spinner.svg';

const Loading = () => {
	return (
		<div className="h-screen flex justify-center items-center bg-white">
			<img
				className="w-10 h-10 animate-spin"
				src={spinner}
				alt="Spinner animation"
			/>
		</div>
	);
};

export default Loading;
