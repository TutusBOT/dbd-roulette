type AnchorUnderlined = {
	body: string | any;
	link: string;
};

function AnchorUnderlined({ body, link }: AnchorUnderlined) {
	return (
		<a
			href={link}
			className="relative hover:after:w-full  hover:after:left-0 after:absolute after:border-red after:border-b-4 after:w-0 after:h-1 after:transition-all after:duration-300 after:left-1/2 after:bottom-0"
		>
			{body}
		</a>
	);
}
export default AnchorUnderlined;
