import prisma from "@/app/api/games/validation";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const result = await prisma.game.create({
      data: {
        ...body,
      },
    });

    return new Response(JSON.stringify({ ...result }), { status: 201 });
  } catch (e) {
    return new Response(JSON.stringify({ message: "Validation error" }), {
      status: 400,
    });
  }
}

export async function GET(req: Request) {
  const result = await prisma.game.findMany();
  return Response.json({ message: "ok", status: 201, data: result });
}
