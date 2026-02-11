import { CONTACT } from "../data/contact";
import logo from "../assets/logo.png";

const MARKTPLAATS_URL =
  "https://www.marktplaats.nl/v/diensten-en-vakmensen/vloerleggers-en-parketteurs/a1505441237-laminaat-legger-vloer-pvc-visgraat-egaliseren-traprenovatie";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt={CONTACT.company} className="h-10 w-auto" />
            <div>
              <div className="font-semibold text-slate-900">{CONTACT.company}</div>
              <div className="text-xs">Vloeren • Plinten • Egaliseren</div>

              {/* ✅ küçük Marktplaats link */}
              <a
                href={MARKTPLAATS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-xs text-slate-500 underline hover:text-slate-900"
              >
                Ook actief op Marktplaats
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a className="hover:text-slate-900" href="#diensten">
              Diensten
            </a>
            <a className="hover:text-slate-900" href="#prijzen">
              Tarieven
            </a>
            <a className="hover:text-slate-900" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} {CONTACT.company}. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
