import prisma from "@/prisma/prisma";

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
