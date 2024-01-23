import { useState } from "react";

const useCheckNet = () => {
	const [active, setActive] = useState("✅");

	window.addEventListener("online", () => setActive("✅"));
	window.addEventListener("offline", () => setActive("❌"));
	return active;
};

export default useCheckNet;
