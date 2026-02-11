import { useMemo, useState } from "react";
import Section from "../components/ui/Section";
import { PRICES } from "../data/prices";

export default function Pricing() {
  const [sqm, setSqm] = useState<string>("40");
  const [plintMeter, setPlintMeter] = useState<string>("0");
  const [hogePlintMeter, setHogePlintMeter] = useState<string>("0");

  const [type, setType] = useState<
    "laminaat" | "tegel" | "second" | "pvc" | "visgraat" | "plakpvc"
  >("laminaat");

  const [egaliseren, setEgaliseren] = useState(false);

  const sqmNumber = sqm === "" ? 0 : Number(sqm);
  const plintM = plintMeter === "" ? 0 : Number(plintMeter);
  const hogePlintM = hogePlintMeter === "" ? 0 : Number(hogePlintMeter);

  const pricePerM2 = useMemo(() => {
    switch (type) {
      case "laminaat":
        return 6;
      case "tegel":
        return 10;
      case "second":
        return 8;
      case "pvc":
        return 9;
      case "visgraat":
        return 13;
      case "plakpvc":
        return 12;
      default:
        return 0;
    }
  }, [type]);

  const total = useMemo(() => {
    let sum = sqmNumber * pricePerM2;
    if (egaliseren) sum += sqmNumber * 15;
    sum += plintM * 2;
    sum += hogePlintM * 5;
    return sum;
  }, [sqmNumber, pricePerM2, egaliseren, plintM, hogePlintM]);

  return (
    <Section
      id="prijzen"
      eyebrow="Tarieven"
      title="Prijzen & Prijsberekening"
      subtitle="Alle prijzen zijn richtprijzen. Definitieve prijs na beoordeling van de ruimte."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* CALCULATOR */}
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">
            Prijs berekenen
          </div>

          <div className="mt-4 space-y-4">
            {/* m2 */}
            <div>
              <label className="text-xs font-semibold text-slate-700">
                Oppervlakte (m²)
              </label>
              <input
                type="number"
                placeholder="Bijv. 40"
                value={sqm}
                onChange={(e) => setSqm(e.target.value)}
                className="mt-1 w-full rounded-2xl border px-3 py-2 text-sm"
              />
            </div>

            {/* type */}
            <div>
              <label className="text-xs font-semibold text-slate-700">
                Type vloer
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as any)}
                className="mt-1 w-full rounded-2xl border px-3 py-2 text-sm"
              >
                <option value="laminaat">
                  Laminaat + ondervloer (€6 / m²)
                </option>
                <option value="tegel">
                  Tegel laminaat (€10 / m²)
                </option>
                <option value="second">
                  Tweedehands laminaat (€8 / m²)
                </option>
                <option value="pvc">
                  PVC klikstrook (€9 / m²)
                </option>
                <option value="visgraat">
                  Visgraat klik (€13 / m²)
                </option>
                <option value="plakpvc">
                  Plak PVC rechte strook (€12 / m²)
                </option>
              </select>
            </div>

            {/* egaliseren */}
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={egaliseren}
                onChange={(e) => setEgaliseren(e.target.checked)}
              />
              Egaliseren (3 mm incl. materiaal – €15 / m²)
            </label>

            {/* plakplint */}
            <div>
              <label className="text-xs font-semibold text-slate-700">
                Plakplint (meter × €2)
              </label>
              <input
                type="number"
                placeholder="Bijv. 30"
                value={plintMeter}
                onChange={(e) => setPlintMeter(e.target.value)}
                className="mt-1 w-full rounded-2xl border px-3 py-2 text-sm"
              />
            </div>

            {/* hoge plint */}
            <div>
              <label className="text-xs font-semibold text-slate-700">
                Hoge plinten (meter × €5)
              </label>
              <input
                type="number"
                placeholder="Bijv. 30"
                value={hogePlintMeter}
                onChange={(e) => setHogePlintMeter(e.target.value)}
                className="mt-1 w-full rounded-2xl border px-3 py-2 text-sm"
              />
            </div>

            {/* total */}
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-xs font-semibold text-slate-700">
                Indicatieve totaalprijs
              </div>
              <div className="mt-1 text-2xl font-semibold text-slate-900">
                € {total.toFixed(0)}
              </div>
              <div className="mt-1 text-xs text-slate-600">
                Definitieve prijs na beoordeling van foto’s of inmeten.
                Deze prijsberekening is een indicatie. De uiteindelijke prijs kan afwijken.
                Voor een exacte prijs adviseren wij altijd contact op te nemen met onze specialist
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Offerte aanvragen
            </a>
          </div>
        </div>

        {/* PRICE LIST */}
        <div className="rounded-3xl border bg-white shadow-sm overflow-hidden">
          <div className="grid grid-cols-3 border-b bg-slate-50 p-4 text-sm font-semibold">
            <div>Werkzaamheden</div>
            <div>Prijs</div>
            <div>Opmerking</div>
          </div>

          {PRICES.map((r) => (
            <div
              key={r.item}
              className="grid grid-cols-3 border-b p-4 text-sm last:border-b-0"
            >
              <div className="font-medium">{r.item}</div>
              <div>{r.price}</div>
              <div className="text-slate-600">{r.note}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
