import { useEffect, useState } from "react";
import { UserType } from "../types/UserType";
import { authStore } from "../stores/authStore";
import { useNavigate } from "react-router-dom";

export const useAuthCheckAction = () => {
	const [users, setUsers] = useState<UserType[]>();
	const navigate = useNavigate();

	useEffect(() => {
		fetch("data/users.json")
			.then((response) => response.json())
			.then((json) => setUsers(json));
	}, []);

	const matchUser = (userName: string, password: string) => {
		if (users) {
			const isMatchedUser = users.find((user) => user.userName === userName && user.password === password);
			if (isMatchedUser) {
				authStore.setUserInfo(isMatchedUser);
				authStore.logInUser();
				navigate("/");
			}
		}
	};

	return { users, matchUser };
};
