"use client";
import Image from "next/image";
import Paper from "@mui/material/Paper";

export default function MainLayout() {
	return (
		<div style={{ width: "100vw", height: "100vh", position: "relative" }}>
			<Image
				src="/nintendo.jpg"
				alt="Picture of the author"
				fill
				style={{ filter: "grayscale(90%) blur(5px)" }}
			/>
			<Paper elevation={20} sx={{ width: "60%", height: "100%", position: "fixed", left: "20%" }}>
				<h1 style={{ textAlign: "center" }}>Games Progress Tracker</h1>
			</Paper>
		</div>
	);
}
