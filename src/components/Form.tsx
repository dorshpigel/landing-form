"use client";
import { useState } from "react";
import LabeledInput from "./LabeledInput";
import { toast } from "react-toastify";
import { submitForm } from "@/app/lib/services/api.service";

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
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await submitForm({
        name,
        email,
        phone,
        message,
      });

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
      className="space-y-4 max-w-md mx-auto p-4 border rounded-xl bg-white shadow"
    >
      <LabeledInput
        type="text"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <LabeledInput
        type="phone"
        label="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <LabeledInput
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="2025-04-15T20:00:00.000Z"
      />

      <LabeledInput
        type="text"
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      />

      <button
        type="submit"
        disabled={loading || !name || !email || !message || !phone}
        className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Form"}
      </button>

      {error && <p className="text-red-600 mt-2">Error: {error.message}</p>}
      {data && (
        <p className="text-green-600 mt-2">
          {data
            ? `Form submitted successfully!`
            : "There was an error submitting the form."}
        </p>
      )}
    </form>
  );
}
