export type Info = {
	count: number;
	pages: number;
	next: string;
	prev: string;
};

export type Character = {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: {
		name: string;
		url: string;
	};
	location: {
		name: string;
		url: string;
	};
	image: string;
	episode: string[];
	url: string;
	created: string;
};

export type CharacterResponseType = {
	info: Info;
	results: Character[];
};

export type Location = {
	id: number;
	name: string;
	type: string;
	dimension: string;
	residents: string[];
	url: string;
	created: string;
};

export type LocationsResponseType = {
	info: Info;
	results: Location[];
};
