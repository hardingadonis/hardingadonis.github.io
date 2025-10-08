import {
	AiFillFacebook,
	AiFillGithub,
	AiFillLinkedin,
	AiFillYoutube,
} from 'react-icons/ai';

const Introduction = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-6 pt-4">
			<img
				src="/avatar.png"
				alt="Minh Vương Avatar"
				className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover outline-5"
			/>
			<div className="flex flex-col justify-center items-center gap-2">
				<h3 className="text-2xl font-semibold text-primary">Minh Vương</h3>
				<h4 className="text-md font-thin text-secondary-foreground">
					Backend Developer | .NET/Node.JS
				</h4>
			</div>
			<div className="flex justify-center items-center gap-4">
				<a href="https://github.com/hardingadonis" target="_blank">
					<AiFillGithub className="w-[32px] h-[32px] text-primary" />
				</a>
				<a href="https://linkedin.com/in/hardingadonis" target="_blank">
					<AiFillLinkedin className="w-[32px] h-[32px] text-primary" />
				</a>
				<a href="https://youtube.com/@adonis.harding" target="_blank">
					<AiFillYoutube className="w-[32px] h-[32px] text-primary" />
				</a>
				<a href="https://facebook.com/adonis.harding" target="_blank">
					<AiFillFacebook className="w-[32px] h-[32px] text-primary" />
				</a>
			</div>
			<div className="flex flex-col justify-center items-center gap-2">
				<h4 className="text-md font-thin text-secondary-foreground">
					vuonglm.work@gmail.com
				</h4>
				<h4 className="text-md font-thin text-secondary-foreground">
					(+84) 333 382 420
				</h4>
			</div>
		</div>
	);
};

export default Introduction;
