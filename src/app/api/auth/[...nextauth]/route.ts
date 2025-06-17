import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
import { upload } from "@/lib/upload";

const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET, 
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    callbacks: {
        async signIn({ user }) {
            upload(user).catch(console.error); // 非阻塞调用，后台执行
            return true;
          },
        async session({ session }) {
            return session;
        }
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };