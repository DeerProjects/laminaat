import type { LucideIcon } from "lucide-react";

interface BadgeProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

function Badge({ icon: Icon, title, desc }: BadgeProps) {
  return (
    <div className="rounded-2xl border bg-white/70 p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl border bg-white p-2">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-slate-600">{desc}</div>
        </div>
      </div>
    </div>
  );
}

export default Badge;
