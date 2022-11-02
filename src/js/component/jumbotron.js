import React from "react";

//create your first component
export const Jumbotron = () => {
	return (
		<div className="container-fluid my-3 mx-auto">
			<div
				className="jumbotron contenedor1"
				style={{ backgroundColor: "#E5E8E8" }}>
				<h1 className="display-1 mx-3 pt-5">A Warm Welcome!</h1>
				<p className="lead mx-3 mb-2">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<a
					className="btn btn-primary btn-lg mx-3 mb-4"
					href="#"
					role="button">
					Learn more
				</a>
			</div>
		</div>
	);
};
