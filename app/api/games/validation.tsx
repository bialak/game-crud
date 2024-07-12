import { PrismaClient, Prisma } from "@prisma/client";

import { validationSchema } from "@/validation/validationSchema";

const prisma = new PrismaClient().$extends({
  query: {
    game: {
      create({ args, query }) {
        validationSchema.validateSync(args.data, { abortEarly: false });
        return query(args);
      },
      update({ args, query }) {
        validationSchema.validateSync(args.data, { abortEarly: false });
        return query(args);
      },
    },
  },
});

export default prisma;
