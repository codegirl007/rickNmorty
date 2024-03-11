import { Button, Typography, styled } from "@mui/material";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Location } from "../../types/ApiTypes";
import { ApiRequests } from "../../utils/ApiRequestsClass";
import { counterStore } from "../../stores/counterStore";
import { VBox } from "../layout/VBox";
import { LocationCard } from "../cards/LocationCard";
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

const NUMBER_OF_LOCATIONS = 126;

export const LocationCounter = (): JSX.Element => {
	const locationCounterStored = counterStore.useStore((state) => state.locationCounter);
	const locationIdStored = counterStore.useStore((state) => state.locationId);

	const { count, randomId, clearCounter } = useCounterActions(NUMBER_OF_LOCATIONS, locationCounterStored, locationIdStored);

	const { data: location, isPending } = useQuery<Location, Error>({
		queryKey: ["location", randomId],
		queryFn: () => ApiRequests.getLocationDetail(String(randomId)),
	});

	return (
		<Styled.Block>
			<VBox>
				<Styled.Button onClick={clearCounter}>RANDOMIZE</Styled.Button>
				<Typography variant="h1">{count}</Typography>
			</VBox>
			<ContainerLoading loading={isPending}>
				{location && <LocationCard location={location} action={() => counterStore.setLocationCounter(count, location.id)} />}
			</ContainerLoading>
		</Styled.Block>
	);
};
