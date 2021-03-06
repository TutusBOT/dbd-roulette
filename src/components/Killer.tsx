import { useDispatch } from "react-redux";
import { killersActions } from "../redux/killers/killersSlice";

type Killer = {
	id: number;
	alias: string;
	enabled: boolean;
};

function Killer({ id, enabled, alias }: Killer) {
	const dispatch = useDispatch();
	function handleClick() {
		dispatch(killersActions.toggle(id));
	}
	return (
		<li className="cursor-pointer">
			<img
				className={`${
					enabled ? "border-white" : "border-transparent"
				} border-2`}
				onClick={handleClick}
				src={`./assets/killers/${id}.webp`}
				alt={alias}
			/>
		</li>
	);
}
export default Killer;
