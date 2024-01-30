import { IMG_URL } from "../utils/common";

const RestaurantCard = (props) => {
	const { name, cloudinaryImageId, avgRating, cuisines, costForTwo } =
		props?.cardinfo?.info;
	return (
		<div className="w-[220px] bg-gray-100 mt-4 p-2 mx-4 border-2 border-black hover:shadow-2xl hover:bg-gray-200 rounded-md">
			<img
				className="w-fit h-56"
				alt="icecream"
				src={IMG_URL + cloudinaryImageId}
			></img>
			<h3 className="font-bold py-2">{name}</h3>
			<h3>{avgRating + " stars"}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{costForTwo}</h4>
		</div>
	);
};

export default RestaurantCard;
