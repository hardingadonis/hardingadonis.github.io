declare type ProjectInfo = {
	id: number;
	title: string;
	description: string;
	imageURL: string;
	url: string;
	role?: string[];
	grade?: string;
	techStack?: string[];
};

declare type EducationInfo = {
	id: number;
	college: string;
	major: string;
	duration: string;
	gpa: string;
};