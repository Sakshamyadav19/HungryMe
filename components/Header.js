import { useState } from "react";
import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";
import useCheckNet from "../utils/useCheckNet";
const Header = () => {
	const [btnName, setBtnName] = useState("Login");

	const active = useCheckNet();

	return (
		<div id="header">
			<div id="logo">
				<img src={LOGO_URL}></img>
			</div>

			<ul className="header">
				<li>
					<Link to="/">HOME</Link>
				</li>
				<li>
					<Link to="/contact">AboutUs</Link>
				</li>
				<li>
					<Link to="/cart">Cart</Link>
				</li>
				<li>Online:{active}</li>
				<button
					className="authButton"
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
