import ItemCard from "./ItemCard";

const ItemCategory = ({ data, index, setindex, showCategory }) => {
  return (
    <div>
      <div
        className="flex justify-between "
        onClick={() => {
          showCategory ? setindex(-1) : setindex(index);
        }}
      >
        <div>
          {data.card.title} ({data.card.itemCards.length})
        </div>
        <div>🔽</div>
      </div>
      {showCategory &&
        data.card.itemCards.map((item) => {
          return <ItemCard props={item.card.info} isCart={false}/>
        })}
    </div>
  );
};

export default ItemCategory;
