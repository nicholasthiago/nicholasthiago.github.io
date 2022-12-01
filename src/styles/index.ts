// Style pattern classes

type Style = {
	[ key: string ] : string,
};

const style: Style = {

	// Flex & Grid
	col	: ' tw-flex tw-flex-col ',
	row	: ' tw-flex tw-flex-row ',

	// Typography
	h2	: ' tw-text-start tw-m-0 tw-text-slate-700 tw-text-3xl	tw-font-black ',
	h4	: ' tw-text-start tw-m-0 tw-text-slate-500 tw-text-base	tw-font-semibold ',
	h6	: ' tw-text-start tw-m-0 tw-text-slate-500 tw-text-sm	tw-font-semibold ',
};

export default style;