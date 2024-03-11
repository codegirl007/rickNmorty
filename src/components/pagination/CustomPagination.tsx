import React from "react";
import { Pagination } from "@mui/material";
import { filterStore } from "../../stores/filterStore";

type Props = {
	count?: number;
	pageNumber: number;
};

export const CustomPagination = (props: Props): JSX.Element => {
	return (
		<Pagination
			count={props.count}
			page={props.pageNumber}
			onChange={(_event, value: number) => filterStore.setPage(value)}
			variant="outlined"
			color="primary"
			size="small"
		/>
	);
};
