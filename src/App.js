import React from 'react';

const pizzaData = [
	{
		name: 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: 'pizzas/focaccia.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: 'pizzas/margherita.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: 'pizzas/spinaci.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: 'pizzas/funghi.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: 'pizzas/salamino.jpg',
		soldOut: true,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: 'pizzas/prosciutto.jpg',
		soldOut: false,
	},
];

const Header = () => {
	return (
		<header className='header'>
			<h1>Fast React Pizza Co.</h1>;
		</header>
	);
};

const Menu = () => {
	// const pizzas = pizzaData;
	const pizzas = pizzaData;
	const numPizzas = pizzas.length;
	return (
		<main className='menu'>
			<h2>Our menu</h2>
			{numPizzas > 0 ? (
				<ul className='pizzas'>
					{pizzas.map(pizza => (
						<Pizza key={pizza.name} {...pizza} />
					))}
				</ul>
			) : (
				<p>We're still working on our menu. Please come back later :) </p>
			)}
		</main>
	);
};

const Footer = () => {
	const time = new Date().toLocaleTimeString();
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen =
		hour > openHour && hour < closeHour
			? `open until ${closeHour}:00 pm`
			: `close. We're happy to welcome you between ${openHour}:00 and ${closeHour}:00.`;
	return (
		<footer className='footer'>
			<div className='order'>
				{time} We're currently {isOpen}
				<button className='btn'>Order</button>
			</div>
			;
		</footer>
	);
};

const Pizza = props => {
	return (
		<li className='pizza'>
			<img src={props.photoName} alt={props.name} />
			<div>
				<h3>{props.name}</h3>
				<p>{props.ingredients}</p>
				<span>{props.price}</span>
			</div>
		</li>
	);
};

const App = () => {
	return (
		<div className='container'>
			<Header />
			<Menu />
			<Footer />
		</div>
	);
};

export default App;
