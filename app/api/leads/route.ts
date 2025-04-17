import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

// POST - insert new lead from form
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

// ✅ NEW: GET - fetch leads for the dashboard
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("leadstream");

    const leads = await db.collection("leads")
      .find({})
      .sort({ createdAt: -1 })
      .limit(1000)
      .toArray();

    return NextResponse.json(leads);
  } catch (error) {
    console.error("Error fetching leads:", error);
    return new NextResponse("Failed to fetch leads", { status: 500 });
  }
}
