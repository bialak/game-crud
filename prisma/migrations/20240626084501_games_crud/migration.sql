-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "game_name" TEXT NOT NULL,
    "type_of_game" TEXT NOT NULL,
    "owned" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "platform" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
