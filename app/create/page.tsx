"use client";
import React from "react";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "../components/FormInput";
import FormAutocomplete from "../components/FormAutocomplete";
import FormMultipleAutocomplete from "../components/FormMulitipleAutocomplete";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { OwnedOptions, StatusOptions } from "../enums";

const ownedOptions = [
	{
		value: OwnedOptions.Yes,
		label: "Yes",
	},
	{
		value: OwnedOptions.No,
		label: "No",
	},
];

const statusOptions = [
	{
		value: StatusOptions.PLAYING,
		label: "I'm playing",
	},
	{
		value: StatusOptions.FINISHED,
		label: "I finished",
	},
	{
		value: StatusOptions.ONHOLD,
		label: "On Hold",
	},
	{
		value: StatusOptions.ABONDEND,
		label: "Abandoned",
	},
	{
		value: StatusOptions.PLANING,
		label: "Planing",
	},
];

interface GameFormValues {
	game_name: string;
	type_of_game:
		| "RPG"
		| "Platform"
		| "MMORPG"
		| "Shooter"
		| "Survival"
		| "Battle Royal"
		| "Racing"
		| "Sports"
		| "Simulation"
		| "MMO"
		| "Horror"
		| "Point and Click "
		| "Cooperative ";
	owned: OwnedOptions.Yes | OwnedOptions.No;
	status:
		| StatusOptions.PLAYING
		| StatusOptions.FINISHED
		| StatusOptions.ONHOLD
		| StatusOptions.ABONDEND
		| StatusOptions.PLANING;
	platform: string[];
}

export default function Create(props) {
	const validationSchema = yup.object().shape({
		game_name: yup
			.string()
			.required("Name Validation Field is Required")
			.min(5, "Must be more that 5 letters")
			.max(255, "tile is too long"),
		type_of_game: yup
			.string()
			.oneOf(
				[
					"RPG",
					"Platform",
					"MMORPG",
					"Shooter",
					"Survival",
					"Battle Royal",
					"Racing",
					"Sports",
					"Simulation",
					"MMO",
					"Horror",
					"Point and Click ",
					"Cooperative ",
				],
				"Please pick one option"
			)
			.required("Select Validation Field is Required"),
		owned: yup
			.string()
			.oneOf([OwnedOptions.Yes, OwnedOptions.No], "Please pick one option")
			.required("Select Validation Field is Required"),
		status: yup
			.string()
			.oneOf(
				[
					StatusOptions.PLAYING,
					StatusOptions.FINISHED,
					StatusOptions.ONHOLD,
					StatusOptions.ABONDEND,
					StatusOptions.PLANING,
				],
				"Please pick one option"
			)
			.required("Select Validation Field is Required"),
		platform: yup
			// .array().of(yup.string()),
			.array()
			// .of(yup.string().oneOf(["Steam", "Epic Games", "Ubisoft", "Batlle.net", "Other"]))
			.required("Multi Select Validation Field required"),
	});

	const methods = useForm<GameFormValues>({
		defaultValues: {
			game_name: "",
			type_of_game: "RPG",
			owned: OwnedOptions.No,
			status: StatusOptions.PLANING,
			platform: ["Steam"],
		},
		resolver: yupResolver(validationSchema),
		shouldFocusError: true,
		criteriaMode: "all",
		reValidateMode: "onChange",
	});
	const {
		handleSubmit,
		control,
		formState: { errors },
		watch,
	} = methods;
	const errorMsg = errors["game_name"]?.message;
	const ownedValue = watch("owned");
	function createGame(data) {
		// event.preventDefault();
		// const data = {};
		// for (const [name, value] of new FormData(event.target)) {
		// 	data[name as string] = value;
		// }
		// fetch("api/games", {
		// 	method: "POST",
		// 	body: JSON.stringify(data),
		// 	headers: {
		// 		"Content-type": "application/json; charset=UTF-8",
		// 	},
		// }).then(async (response) => await console.log(response.json()));
	}
	return (
		<>
			<FormProvider {...methods}>
				<form>
					<Stack spacing={2} justifyContent="center" alignItems="center">
						<h1 className="pageTitle" style={{ width: "100%" }}>
							Create Game
						</h1>
						<Link href="/">
							<Button
								variant="contained"
								size="small"
								sx={{
									bgcolor: "main",
									":hover": { backgroundColor: "dark" },
								}}
							>
								Back
							</Button>
						</Link>
						<FormInput
							control={control}
							name="game_name"
							label="Game Name"
							required
							errorMessage={errors["game_name"]?.message}
						/>
						{/* <FormAutocomplete
							control={control}
							name="type_of_game"
							label="Type Of Game"
							required={false}
							errorMessage={errors["type_of_game"]?.message}
							options={typeOfGames}
						/> */}
						<FormAutocomplete
							control={control}
							name="owned"
							label="Owned?"
							required={false}
							errorMessage={errors["owned"]?.message}
							options={ownedOptions}
						/>
						<FormAutocomplete
							control={control}
							name="status"
							label="Status"
							required={false}
							errorMessage={errors["status"]?.message}
							options={statusOptions}
						/>
						{/* <FormMultipleAutocomplete
							control={control}
							required={false}
							errorMessage={errors["platform"]?.message}
							name="platform"
						/> */}
					</Stack>
					<Button
						onClick={handleSubmit(createGame)}
						type="submit"
						variant="contained"
						size="large"
						sx={{
							bgcolor: "main",
							":hover": { backgroundColor: "dark" },
							margin: "5px",
						}}
					>
						Create
					</Button>
				</form>
			</FormProvider>
		</>
	);
}

const typeOfGames = [
	"RPG",
	"Platform",
	"MMORPG",
	"Shooter",
	"Survival",
	"Battle Royal",
	"Racing",
	"Sports",
	"Simulation",
	"MMO",
	"Horror",
	"Point and Click ",
	"Cooperative ",
];

const status = ["I'm playing", "I finished", "On Hold", "Abandoned", "Planing"];

const platform = ["Steam", "Epic Games", "Ubisoft", "Batlle.net", "Other"];

// const ownedOptions = [
// 	{
// 		value: OwnedOptions.Yes,
// 		label: "Yes",
// 	},
// 	{
// 		value: OwnedOptions.No,
// 		label: "No",
// 	},
// ];
