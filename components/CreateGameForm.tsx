"use client";
import GameForm from "@/components/GameForm";
import React from "react";
import { useRouter } from "next/navigation";

export default function CreateGameForm() {
  const router = useRouter();

  function createGame(data) {
    fetch("api/games", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      router.push("/");
    });
  }
  return <GameForm title="Create" onSubmit={createGame} />;
}
