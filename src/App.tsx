import { Suspense } from 'react';

import Loading from '@/components/utils/Loading';

const App = () => {
	return <Suspense fallback={<Loading />}></Suspense>;
};

export default App;
