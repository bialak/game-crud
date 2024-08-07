"use client";
import React from "react";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "@/components/FormInput";
import FormAutocomplete from "@/components/FormAutocomplete";
import { validationSchema } from "@/validation/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import {
  typesOfGamesOptions,
  ownedOptions,
  statusOptions,
  platfromOptions,
} from "@/validation/options";
import {
  GameFormValues,
  OwnedOptions,
  StatusOptions,
  PlatformOptions,
  TypesOfGamesOptions,
} from "@/components/types";
import { useEffect, useState } from "react";

interface GameFormProps {
  title: string;
  gameId?: number;
  onSubmit: any;
}

function GameForm(props: GameFormProps) {
  const { title, gameId, onSubmit } = props;

  const methods = useForm<GameFormValues>({
    defaultValues: {
      game_name: "",
      type_of_game: TypesOfGamesOptions.RPG,
      owned: OwnedOptions.No,
      status: StatusOptions.PLANING,
      platform: PlatformOptions.STEAM,
    },
    resolver: yupResolver(validationSchema),
    shouldFocusError: true,
    criteriaMode: "all",
    reValidateMode: "onChange",
  });

  if (gameId) {
    const [games, setGames] = useState<any[]>([]);
    const [hasLoadedGame, setHasLoadedGame] = useState(false);

    useEffect(() => {
      if (!hasLoadedGame) {
        fetch(`api/games/`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setGames(data.data);
            setHasLoadedGame(true);
          });
      }
    }, [gameId]);

    const gameToEdit: GameFormValues = games.find((game) => game.id == gameId);

    useEffect(() => {
      if (hasLoadedGame) {
        reset({
          game_name: gameToEdit.game_name,
          type_of_game: gameToEdit.type_of_game,
          owned: gameToEdit.owned,
          status: gameToEdit.status,
          platform: gameToEdit.platform,
        });
      }
    }, [hasLoadedGame, games]);
  }

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = methods;

  const router = useRouter();

  return (
    <FormProvider {...methods}>
      <form>
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <h1 className="pageTitle" style={{ width: "100%" }}>
            {title}
          </h1>
          <Link href="/">
            <Button
              variant="contained"
              size="small"
              sx={{
                bgcolor: "main",
                ":hover": { backgroundColor: "dark" },
              }}
            >
              Back
            </Button>
          </Link>
          <FormInput
            control={control}
            name="game_name"
            label="Game Name"
            required
            errorMessage={errors["game_name"]?.message}
          />
          <FormAutocomplete
            control={control}
            name="type_of_game"
            label="Type Of Game"
            required={false}
            errorMessage={errors["type_of_game"]?.message}
            options={typesOfGamesOptions}
          />
          <FormAutocomplete
            control={control}
            name="owned"
            label="Owned?"
            required={false}
            errorMessage={errors["owned"]?.message}
            options={ownedOptions}
          />
          <FormAutocomplete
            control={control}
            name="status"
            label="Status"
            required={false}
            errorMessage={errors["status"]?.message}
            options={statusOptions}
          />
          <FormAutocomplete
            control={control}
            name="platform"
            label="Platform"
            required={false}
            errorMessage={errors["status"]?.message}
            options={platfromOptions}
          />
        </Stack>
        <Button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          variant="contained"
          size="large"
          sx={{
            bgcolor: "main",
            ":hover": { backgroundColor: "dark" },
            margin: "5px",
          }}
        >
          {title}
        </Button>
      </form>
    </FormProvider>
  );
}

export default GameForm;
