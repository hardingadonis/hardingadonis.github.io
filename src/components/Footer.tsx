const Footer = () => {
	const startYear = 2024;
	const currentYear = new Date().getFullYear();

	const year =
		currentYear > startYear ? `${startYear} - ${currentYear}` : startYear;

	return (
		<div className="py-5 text-center">
			<p className="text-sm mt-2  opacity-50">
				&copy; {year} Minh Vương. All rights reserved.
			</p>
		</div>
	);
};

export default Footer;
