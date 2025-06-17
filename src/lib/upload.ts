import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); // ✅ 如果你已有 prisma.ts 封装，也可以 import 那个

import type { AdapterUser } from "next-auth/adapters";

export async function upload(user: AdapterUser) {
  if (!user.email) {
    throw new Error("No email provided");
  }

  const email = user.email;
  const username = user.name || "Anonymous";

  let dbUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        username,
        email,
      },
    });
  }

  console.log("✅ 用户处理完成：", dbUser);
}
