import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
};

type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
	theme: 'dark',
	setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
	children,
	defaultTheme = 'dark',
	storageKey = 'vite-ui-theme',
	...props
}: ThemeProviderProps) {
	const [theme, setThemeState] = useState<Theme>(defaultTheme);

	// Read saved theme from localStorage on client only
	useEffect(() => {
		if (typeof window === 'undefined') return;

		const saved = localStorage.getItem(storageKey) as Theme | null;
		if (saved) setThemeState(saved);
	}, [storageKey]);

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove('light', 'dark');

		root.classList.add(theme);
	}, [theme]);

	const value = {
		theme,
		setTheme: (newTheme: Theme) => {
			if (typeof window !== 'undefined') {
				localStorage.setItem(storageKey, newTheme);
			}
			setThemeState(newTheme);
		},
	};

	return (
		<ThemeProviderContext.Provider {...props} value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
}

export const useTheme = () => {
	const context = useContext(ThemeProviderContext);

	if (context === undefined)
		throw new Error('useTheme must be used within a ThemeProvider');

	return context;
};
