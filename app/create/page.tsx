import React from "react";
import CreateGameForm from "@/components/CreateGameForm";

export const metadata = {
  title: "Create game tracking",
  description: "Here you can add a tracking for your game",
};

export default function CreateGamePage() {
  return <CreateGameForm />;
}
