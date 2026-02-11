import Section from "../components/ui/Section";

function HogePlint() {
  const benefits = [
    {
      title: "Moderne uitstraling",
      description: "Hoge plinten geven een strakke, moderne look aan je ruimte.",
    },
    {
      title: "Makkelijk schoonmaken",
      description: "Geen stofophoping achter lage plinten - alles blijft netjes.",
    },
    {
      title: "Betere akoestiek",
      description: "Helpt geluid te dempen in de ruimte.",
    },
    {
      title: "Verbergt kabels",
      description: "Ideaal voor het wegwerken van elektriciteitskabels en bekabeling.",
    },
  ];

  const options = [
    {
      height: "8 cm",
      material: "MDF",
      finish: "Schilderwerk",
      price: "€8–€10 / m²",
    },
    {
      height: "10 cm",
      material: "MDF",
      finish: "Folie bekleed",
      price: "€10–€12 / m²",
    },
    {
      height: "12 cm",
      material: "MDF",
      finish: "Houtfineer",
      price: "€12–€15 / m²",
    },
  ];

  return (
    <Section
      id="hogeplint"
      eyebrow="Extra Dienst"
      title="Hoge Plinten"
      subtitle="Moderne afwerking voor een strakke look."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Voordelen</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-slate-900 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-slate-900">{benefit.title}</div>
                    <div className="text-sm text-slate-600">{benefit.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
          <div className="border-b bg-slate-50 p-5">
            <div className="text-sm font-semibold">Opties</div>
          </div>
          <div className="divide-y">
            {options.map((option, index) => (
              <div key={index} className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium text-slate-900">{option.height} hoog</div>
                    <div className="text-sm text-slate-600">{option.material} • {option.finish}</div>
                  </div>
                  <div className="text-sm font-semibold text-slate-900">{option.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-5 border-t bg-slate-50">
            <div className="text-sm text-slate-600">
              Prijzen zijn inclusief montage en afwerking. Combineren met laminaat leggen mogelijk.
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HogePlint;