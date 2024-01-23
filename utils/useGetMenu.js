import { useEffect, useState } from "react";
import { Menu_List } from "./common";

const useGetMenu = (id) => {
	const [menu, setMenu] = useState([]);
	useEffect(() => {
		getMenu();
	}, []);

	const getMenu = async () => {
		const data = await fetch(Menu_List + id);
		const dataJson = await data.json();
		setMenu(dataJson.data);
	};

	return menu;
};
export default useGetMenu;
