import { FieldError, UseFormRegister } from "react-hook-form";

export type FormData = {
	// id: number;
	game_name: string;
	type_of_game: string;
	owned: string;
	status: string;
	platform: string;
};

export type FormFieldProps = {
	type: string;
	placeholder: string;
	name: ValidFieldNames;
	register: UseFormRegister<FormData>;
	error: FieldError | undefined;
	valueAsNumber?: boolean;
};

export type ValidFieldNames = "game_name" | "owned" | "type_of_game" | "status" | "platform";
