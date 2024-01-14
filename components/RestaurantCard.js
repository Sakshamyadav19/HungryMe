const RestaurantCard = (props) => {
	const { name, image, rating, cuisine, cft } = props.cardinfo?.info;
	return (
		<div className="resCard">
			<img
				className="cardLogo"
				alt="icecream"
				src={image.url}
			></img>
			<h3>{name}</h3>
			<h3>{rating.aggregate_rating + " stars"}</h3>
			<h4>{cuisine.map((res) => res.name).join(", ")}</h4>
			<h4>{cft.text}</h4>
		</div>
	);
};

export default RestaurantCard;
