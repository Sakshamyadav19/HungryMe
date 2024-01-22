import { useState } from "react";
import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";
const Header = () => {
	const [btnName, setBtnName] = useState("Login");

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
