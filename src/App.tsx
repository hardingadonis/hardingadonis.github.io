import { Suspense, lazy } from 'react';

import Loading from '@/components/utils/Loading';

const Header = lazy(() => import('@/components/sections/Header'));
const Introduction = lazy(() => import('@/components/sections/Introduction'));

const App = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Header />
			<div className="max-w-2xl w-11/12 mx-auto">
				<Introduction />
			</div>
		</Suspense>
	);
};

export default App;
