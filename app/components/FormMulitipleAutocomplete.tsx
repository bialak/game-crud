import React from "react";
import { Controller } from "react-hook-form";
import { Autocomplete, TextField, Chip } from "@mui/material";

function FormMultipleAutocomplete(props) {
	const { name, label, control } = props;
	return (
		<>
			<Controller
				control={control}
				name={name}
				rules={{
					required: "Please pick one",
				}}
				render={({ field }) => (
					<Autocomplete
						sx={{
							width: "70%",
						}}
						multiple
						disableCloseOnSelect
						options={platform}
						renderOption={(props, option) => {
							return (
								<li {...props} key={option}>
									{option}
								</li>
							);
						}}
						renderTags={(tagValue, getTagProps) => {
							return tagValue.map((option, index) => (
								<Chip {...getTagProps({ index })} key={option} label={option} />
							));
						}}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Platform"
								placeholder="platform"
								name={name}
								// helperText={errors.industries?.message}
								// error={!!errors.industries}
							/>
						)}
						{...field}
						onChange={(event, values) => {
							field.onChange(values);
						}}
					/>
				)}
			/>
			;
		</>
	);
}

export default FormMultipleAutocomplete;

const platform = ["Steam", "Epic Games", "Ubisoft", "Batlle.net", "Other"];
