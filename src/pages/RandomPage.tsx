import React from "react";
import { CharacterCounter } from "../components/counters/CharacterCounter";
import { LocationCounter } from "../components/counters/LocationCounter";
import { PageContainer } from "../components/layout/PageContainer";

export const RandomPage = (): JSX.Element => {
	return (
		<PageContainer centered sx={{ gap: 3, alignItems: "start" }}>
			<CharacterCounter />
			<LocationCounter />
		</PageContainer>
	);
};
