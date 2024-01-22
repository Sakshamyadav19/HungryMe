import { restaurants } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Restaurants_List } from "../utils/common";
import { Link } from "react-router-dom";

const Body = () => {
	const [restaurantList, setRestaurantList] = useState([]);
	const [filteredRestaurant, setFilteredRestaurantList] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const api = await fetch(Restaurants_List);
		const res_json = await api.json();
		const data =
			res_json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants;
		setRestaurantList(data);
		setFilteredRestaurantList(data);
		console.log(data);
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
						setFilteredRestaurantList(
							filteredRestaurant.filter(
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
						<Link
							to={"/restaurant/" + restaurant.info.id}
							key={restaurant.info.id}
						>
							<RestaurantCard cardinfo={restaurant} />
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Body;
