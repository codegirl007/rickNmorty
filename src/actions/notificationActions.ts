import { notificationStore } from "../stores/notificationStore";
import { NotificationInfo } from "../types/NotificationInfoType";

export const showNotification = (message: string): NotificationInfo => {
	const newId = notificationStore.generateNewId();
	const notificationInfo: NotificationInfo = {
		id: newId,
		message,
	};
	notificationStore.showNotification(notificationInfo);

	// setTimeout(() => {
	// 	hideNotification(notificationInfo);
	// });

	return notificationInfo;
};

export const hideNotification = (notification: NotificationInfo): void => {
	notificationStore.hideNotification(notification);
};
