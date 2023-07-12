import React from 'react';
import Header from './components/header';
import Menu from './components/menu';
import Footer from './components/footer';

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
