import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
export const authOptions : NextAuthOptions = NextAuth({
    providers:[
        GoogleProvider(
            {
                clientId: process.env.GOOGLE_CLIENT_ID!,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET!
            }
        )
    ],
    callbacks:{
        async session({ session, token }) {
            session.user!.id = token.sub;
            return session;
        }
    }
    
})
const handler = authOptions;
export { handler as GET, handler as POST };