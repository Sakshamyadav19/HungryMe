import { LOGO_URL } from "../utils/common";
const Header = () => (
	<div id="header">
		<div id="logo">
			<img src={LOGO_URL}></img>
		</div>

		<ul>
			<li>HOME</li>
			<li>AboutUs</li>
			<li>Cart</li>
		</ul>
	</div>
);

export default Header;
