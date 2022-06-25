import { useDispatch } from "react-redux";
import { perksActions } from "../redux/perks/perksSlice";

type Perk = {
	id: number;
	enabled: boolean;
	name: string;
};

function Perk({ id, enabled, name }: Perk) {
	const dispatch = useDispatch();
	function handleClick() {
		dispatch(perksActions.toggle(id));
	}
	return (
		<li className="cursor-pointer">
			<img
				className={`${
					enabled ? "border-white" : "border-transparent"
				} border-2 max-w-[128px]`}
				onClick={handleClick}
				src={`./assets/perks/${id}.webp`}
				alt={name}
			/>
		</li>
	);
}
export default Perk;
