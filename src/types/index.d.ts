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

declare type EducationInfo = {
	id: number;
	college: string;
	major: string;
	duration: string;
	gpa: string;
};
