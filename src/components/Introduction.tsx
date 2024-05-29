import github from '@/assets/github.svg';
import linkedin from '@/assets/linkedin.svg';
import youtube from '@/assets/youtube.svg';
import facebook from '@/assets/facebook.svg';

const Introduction = () => {
	return (
		<div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
			<h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-thin">
				Minh Vương
			</h1>
			<p className="text-base md:text-xl mb-3 font-light">Backend Developer</p>
			<div className="flex justify-center font-light">
				<a
					className="mx-2"
					href="https://github.com/hardingadonis"
					target="_blank"
				>
					<img className="w-5 h-5" src={github} alt="GitHub icon" />
				</a>
				<a
					className="mx-2"
					href="https://www.linkedin.com/in/hardingadonis"
					target="_blank"
				>
					<img className="w-5 h-5" src={linkedin} alt="LinkedIn icon" />
				</a>
				<a
					className="mx-2"
					href="https://www.youtube.com/@adonis.harding"
					target="_blank"
				>
					<img className="w-5 h-5" src={youtube} alt="YouTube icon" />
				</a>
				<a
					className="mx-2"
					href="https://www.facebook.com/adonis.harding"
					target="_blank"
				>
					<img className="w-5 h-5" src={facebook} alt="Facebook icon" />
				</a>
			</div>
		</div>
	);
};

export default Introduction;
