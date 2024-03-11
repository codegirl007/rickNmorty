import axios, { AxiosResponse } from "axios";
import { showNotification } from "../actions/notificationActions";
import { ServerConstants } from "../model/Constants";

export const axiosInstance = axios.create({
	baseURL: `${ServerConstants.SERVER_ENDPOINT}`,
});

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		const errorResponse = error.response as AxiosResponse;
		showNotification(`${errorResponse.data.error ? errorResponse.data.error : error.error}!`);
	}
);
