import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { Filter } from "../filter/Filter";
import { Logo } from "./Logo";

const Styled = {
	Header: styled("div")({
		width: "100%",
		height: "9.5rem",
		backgroundColor: "rgba(0, 35, 38, 0.5)",
		position: "fixed",
		display: "flex",
		alignItems: "center",
		justifyContent: "end",
		zIndex: 2,
	}),
	Button: styled(Button)({
		marginRight: "6rem",
	}),
};

export const Header = (): JSX.Element => {
	const [filterVisible, setFilterVisible] = useState<boolean>(false);
	return (
		<Styled.Header>
			<Logo />
			<Styled.Button onClick={() => setFilterVisible(!filterVisible)}>{filterVisible ? "Hide Filter" : "Show Filter"}</Styled.Button>
			{filterVisible && <Filter />}
		</Styled.Header>
	);
};
