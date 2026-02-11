import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "../data/contact";
import Section from "../components/ui/Section";

function Process() {
  const steps = [
    {
      title: "1) Contact & m²",
      desc: "Stuur m², type vloer, plinten en foto’s van de ruimte.",
    },
    {
      title: "2) Offerte & planning",
      desc: "Je krijgt een duidelijke prijs en 2–3 mogelijke data.",
    },
    {
      title: "3) Montage",
      desc: "We leggen netjes, houden rekening met uitzetvoegen en drempels.",
    },
    {
      title: "4) Oplevering",
      desc: "Samen controleren we de afwerking — pas dan ronden we af.",
    },
  ];

  return (
    <Section
      id="werkwijze"
      eyebrow="Zo werken we"
      title="Werkwijze"
      subtitle="Transparant proces, duidelijke afspraken en een strakke vloer."
    >
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.title} className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">{s.title}</div>
            <div className="mt-2 text-sm text-slate-600">{s.desc}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border bg-slate-900 p-6 text-white shadow-sm">
        <div className="grid items-center gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="text-lg font-semibold">Vandaag nog een richtprijs?</div>
            <div className="mt-2 text-sm text-white/80">
              Bel of stuur via WhatsApp je m² en een paar foto’s. We reageren meestal dezelfde dag.
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white/90"
            >
              <Phone className="h-4 w-4" />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/15"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Process;