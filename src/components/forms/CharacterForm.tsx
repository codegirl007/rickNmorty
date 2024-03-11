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

const STATUS = ["all", "alive", "dead", "unknown"];
const SPECIES = ["all", "human", "alien", "mythological", "robot", "humanoid", "cronenberg", "disease", "unknown"];
const GENDER = ["all", "male", "female", "genderless", "unknown"];

type Props = {
	ascDesc?: AscDescType;
};

export const CharacterForm = (props: Props): JSX.Element => {
	const { control, handleSubmit } = useForm();

	return (
		<Styled.Form onSubmit={handleSubmit((data) => filterStore.setCharacterFilter(data.STATUS, data.GENDER, data.SPECIES))}>
			<Controller
				name={"STATUS"}
				control={control}
				defaultValue={"all"}
				render={({ field: { onChange, value } }) => (
					<Styled.Select onChange={onChange} value={value}>
						{STATUS.map((status) => (
							<MenuItem key={status} value={status}>
								{status}
							</MenuItem>
						))}
					</Styled.Select>
				)}
			/>
			<Controller
				name={"SPECIES"}
				control={control}
				defaultValue={"all"}
				render={({ field: { onChange, value } }) => (
					<Styled.Select onChange={onChange} value={value}>
						{SPECIES.map((species) => (
							<MenuItem key={species} value={species}>
								{species}
							</MenuItem>
						))}
					</Styled.Select>
				)}
			/>
			<Controller
				name={"GENDER"}
				control={control}
				defaultValue={"all"}
				render={({ field: { onChange, value } }) => (
					<Styled.Select onChange={onChange} value={value}>
						{GENDER.map((gender) => (
							<MenuItem key={gender} value={gender}>
								{gender}
							</MenuItem>
						))}
					</Styled.Select>
				)}
			/>
			<IconButton
				onClick={() => {
					filterStore.setCharAscDesc(AscDescType.DESC);
				}}
			>
				<ArrowDownwardIcon htmlColor={props.ascDesc === AscDescType.DESC ? "green" : "white"} />
			</IconButton>
			<IconButton
				onClick={() => {
					filterStore.setCharAscDesc(AscDescType.ASC);
				}}
			>
				<ArrowUpwardIcon htmlColor={props.ascDesc === AscDescType.ASC ? "green" : "white"} />
			</IconButton>
			<Button type="submit">Send</Button>
		</Styled.Form>
	);
};
