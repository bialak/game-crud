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

  const [game, setGame] = useState<GameFormValues>();
  const [hasLoadedGame, setHasLoadedGame] = useState(false);

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

  useEffect(() => {
    if (!hasLoadedGame) {
      fetch(`api/games/${gameId}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setGame(data.game);
          setHasLoadedGame(true);
        });
    }
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (game) {
      reset({
        game_name: game.game_name,
        type_of_game: game.type_of_game,
        owned: game.owned,
        status: game.status,
        platform: game.platform,
      });
    }
  }, [hasLoadedGame, game, reset]);

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
            position: "absolute",
            left: "50%",
            marginTop: "2%",
            transform: "translate(-50%,0)",
          }}
        >
          {title}
        </Button>
      </form>
    </FormProvider>
  );
}

export default GameForm;
