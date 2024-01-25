// import { useEffect } from "react";

const Contact = () => {
	return (
		<div className="flex justify-center">
			<div className="w-56 h-60 border-2 p-2 py-2">
				<div className="flex justify-center">
					<img
						className=" w-32 h-32 rounded-full bg-slate-400"
						src=""
					></img>
				</div>
				<div className="flex justify-center py-2">
					<p>Saksham Yadav</p>
				</div>
				<div className="border-t-2">
					<ul className="flex justify-between">
						<li>Gmail</li>
						<li>
							<a href="https://thingproxy.freeboard.io/fetch/https://github.com/Sakshamyadav19">
								GitHub
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/saksham-yadav-133978182/">
								LinkedIn
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;
