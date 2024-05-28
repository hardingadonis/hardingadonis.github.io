import { lazy, Suspense } from 'react';
import Loading from '@/components/Loading';

const Introduction = lazy(() => import('@/components/Introduction'));
const ProjectList = lazy(() => import('@/components/ProjectList'));
const EducationList = lazy(() => import('@/components/EducationList'));
const WorkExperienceList = lazy(
	() => import('@/components/WorkExperienceList'),
);
const Footer = lazy(() => import('@/components/Footer'));

const App = () => {
	return (
		<Suspense fallback={<Loading />}>
			<div className="bg-white text-stone-900 min-h-screen font-inter">
				<div className="max-w-5xl w-11/12 mx-auto">
					<Introduction />
					<ProjectList />
					<WorkExperienceList />
					<EducationList />
					<Footer />
				</div>
			</div>
		</Suspense>
	);
};

export default App;
