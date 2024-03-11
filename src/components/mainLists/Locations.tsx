import React, { useMemo } from "react";
import { ApiRequests } from "../../utils/ApiRequestsClass";
import { useQuery } from "@tanstack/react-query";
import { ContainerLoading } from "../loading/LoadingComponent";
import { LocationsResponseType } from "../../types/ApiTypes";
import { CustomPagination } from "../pagination/CustomPagination";
import { AscDescType, filterStore } from "../../stores/filterStore";
import { useShallow } from "zustand/react/shallow";
import { Grid } from "@mui/material";
import { LocationCard } from "../cards/LocationCard";

export const Locations = (): JSX.Element => {
	const { type, page, locAscDesc } = filterStore.useStore(
		useShallow((state) => ({ type: state.type, page: state.page, locAscDesc: state.locAscDesc }))
	);

	const { data, isPending } = useQuery<LocationsResponseType, Error>({
		queryKey: ["locations", page, type],
		queryFn: () => ApiRequests.getLocations(page, type),
	});

	const sorted = useMemo(() => {
		if (locAscDesc === AscDescType.ASC) {
			return data?.results.sort((a, b) => new Date(a.created).valueOf() - new Date(b.created).valueOf());
		} else if (locAscDesc === AscDescType.DESC) {
			return data?.results.sort((a, b) => new Date(b.created).valueOf() - new Date(a.created).valueOf());
		}
		return data?.results;
	}, [data, locAscDesc]);

	return (
		<ContainerLoading loading={isPending}>
			<Grid container spacing={2}>
				{sorted?.map((location) => (
					<Grid item xs={2} key={location.id}>
						<LocationCard location={location} />
					</Grid>
				))}
			</Grid>
			<CustomPagination count={data?.info.pages} pageNumber={page} />
		</ContainerLoading>
	);
};
