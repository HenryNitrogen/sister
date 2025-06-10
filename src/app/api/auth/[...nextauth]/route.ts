import NextAuth from "next-auth/next";
import { authOptions } from "@/lib/auth"; // ✅ 现在从外部引入

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
