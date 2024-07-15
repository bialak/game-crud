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
    .required("Name field is required")
    .min(5, "Must be more that 5 letters")
    .max(40, "Tile is too long"),
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
    .required("Type of game field is required"),
  owned: yup
    .string()
    .oneOf(
      [OwnedOptions.Yes, OwnedOptions.No],
      "Please choose one of the given options"
    )
    .required("Owned field is required"),
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
      "Please choose one of the given options"
    )
    .required("Status field is required"),
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
      "Please choose one of the given options"
    )
    .required("Platform field is required"),
});
