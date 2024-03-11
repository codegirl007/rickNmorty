import React from "react";
import { styled } from "@mui/material/styles";
import { Button, IconButton, MenuItem, Select } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { AscDescType, filterStore } from "../../stores/filterStore";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Styled = {
	Filter: styled("div")({
		width: "100%",
		height: "10rem",
		backgroundColor: "brown",
		position: "fixed",
		display: "flex",
		alignItems: "center",
		marginTop: "20rem",
	}),
	Form: styled("form")({
		display: "flex",
		justifyContent: "space-between",
	}),
	Select: styled(Select)({
		marginRight: "4rem",
		width: "20rem",
	}),
};

const TYPES = [
	"all",
	"planet",
	"space station",
	"dimension",
	"microverse",
	"tv",
	"resort",
	"game",
	"customs",
	"machine",
	"mount",
	"unknown",
];

type Props = {
	ascDesc?: AscDescType;
};

export const LocationForm = (props: Props): JSX.Element => {
	const { control, handleSubmit } = useForm();

	return (
		<Styled.Form onSubmit={handleSubmit((data) => filterStore.setLocationFilter(data.TYPE))}>
			<Controller
				name={"TYPE"}
				control={control}
				defaultValue={"all"}
				render={({ field: { onChange, value } }) => (
					<Styled.Select onChange={onChange} value={value}>
						{TYPES.map((type) => (
							<MenuItem key={type} value={type}>
								{type}
							</MenuItem>
						))}
					</Styled.Select>
				)}
			/>
			<IconButton
				onClick={() => {
					filterStore.setLocAscDesc(AscDescType.DESC);
				}}
			>
				<ArrowDownwardIcon htmlColor={props.ascDesc === AscDescType.DESC ? "green" : "white"} />
			</IconButton>
			<IconButton
				onClick={() => {
					filterStore.setLocAscDesc(AscDescType.ASC);
				}}
			>
				<ArrowUpwardIcon htmlColor={props.ascDesc === AscDescType.ASC ? "green" : "white"} />
			</IconButton>

			<Button type="submit">Send</Button>
		</Styled.Form>
	);
};
