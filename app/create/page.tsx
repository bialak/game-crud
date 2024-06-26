"use client";
import React from "react";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "../components/FormInput";
import FormAutocomplete from "../components/FormAutocomplete";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  OwnedOptions,
  StatusOptions,
  TypesOfGamesOptions,
  PlatformOptions,
} from "../enums";

const typesOfGamesOptions = [
  {
    value: TypesOfGamesOptions.RPG,
    label: "RPG",
  },
  {
    value: TypesOfGamesOptions.PLATFORM,
    label: "Platform",
  },
  {
    value: TypesOfGamesOptions.MMORPG,
    label: "MMORPG",
  },
  {
    value: TypesOfGamesOptions.SHOOTER,
    label: "Shooter",
  },
  {
    value: TypesOfGamesOptions.SURVIVAL,
    label: "Survival",
  },
  {
    value: TypesOfGamesOptions.BATTLE_ROYAL,
    label: "Battle Royal",
  },
  {
    value: TypesOfGamesOptions.RACING,
    label: "Racing",
  },
  {
    value: TypesOfGamesOptions.SPORTS,
    label: "Sports",
  },
  {
    value: TypesOfGamesOptions.SIMULATION,
    label: "Simulation",
  },
  {
    value: TypesOfGamesOptions.MMO,
    label: "MMO",
  },
  {
    value: TypesOfGamesOptions.HORROR,
    label: "Horror",
  },
  {
    value: TypesOfGamesOptions.POINTS_AND_CLICK,
    label: "Point and Click ",
  },
  {
    value: TypesOfGamesOptions.COOPERATIVE,
    label: "Cooperative",
  },
];

const ownedOptions = [
  {
    value: OwnedOptions.Yes,
    label: "Yes",
  },
  {
    value: OwnedOptions.No,
    label: "No",
  },
];

const statusOptions = [
  {
    value: StatusOptions.PLAYING,
    label: "I'm playing",
  },
  {
    value: StatusOptions.FINISHED,
    label: "I finished",
  },
  {
    value: StatusOptions.ONHOLD,
    label: "On Hold",
  },
  {
    value: StatusOptions.ABONDEND,
    label: "Abandoned",
  },
  {
    value: StatusOptions.PLANING,
    label: "Planing",
  },
];

const platfromOptions = [
  {
    value: PlatformOptions.STEAM,
    label: "Steam",
  },
  {
    value: PlatformOptions.EPIC_GAMES,
    label: "Epic Games",
  },
  {
    value: PlatformOptions.UBISOFT,
    label: "Ubisoft",
  },
  {
    value: PlatformOptions.BATTLE_NET,
    label: "Batlle.net",
  },
  {
    value: PlatformOptions.OTHER,
    label: "Other",
  },
];
interface GameFormValues {
  game_name: string;
  type_of_game:
    | TypesOfGamesOptions.RPG
    | TypesOfGamesOptions.PLATFORM
    | TypesOfGamesOptions.MMORPG
    | TypesOfGamesOptions.SHOOTER
    | TypesOfGamesOptions.SURVIVAL
    | TypesOfGamesOptions.BATTLE_ROYAL
    | TypesOfGamesOptions.RACING
    | TypesOfGamesOptions.SPORTS
    | TypesOfGamesOptions.SIMULATION
    | TypesOfGamesOptions.MMO
    | TypesOfGamesOptions.HORROR
    | TypesOfGamesOptions.POINTS_AND_CLICK
    | TypesOfGamesOptions.COOPERATIVE;
  owned: OwnedOptions.Yes | OwnedOptions.No;
  status:
    | StatusOptions.PLAYING
    | StatusOptions.FINISHED
    | StatusOptions.ONHOLD
    | StatusOptions.ABONDEND
    | StatusOptions.PLANING;
  platform:
    | PlatformOptions.STEAM
    | PlatformOptions.EPIC_GAMES
    | PlatformOptions.UBISOFT
    | PlatformOptions.BATTLE_NET
    | PlatformOptions.OTHER;
}

const validationSchema = yup.object().shape({
  game_name: yup
    .string()
    .required("Name Validation Field is Required")
    .min(5, "Must be more that 5 letters")
    .max(255, "tile is too long"),
  type_of_game: yup
    .string()
    .oneOf(
      [
        TypesOfGamesOptions.RPG,
        TypesOfGamesOptions.PLATFORM,
        TypesOfGamesOptions.MMORPG,
        TypesOfGamesOptions.SHOOTER,
        TypesOfGamesOptions.SURVIVAL,
        TypesOfGamesOptions.BATTLE_ROYAL,
        TypesOfGamesOptions.RACING,
        TypesOfGamesOptions.SPORTS,
        TypesOfGamesOptions.SIMULATION,
        TypesOfGamesOptions.MMO,
        TypesOfGamesOptions.HORROR,
        TypesOfGamesOptions.POINTS_AND_CLICK,
        TypesOfGamesOptions.COOPERATIVE,
      ],
      "Please pick one option"
    )
    .required("Select Validation Field is Required"),
  owned: yup
    .string()
    .oneOf([OwnedOptions.Yes, OwnedOptions.No], "Please pick one option")
    .required("Select Validation Field is Required"),
  status: yup
    .string()
    .oneOf(
      [
        StatusOptions.PLAYING,
        StatusOptions.FINISHED,
        StatusOptions.ONHOLD,
        StatusOptions.ABONDEND,
        StatusOptions.PLANING,
      ],
      "Please pick one option"
    )
    .required("Select Validation Field is Required"),
  platform: yup
    .string()
    .oneOf(
      [
        PlatformOptions.STEAM,
        PlatformOptions.EPIC_GAMES,
        PlatformOptions.UBISOFT,
        PlatformOptions.BATTLE_NET,
        PlatformOptions.OTHER,
      ],
      "Please pick one option"
    )
    .required("Select Validation Field is Required"),
});

export default function Create(props) {
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
  const errorMsg = errors["game_name"]?.message;

  function createGame(data) {
    fetch("api/games", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(async (response) => await console.log(response.json()));
  }

  return (
    <>
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
    </>
  );
}
