import { useState } from "react";
import { LOGO_URL } from "../utils/common";
const Header = () => {
	const [btnName, setBtnName] = useState("Login");

	return (
		<div id="header">
			<div id="logo">
				<img src={LOGO_URL}></img>
			</div>

			<ul>
				<li>HOME</li>
				<li>AboutUs</li>
				<li>Cart</li>
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
