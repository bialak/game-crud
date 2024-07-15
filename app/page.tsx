import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Games Table",
  description: "Here you can see a table of your games",
};

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
            marginTop: "2%",
            transform: "translate(-50%,0)",
          }}
        >
          Add Game
        </Button>
      </Link>
    </>
  );
}
