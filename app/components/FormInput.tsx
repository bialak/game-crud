import React, { FunctionComponent } from "react";
import { Controller, Control, FieldPath } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

interface FormInputProps<T extends Record<string, any>> {
	name: FieldPath<T>;
	label: string;
	variant?: "standard" | "outlined" | "filled" | undefined;
	errorMessage?: string | undefined;
	type?: React.InputHTMLAttributes<unknown>["type"];
	control: Control<T>;
	required: TextFieldProps["required"];
}

export const FormInput = <T extends Record<string, any>>({
	control,
	name,
	variant,
	type = "text",
	label,
	required,
	errorMessage,
	...others
}: FormInputProps<T>) => {
	return (
		<>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<TextField
						label={label}
						type={type}
						id="outlined-multiline-flexible"
						sx={{ width: "70%" }}
						variant={variant || "outlined"}
						required={required}
						error={Boolean(errorMessage)}
						helperText={errorMessage}
						{...field}
						{...others}
					/>
				)}
			/>
		</>
	);
};

export default FormInput;
