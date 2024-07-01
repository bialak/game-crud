import { PrismaClient, Prisma } from "@prisma/client";
import * as Yup from "yup";
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
      updateMany({ args, query }) {
        validationSchema.validateSync(args.data, { abortEarly: false });
        return query(args);
      },
      upsert({ args, query }) {
        validationSchema.validateSync(args.create, {
          abortEarly: false,
        });
        validationSchema.validateSync(args.update, {
          abortEarly: false,
        });
        return query(args);
      },
    },
  },
});

export default prisma;
