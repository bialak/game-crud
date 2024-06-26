import "@/app/global.css";
import { Paper, Box, ThemeProvider } from "@mui/material";
import Image from "next/image";
import React from "react";
import theme from "@/app/theme";

export const metadata = {
  title: "Game Trucker",
  description: "Game Trucker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <ThemeProvider theme={theme}>
            <Box width="100vw" height="100vh" position="relative">
              <Image
                src="/nintendo.jpg"
                alt="Picture of nintendo"
                fill
                style={{ filter: "grayscale(90%) blur(5px)" }}
              />
              <Paper
                elevation={20}
                sx={{
                  width: "60%",
                  height: "100%",
                  position: "relative",
                  left: "20%",
                  backgroundColor: "white",
                }}
              >
                {children}
              </Paper>
            </Box>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
