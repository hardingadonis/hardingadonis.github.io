import Title from '@/components/Title';
import EducationItem from '@/components/EducationItem';
import { educationData as list } from '@/data/educationData';

const EducationList = () => {
	return (
		<>
			<div className="w-full flex justify-center mt-6">
				<Title title="Education" />
			</div>

			<div className="flex flex-col justify-center items-center my-5">
				{list
					.slice()
					.reverse()
					.map((education) => (
						<EducationItem key={education.id} education={education} />
					))}
			</div>
		</>
	);
};

export default EducationList;
