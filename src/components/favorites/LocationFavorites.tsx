import React from "react";
import { ApiRequests } from "../../utils/ApiRequestsClass";
import { useQuery } from "@tanstack/react-query";
import { favoriteStore } from "../../stores/favoriteStore";
import { Button, Grid, Typography } from "@mui/material";
import { Location } from "../../types/ApiTypes";
import { LocationCard } from "../cards/LocationCard";
import { ContainerLoading } from "../loading/LoadingComponent";

export const LocationFavorites = (): JSX.Element => {
	const locationIds = favoriteStore.useStore((state) => state.favoriteLocationsId);

	const { data: location, isPending } = useQuery<Location[] | Location, Error>({
		queryKey: ["locationFavorites", locationIds],
		queryFn: () => ApiRequests.getMultipleLocations(locationIds),
		enabled: locationIds.length > 0,
	});

	if (locationIds.length === 0) {
		return <Typography variant="h4">You have no favorites</Typography>;
	}

	return (
		<ContainerLoading loading={isPending}>
			{Array.isArray(location) ? (
				<Grid container spacing={2}>
					{location?.map((location) => (
						<Grid item xs={2} key={location.id}>
							<LocationCard location={location} />
						</Grid>
					))}
				</Grid>
			) : (
				location && (
					<Grid container spacing={2}>
						<Grid item xs={2} key={location.id}>
							<LocationCard location={location} />
						</Grid>
					</Grid>
				)
			)}
			<Button onClick={() => favoriteStore.resetFavoriteLocations()}>RESET LOCATIONS</Button>
		</ContainerLoading>
	);
};
