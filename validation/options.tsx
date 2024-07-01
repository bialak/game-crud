import {
  OwnedOptions,
  StatusOptions,
  TypesOfGamesOptions,
  PlatformOptions,
} from "@/components/types";

export const typesOfGamesOptions = [
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

export const ownedOptions = [
  {
    value: OwnedOptions.Yes,
    label: "Yes",
  },
  {
    value: OwnedOptions.No,
    label: "No",
  },
];

export const statusOptions = [
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

export const platfromOptions = [
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
