import React, { useMemo } from "react";
import { ApiRequests } from "../../utils/ApiRequestsClass";
import { useQuery } from "@tanstack/react-query";
import { ContainerLoading } from "../loading/LoadingComponent";
import { CharacterResponseType } from "../../types/ApiTypes";
import { CustomPagination } from "../pagination/CustomPagination";
import { Grid } from "@mui/material";
import { AscDescType, filterStore } from "../../stores/filterStore";
import { useShallow } from "zustand/react/shallow";
import { CharacterCard } from "../cards/CharacterCard";

export const Characters = (): JSX.Element => {
	const { livingStatus, gender, species, page, charAscDesc } = filterStore.useStore(
		useShallow((state) => ({
			livingStatus: state.livingStatus,
			gender: state.gender,
			species: state.species,
			page: state.page,
			charAscDesc: state.charAscDesc,
		}))
	);

	const { data, isPending } = useQuery<CharacterResponseType, Error>({
		queryKey: ["characters", page, livingStatus, gender, species],
		queryFn: () => ApiRequests.getCharacters(page, livingStatus, gender, species),
	});

	const sorted = useMemo(() => {
		if (charAscDesc === AscDescType.ASC) {
			return data?.results.sort((a, b) => new Date(a.created).valueOf() - new Date(b.created).valueOf());
		} else if (charAscDesc === AscDescType.DESC) {
			return data?.results.sort((a, b) => new Date(b.created).valueOf() - new Date(a.created).valueOf());
		}
		return data?.results;
	}, [data, charAscDesc]);

	return (
		<ContainerLoading loading={isPending}>
			<Grid container spacing={2}>
				{sorted?.map((character) => (
					<Grid item xs={2} key={character.id}>
						<CharacterCard character={character} />
					</Grid>
				))}
			</Grid>
			<CustomPagination count={data?.info.pages} pageNumber={page} />
		</ContainerLoading>
	);
};
