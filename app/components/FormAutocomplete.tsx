import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";

function FormAutocomplete(props) {
	const { name, label, control, options } = props;

	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, ...rest } }) => (
				<Autocomplete
					sx={{
						width: "70%",
					}}
					{...rest}
					onChange={(e, newValue) => {
						onChange(newValue);
					}}
					options={options}
					isOptionEqualToValue={(option, value) => option?.label === value?.label}
					renderInput={(params) => (
						<TextField {...params} label={label} name={name} variant="outlined" fullWidth />
					)}
				/>
			)}
		/>
	);
}

export default FormAutocomplete;
