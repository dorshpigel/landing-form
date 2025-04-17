import { useState } from "react";
import LabeledInput from "./LabeledInput";
import { toast } from "react-toastify";

type ReportFormProps = {
  onSuccess: () => void;
  prefilledUUID?: string;
};
//need to re-do
export default function ReportForm(props: ReportFormProps) {
  const { onSuccess,prefilledUUID } = props;
  //const { submitReport, data, loading, error } = usePostReport();
  const [uuid, setUuid] = useState(prefilledUUID ?? "");
  const [hashes, setHashes] = useState("");
  const [nextCheck, setNextCheck] = useState(() => new Date().toISOString());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const hashArray = hashes
      .split(",")
      .map((h) => h.trim())
      .filter(Boolean);
    if (!uuid || hashArray.length === 0) return;

    try {

      toast.success("Report submitted successfully!");
      setTimeout(onSuccess, 3000)
    } catch (_) {
      toast.error("Failed to submit report. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto p-4 border rounded-xl bg-white shadow"
    >
      <LabeledInput
        label="Endpoint UUID"
        value={uuid}
        onChange={(e) => setUuid(e.target.value)}
        placeholder="e.g., endpoint-123"
      />
      <LabeledInput
        label="Hashes (comma separated)"
        value={hashes}
        onChange={(e) => setHashes(e.target.value)}
        placeholder="abc123, def456, ..."
      />
      <LabeledInput
        label="Next Check (ISO format)"
        value={nextCheck}
        onChange={(e) => setNextCheck(e.target.value)}
        placeholder="2025-04-15T20:00:00.000Z"
      />

      <button
        type="submit"
        disabled={false} //need to hook to something
        className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Report"}
      </button>

      {error && <p className="text-red-600 mt-2">Error: {error.message}</p>}
      {data && (
        <p className="text-green-600 mt-2">
          {data.malicious.length > 0
            ? `Detected malicious: ${data.malicious.join(", ")}`
            : "No malicious files detected"}
        </p>
      )}
    </form>
  );
}
