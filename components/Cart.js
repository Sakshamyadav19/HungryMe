import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartSum = useSelector((store) => store.cart.total);

  return cartItems.length==0?
  <div className="text-center mt-4 font-bold">
    <h1>Please Shop First!!😁</h1>
  </div>
  : (
    <div className="px-4">
       {cartItems.map((item)=><ItemCard props={item} isCart={true}/>)}
       <div className="flex justify-end border-t-2">
        Total: {cartSum}
       </div>
    </div>
  );
};

export default Cart;
