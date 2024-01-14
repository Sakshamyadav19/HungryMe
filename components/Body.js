import { restaurants } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
	const [restaurantList, setRestaurantList] = useState(restaurants);

	return (
		<div>
			<div className="filter-btn">
				<button
					onClick={() => {
						setRestaurantList(
							restaurantList.filter(
								(restaurant) => restaurant.info.rating.aggregate_rating > 4.0
							)
						);
					}}
				>
					Most Rated
				</button>
			</div>
			<div className="restaurantContainer">
				{restaurantList.map((restaurant) => {
					return (
						<RestaurantCard
							key={restaurant.info.resId}
							cardinfo={restaurant}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Body;
