import { Hammer, Shield, Ruler, Truck, CheckCircle2 } from "lucide-react";
import { CONTACT } from "../data/contact";
import Badge from "../components/ui/Badge";
import Section from "../components/ui/Section";

function Services() {
  const services = [
    {
      title: "Laminaat leggen",
      desc: "Professionele installatie, inclusief afsnijden, klik-systeem en uitzetvoegen.",
      icon: Hammer,
    },
    {
      title: "Ondervloer & folie",
      desc: "Geschikt voor appartementen (geluid) en vloerverwarming (R-waarde).",
      icon: Shield,
    },
    {
      title: "Plinten & afwerking",
      desc: "Hoge/MPF plinten, kitwerk waar nodig, en strakke hoeken.",
      icon: Ruler,
    },
    {
      title: "Oude vloer verwijderen",
      desc: "Tapijt, laminaat of PVC los — afvoer in overleg.",
      icon: Truck,
    },
  ];

  return (
    <Section
      id="diensten"
      eyebrow="Wat we doen"
      title="Diensten"
      subtitle="Voor woningen, appartementen en kleine bedrijfsruimtes."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <Badge key={s.title} icon={s.icon} title={s.title} desc={s.desc} />
        ))}
      </div>

      <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold">Inclusief</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {["Inmeten & advies", "Netjes zagen en passen", ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Optioneel</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {["Oude vloer verwijderen", "Egaliseren/ondergrond fix"].map(
                (t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" />
                    <span>{t}</span>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Werkgebied</div>
            <p className="mt-3 text-sm text-slate-600">
              {CONTACT.addressLine}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {CONTACT.areas.map((a) => (
                <span
                  key={a}
                  className="rounded-full border bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Services;