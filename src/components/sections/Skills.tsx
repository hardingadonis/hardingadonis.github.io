const skills = [
	'TypeScript',
	'C#',
	'Node.JS',
	'.NET',
	'NestJS',
	'Express.js',
	'Docker',
	'Postgres',
	'MongoDB',
	'Java',
	'C++',
];

const Skills = () => {
	return (
		<section id="skills" className="flex flex-col gap-6 py-6">
			<h3 className="text-2xl font-semibold text-primary text-center">
				Skills
			</h3>
			<div className="flex flex-wrap gap-1">
				{skills.map((skill) => (
					<div key={skill}>
						<span className="inline-flex select-none items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
							{skill}
						</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
