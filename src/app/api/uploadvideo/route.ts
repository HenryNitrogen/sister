import { randomUUID } from "crypto";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
export async function POST(request: Request) {
    const session = await getServerSession();
    const name = session?.user?.name || "Anonymous";
    const data = await request.formData();
    const file = data.get('file')as unknown as File;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const rand = randomUUID();
    const filename = `${rand}-${file.name}`;
    const filepath = path.join(process.cwd(), "public/uploads/videos", filename);
    await writeFile(filepath, buffer);
    const fileUrl = `/uploads/videos/${filename}`;
    try{
        await prisma.video.create({
            data: {
                id: rand,
                title: name,
                description: rand,
                videoUrl : fileUrl,
                thumbnailUrl: fileUrl,
            },
        });
    }catch (error) {
        console.error("Error saving video to database:", error);
        return NextResponse.json({ error: "Failed to save video" }, { status: 500 });
    }
    return NextResponse.json({ url: fileUrl });
}