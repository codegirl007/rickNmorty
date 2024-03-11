import React from "react";
import { ApiRequests } from "../../utils/ApiRequestsClass";
import { useQuery } from "@tanstack/react-query";
import { favoriteStore } from "../../stores/favoriteStore";
import { Character } from "../../types/ApiTypes";
import { Button, Grid, Typography } from "@mui/material";
import { CharacterCard } from "../cards/CharacterCard";
import { ContainerLoading } from "../loading/LoadingComponent";

export const CharacterFavorites = (): JSX.Element => {
	const characterIds = favoriteStore.useStore((state) => state.favoriteCharactersId);

	const { data: character, isPending } = useQuery<Character[] | Character, Error>({
		queryKey: ["characterFavorites", characterIds],
		queryFn: () => ApiRequests.getMultipleCharacters(characterIds),
		enabled: characterIds.length > 0,
	});

	if (characterIds.length === 0) {
		return <Typography variant="h4">You have no favorites</Typography>;
	}

	return (
		<ContainerLoading loading={isPending}>
			{Array.isArray(character) ? (
				<Grid container spacing={2}>
					{character?.map((character) => (
						<Grid item xs={2} key={character.id}>
							<CharacterCard character={character} />
						</Grid>
					))}
				</Grid>
			) : (
				character && (
					<Grid container spacing={2}>
						<Grid item xs={2} key={character.id}>
							<CharacterCard character={character} />
						</Grid>
					</Grid>
				)
			)}
			<Button onClick={() => favoriteStore.resetFavoriteCharacters()}>RESET CHARACTERS</Button>
		</ContainerLoading>
	);
};
