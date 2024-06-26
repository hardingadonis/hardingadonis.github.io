type WorkExperienceItemProps = {
	workExperience: WorkExperienceInfo;
};

const WorkExperienceItem = (props: WorkExperienceItemProps) => {
	return (
		<ol className="flex flex-col md:flex-row relative border-l border-stone-200">
			<li className="mb-10 ml-4">
				<div className="absolute w-3 h-3 bg-stone-200 mt-1.5 -left-1.5 border border-white" />
				<p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
					<span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900">
						{props.workExperience.year}
					</span>
					<h3 className="text-lg font-semibold text-stone-900">
						{props.workExperience.position}
					</h3>
					<div className="my-1 text-sm font-normal leading-none text-stone-400">
						{props.workExperience.duration}
					</div>
				</p>
				<p className="my-2 text-base font-normal text-stone-500">
					<strong>Company:</strong> {props.workExperience.company}
				</p>
				{props.workExperience.technicalStack && (
					<p className="my-2 text-base font-normal text-stone-500  space-y-1">
						<strong>Technical stack:</strong>
						<ul className="list-disc list-inside space-y-1">
							{props.workExperience.technicalStack.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</p>
				)}
				{props.workExperience.workDescription && (
					<p className="my-2 text-base font-normal text-stone-500  space-y-1">
						<strong>Work description:</strong>
						<ul className="list-disc list-inside  space-y-1">
							{props.workExperience.workDescription.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</p>
				)}
				{props.workExperience.teamsize && (
					<p className="my-2 text-base font-normal text-stone-500">
						<strong>Team size:</strong> {props.workExperience.teamsize}
					</p>
				)}
			</li>
		</ol>
	);
};

export default WorkExperienceItem;
