import { FieldError, UseFormRegister } from "react-hook-form";

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export interface GameFormValues {
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

export type ValidFieldNames =
  | "game_name"
  | "owned"
  | "type_of_game"
  | "status"
  | "platform";

export enum OwnedOptions {
  Yes = "TRUE",
  No = "FALSE",
}

export enum StatusOptions {
  PLAYING = "Playing",
  FINISHED = "Finished",
  ONHOLD = "On hold",
  ABONDEND = "Abondend",
  PLANING = "Planing",
}

export enum TypesOfGamesOptions {
  RPG = "RPG",
  PLATFORM = "Platform",
  MMORPG = "MMORPG",
  SHOOTER = "Shooter",
  SURVIVAL = "Survival",
  BATTLE_ROYAL = "Battle Royal",
  RACING = "Racing",
  SPORTS = "Sports",
  SIMULATION = "Simulation",
  MMO = "MMO",
  HORROR = "Horror",
  POINTS_AND_CLICK = "Point and Click ",
  COOPERATIVE = "Cooperative",
}

export enum PlatformOptions {
  STEAM = "Steam",
  EPIC_GAMES = "Epic Games",
  UBISOFT = "Ubisoft",
  BATTLE_NET = "Batlle.net",
  OTHER = "Other",
}
