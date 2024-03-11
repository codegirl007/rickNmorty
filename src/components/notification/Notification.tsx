import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SnackbarContent from "@mui/material/SnackbarContent";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { hideNotification } from "../../actions/notificationActions";
import { themeColors } from "../../styles/mainTheme/themeColors";
import { NotificationInfo } from "../../types/NotificationInfoType";
import { ErrorIcon } from "../../images/icons/ErrorIcon";

const Styled = {
	SnackBarIconContainer: styled("div")({
		backgroundColor: themeColors.error.errorRed,
		width: "4.8rem",
		minWidth: "4.8rem",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}),
	Message: styled(Typography)({
		color: "white",
		overflow: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
	}),
	MessageContainer: styled("div")({
		padding: "1.6rem",
		display: "inline-block",
		flexDirection: "column",
		width: "33rem",
	}),
};

type Props = {
	notification: NotificationInfo;
};

export const Notification = (props: Props): JSX.Element => {
	const onClose = (): void => {
		hideNotification(props.notification);
	};

	return (
		<SnackbarContent
			key={props.notification.id}
			message={
				<>
					<Styled.SnackBarIconContainer>
						<ErrorIcon />
					</Styled.SnackBarIconContainer>
					<Styled.MessageContainer>
						<Styled.Message variant="body1">{props.notification.message}</Styled.Message>
					</Styled.MessageContainer>
				</>
			}
			action={[
				<IconButton key="close" aria-label="Close" onClick={onClose} size="large">
					<CloseIcon sx={{ fontSize: "1.6rem", color: "white" }} />
				</IconButton>,
			]}
			sx={{ marginTop: "1.6rem" }}
		/>
	);
};
