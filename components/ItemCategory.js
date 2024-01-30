import ItemCard from "./ItemCard";

const ItemCategory = ({ data, setindex, isVisible, index }) => {
  return (
    <div>
      <div
        className="flex justify-between "
        onClick={() => {
          setindex(index);
        }}
      >
        <div>{data.card.title}</div>
        <div>🔽</div>
      </div>
      {isVisible == index &&
        data.card.itemCards.map((item) => {
          return <ItemCard props={item.card.info} />;
        })}
    </div>
  );
};

export default ItemCategory;
