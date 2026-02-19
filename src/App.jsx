import React, { useState, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Lightbulb, FileCheck, MessageCircle } from 'lucide-react';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import CategoryCards from './components/CategoryCards';
import FAQAccordion from './components/FAQAccordion';
import CTABox from './components/CTABox';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import { faqData } from './data/faqData';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(faqData);

  useEffect(() => {
    if (searchTerm) {
      const filtered = faqData
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (q) =>
              q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
              q.answer.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        }))
        .filter((category) => category.questions.length > 0);
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(faqData);
    }
  }, [searchTerm]);

  const scrollToCategory = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>BAFA Berater FAQ - Alle 30 Fragen zur Registrierung beantwortet | QM-Guru</title>
          <meta
            name="description"
            content="Komplette FAQ zur BAFA-Beraterregistrierung: Registrierungsprozess, QM-System, Dokumentation. Von QM-Experte Holger Grosser mit 30+ Jahren Erfahrung."
          />
          <meta
            name="keywords"
            content="BAFA Berater, BAFA Registrierung, QM System, BAFA ID, Unternehmensberater, Förderung, QM-Handbuch, BAFA Audit"
          />
          
          {/* Open Graph */}
          <meta property="og:title" content="BAFA Berater FAQ - Alle Antworten zur Registrierung" />
          <meta
            property="og:description"
            content="30 häufigste Fragen zur BAFA-Beraterregistrierung beantwortet von QM-Experte Holger Grosser."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://bafa-faq.qm-guru.de" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="BAFA Berater FAQ" />
          <meta
            name="twitter:description"
            content="30 häufigste Fragen zur BAFA-Beraterregistrierung beantwortet."
          />

          {/* Structured Data - FAQPage Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqData.flatMap((category) =>
                category.questions.map((q) => ({
                  '@type': 'Question',
                  name: q.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: q.answer,
                  },
                }))
              ),
            })}
          </script>
        </Helmet>

        <Navigation />
        
        <Hero searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        <TrustIndicators />
        
        <CategoryCards onCategoryClick={scrollToCategory} />

        {/* FAQ Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-16">
              {filteredCategories.map((category, index) => (
                <React.Fragment key={category.id}>
                  <FAQAccordion category={category} searchTerm={searchTerm} />
                  
                  {/* CTA after first category */}
                  {index === 0 && (
                    <CTABox
                      icon={Lightbulb}
                      title="Fragen zum Registrierungsprozess?"
                      description="Lassen Sie uns Ihre Situation im kostenlosen Erstgespräch besprechen."
                      primaryCTA={{
                        text: 'Termin vereinbaren',
                        href: 'https://calendly.com/grosser-qmguru/bafa-berater-werden',
                      }}
                    />
                  )}

                  {/* CTA after second category */}
                  {index === 1 && (
                    <CTABox
                      icon={FileCheck}
                      title="QM-System zu kompliziert?"
                      description="Wir erstellen Ihre komplette Dokumentation – individuell auf Ihre Beratungstätigkeit zugeschnitten."
                      primaryCTA={{
                        text: 'Kostenloses Angebot anfordern',
                        href: 'http://qm-guru-angebote.netlify.app',
                      }}
                      secondaryCTA={{
                        text: 'Mehr erfahren',
                        href: 'https://qm-guru.de/zulassung-bafa-berater/',
                      }}
                    />
                  )}
                </React.Fragment>
              ))}

              {/* No results message */}
              {filteredCategories.length === 0 && (
                <div className="text-center py-12">
                  <MessageCircle className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    Keine Ergebnisse gefunden
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Versuchen Sie andere Suchbegriffe oder{' '}
                    <button
                      onClick={() => setSearchTerm('')}
                      className="text-primary font-semibold hover:underline"
                    >
                      alle FAQs anzeigen
                    </button>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <FinalCTA />
        
        <Footer />
        
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
}

export default App;
