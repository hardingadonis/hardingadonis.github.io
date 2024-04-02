type TitleProps = {
	title: string;
};

const Title = (props: TitleProps) => {
	return (
		<h1 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900">
			{props.title}
		</h1>
	);
};

export default Title;
