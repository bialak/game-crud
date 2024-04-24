import { Button, Stack, TextField, Autocomplete } from "@mui/material";
import Link from "next/link";
import createGame from "@/actions/createGame";

export default function Create() {
	return (
		<form action={createGame}>
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
				<TextField
					InputLabelProps={{ htmlFor: "outlined-multiline-flexible" }}
					name="game_name"
					id="outlined-multiline-flexible"
					label="Game Name"
					sx={{ width: "70%" }}
				/>
				<Autocomplete
					options={typeOfGames}
					sx={{ width: "70%" }}
					renderInput={(params) => (
						<TextField {...params} label="Type Of Game" name="type_of_game" />
					)}
				/>
				<Autocomplete
					options={owned}
					sx={{ width: "70%" }}
					renderInput={(params) => <TextField {...params} label="Owned?" name="owned" />}
				/>
				<Autocomplete
					options={status}
					sx={{ width: "70%" }}
					renderInput={(params) => <TextField {...params} label="Status" name="status" />}
				/>
				<Autocomplete
					multiple
					id="tags-outlined"
					options={platform}
					sx={{ width: "70%" }}
					getOptionLabel={(option) => option}
					filterSelectedOptions
					renderInput={(params) => (
						<TextField {...params} label="Platform" placeholder="Platform" name="platform" />
					)}
				/>
			</Stack>
			<Button
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

const owned = ["Yes", "No"];

const status = ["I'm playing", "I finished", "On Hold", "Abandoned", "Planing"];

const platform = ["Steam", "Epic Games", "Ubisoft", "Batlle.net", "Other"];
