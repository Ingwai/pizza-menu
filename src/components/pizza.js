const Pizza = props => {
	// if (props.soldOut) return;

	return (
		<li className={props.soldOut ? 'pizza sold-out' : 'pizza'}>
			<img src={props.photoName} alt={props.name} />
			<div>
				<h3>{props.name}</h3>
				<p>{props.ingredients}</p>
				<span>{props.soldOut ? 'SOLD OUT' : props.price}</span>
			</div>
		</li>
	);
};

export default Pizza;
