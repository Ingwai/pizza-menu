import Order from './order';

const Footer = () => {
	const time = new Date().toLocaleTimeString();
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen =
		hour > openHour && hour < closeHour
			? `open until ${closeHour}:00 pm. Come visit us or order online to 20:00 pm`
			: `close. We're happy to welcome you between ${openHour}:00 and ${closeHour}:00.`;

	// tutaj możemy pisać dowolny kod bo jesteśmy po za jsx

	// if (!isOpen)
	// 	return (
	// 		<p>
	// 			`Close. We're happy to welcome you between ${openHour}:00 and ${closeHour}:00.`
	// 		</p>
	// 	);

	return (
		<footer className='footer'>
			<Order time={time} isOpen={isOpen} />
		</footer>
	);
};

export default Footer;
