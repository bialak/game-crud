import prisma from "@/app/api/games/validation";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const result = await prisma.game.create({
      data: {
        ...body,
      },
    });

    return new Response(JSON.stringify({ result }), { status: 201 });
  } catch (e) {
    return new Response(JSON.stringify({ message: "Validation error" }), {
      status: 400,
    });
  }
}

export async function GET(req: Request) {
  const result = await prisma.game.findMany();
  return Response.json({ message: "ok", status: 200, data: result });
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const idsToDelete = body.ids;

  if (!Array.isArray(idsToDelete)) {
    return new Response(JSON.stringify({ message: "Incorrect data" }), {
      status: 400,
    });
  }

  try {
    await prisma.game.deleteMany({
      where: {
        id: {
          in: idsToDelete,
        },
      },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error deleting game" }), {
      status: 500,
    });
  }
}
