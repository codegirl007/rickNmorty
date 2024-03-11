import React from "react";
import { styled } from "@mui/material/styles";
import { authStore } from "../../stores/authStore";
import { themeColors } from "../../styles/mainTheme/themeColors";

const Styled = {
	UserInfo: styled("div")({
		fontSize: "1.5rem",
		color: themeColors.basic.white,
		textAlign: "center",
		textTransform: "capitalize",
		marginBottom: "1rem",
	}),
};

export const UserInfo = (): JSX.Element => {
	const userInfo = authStore.useStore((state) => state.userInfo);

	return <Styled.UserInfo>{userInfo?.userName}</Styled.UserInfo>;
};
