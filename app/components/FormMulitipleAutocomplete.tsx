import React from "react";
import { Controller, Control, FieldPath } from "react-hook-form";
import { Autocomplete, TextField, Chip, TextFieldProps } from "@mui/material";

interface MultipleAutocompleteFieldProps<T extends Record<string, any>> {
	name: FieldPath<T>;
	label: string;
	variant?: "standard" | "outlined" | "filled" | undefined;
	errorMessage?: string | undefined;
	type?: React.InputHTMLAttributes<unknown>["type"];
	control: Control<T>;
	required: TextFieldProps["required"];
	options: string[];
}
export const FormMultipleAutocomplete = <T extends Record<string, any>>({
	control,
	name,
	variant,
	label,
	options,
	required,
	errorMessage,
	...others
}: MultipleAutocompleteFieldProps<T>) => {
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
						options={options}
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
								helperText={errorMessage}
								error={Boolean(errorMessage)}
								{...params}
								label="Platform"
								placeholder="platform"
								name={name}
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
};

export default FormMultipleAutocomplete;

const platform = ["Steam", "Epic Games", "Ubisoft", "Batlle.net", "Other"];
