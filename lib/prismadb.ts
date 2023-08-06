import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;  // this will fix prisma error
}

const prismadb = globalThis.prisma || new PrismaClient(); // This will prevent hot reloading

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
