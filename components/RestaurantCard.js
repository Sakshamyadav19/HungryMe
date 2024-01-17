import { IMG_URL } from "../utils/common";

const RestaurantCard = (props) => {
	const { name, cloudinaryImageId, avgRating, cuisines, costForTwo } =
		props?.cardinfo?.info;
	return (
		<div className="resCard">
			<img
				className="cardLogo"
				alt="icecream"
				src={IMG_URL + cloudinaryImageId}
			></img>
			<h3>{name}</h3>
			<h3>{avgRating + " stars"}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{costForTwo}</h4>
		</div>
	);
};

export default RestaurantCard;
