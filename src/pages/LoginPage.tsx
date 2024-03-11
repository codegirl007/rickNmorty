import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { TextField, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAuthCheckAction } from "../actions/useAuthCheckAction";
import { themeColors } from "../styles/mainTheme/themeColors";
import { Logo } from "../components/layout/Logo";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../components/layout/PageContainer";

const Styled = {
	LoginPageContainer: styled("div")({
		width: "38.8rem",
		boxShadow: "inset 1rem 1rem 1rem rgba(255, 255, 255, 0.1)",
		padding: "4rem",
		borderRadius: "0.8rem",
		backgroundColor: themeColors.basic.body,
	}),
	Button: styled(Button)({
		marginTop: "2rem",
	}),
};

export type LoginType = {
	username: string;
	password: string;
};

type Props = {
	authorized: boolean;
};

export const LoginPage = (props: Props): JSX.Element => {
	const { matchUser } = useAuthCheckAction();
	const navigate = useNavigate();

	useEffect(() => {
		if (props.authorized) {
			navigate("/", { replace: true });
		}
	}, [props.authorized]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginType>({
		mode: "onChange",
	});

	const onSubmit = (formData: LoginType): void => {
		matchUser(formData.username, formData.password);
	};
	return (
		<PageContainer centered>
			<Logo max />
			<Styled.LoginPageContainer>
				<Typography variant="h3">Log In</Typography>
				<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
					<TextField
						label="User Name"
						variant="outlined"
						autoFocus
						autoComplete="off"
						fullWidth
						type="text"
						placeholder="user name"
						{...register("username", {
							required: "Email is required",
						})}
						error={Boolean(errors.username)}
						helperText={errors.username?.message}
						id="email"
						sx={{ marginBottom: "2.2rem" }}
					/>
					<TextField
						label="Password"
						variant="outlined"
						fullWidth
						autoComplete="off"
						type="password"
						{...register("password", {
							required: "Password is required",
						})}
						error={Boolean(errors.password)}
						helperText={errors.password?.message}
						id="password"
						sx={{ marginBottom: "2.2rem" }}
					/>

					<Styled.Button variant="contained" type="submit">
						Log In
					</Styled.Button>
				</form>
			</Styled.LoginPageContainer>
		</PageContainer>
	);
};
