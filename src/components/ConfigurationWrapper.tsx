import { ReactNode } from "react";

type ConfigurationWrapper = {
	children: ReactNode;
};

function ConfigurationWrapper({ children }: ConfigurationWrapper) {
	return (
		<ul className=" mt-8  w-full flex flex-wrap gap-4 justify-center items-center text-white">
			{children}
		</ul>
	);
}
export default ConfigurationWrapper;
