import React, { ReactNode } from "react";
import { SxProps, styled } from "@mui/material/styles";
import { styledTransientPropsOptions } from "../../utils/styledTransientPropsOptions";

type PageContainerProp = {
	$centered?: boolean;
};

const Styled = {
	PageContainer: styled(
		"div",
		styledTransientPropsOptions
	)<PageContainerProp>((props) => ({
		width: "100%",
		maxHeight: "100vh",
		height: "100%",
		padding: "6rem",
		...(props.$centered && {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			minHeight: "100vh",
		}),
	})),
};

type Props = {
	children: ReactNode;
	centered?: boolean;
	sx?: SxProps;
};

export const PageContainer = (props: Props): JSX.Element => {
	return (
		<Styled.PageContainer $centered={props.centered} id="page-container" sx={props.sx}>
			{props.children}
		</Styled.PageContainer>
	);
};
