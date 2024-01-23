import useGetMenu from "../utils/useGetMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Menu = () => {
	const { id } = useParams();

	const menu = useGetMenu(id);

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
					<li key="{item.card.info.id}">{item.card.info.name}</li>
				))}
			</ul>
		</div>
	);
};

export default Menu;
