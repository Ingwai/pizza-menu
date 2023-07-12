const Order = ({ time, isOpen }) => {
	return (
		<div className='order'>
			{time} We're currently {isOpen}
			<button className='btn'>Order</button>
		</div>
	);
};

export default Order;
