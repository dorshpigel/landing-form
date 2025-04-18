import axiosInstance from "./http.service";
import { Message } from "../types/types";

export async function submitForm(
  data: Message
): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await axiosInstance.post("/api/submit", data, {
      headers: { "Content-Type": "application/json" },
    });

    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message || "Submission failed" };
    }
    return { success: false, error: "An unknown error occurred" };
  }
}
