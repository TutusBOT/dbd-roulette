import { useDispatch } from "react-redux";
import Anchor from "./Anchor";
import Button from "./Button";

function ConfigurationButtons(actions: any) {
	const dispatch = useDispatch();
	return (
		<div className="sticky top-0 flex flex-wrap justify-center gap-2 sm:gap-4 w-full py-4 z-20 bg-black">
			<Button
				body="DISABLE ALL"
				handleClick={() => {
					dispatch(actions.disableAll());
				}}
			/>
			<Button
				body="ENABLE ALL"
				handleClick={() => {
					dispatch(actions.enableAll());
				}}
			/>
			<Anchor body="roulette" link="#roulette" />
		</div>
	);
}
export default ConfigurationButtons;
