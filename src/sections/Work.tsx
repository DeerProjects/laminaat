import { useState } from "react";
import Section from "../components/ui/Section";

// ✅ NORMAAL
import normal1 from "../assets/laminaat_samples/normal 1.jpeg";
import normal2 from "../assets/laminaat_samples/normal 2.jpeg";
import normal3 from "../assets/laminaat_samples/normal 3.jpeg";
import normal4 from "../assets/laminaat_samples/normal 4.jpeg";
import normal5 from "../assets/laminaat_samples/normal 5.jpeg";
import normal6 from "../assets/laminaat_samples/normal 6.jpeg";
import normal7 from "../assets/laminaat_samples/normal 7.jpeg";

// ✅ VISGRAAT
import visgraat1 from "../assets/laminaat_samples/visgraat1.jpeg";
import visgraat2 from "../assets/laminaat_samples/visgraat2.jpeg";
import visgraat3 from "../assets/laminaat_samples/visgraat3.jpeg";
import visgraat4 from "../assets/laminaat_samples/visgraat4.jpeg";
import visgraat6 from "../assets/laminaat_samples/visgraat6.jpeg";
import visgraat7 from "../assets/laminaat_samples/visgraat7.jpeg";
import visgraat8 from "../assets/laminaat_samples/visgraat8.jpeg";
import visgraat9 from "../assets/laminaat_samples/visgraat9.jpeg";
import visgraat10 from "../assets/laminaat_samples/visgraat10.jpeg";
import visgraat11 from "../assets/laminaat_samples/visgraat11.jpeg";
import visgraat12 from "../assets/laminaat_samples/visgraat12.jpeg";

const GALLERIES: Record<"normaal" | "visgraat", string[]> = {
  normaal: [normal1, normal2, normal3, normal4, normal5, normal6, normal7],
  visgraat: [
    visgraat1,
    visgraat2,
    visgraat3,
    visgraat4,
    visgraat6,
    visgraat7,
    visgraat8,
    visgraat9,
    visgraat10,
    visgraat11,
    visgraat12,
  ],
};

export default function Work() {
  const [active, setActive] = useState<"normaal" | "visgraat">("normaal");

  return (
    <Section
      id="werk"
      eyebrow="Onze werkzaamheden"
      title="Voorbeelden van ons werk"
      subtitle="Kies een categorie om meer voorbeelden te bekijken."
    >
      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActive("normaal")}
          className={
            "rounded-full px-5 py-2 text-sm font-semibold transition " +
            (active === "normaal"
              ? "bg-slate-900 text-white"
              : "border bg-white text-slate-700 hover:bg-slate-50")
          }
        >
          Normaal
        </button>

        <button
          type="button"
          onClick={() => setActive("visgraat")}
          className={
            "rounded-full px-5 py-2 text-sm font-semibold transition " +
            (active === "visgraat"
              ? "bg-slate-900 text-white"
              : "border bg-white text-slate-700 hover:bg-slate-50")
          }
        >
          Visgraat
        </button>
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERIES[active].map((img, i) => (
          <div
            key={`${active}-${i}`}
            className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img}
                alt="Voorbeeld van ons werk"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
