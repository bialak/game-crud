"use client";
import "./mainpage.css";
import { Button } from "@mui/material";
import Link from "next/link";

export default function MainLayout() {
	return (
		<>
			<h1 className="pageTitle">Games Progress Tracker</h1>
			<Link href="/form">
				<Button
					variant="contained"
					size="large"
					sx={{
						textAlign: "center",
						bgcolor: "#a874a9",
						":hover": { backgroundColor: "#b635c7" },
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
