import useGetMenu from "../utils/useGetMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ItemCategory from "./ItemCategory";
import { useState } from "react";

const Menu = () => {
  const { id } = useParams();

  const menu = useGetMenu(id);

  const [isVisible, setVisible] = useState(0);

  if (menu.length === 0) return <Shimmer />;

  const { name, costForTwoMessage, avgRatingString, areaName } =
    menu.cards[0].card.card.info;

  const getgategory = menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  const categories = getgategory.filter((item) =>
    item.card.card["@type"].includes(
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
  );

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
          <ul>
            {categories.map((category, index) => (
              <li
                key={category.card.card.title}
                className="p-2 my-2 border-2 border-grey-200 rounded-lg"
              >
                <ItemCategory
                  data={category.card}
                  isVisible={isVisible}
                  index={index}
                  setindex={(index) => setVisible(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
