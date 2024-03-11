import React from "react";
import { Character } from "../../types/ApiTypes";
import { Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { themeColors } from "../../styles/mainTheme/themeColors";
import { DateConstants } from "../../model/Constants";
import { format } from "date-fns";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { HBox } from "../layout/HBox";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styledTransientPropsOptions } from "../../utils/styledTransientPropsOptions";
import { VBox } from "../layout/VBox";

type ImageProp = {
	$detail?: boolean;
};

type CardProp = {
	$detail?: boolean;
};

const Styled = {
	Image: styled(
		"img",
		styledTransientPropsOptions
	)<ImageProp>((props) => ({
		objectFit: "contain",
		width: props.$detail ? "22rem" : "100%",
		height: "auto",
		borderRadius: "1rem",
	})),
	Card: styled(
		"div",
		styledTransientPropsOptions
	)<CardProp>((props) => ({
		backgroundColor: themeColors.basic.body,
		boxShadow: "inset -1rem -1rem 1rem rgba(255, 255, 255, 0.1)",
		display: "flex",
		flexDirection: props.$detail ? "row" : "column",
		alignItems: "center",
		borderRadius: "1rem",
		padding: "1rem",
		cursor: "pointer",
		maxWidth: props.$detail ? "50rem" : "unset",
		margin: props.$detail ? "2rem 0" : "0",
	})),
	Title: styled(Typography)({
		backgroundColor: themeColors.primary.primaryGreen,
		borderRadius: "0.7rem",
		marginTop: "1rem",
		padding: "0.3rem 1rem",
	}),
};

type Props = {
	character: Character;
	action?: () => void;
	detail?: boolean;
	noPict?: boolean;
};

export const CharacterCard = (props: Props): JSX.Element => {
	const navigate = useNavigate();
	return (
		<Styled.Card
			onClick={() => {
				navigate(`/character/${props.character.id}`);
				props.action && props.action();
			}}
			$detail={props.detail}
		>
			{!props.noPict && (
				<Styled.Image src={props.character.image} alt={"img" + props.character.id} loading="lazy" $detail={props.detail} />
			)}

			<VBox sx={{ alignItems: `${props.detail ? "start" : "center"}`, marginLeft: "2rem}" }}>
				<Styled.Title>{props.character.name}</Styled.Title>
				<Typography variant="h5">{props.character.status}</Typography>
				<Typography variant="h5">{props.character.species}</Typography>
				<Typography variant="h5">{props.character.gender}</Typography>
				<HBox>
					{props.detail && <CalendarMonthIcon htmlColor="white" />}
					<Typography variant="h5">{format(new Date(props.character?.created), DateConstants.DATE_AND_YEAR)}</Typography>
				</HBox>
				{props.detail && (
					<HBox>
						<LocationOnIcon htmlColor="white" />
						<Typography variant="h5">
							<Typography variant="h5">{props.character.location.name}</Typography>
						</Typography>
					</HBox>
				)}
			</VBox>
		</Styled.Card>
	);
};
