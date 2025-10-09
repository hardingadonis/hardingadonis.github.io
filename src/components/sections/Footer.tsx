const Footer = () => {
	const startYear = 2024;
	const currentYear = new Date().getFullYear();

	const year =
		currentYear > startYear ? `${startYear} - ${currentYear}` : startYear;

	return (
		<div className="py-5 text-center">
			<p className="text-sm text-primary/80 mt-2">
				&copy; {year} | Minh Vương. All rights reserved.
			</p>
		</div>
	);
};

export default Footer;
