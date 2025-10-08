import { Suspense, lazy } from 'react';

import { Separator } from '@/components/ui/separator';
import Loading from '@/components/utils/Loading';

const Header = lazy(() => import('@/components/sections/Header'));
const Introduction = lazy(() => import('@/components/sections/Introduction'));
const WorkExperience = lazy(
	() => import('@/components/sections/WorkExperience'),
);

const App = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Header />
			<div className="max-w-2xl w-11/12 mx-auto">
				<Introduction />
				<Separator />
				<WorkExperience />
			</div>
		</Suspense>
	);
};

export default App;
