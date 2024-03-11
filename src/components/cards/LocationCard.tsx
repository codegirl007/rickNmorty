import React from "react";
import { Location } from "../../types/ApiTypes";
import { Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { themeColors } from "../../styles/mainTheme/themeColors";
import { DateConstants } from "../../model/Constants";
import { format } from "date-fns";
import BoyIcon from "@mui/icons-material/Boy";
import { HBox } from "../layout/HBox";

const Styled = {
	Card: styled("div")({
		backgroundColor: themeColors.basic.body,
		boxShadow: "inset -1rem -1rem 1rem rgba(255, 255, 255, 0.1)",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		borderRadius: "1rem",
		padding: "1rem",
		maxWidth: "30rem",
		cursor: "pointer",
	}),
	Title: styled(Typography)({
		backgroundColor: themeColors.primary.primaryGreen,
		borderRadius: "0.7rem",
		marginTop: "1rem",
		padding: "0.3rem 1rem",
	}),
};

type Props = {
	location: Location;
	action?: () => void;
};

export const LocationCard = (props: Props): JSX.Element => {
	const navigate = useNavigate();

	return (
		<Styled.Card
			onClick={() => {
				navigate(`/location/${props.location.id}`);
				props.action && props.action();
			}}
		>
			<Styled.Title>{props.location.name}</Styled.Title>
			<Typography variant="h5">{props.location.type}</Typography>
			<Typography variant="h5">{props.location.dimension}</Typography>
			<Typography variant="h5">{format(new Date(props.location.created), DateConstants.DATE_AND_YEAR)}</Typography>
			<HBox>
				<BoyIcon htmlColor="white" />
				<Typography variant="h5">
					<Typography variant="h5">{props.location.residents.length}</Typography>
				</Typography>
			</HBox>
		</Styled.Card>
	);
};
