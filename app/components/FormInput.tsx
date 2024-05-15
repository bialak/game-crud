import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

function FormInput(props) {
	const { name, label, control, required, value } = props;

	return (
		<>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<TextField
						control={control}
						label={label}
						id="outlined-multiline-flexible"
						sx={{ width: "70%" }}
						required={required}
						// InputLabelProps={{
						// 	className: required ? "required-label" : "",

						// error={isError}						// 	required: required || false,
						// }}
						helperText={"ee"}
						{...field}
						{...props}
					/>
				)}
			/>
		</>
	);
}

export default FormInput;
