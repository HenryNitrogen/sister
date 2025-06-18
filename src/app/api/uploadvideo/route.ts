import { randomUUID } from "crypto";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(request: Request) {
    const data = await request.formData();
    const file = data.get('file')as unknown as File;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${randomUUID()}-${file.name}`;
    const filepath = path.join(process.cwd(), "public/uploads/videos", filename);
    await writeFile(filepath, buffer);
    const fileUrl = `/uploads/videos/${filename}`;
    return NextResponse.json({ url: fileUrl });
}