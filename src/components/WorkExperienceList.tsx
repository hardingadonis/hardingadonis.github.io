import { useState } from 'react';

import Title from '@/components/Title';
import WorkExperienceItem from '@/components/WorkExperienceItem';
import { workExperienceData as list } from '@/data/workExperienceData';

const WorkExperienceList = () => {
	const [showAll, setShowAll] = useState(false);
	const reversedList = list.slice().reverse();
	const displayedItems = showAll ? reversedList : reversedList.slice(0, 3);
	const hasMoreItems = list.length > 3;

	return (
		<>
			<div className="w-full flex justify-center mt-6">
				<Title title="Work Experience" />
			</div>

			<div className="flex flex-col md:flex-row justify-center items-center my-5">
				<div className="w-full md:w-7/12">
					{displayedItems.map((workExperience) => (
						<WorkExperienceItem
							workExperience={workExperience}
							key={workExperience.id}
						/>
					))}

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
				</div>
			</div>
		</>
	);
};

export default WorkExperienceList;
