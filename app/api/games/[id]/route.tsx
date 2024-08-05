import prisma from "@/prisma/prisma";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();

  if (!id || isNaN(Number(id))) {
    return new Response(JSON.stringify({ message: "Invalid ID" }), {
      status: 400,
    });
  }

  try {
    const game = await prisma.game.findUnique({
      where: { id: Number(id) },
    });

    if (!game) {
      return new Response(JSON.stringify({ message: "Game not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ game }), { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({ message: "Failed to retrieve game" }),
      {
        status: 500,
      }
    );
  }
}

export async function PATCH(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop();

  if (!id || isNaN(Number(id))) {
    return new Response(JSON.stringify({ message: "Invalid ID" }), {
      status: 400,
    });
  }

  const body = await request.json();

  try {
    const result = await prisma.game.update({
      where: { id: Number(id) },
      data: {
        ...body,
      },
    });

    return new Response(JSON.stringify({ result }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ message: "Update failed" }), {
      status: 400,
    });
  }
}
