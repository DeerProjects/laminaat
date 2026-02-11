import React from "react";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Field({ label, ...props }: FieldProps) {
  return (
    <label className="block">
      <div className="text-xs font-semibold text-slate-700">{label}</div>
      <input
        {...props}
        className="mt-1 w-full rounded-2xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-200"
      />
    </label>
  );
}

export default Field;
