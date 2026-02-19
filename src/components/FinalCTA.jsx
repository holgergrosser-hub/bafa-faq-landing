import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, Mail, Bot } from 'lucide-react';

const FinalCTA = () => {
  const contactOptions = [
    {
      icon: Calendar,
      title: 'Termin buchen',
      description: 'Calendly',
      href: 'https://calendly.com/grosser-qmguru/bafa-berater-werden',
      color: 'bg-blue-500',
    },
    {
      icon: Phone,
      title: 'Anrufen',
      description: '0911-49522541',
      href: 'tel:+4991149522541',
      color: 'bg-green-500',
    },
    {
      icon: Mail,
      title: 'E-Mail',
      description: 'Schreiben Sie uns',
      href: 'mailto:holger.grosser@qm-guru.de',
      color: 'bg-purple-500',
    },
    {
      icon: Bot,
      title: 'KI-Berater',
      description: 'ChatGPT Assistent',
      href: 'https://chatgpt.com/g/g-6931a6c741c48191b95e0546fe7ab695-bafa-berater-assistent',
      color: 'bg-orange-500',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-900 via-primary-dark to-neutral-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Noch Fragen offen?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Sie sind nicht sicher, ob die BAFA-Registrierung der richtige Schritt für Sie ist?
            <br />
            Oder haben Sie spezielle Fragen zu Ihrer individuellen Situation?
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.a
                key={index}
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : undefined}
                rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20"
              >
                <div className={`w-14 h-14 ${option.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1">{option.title}</h3>
                <p className="text-sm text-white/70">{option.description}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
