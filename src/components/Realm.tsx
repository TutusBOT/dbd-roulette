import { useDispatch } from "react-redux";
import { realmsActions } from "../redux/realms/realmsSlice";

type Realm = {
	id: number;
	name: string;
	type: string;
	enabled: boolean;
};

function Realm({ id, name, type, enabled }: Realm) {
	const dispatch = useDispatch();
	function handleClick() {
		console.log(enabled);

		dispatch(realmsActions.toggle(id));
	}

	return (
		<li className="relative" onClick={handleClick}>
			<img
				className={enabled ? "border-white border-2" : ""}
				src={`./src/img/realms/${id}.webp`}
				alt={name}
			/>
			<h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  w-full max-w-[370px] text-2xl text-center bg-neutral-900 bg-opacity-70">
				{JSON.stringify(enabled)}
			</h3>
		</li>
	);
}
export default Realm;
