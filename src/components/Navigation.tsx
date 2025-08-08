import { useEffect, useState } from 'react';

const Navigation = () => {
	const [activeSection, setActiveSection] = useState('');

	const navItems = [
		{ id: 'projects', label: 'Projects' },
		{ id: 'work-experience', label: 'Work Experience' },
		{ id: 'education', label: 'Education' },
	];

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	};

	useEffect(() => {
		const navItemsIds = [
			{ id: 'projects', label: 'Projects' },
			{ id: 'work-experience', label: 'Work Experience' },
			{ id: 'education', label: 'Education' },
		];

		const handleScroll = () => {
			const sections = navItemsIds.map((item) =>
				document.getElementById(item.id),
			);
			const scrollPosition = window.scrollY + 100;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				if (section && section.offsetTop <= scrollPosition) {
					setActiveSection(navItemsIds[i].id);
					break;
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Check initial position

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-stone-200 z-50">
			<div className="max-w-5xl w-11/12 mx-auto">
				<div className="flex justify-center items-center py-4">
					<ul className="flex space-x-8">
						{navItems.map((item) => (
							<li key={item.id}>
								<button
									onClick={() => scrollToSection(item.id)}
									className={`text-sm md:text-base font-medium transition-colors duration-200 hover:text-stone-700 ${
										activeSection === item.id
											? 'text-stone-900 underline underline-offset-4 decoration-2'
											: 'text-stone-600'
									}`}
								>
									{item.label}
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
