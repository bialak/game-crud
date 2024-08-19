"use client";
import GameForm from "@/components/GameForm";
import React from "react";
import { useRouter } from "next/navigation";

interface EditGameFormProps {
  gameId: number;
}

export default function EditGameForm({ gameId }: EditGameFormProps) {
  const router = useRouter();

  function editGame(data) {
    fetch(`api/games/${gameId}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      router.push("/");
    });
  }
  return <GameForm title="Edit" gameId={gameId} onSubmit={editGame} />;
}
