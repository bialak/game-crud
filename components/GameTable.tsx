"use client";
import React from "react";
import { Button, Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRowSelectionModel,
  GridActionsCellItem,
  GridRowParams,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { GameFormValues } from "./types";
import EditIcon from "@mui/icons-material/Edit";
import { useRouter } from "next/navigation";

export default function GameTable() {
  const columns: GridColDef<GameFormValues>[] = [
    {
      field: "game_name",
      headerName: "Game Name",
      width: 50,
      flex: 1,
      editable: true,
    },
    {
      field: "type_of_game",
      headerName: "Type Of Game",
      width: 50,
      flex: 1,
    },
    {
      field: "owned",
      headerName: "Owned",
      width: 50,
      flex: 1,
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
      width: 50,
      flex: 1,
    },
    {
      field: "platform",
      headerName: "Platform",
      width: 50,
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      getActions: (params: GridRowParams) => [
        <GridActionsCellItem
          key={params.row.game_name}
          icon={<EditIcon />}
          onClick={() => handleEdit(params.row.id)}
          label="Edit"
        />,
      ],
    },
  ];

  const handleEdit = (id) => {
    router.push(`/${id}`);
  };

  const router = useRouter();

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
    try {
      const response = await fetch(`api/games`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: selectedRowsIds }),
      });
      if (response.ok) {
        setGames(games.filter((game) => !selectedRowsIds.includes(game.id)));
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
