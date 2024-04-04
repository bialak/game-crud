"use client";
import "./mainpage.css";
import { Button } from "@mui/material";
import Link from "next/link";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export default function MainLayout() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<h1 className="pageTitle">Games Progress Tracker</h1>
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
			</ThemeProvider>
		</>
	);
}
