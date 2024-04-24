import { Button } from "@mui/material";
import Link from "next/link";

export default function MainPage() {
	return (
		<>
			<h1 className="pageTitle" style={{ marginBlockStart: "0%" }}>
				Games Progress Tracker
			</h1>
			<Link href="/create">
				<Button
					variant="contained"
					size="large"
					sx={{
						bgcolor: "main",
						":hover": { backgroundColor: "dark" },
						position: "absolute",
						left: "50%",
						transform: "translate(-50%,0)",
					}}
				>
					Add Game
				</Button>
			</Link>
		</>
	);
}
