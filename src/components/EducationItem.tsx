type EducationItemProps = {
	education: EducationInfo;
};

const EducationItem = (props: EducationItemProps) => {
	return (
		<>
			<div className="mb-4 w-full flex justify-center">
				<div className="w-1/4">
					<p className="text-sm font-semibold">{props.education.duration}</p>
				</div>
				<div className="w-2/4">
					<h3 className="text-xl font-bold">{props.education.college}</h3>
					<p className="text-sm font-normal">{props.education.major}</p>
					<p className="text-sm font-semibold">GPA: {props.education.gpa}</p>
				</div>
			</div>
		</>
	);
};

export default EducationItem;
