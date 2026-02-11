import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "../data/contact";
import logo from "../assets/logo.png";

export default function Nav() {
  const items = [
    { label: "Diensten", href: "#diensten" },
    { label: "Onze werkzaamheden", href: "#werk" },
    { label: "Werkwijze", href: "#werkwijze" },
    { label: "Tarieven", href: "#prijzen" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Logo + Name */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt={CONTACT.company}
            className="h-10 w-auto"
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">
              {CONTACT.company}
            </div>
            <div className="text-xs text-slate-500">
              Vloeren Specialist en Onderhoud
            </div>
          </div>
        </a>

        {/* Menu */}
        <nav className="hidden items-center gap-6 md:flex">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              {it.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <a
            href={CONTACT.whatsappHref}
            className="hidden items-center gap-2 rounded-2xl border bg-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-slate-50 sm:flex"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>

          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            <Phone className="h-4 w-4" />
            Bel nu
          </a>
        </div>
      </div>
    </div>
  );
}
