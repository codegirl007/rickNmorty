import { styled } from "@mui/material";
import React from "react";
import { Header } from "./Header";
import { NavBar } from "./Navbar";
import { Outlet } from "react-router-dom";

const Styled = {
	Main: styled("main")({
		width: "100%",
		height: "100%",
		padding: "17rem 0rem 10rem 10rem",
	}),
};

export const MainProtectedLayout = (): JSX.Element => {
	return (
		<>
			<Header />
			<NavBar />
			<Styled.Main>
				<Outlet />
			</Styled.Main>
		</>
	);
};
