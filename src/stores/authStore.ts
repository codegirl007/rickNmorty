import create from "zustand";
import { persist } from "zustand/middleware";
import { UserType } from "../types/UserType";

export type AuthStoreType = {
	authorized: boolean;
	userInfo?: UserType;
};

const useStore = create(
	persist<AuthStoreType>(
		() => ({
			authorized: false,
		}),
		{
			name: "auth",
			getStorage: () => sessionStorage,
		}
	)
);

export const authStore = {
	logInUser: () => useStore.setState({ authorized: true }),
	logOutUser: () => useStore.setState({ authorized: false, userInfo: undefined }),
	setUserInfo: (userInfo: UserType | undefined): void => {
		useStore.setState({ userInfo });
	},
	useStore,
};
