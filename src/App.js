import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import ErrorPage from "../components/ErrorPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "../components/Contact";
import Menu from "../components/Menu";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => (
	<div>
		<Header />
		<Outlet />
	</div>
);

const appLayout = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/home",
				element: <Body />,
			},
			{
				path: "/restaurant/:id",
				element: <Menu />,
			},
		],
	},
]);

root.render(<RouterProvider router={appLayout} />);
