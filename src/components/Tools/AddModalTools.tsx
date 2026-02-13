import { useState } from "react";
import axios from "axios";
import type { Tools } from "../../types/tools";
import { InputField } from "../Basic/InpurField";

interface Props {
  onClose: () => void;
  onCreated: () => void;
}

export const AddModalTools = ({ onClose, onCreated }: Props) => {
  const [form, setForm] = useState<Partial<Tools>>({
    name: "",
    vendor: "",
    category: "communication",
    owner_department: "",
    status: "active",
    website_url: "",
    icon_url: "",
    monthly_cost: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (key: keyof Tools, value: any) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://tt-jsonserver-01.alt-tools.tech/tools", form);
      setError(null);
      onCreated();
      onClose();
    } catch (err) {
      setError("Failed to add tool");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Add New Tool
        </h2>

        {error && <div className="text-red-500 mb-2">{error}</div>}

        <form className="space-y-4" onSubmit={handleSubmit}>
        <InputField
            placeholder="Tool Name"
            value={form.name || ""}
            onChange={(v) => handleChange("name", v)}
            required
        />
        <InputField
            placeholder="Vendor"
            value={form.vendor || ""}
            onChange={(v) => handleChange("vendor", v)}
        />
        <InputField
            placeholder="Department"
            value={form.owner_department || ""}
            onChange={(v) => handleChange("owner_department", v)}
            required
        />
        <InputField
            placeholder="Category"
            value={form.category || ""}
            onChange={(v) => handleChange("category", v)}
            required
        />
        <InputField
            placeholder="Monthly Cost"
            type="number"
            value={form.monthly_cost || 0}
            onChange={(v) => handleChange("monthly_cost", v)}
        />
        <InputField
            placeholder="Website URL"
            value={form.website_url || ""}
            onChange={(v) => handleChange("website_url", v)}
            required
        />
        <InputField
            placeholder="Icon URL"
            value={form.icon_url || ""}
            onChange={(v) => handleChange("icon_url", v)}
        />

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Tool"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
