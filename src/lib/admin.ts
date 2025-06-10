import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import type { Session } from "next-auth";

export async function isAdmin(): Promise<boolean> {
  const session: Session | null = await getServerSession(authOptions);
  return session?.user?.email === process.env.ADMIN_EMAIL;
}