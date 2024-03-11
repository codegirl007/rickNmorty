import { axiosInstance } from "./axiosInstance";
import { getCharacterUrl, getLocationUrl } from "./getUrl";

export class ApiRequests {
	static getCharacters = async (page: number, livingStatus: string, gender: string, species: string) => {
		const response = await axiosInstance({
			method: "GET",
			url: getCharacterUrl(page, livingStatus, gender, species),
		});
		return response.data;
	};

	static getCharacterDetail = async (characterId: string | undefined) => {
		const response = await axiosInstance({
			method: "GET",
			url: `character/${characterId}`,
		});
		return response.data;
	};

	static getMultipleCharacters = async (ids: number[]) => {
		const response = await axiosInstance({
			method: "GET",
			url: `character/${ids}`,
		});
		return response.data;
	};

	static getLocations = async (page: number, type: string) => {
		const response = await axiosInstance({
			method: "GET",
			url: getLocationUrl(page, type),
		});
		return response.data;
	};

	static getLocationDetail = async (locationId: string | undefined) => {
		const response = await axiosInstance({
			method: "GET",
			url: `location/${locationId}`,
		});
		return response.data;
	};

	static getMultipleLocations = async (ids: number[]) => {
		const response = await axiosInstance({
			method: "GET",
			url: `location/${ids}`,
		});
		return response.data;
	};
}
