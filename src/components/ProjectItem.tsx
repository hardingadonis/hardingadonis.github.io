type ProjectItemProps = {
	project: ProjectInfo;
};

const ProjectItem = (props: ProjectItemProps) => {
	return (
		<a
			href={props.project.url}
			target="_blank"
			rel="noopener noreferrer"
			className="border-2 border-stone-900 overflow-hidden"
		>
			<img
				src={props.project.imageURL}
				className="w-full h-36 md:h-48 object-cover cursor-pointer"
				alt="Project thumbnail"
			/>
			<hr className="border-t border-gray-500" />
			<div className="w-full p-4">
				<h3 className="text-lg md:text-xl mb-2 md:mb-3 font-extrabold">
					{props.project.title}
				</h3>
				<p className="text-sm md:text-base text-slate-800 mb-3">
					{props.project.description}
				</p>
				<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
					{props.project.techStack?.map((tech) => (
						<span
							key={tech}
							className="text-black font-bold border-2 border-stone-900 px-2 py-1 rounded"
						>
							{tech}
						</span>
					))}
				</p>
				{props.project.role && (
					<p className="text-xs md:text-sm mt-3">
						<strong>Role:</strong> {props.project.role.join(', ')}
					</p>
				)}
				{props.project.grade && (
					<p className="text-xs md:text-sm mt-3">
						<strong>Grade:</strong> {props.project.grade}
					</p>
				)}
				{props.project.repoBadge && (
					<div className="flex flex-wrap gap-2 flex-row items-center justify-start mt-3">
						{props.project.repoBadge.map((badge) => (
							<img key={badge} src={badge} alt="Repo badge" />
						))}
					</div>
				)}
			</div>
		</a>
	);
};
export default ProjectItem;
