"use client";
import { useState } from "react";
import LabeledInput from "./LabeledInput";
import { toast } from "react-toastify";
import { submitForm } from "@/app/lib/services/api.service";
import { validateEmail, validatePhoneNumber } from "@/app/lib/services/common";

type FormProps = {
  onSuccess: () => void;
};

export default function Form(props: FormProps) {
  const { onSuccess } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim() || !phone.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await submitForm({ name, email, phone, message });

      if (!res.success) {
        throw new Error(res.error || "Unknown error");
      }

      setData(res);
      toast.success("Form submitted successfully!");
      onSuccess?.();

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err: any) {
      setError(err);
      toast.error(err.message || "Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 max-w-md mx-auto p-6 border border-gray-200 rounded-2xl bg-white/80 backdrop-blur-md shadow-xl"
    >
      <LabeledInput
        type="text"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Jane Doe"
      />
      <LabeledInput
        type="tel"
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+1 123 456 7890"
      />
      <LabeledInput
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="jane@example.com"
      />
      <LabeledInput
        textArea
        type="text"
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message here..."
      />

      <button
        type="submit"
        disabled={loading || !name || !email || !message || !phone}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-xl transition duration-300 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
      >
        {loading ? "Submitting..." : "Submit Form"}
      </button>

      {error && (
        <p className="text-sm text-red-600 text-center">
          Error: {error.message}
        </p>
      )}
      {data && (
        <p className="text-sm text-green-600 text-center">
          Form submitted successfully!
        </p>
      )}
    </form>
  );
}
