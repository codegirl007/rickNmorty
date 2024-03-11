import React from "react";
import { styled } from "@mui/material/styles";
import { styledTransientPropsOptions } from "../../utils/styledTransientPropsOptions";

type LogoProp = {
	$max?: boolean;
};

const Styled = {
	Logo: styled(
		"img",
		styledTransientPropsOptions
	)<LogoProp>((props) => ({
		width: "auto",
		height: props.$max ? "12rem" : "7.2rem",
		position: "fixed",
		left: props.$max ? "2rem" : "13rem",
		top: "1.3rem",
		zIndex: 9999,
	})),
};

type Props = {
	max?: boolean;
};

export const Logo = (props: Props): JSX.Element => {
	return <Styled.Logo src={process.env.PUBLIC_URL + "assets/images/logo.png"} alt="logo" $max={props.max} />;
};
