import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import type { Session } from "next-auth";
const session: Session | null = await getServerSession(authOptions);
if(session){
    const email = session.user?.email
    console.log("User email:", email);
}
