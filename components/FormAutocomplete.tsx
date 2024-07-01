import React from "react";
import { Controller, Control, FieldPath } from "react-hook-form";
import { Autocomplete, AutocompleteProps, TextField, TextFieldProps } from "@mui/material";

interface Option {
	value: string;
	label: string;
}

interface AutocompleteFieldProps<T extends Record<string, any>> {
	name: FieldPath<T>;
	label: string;
	variant?: "standard" | "outlined" | "filled" | undefined;
	errorMessage?: string | undefined;
	type?: React.InputHTMLAttributes<unknown>["type"];
	control: Control<T>;
	required: TextFieldProps["required"];
	options: Option[];
}

export const FormAutocomplete = <T extends Record<string, any>>({
	control,
	name,
	variant,
	label,
	options,
	required,
	errorMessage,
	...others
}: AutocompleteFieldProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, ...rest } }) => (
				<Autocomplete
					isOptionEqualToValue={(option, value: string) => option.value === value}
					multiple={false}
					sx={{
						width: "70%",
					}}
					{...rest}
					onChange={(e, newValue) => {
						onChange(newValue?.value ?? "");
					}}
					options={options}
					getOptionLabel={(optionValue: any) => {
						let foundOption;
						if (typeof optionValue === "object") {
							foundOption = options.find(({ value }) => value === optionValue.value);
						} else {
							foundOption = options.find(({ value }) => value === optionValue);
						}
						return foundOption?.label ?? "";
					}}
					renderInput={(params) => {
						return (
							<TextField
								helperText={errorMessage}
								error={Boolean(errorMessage)}
								{...params}
								label={label}
								name={name}
								variant="outlined"
								fullWidth
							/>
						);
					}}
				/>
			)}
		/>
	);
};

export default FormAutocomplete;
