interface FaqProps {
  q: string;
  a: string;
  image?: string;
}

function Faq({ q, a, image }: FaqProps) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      {image && <img src={image} alt={q} className="mb-4 h-32 w-full rounded-lg object-cover" />}
      <div className="text-sm font-semibold text-slate-900">{q}</div>
      <div className="mt-2 text-sm text-slate-600">{a}</div>
    </div>
  );
}

export default Faq;
