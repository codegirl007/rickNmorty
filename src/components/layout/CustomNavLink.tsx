import React from "react";
import { styled } from "@mui/material/styles";
import { NavLink, NavLinkProps } from "react-router-dom";
import { themeColors } from "../../styles/mainTheme/themeColors";

export const Styled = {
	NavLink: styled(NavLink)({
		textDecoration: "none",
		width: "auto",
		display: "flex",
		alignItems: "center",
		backgroundColor: themeColors.primary.primaryGreen,
		borderRadius: "50%",
		color: themeColors.basic.white,
		marginBottom: "3rem",
		marginRight: "1rem",
		"&:hover": {
			backgroundColor: "white",
		},
	}),
};

export const CustomNavLink = (props: NavLinkProps): JSX.Element => {
	return (
		<Styled.NavLink
			{...props}
			style={({ isActive }) => {
				return isActive
					? {
							boxShadow: `0rem 0rem 1.4rem ${themeColors.primary.primaryGreen}`,
							backgroundColor: themeColors.primary.lighterPrimaryGreen,
						}
					: {};
			}}
		>
			{props.children}
		</Styled.NavLink>
	);
};
