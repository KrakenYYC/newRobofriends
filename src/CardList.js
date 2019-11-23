import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
	//this error is to prove ErrorBoundary is working
	// if (true) {
	// 	throw new Error("Nooooooo");
	// }
	return (
		<div>
			{robots.map((user, i) => {
				return (
					<Card
						key={i}
						id={robots[i].id}
						name={robots[i].name}
						email={robots[i].email}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
