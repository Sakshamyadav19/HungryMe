import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const err = useRouteError();
	return (
		<div>
			<h2>{err.error.message}</h2>
		</div>
	);
};

export default ErrorPage;
