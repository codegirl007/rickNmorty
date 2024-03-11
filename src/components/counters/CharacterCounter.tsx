import { Button, Typography, styled } from "@mui/material";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Character } from "../../types/ApiTypes";
import { ApiRequests } from "../../utils/ApiRequestsClass";
import { counterStore } from "../../stores/counterStore";
import { VBox } from "../layout/VBox";
import { CharacterCard } from "../cards/CharacterCard";
import { useCounterActions } from "../../actions/useCounterActions";
import { ContainerLoading } from "../loading/LoadingComponent";

const Styled = {
	Block: styled("div")({
		width: "32rem",
		height: "40rem",
	}),
	Button: styled(Button)({
		marginBottom: "1rem",
	}),
};

const NUMBER_OF_CHARACTERS = 826;

export const CharacterCounter = (): JSX.Element => {
	const characterCounterStored = counterStore.useStore((state) => state.characterCounter);
	const characterIdStored = counterStore.useStore((state) => state.characterId);

	const { count, randomId, clearCounter } = useCounterActions(NUMBER_OF_CHARACTERS, characterCounterStored, characterIdStored);

	const { data: character, isPending } = useQuery<Character, Error>({
		queryKey: ["character", randomId],
		queryFn: () => ApiRequests.getCharacterDetail(String(randomId)),
	});

	return (
		<Styled.Block>
			<VBox>
				<Styled.Button onClick={clearCounter}>RANDOMIZE</Styled.Button>
				<Typography variant="h1">{count}</Typography>
			</VBox>

			<ContainerLoading loading={isPending}>
				{character && (
					<CharacterCard character={character} noPict action={() => counterStore.setCharacterCounter(count, character.id)} />
				)}
			</ContainerLoading>
		</Styled.Block>
	);
};
