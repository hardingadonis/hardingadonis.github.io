import { AiFillMoon, AiFillSun } from 'react-icons/ai';

import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
	};

	console.log('Current theme:', theme);

	return (
		<Button variant="default" size="icon" onClick={toggleTheme}>
			<AiFillSun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
			<AiFillMoon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
		</Button>
	);
}
