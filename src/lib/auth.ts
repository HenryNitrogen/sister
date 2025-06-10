import GoogleProvider from "next-auth/providers/google";

interface SessionCallbackParams {
  session: {
    user?: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
    expires: string;
  };
  token: {
    sub?: string;
    [key: string]: unknown;
  };
}

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }: SessionCallbackParams) {
      if (session.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
  },
};
