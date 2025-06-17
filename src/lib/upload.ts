import { getServerSession } from "next-auth/next";
import type { Session } from "next-auth";
const session: Session | null = await getServerSession();
if(session){
    const email = session.user?.email
    console.log("User email:", email);
}
