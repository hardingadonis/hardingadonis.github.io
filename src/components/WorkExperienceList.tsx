import Title from '@/components/Title';
import WorkExperienceItem from '@/components/WorkExperienceItem';
import { workExperienceData as list } from '@/data/workExperienceData';

const WorkExperienceList = () => {
	return (
		<>
			<div className="w-full flex justify-center mt-6">
				<Title title="Work Experience" />
			</div>

			<div className="flex flex-col md:flex-row justify-center items-center my-5">
				<div className="w-full md:w-7/12">
					{list
						.slice()
						.reverse()
						.slice(0, 3)
						.map((workExperience) => (
							<WorkExperienceItem workExperience={workExperience} />
						))}
				</div>
			</div>
		</>
	);
};

export default WorkExperienceList;
