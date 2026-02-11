import type { Dispatch, SetStateAction } from "react";

interface ToggleProps {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  label: string;
}

function Toggle({ checked, setChecked, label }: ToggleProps) {
  return (
    <button
      type="button"
      onClick={() => setChecked((v) => !v)}
      className={
        "flex items-center justify-between rounded-xl border px-3 py-2 text-left text-sm shadow-sm transition hover:bg-slate-50 " +
        (checked ? "bg-slate-900 text-white border-slate-900" : "bg-white")
      }
    >
      <span className="font-medium">{label}</span>
      <span
        className={
          "h-5 w-9 rounded-full border p-0.5 " +
          (checked ? "border-white/40" : "border-slate-200")
        }
      >
        <span
          className={
            "block h-4 w-4 rounded-full transition " +
            (checked ? "translate-x-4 bg-white" : "bg-slate-900")
          }
        />
      </span>
    </button>
  );
}

export default Toggle;