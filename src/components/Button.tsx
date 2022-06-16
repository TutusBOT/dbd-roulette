import React from "react";

type Button = {
	body: string;
	handleClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({ body, handleClick }: Button) {
	return (
		<button
			className="text-white text-2xl border-white border-2"
			onClick={handleClick}
		>
			{body}
		</button>
	);
}

export default Button;
