import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../utils/CartSlice";

const ItemCard = ({ props, isCart }) => {
  const { name, imageId, isVeg, price } = props;
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const addToCart = (item) => {
    dispatch(add(item));
  };

  const removeItem = (item) => {
	const index = cartItems.indexOf(item);
	dispatch(remove(index))
  };

  return (
    <div className="flex mt-1 py-2 rounded-lg hover:shadow-2xl hover:border-2 px-2">
      <img
        className="h-[75px] border-2 w-[70px] rounded-md"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
          imageId
        }
      ></img>
      <div className="size-full flex justify-between">
        <div className="px-2">
          <h2 className="py-1">{name}</h2>
          <p className=" text-sm">{isVeg ? "🟢 Veg" : "🔴 Non-Veg"}</p>
        </div>
        <div>
          <h2>
            {"Rs. " +
              (price
                ? price / 100
                : props.variantsV2.variantGroups[0].variations[0].price / 100)}
          </h2>
          {isCart ? (
            <button
              className="border-2 py-0 px-2 text-sm mt-4 hover:bg-slate-200 rounded-lg"
              onClick={() => removeItem(props)}
            >
              Delete
            </button>
          ) : (
            <button
              className="border-2 py-0 px-2 text-sm mt-4 hover:bg-slate-200 rounded-lg"
              onClick={() => addToCart(props)}
            >
              Add +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
