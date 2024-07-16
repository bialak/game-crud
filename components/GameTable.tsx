"use client";
import React from "react";
import { Button, Box } from "@mui/material";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { GameFormValues } from "./types";

const columns: GridColDef<GameFormValues>[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "game_name",
    headerName: "Game Name",
    width: 250,
    editable: true,
  },
  {
    field: "type_of_game",
    headerName: "Type Of Game",
    width: 150,
    editable: true,
  },
  {
    field: "owned",
    headerName: "Owned",
    width: 105,
    editable: true,
    valueFormatter: (value) => {
      if (value === "TRUE") {
        return "Yes";
      } else {
        return "No";
      }
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 105,
  },
  {
    field: "platform",
    headerName: "Platform",
    width: 120,
    editable: true,
  },
];

export default function GameTable() {
  const [games, setGames] = useState<any[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [selectedRowsIds, setSelectedRowsIds] = useState<GridRowSelectionModel>(
    []
  );

  useEffect(() => {
    if (!hasLoaded) {
      fetch("api/games")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setGames(data.data);
          setHasLoaded(true);
        });
    }
  }, [hasLoaded]);

  const handleDelete = async () => {
    console.log(games, selectedRowsIds);
    try {
      const response = await fetch(`api/games`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: selectedRowsIds }),
      });
      if (response.ok) {
        setGames(games.filter((game) => !selectedRowsIds.includes(game.id)));
        console.log(games, selectedRowsIds, "Games deleted successfully");
      } else {
        throw new Error("Failed to delete games");
      }
    } catch (error) {
      console.error("Error deleting games:", error);
    }
  };

  return (
    <>
      <Box sx={{ height: "70%", width: "100%", marginTop: "10%" }}>
        <DataGrid
          rows={games}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(rowIds) => {
            setSelectedRowsIds(rowIds);
          }}
        />
        <Button
          onClick={handleDelete}
          variant="contained"
          size="small"
          sx={{
            marginTop: "2%",
            marginLeft: "2%",
            bgcolor: "main",
            ":hover": { backgroundColor: "dark" },
          }}
        >
          Delete
        </Button>
      </Box>
    </>
  );
}
