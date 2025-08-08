import EducationItem from '@/components/EducationItem';
import Title from '@/components/Title';
import { educationData as list } from '@/data/educationData';

const EducationList = () => {
	return (
		<section id="education">
			<div className="w-full flex justify-center mt-6">
				<Title title="Education" />
			</div>

			<div className="flex flex-col justify-center items-center my-5">
				{list
					.slice()
					.reverse()
					.slice(0, 3)
					.map((education) => (
						<EducationItem key={education.id} education={education} />
					))}
			</div>
		</section>
	);
};

export default EducationList;
