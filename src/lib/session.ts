import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import type { Session } from "next-auth";
export default async function getSession(): Promise<boolean> {
    const session: Session | null = await getServerSession(authOptions);
    if(session){
        return true;
    }else{
        return false;
    }
}