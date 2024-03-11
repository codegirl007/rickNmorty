import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiRequests } from "../../utils/ApiRequestsClass";
import { Button, Typography, styled } from "@mui/material";
import { Location } from "../../types/ApiTypes";
import { favoriteStore } from "../../stores/favoriteStore";
import { themeColors } from "../../styles/mainTheme/themeColors";
import { HBox } from "../../components/layout/HBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { PageContainer } from "../../components/layout/PageContainer";
import { LocationCard } from "../../components/cards/LocationCard";
import { ContainerLoading } from "../../components/loading/LoadingComponent";

const Styled = {
	Button: styled(Button)({
		margin: "2rem 0",
	}),
	HBox: styled(HBox)({
		marginTop: "1rem",
	}),
};

export const LocationDetail = (): JSX.Element => {
	const { locationId } = useParams<string>();
	const favoriteLocationsId = favoriteStore.useStore((state) => state.favoriteLocationsId);
	const navigate = useNavigate();

	const { data: location, isPending } = useQuery<Location, Error>({
		queryKey: ["location", locationId],
		queryFn: () => ApiRequests.getLocationDetail(locationId),
	});

	const isMatched = useMemo(() => {
		return locationId && favoriteLocationsId.find((id) => String(id) === locationId);
	}, [favoriteLocationsId]);

	return (
		<PageContainer>
			<ContainerLoading loading={isPending}>
				<Styled.Button onClick={() => navigate(-1)}>BACK</Styled.Button>
				{location && <LocationCard location={location} />}
				{isMatched ? (
					<Styled.HBox>
						<Typography variant="h4">Added to favorites</Typography>
						<CheckBoxIcon htmlColor={themeColors.primary.primaryGreen} sx={{ marginLeft: "1rem" }} />
					</Styled.HBox>
				) : (
					<Styled.Button
						onClick={() => location?.id && favoriteStore.addFavoriteLocationId(location?.id)}
						startIcon={<FavoriteIcon />}
					>
						Add to Favorite
					</Styled.Button>
				)}
			</ContainerLoading>
		</PageContainer>
	);
};
