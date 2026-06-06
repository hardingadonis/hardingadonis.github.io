import '@fontsource-variable/jetbrains-mono';
import { Suspense, lazy } from 'react';

import { ThemeProvider } from '@/components/theme-provider';
import { Separator } from '@/components/ui/separator';
import Loading from '@/components/utils/Loading';
import '@/styles/index.css';

const Header = lazy(() => import('@/components/sections/Header'));
const Introduction = lazy(() => import('@/components/sections/Introduction'));
const WorkExperience = lazy(
	() => import('@/components/sections/WorkExperience'),
);
const Skills = lazy(() => import('@/components/sections/Skills'));
const Education = lazy(() => import('@/components/sections/Education'));
const Footer = lazy(() => import('@/components/sections/Footer'));

const App = () => {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<Suspense fallback={<Loading />}>
				<Header />
				<div className="max-w-2xl w-11/12 mx-auto">
					<Introduction />
					<Separator />
					<WorkExperience />
					<Separator />
					<Skills />
					<Separator />
					<Education />
				</div>
				<Footer />
			</Suspense>
		</ThemeProvider>
	);
};

export default App;
