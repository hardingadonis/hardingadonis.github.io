import { lazy, Suspense } from 'react';
import Loading from '@/components/Loading';

const Introduction = lazy(() => import('@/components/Introduction'));

const App = () => {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<div className="bg-white text-stone-900 min-h-screen font-inter">
					<div className="max-w-5xl w-11/12 mx-auto">
						<Introduction />
					</div>
				</div>
			</Suspense>
		</>
	);
};

export default App;
