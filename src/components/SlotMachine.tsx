import { ReactNode } from "react";

type SlotMachine = {
	height: number;
	fontSize?: number;
	offset?: number;
	children?: ReactNode;
	isChosen: boolean;
};

/**
 *
 * @param height height in pixels
 * @param fontSize font size in rem
 * @param offset animation offset in rem
 * @returns
 */

function SlotMachine({
	children,
	height,
	isChosen,
	fontSize,
	offset,
}: SlotMachine) {
	// console.log(isChosen, );

	return (
		<div
			data-chosen={isChosen}
			className={`overflow-hidden `}
			style={{
				height: `${height}px`,
				fontSize: `${fontSize ? `${fontSize}rem` : "1rem"}`,
			}}
		>
			<ul
				className={`transition-transform duration-[2000ms] ease-slot`}
				style={{
					transform: isChosen
						? `translateY(calc(0% - ${offset ? offset + "rem" : "0px"}))`
						: `translateY(calc(-100% + ${height}px)`,
				}}
			>
				{children}
			</ul>
		</div>
	);
}
export default SlotMachine;
