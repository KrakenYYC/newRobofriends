import React from "react";

//destructuring 'props' props would normally be in () but to have many items
//as part of props they need to be contained in {}

const Card = ({ name, email, id }) => {
	return (
		<div className="tc bg-purple dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robots" src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2 className="roboname">{name}</h2>
				<p className="roboemail">{email}</p>
			</div>
		</div>
	);
};

export default Card;
