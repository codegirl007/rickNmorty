import React from "react";
import { PageContainer } from "../components/layout/PageContainer";
import { styled } from "@mui/system";

const Styled = {
	Image: styled("img")({
		width: "50%",
		marginTop: "-24rem",
		height: "auto",
	}),
};

export const NotFoundPage = (): JSX.Element => {
	return (
		<PageContainer centered>
			<Styled.Image src={process.env.PUBLIC_URL + "assets/images/notFound.png"} alt="notFound" />
		</PageContainer>
	);
};
