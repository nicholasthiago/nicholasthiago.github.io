// ---- Basic Tools ---- //

export function dataMask (data,response) {
	response = data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

	return response;
};