import { TypographyOptions } from "@mui/material/styles/createTypography";
import { themeColors } from "./themeColors";

export const typography: TypographyOptions = {
	fontFamily: "Helvetica",
	htmlFontSize: 10,
	fontWeightRegular: 400,
	h1: {
		fontSize: "4rem",
		fontWeight: 500,
		lineHeight: "4.8rem",
		color: "white",
	},
	h2: {
		fontSize: "3.2rem",
		fontWeight: 500,
		lineHeight: "3.8rem",
	},
	h3: {
		fontSize: "3.2rem",
		fontWeight: 500,
		lineHeight: "3.2rem",
		marginBottom: "3.2rem",
		color: themeColors.primary.primaryGreen,
	},
	h4: {
		fontSize: "2rem",
		fontWeight: 500,
		lineHeight: "2.8rem",
		margin: "0.6rem 0",
		color: "white",
	},
	h5: {
		fontSize: "1.2rem",
		fontWeight: 300,
		lineHeight: "2rem",
		color: themeColors.basic.white,
		marginTop: "0.2rem",
	},
	h6: {
		fontSize: "1.6rem",
		fontWeight: 500,
		lineHeight: "2rem",
		marginBottom: "0.8rem",
	},
	body1: {
		fontSize: "1.4rem",
		fontWeight: 400,
	},
	body2: {
		fontSize: "1.2rem",
		fontWeight: 400,
	},
};
