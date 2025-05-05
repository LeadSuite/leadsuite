import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Missing email or password" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "Email already in use" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await db.collection("users").insertOne({
      email,
      name,
      hashedPassword,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "User created", userId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
