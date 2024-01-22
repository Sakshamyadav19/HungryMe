import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Menu = () => {
	const [menu, setMenu] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		getMenu();
	}, []);

	const getMenu = async () => {
		const data = await fetch(
			"https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
				id +
				"&catalog_qa=undefined&submitAction=ENTER"
		);
		const dataJson = await data.json();
		console.log(dataJson);
		setMenu(dataJson.data);
	};

	if (menu.length === 0) return <Shimmer />;

	const { name, cuisines, costForTwoMessage, avgRatingString, areaName } =
		menu.cards[0].card.card.info;

	const item =
		menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
	return (
		<div>
			<h2>{name}</h2>
			<h3>{areaName}</h3>
			<h3>{cuisines.join(" ,")}</h3>
			<h3>{costForTwoMessage}</h3>
			<h3>{avgRatingString + " stars"}</h3>

			<ul>
				{item.map((item) => (
					<li id="{item.card.info.id}">{item.card.info.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Menu;
