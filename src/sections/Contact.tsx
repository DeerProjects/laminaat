import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { CONTACT } from "../data/contact";
import Section from "../components/ui/Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Neem contact op"
      subtitle="Bel, mail of stuur een WhatsApp-bericht voor een vrijblijvende offerte."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* LEFT */}
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <div className="space-y-4 text-sm">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-3 text-slate-900 hover:text-slate-700"
            >
              <Phone className="h-4 w-4" />
              {CONTACT.phoneDisplay}
            </a>

            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-900 hover:text-slate-700"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 text-slate-900 hover:text-slate-700"
            >
              <Mail className="h-4 w-4" />
              {CONTACT.email}
            </a>

            <div className="flex items-start gap-3 text-slate-700">
              <MapPin className="mt-0.5 h-4 w-4" />
              <div>{CONTACT.addressLine}</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rounded-3xl border bg-slate-900 p-6 text-white shadow-sm">
          <div className="text-sm font-semibold">Snelle tip</div>
          <p className="mt-2 text-sm text-white/80">
            Voor een snelle prijsindicatie: stuur via WhatsApp het aantal m²
            en een paar foto’s van de ruimte (drempels, hoeken en ondergrond).
          </p>

          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90"
          >
            <MessageCircle className="h-4 w-4" />
            Open WhatsApp
          </a>
        </div>
      </div>
    </Section>
  );
}
