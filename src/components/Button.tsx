import React from "react";

type Button = {
	body: string;
	handleClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

function Button({ body, handleClick }: Button) {
	return (
		<button
			className="relative w-[287px] py-2 text-slate-300 text-2xl bg-red overflow-hidden transition-all duration-300 hover:text-white hover:border-white hover:after:-right-12 after:duration-300 after:absolute after:-right-16 after:-bottom-12 after:rotate-45 after:bg-black after:opacity-40 after:w-24 after:h-24 "
			onClick={handleClick}
		>
			{body}
		</button>
	);
}

export default Button;
