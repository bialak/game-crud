"use client";
import React from "react";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "@/components/FormInput";
import FormAutocomplete from "@/components/FormAutocomplete";
import { validationSchema } from "@/validation/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  OwnedOptions,
  StatusOptions,
  TypesOfGamesOptions,
  PlatformOptions,
} from "@/components/types";
import {
  typesOfGamesOptions,
  ownedOptions,
  statusOptions,
  platfromOptions,
} from "@/validation/options";
import { GameFormValues } from "@/components/types";

function GameForm(props) {
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

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  function createGame(data) {
    fetch("api/games", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => {
        window.location.href = "/";
      });
  }

  return (
    <FormProvider {...methods}>
      <form>
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <h1 className="pageTitle" style={{ width: "100%" }}>
            Create Game
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
          onClick={handleSubmit(createGame)}
          type="submit"
          variant="contained"
          size="large"
          sx={{
            bgcolor: "main",
            ":hover": { backgroundColor: "dark" },
            margin: "5px",
          }}
        >
          Create
        </Button>
      </form>
    </FormProvider>
  );
}

export default GameForm;
