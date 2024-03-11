export const getCharacterUrl = (page: number, livingStatus: string, gender: string, species: string): string => {
	const url = `character/?page=${page}`;
	let newUrl = "";
	if (livingStatus !== "all") {
		newUrl = newUrl + `&status=${livingStatus}`;
	}
	if (gender !== "all") {
		newUrl = newUrl + `&gender=${gender}`;
	}
	if (species !== "all") {
		newUrl = newUrl + `&species=${species}`;
	}
	return url + newUrl;
};

export const getLocationUrl = (page: number, type: string): string => {
	const url = `location/?page=${page}`;
	let newUrl = "";
	if (type !== "all") {
		newUrl = newUrl + `&type=${type}`;
	}

	return url + newUrl;
};
