import { restaurants } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
	const [restaurantList, setRestaurantList] = useState([]);
	const [filteredRestaurant, setFilteredRestaurantList] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const api = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const res_json = await api.json();
		const data =
			res_json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants;
		setRestaurantList(data);
		setFilteredRestaurantList(data);
	};

	return restaurantList.length == 0 ? (
		<Shimmer />
	) : (
		<div>
			<div className="filter-btn">
				<input
					className="searchBox"
					type="text"
					onChange={(e) => {
						setFilteredRestaurantList(
							restaurantList.filter((restaurant) =>
								restaurant?.info?.name
									.toLowerCase()
									.includes(e.target.value.toLowerCase())
							)
						);
					}}
				/>
				<button
					onClick={() => {
						setRestaurantList(
							restaurantList.filter(
								(restaurant) => restaurant?.info?.avgRating > 4.3
							)
						);
					}}
				>
					Most Rated
				</button>
			</div>
			<div className="restaurantContainer">
				{filteredRestaurant.map((restaurant) => {
					return (
						<RestaurantCard
							key={restaurant.info.id}
							cardinfo={restaurant}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Body;
