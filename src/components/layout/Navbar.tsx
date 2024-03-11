import React from "react";
import { styled } from "@mui/material/styles";
import { CustomNavLink } from "./CustomNavLink";
import { authStore } from "../../stores/authStore";
import { UserInfo } from "../userInfo/UserInfo";
//import { themeColors } from "../../styles/mainTheme/themeColors";
import { NavLink } from "react-router-dom";
import { themeColors } from "../../styles/mainTheme/themeColors";

const Styled = {
	NavBar: styled("div")({
		width: "11rem",
		height: "100%",
		backgroundColor: themeColors.basic.body,
		boxShadow: "inset -1rem -1rem 1rem rgba(255, 255, 255, 0.1)",
		position: "fixed",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "auto",
		zIndex: 9999,
	}),
	Image: styled("img")({
		height: "auto",
		width: "8.2rem",
		padding: "1.3rem",
	}),
	Logout: styled("img")({
		height: "auto",
		width: "3rem",
	}),
	UserNavbar: styled("div")({
		position: "absolute",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		bottom: "3rem",
	}),
};

export const NavBar = (): JSX.Element => {
	return (
		<Styled.NavBar>
			<div>
				<CustomNavLink to="/">
					<Styled.Image src={process.env.PUBLIC_URL + "assets/images/home_black.png"} alt="home" />
				</CustomNavLink>
				<CustomNavLink to="/random">
					<Styled.Image src={process.env.PUBLIC_URL + "assets/images/cube_black.png"} alt="random" />
				</CustomNavLink>
				<CustomNavLink to="/favorite">
					<Styled.Image src={process.env.PUBLIC_URL + "assets/images/heart_black.png"} alt="favorite" />
				</CustomNavLink>
			</div>
			<Styled.UserNavbar>
				<UserInfo />
				<NavLink to="/login" onClick={() => authStore.logOutUser()}>
					<Styled.Logout src={process.env.PUBLIC_URL + "assets/images/logout.png"} alt="logout" />
				</NavLink>
			</Styled.UserNavbar>
		</Styled.NavBar>
	);
};
