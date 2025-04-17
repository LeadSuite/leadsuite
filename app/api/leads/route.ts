import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("leadsuite");

    const result = await db.collection("leads").insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error("Error inserting lead:", error);
    return NextResponse.json({ success: false, error: "Insert failed" }, { status: 500 });
  }
}
