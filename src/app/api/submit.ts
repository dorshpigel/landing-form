import type { NextApiRequest, NextApiResponse } from "next";
import { submitToAirtable } from "../lib/services/airtable.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message,phone } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await submitToAirtable({
      name: name,
      email: email,
      message: message,
      phone: phone
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Failed to submit to Airtable" });
  }
}
