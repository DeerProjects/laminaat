import { motion } from "framer-motion";
import { Phone, MessageCircle, Shield } from "lucide-react";
import { CONTACT } from "../data/contact";
import heroBg from "../assets/laminaat_samples/hero-bg.jpg.png";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/10" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
            >
              <Shield className="h-4 w-4" />
              Vakkundig • Netjes • {CONTACT.guarantee}
            </motion.div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Laminaat & PVC professioneel gelegd —{" "}
              <span className="text-white/90">strak en snel.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base text-white/85">
              {CONTACT.description}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#prijzen"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white/90"
              >
                Prijs berekenen
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
              >
                Gratis offerte aanvragen
              </a>
            </div>

      
          </div>

          {/* right card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  Snelle contact
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Stuur ons via WhatsApp het aantal m² en een paar foto’s. We
                  reageren meestal dezelfde dag.
                </div>

                <div className="mt-5 grid gap-3">
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    <Phone className="h-4 w-4" />
                    {CONTACT.phoneDisplay}
                  </a>

                  <a
                    href={CONTACT.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>

                <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                  <div className="font-semibold text-slate-900">Tip</div>
                  <div className="mt-1">
                    Foto’s van drempels, hoeken en de ondergrond helpen om direct
                    een scherpe en vaste prijs te bepalen.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
