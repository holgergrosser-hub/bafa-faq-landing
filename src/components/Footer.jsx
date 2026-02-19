import React from 'react';
import { Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-bold mb-4">
              QM-Guru
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Ihr Experte für BAFA-Berater-Registrierung und Qualitätsmanagement seit 1994.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a
                href="tel:+4991149522541"
                className="flex items-center text-neutral-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                0911-49522541
              </a>
              <a
                href="mailto:holger.grosser@qm-guru.de"
                className="flex items-center text-neutral-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                holger.grosser@qm-guru.de
              </a>
              <a
                href="https://qm-guru.de"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-neutral-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                qm-guru.de
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Rechtliches</h4>
            <div className="space-y-3">
              <a
                href="https://qm-guru.de/impressum/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-400 hover:text-white transition-colors"
              >
                Impressum
              </a>
              <a
                href="https://qm-guru.de/sonstiges/datenschutz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-400 hover:text-white transition-colors"
              >
                Datenschutz
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
          <p>
            © {new Date().getFullYear()} QM-Dienstleistungen Holger Grosser. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
