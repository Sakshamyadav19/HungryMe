import useGetMenu from "../utils/useGetMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";

const Menu = () => {
	const { id } = useParams();

	const menu = useGetMenu(id);

	if (menu.length === 0) return <Shimmer />;

	const { name, cuisines, costForTwoMessage, avgRatingString, areaName } =
		menu.cards[0].card.card.info;

	const item =
		menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
	return (
		<div className="border-black border-2 flex justify-center">
			<div className="w-[600px]">
				<div className="flex justify-between py-2">
					<div className="p-2">
						<h2 className="pb-1">{name}</h2>
						<h3>{areaName}</h3>
					</div>
					<div className="p-2 border-2 border-green-300 shadow-lg rounded-md">
						<h3 className="pb-1">{costForTwoMessage}</h3>
						<h3 className=" text-center">{avgRatingString + " ⭐"}</h3>
					</div>
				</div>
				<div className="py-4 border-t-2">
					<ul className="divide-y">
						{item.map((item) => (
							<li key="{item.card.info.id}">
								<ItemCard props={item.card.info} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Menu;
