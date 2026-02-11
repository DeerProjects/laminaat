import React from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ id, eyebrow, title, subtitle, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* ✅ mx-auto kaldırıldı -> başlıklar artık solda */}
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {eyebrow}
            </div>
          ) : null}

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>

          {subtitle ? <p className="mt-3 text-slate-600">{subtitle}</p> : null}
        </div>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
