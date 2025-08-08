import { useState } from 'react';

import ProjectItem from '@/components/ProjectItem';
import Title from '@/components/Title';
import { projectInfoData as list } from '@/data/projectInfoData';

const ProjectList = () => {
	const [showAll, setShowAll] = useState(false);
	const reversedList = list.slice().reverse();
	const displayedItems = showAll ? reversedList : reversedList.slice(0, 3);
	const hasMoreItems = list.length > 3;

	return (
		<>
			<div className="w-full flex justify-center">
				<Title title="Project List" />
			</div>
			<div className="flex flex-col md:flex-row items-center justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{displayedItems.map((project) => (
						<ProjectItem key={project.id} project={project} />
					))}
				</div>
			</div>

			{hasMoreItems && (
				<div className="flex justify-center mt-4">
					<button
						onClick={() => setShowAll(!showAll)}
						className="text-stone-900 hover:text-stone-700 font-medium transition-colors duration-200 flex items-center gap-1 underline underline-offset-2"
					>
						{showAll ? (
							<>
								Show Less
								<svg
									className="w-4 h-4 transform rotate-180"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</>
						) : (
							<>
								Read More
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</>
						)}
					</button>
				</div>
			)}
		</>
	);
};

export default ProjectList;
