type ProjectItemProps = {
	project: ProjectInfo;
};

const ProjectItem = (props: ProjectItemProps) => {
	return (
		<>
			<a
				href={props.project.url}
				target="_blank"
				rel="noopener noreferrer"
				className="border-2 border-stone-900 overflow-hidden"
			>
				<img
					src={props.project.imageURL}
					className="w-full h-36 md:h-48 object-cover cursor-pointer"
				/>
				<div className="w-full p-4">
					<h3 className="text-lg md:text-xl mb-2 md:mb-3 font-extrabold">
						{props.project.title}
					</h3>
					<p className="text-sm md:text-base text-slate-800 mb-3">
						{props.project.description}
					</p>
					<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
						{props.project.techStack?.map((tech, index) => (
							<span
								key={index}
								className="text-black font-bold border-2 border-stone-900 px-2 py-1 rounded"
							>
								{tech}
							</span>
						))}
					</p>
				</div>
			</a>
		</>
	);
};
export default ProjectItem;
