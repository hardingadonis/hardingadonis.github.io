declare type WorkExperienceInfo = {
	id: number;
	companyName: string;
	companyLogoURL?: string;
	companyLogoFallback: string;
	position: string;
	duration: string;
	technicalStack?: string[];
	workDescription?: string[];
	teamsize?: string;
};

declare type ProjectInfo = {
	id: number;
	title: string;
	description: string;
	imageURL: string;
	url: string;
	role?: string[];
	grade?: string;
	techStack?: string[];
	repoBadge?: string[];
};

declare type EducationInfo = {
	id: number;
	college: string;
	major: string;
	duration: string;
	gpa: string;
};
