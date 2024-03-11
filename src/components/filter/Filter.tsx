import React from "react";
import { styled } from "@mui/material/styles";
import { TabType, filterStore } from "../../stores/filterStore";
import { CharacterForm } from "../forms/CharacterForm";
import { LocationForm } from "../forms/LocationForm";
import { useShallow } from "zustand/react/shallow";

const Styled = {
	Filter: styled("div")({
		width: "100%",
		height: "7rem",
		backgroundColor: "rgba(0, 35, 38, 0.5)",
		position: "fixed",
		display: "flex",
		alignItems: "center",
		justifyContent: "end",
		marginTop: "16.5rem",
		paddingRight: "6rem",
	}),
	Form: styled("form")({
		display: "flex",
		justifyContent: "space-between",
	}),
};

export const Filter = (): JSX.Element => {
	const tabType = filterStore.useStore((state) => state.tabType);
	const { charAscDesc, locAscDesc } = filterStore.useStore(
		useShallow((state) => ({
			charAscDesc: state.charAscDesc,
			locAscDesc: state.locAscDesc,
		}))
	);
	return (
		<Styled.Filter>
			{tabType === TabType.CHARACTERS ? <CharacterForm ascDesc={charAscDesc} /> : <LocationForm ascDesc={locAscDesc} />}
		</Styled.Filter>
	);
};
