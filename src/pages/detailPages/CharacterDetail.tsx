import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiRequests } from "../../utils/ApiRequestsClass";
import { Character } from "../../types/ApiTypes";
import { Button, Typography } from "@mui/material";
import { favoriteStore } from "../../stores/favoriteStore";
import { themeColors } from "../../styles/mainTheme/themeColors";
import { HBox } from "../../components/layout/HBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { PageContainer } from "../../components/layout/PageContainer";
import { CharacterCard } from "../../components/cards/CharacterCard";
import { ContainerLoading } from "../../components/loading/LoadingComponent";

export const CharacterDetail = (): JSX.Element => {
	const { characterId } = useParams<string>();
	const favoriteCharacterId = favoriteStore.useStore((state) => state.favoriteCharactersId);
	const navigate = useNavigate();

	const { data: character, isPending } = useQuery<Character, Error>({
		queryKey: ["character", characterId],
		queryFn: () => ApiRequests.getCharacterDetail(characterId),
	});

	const isMatched = useMemo(() => {
		return characterId && favoriteCharacterId.find((id) => String(id) === characterId);
	}, [favoriteCharacterId]);

	return (
		<PageContainer>
			<ContainerLoading loading={isPending}>
				<Button onClick={() => navigate(-1)}>BACK</Button>
				{character && <CharacterCard character={character} detail />}
				{isMatched ? (
					<HBox>
						<Typography variant="h4">Added to favorites</Typography>
						<CheckBoxIcon htmlColor={themeColors.primary.primaryGreen} sx={{ marginLeft: "1rem" }} />
					</HBox>
				) : (
					<Button
						onClick={() => character?.id && favoriteStore.addFavoriteCharacterId(character?.id)}
						startIcon={<FavoriteIcon />}
					>
						Add to Favorite
					</Button>
				)}
			</ContainerLoading>
		</PageContainer>
	);
};
