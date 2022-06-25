type Anchor = {
	link: string;
	body: string | any;
};

function Anchor({ link, body }: Anchor) {
	return (
		<a
			className="cursor-pointer relative w-[300px] h-12 flex items-center justify-end gap-4 px-4 text-slate-300 text-2xl text-center uppercase bg-[url('./assets/ui/button_background.png')] bg-no-repeat bg-center hover:text-white after:bg-[url(./assets/ui/button_blood.png)] after:absolute after:-right-1 after:-top-1 after:bg-contain after:w-[50px] after:h-[50px] after:transition-opacity after:opacity-0 hover:after:opacity-100"
			onClick={() => {
				document.getElementById(link)?.scrollIntoView();
			}}
		>
			{body}
			<span className="justify-self-end h-4/5 w-4 bg-[url('./assets/ui/button_limiter.png')] bg-no-repeat bg-center"></span>
		</a>
	);
}
export default Anchor;
