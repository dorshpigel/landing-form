import { NextRequest, NextResponse } from "next/server";
import { submitToAirtable } from "@/app/lib/services/airtable.service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, phone } = body;

    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await submitToAirtable({ name, email, message, phone });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Airtable Error:", error);
    return NextResponse.json(
      { error: "Failed to submit to Airtable" },
      { status: 500 }
    );
  }
}
