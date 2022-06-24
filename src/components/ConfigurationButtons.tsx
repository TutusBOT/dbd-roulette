import Anchor from "./Anchor";
import Button from "./Button";

type ConfigurationButtons = {
	selectAction: any;
};

function ConfigurationButtons({ selectAction }: ConfigurationButtons) {
	return (
		<div className="sticky top-0 flex flex-wrap justify-center gap-2 sm:gap-4 w-full py-4 z-20 bg-black">
			<Button body="SELECT ALL" handleClick={selectAction} />
			<Anchor body="roulette" link="roulette" />
		</div>
	);
}
export default ConfigurationButtons;
