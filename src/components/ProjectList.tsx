import Title from '@/components/Title';
import ProjectItem from '@/components/ProjectItem';
import { projectInfoData as list } from '@/data/projectInfoData';

const ProjectList = () => {
	return (
		<>
			<div className="w-full md:w-8/12">
				<Title title="Project List" />
			</div>
			<div className="flex flex-col md:flex-row items-center justify-center">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{list.map((project) => (
						<ProjectItem key={project.id} project={project} />
					))}
				</div>
			</div>
		</>
	);
};

export default ProjectList;
