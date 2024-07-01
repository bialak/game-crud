import * as yup from "yup";
import {
  OwnedOptions,
  StatusOptions,
  TypesOfGamesOptions,
  PlatformOptions,
} from "@/components/types";

export const validationSchema = yup.object().shape({
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
