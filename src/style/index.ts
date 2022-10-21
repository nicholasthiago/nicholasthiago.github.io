// Style pattern classes

export interface Style {
	app				: string,
	page			: string,
	button			: string,
	buttonMain		: string,
	buttonSub		: string,
	input			: string,
	title			: string,
	subtitle		: string,
	body			: string,
	small			: string,
	link			: string,
	message			: string,
	error			: string,
};

const style: Style = {

	app			: 'w-full px-9 flex flex-col items-center font-montserrat font-medium text-blue-gray-700',
	page		: 'w-full my-16 flex flex-col gap-4',

	button		: 'w-full rounded-md py-4 border-2 border-solid border-blue-gray-700 shadow-md transition-all font-semibold',
	buttonMain	: 'w-full rounded-md py-4 border-2 border-solid border-blue-gray-700 shadow-md transition-all font-semibold bg-blue-gray-700 text-blue-gray-50',
	buttonSub	: 'w-full rounded-md py-4 border-2 border-solid border-blue-gray-700 shadow-md transition-all font-semibold text-blue-gray-600',

	input		: 'w-full rounded-md py-3 border-2 border-solid border-gray-200 font-medium focus:border-blue-gray-700 focus:outline-none transition-all placeholder-gray-300',

	title		: 'text-2xl font-bold text-blue-gray-700 mb-2',
	subtitle	: 'text-xl font-semibold text-blue-gray-700',
	body		: 'text-md font-medium text-blue-gray-700',
	small		: 'text-sm font-medium text-blue-gray-700',
	link 		: 'text-sm font-semibold text-blue-gray-600 underline',
	error		: 'text-sm font-medium text-red-500',
	message		: 'text-sm font-medium text-blue-gray-400',
};

export default style;