import { useState } from "react";
import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";
import useCheckNet from "../utils/useCheckNet";
import { useSelector } from "react-redux";
const Header = () => {
	const [btnName, setBtnName] = useState("Login");

	const active = useCheckNet();
	const cartItems=useSelector((store)=>store.cart.items)

	return (
		<div className="flex justify-between items-center border-y-2 border-black">
			<div className="size-40 pt-5">
				<img src={LOGO_URL}></img>
			</div>

			<ul className="flex justify-between font-bold ">
				<li className="px-3">
					<Link to="/">HOME</Link>
				</li>
				<li className="px-3">
					<Link to="/contact">AboutUs</Link>
				</li>
				<li className="px-3">
					<Link to="/cart">Cart - {cartItems.length}</Link>
				</li>
				<li className="px-3">Online:{active}</li>
				<button
					className="px-2 border-2 border-black rounded-md"
					onClick={() => {
						btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
					}}
				>
					{btnName}
				</button>
			</ul>
		</div>
	);
};

export default Header;
