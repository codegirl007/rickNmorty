import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { themeColors } from "./themeColors";
import { typography } from "./typography";
import type {} from "@mui/lab/themeAugmentation";

export const mainTheme = createTheme({
	palette,
	typography,
	spacing: ["0rem", "1.2rem", "2.4rem", "3.6rem", "4.8rem", "6rem, 7.2rem, 8.4rem, 9.6rem, 10.8rem"],
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					fontSize: "62.5%",
					height: "100%",
				},
				body: {
					fontSize: "1.6rem",
					margin: 0,
					height: "100%",
					backgroundImage: `url("${process.env.PUBLIC_URL}/assets/images/night_sky.avif")`,
				},
			},
		},
		MuiInputBase: {
			defaultProps: { autoComplete: "off" },
			styleOverrides: {
				root: {
					width: "100%",
					borderRadius: "0.4rem",
					height: "4.8rem",
					"input:-webkit-autofill, input:-webkit-autofill:focus": {
						transition: "background-color 600000s 0s, color 600000s 0s",
					},
				},
				input: {
					fontWeight: 400,
					color: themeColors.basic.body,
					"&::placeholder": {
						opacity: 1,
						WebkitTextFillColor: themeColors.greys.lightGrey,
					},
				},
			},
		},
		MuiTextField: {
			defaultProps: { autoComplete: "off" },
			styleOverrides: {
				root: {
					".MuiOutlinedInput-root, .MuiFilledInput-root": {
						backgroundColor: themeColors.basic.white,
					},
				},
			},
		},
		MuiOutlinedInput: {
			defaultProps: { notched: false, autoComplete: "off" },
			styleOverrides: {
				root: {
					backgroundColor: themeColors.basic.white,
					"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
						border: `0.1rem solid ${themeColors.primary.primaryGreen}`,
						boxShadow: `0rem 0rem 0.6rem ${themeColors.primary.primaryGreen}`,
					},
					"&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
						border: "none",
					},
					"&.Mui-error .MuiOutlinedInput-notchedOutline": {
						border: `0.1rem solid ${themeColors.error.errorRed}`,
						boxShadow: "none",
					},
				},
				notchedOutline: {
					border: `0.1rem solid ${themeColors.greys.lightGrey}`,
				},
			},
		},
		MuiInputLabel: {
			defaultProps: { shrink: true },
			styleOverrides: {
				root: {
					fontSize: "1.5rem",
					fontWeight: 400,
					display: "flex",
					alignItems: "center",
					transform: "translate(0, -0.2rem)",
					color: themeColors.basic.white,
					"&.Mui-focused": {
						color: themeColors.primary.primaryGreen,
					},
					"&.Mui-error": {
						color: themeColors.error.errorRed,
					},
					"& ~ div": {
						marginTop: "2.2rem",
					},
				},
			},
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					fontSize: "1.1rem",
					fontWeight: 400,
					position: "absolute",
					margin: "7rem 0 0 auto",
					"&.Mui-error": {
						color: themeColors.error.errorRed,
					},
					maxWidth: "28rem",
					overflow: "hidden",
					whiteSpace: "nowrap",
					textOverflow: "ellipsis",
				},
			},
		},
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiButton: {
			defaultProps: {
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					textTransform: "none",
					height: "4.8rem",
					fontWeight: 400,
					fontSize: "2rem",
					padding: "0.8rem 2rem",
					lineHeight: "initial",
					backgroundColor: themeColors.primary.primaryGreen,
					color: themeColors.basic.black,
					"&:hover": {
						boxShadow: `0rem 0rem 1.4rem ${themeColors.primary.primaryGreen}`,
						backgroundColor: themeColors.primary.lighterPrimaryGreen,
					},
				},
				sizeSmall: {
					height: "2.8rem",
					padding: "0.4rem 0.8rem",
					fontSize: "1.4rem",
				},
				sizeMedium: {
					height: "4.8rem",
					padding: "0.8rem 2rem",
					fontSize: "1.6rem",
				},
				startIcon: {
					marginRight: "0.5rem",
				},
				endIcon: {
					marginLeft: "0.5rem",
				},
			},
		},

		MuiPaginationItem: {
			styleOverrides: {
				root: {
					color: "white",
					margin: "2rem 0",
				},
			},
		},
		MuiTabPanel: {
			styleOverrides: {
				root: {
					padding: "2.4rem 0rem 0rem 2.4rem",
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					color: "white",
					".Mui-focused": {
						color: themeColors.primary.primaryGreen,
					},
				},
			},
		},
		MuiGrid: {
			styleOverrides: {
				container: {
					width: "100%",
					marginBottom: "2rem",
				},
				item: {
					paddingLeft: "0 !important",
					paddingRight: "3rem",
				},
			},
		},
		MuiSnackbarContent: {
			styleOverrides: {
				root: {
					backgroundColor: themeColors.error.errorRed,
					boxShadow: "0rem 1rem 2rem rgba(6, 61, 142, 0.1), 0rem 2rem 6rem rgba(6, 61, 142, 0.15);",
					height: "8.3rem",
					padding: 0,
					justifyContent: "space-between",
					width: "42rem",
					["@media (min-width:600px)"]: {
						minWidth: 0,
					},
					borderRadius: "0.4rem",
					overflow: "hidden",
				},
				message: {
					padding: 0,
					display: "flex",
					height: "100%",
					width: "auto",
				},
				action: {
					padding: 0,
					margin: 0,
					height: "100%",
					position: "relative",
					alignItems: "start",
				},
			},
		},
	},
});
