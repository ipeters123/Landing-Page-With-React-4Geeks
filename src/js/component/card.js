import React from "react";
import propTypes from "prop-types";

//create your first component
export const Card = ({ resource }) => {
	return (
		<div className="card container1 mx-auto h-100">
			<img
				src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<div
					className="row px-1"
					style={{ height: "85%", alignContent: "start" }}>
					<h5
						className="card-title"
						style={{ textAlign: "center", height: "10%" }}>
						Card title
					</h5>
					<p
						className="card-text"
						style={{
							textAlign: "center",
						}}>
						{resource}
					</p>
				</div>
				<div className="row px-5 mb-3">
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	resource: propTypes.string,
};
