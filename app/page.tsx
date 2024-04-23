"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import ReactVirtualizedTable from "@/components/GameTable";

export default function MainPage() {
	async function showGames() {
		const response = await fetch("api/games");
		const games = await response.json();
		return games;
	}
	showGames();

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
				{/* {ReactVirtualizedTable()} */}
			</Link>
		</>
	);
}
