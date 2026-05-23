import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Do I really need a lawyer, or can I represent myself?",
    a: "The criminal justice system is complex and adversarial. Representing yourself against trained police prosecutors or the Director of Public Prosecutions puts you at a severe disadvantage. We know the procedural rules, how to challenge evidence, and how to negotiate effectively to protect your rights from day one."
  },
  {
    q: "The police want to interview me. What should I do?",
    a: "Do not participate in a police interview without legal advice. You have the right to silence. Anything you say can and will be used against you. Contact us immediately for a free consultation so we can advise you on your rights and deal with the police on your behalf."
  },
  {
    q: "What is the difference between pleading guilty and going to trial?",
    a: "Pleading guilty means accepting the charges, typically in exchange for some leniency, allowing the court to proceed to sentencing. Going to trial means forcing the prosecution to prove every element of the charge beyond a reasonable doubt. We will thoroughly analyze the evidence to advise you on the strongest strategic pathway."
  },
  {
    q: "How much will my defense cost?",
    a: "We operate on a transparent fee structure. Following an initial consultation and review of the police facts sheet, we typically offer fixed-fee arrangements for standard matters, or detailed cost agreements for complex trials. Your freedom is invaluable, and our rigorous defense reflects that."
  },
  {
    q: "Will a criminal conviction affect my employment or travel?",
    a: "Yes. A criminal record can severely impact your current employment, future career prospects, and ability to travel internationally (including the US and UK). We regularly fight for 'no conviction recorded' (Section 10) rulings to ensure our clients' futures remain intact."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-charcoal-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4">Clarity in Crisis</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-white">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/10 overflow-hidden bg-white/5"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-serif text-white">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gold-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-neutral-400 text-sm font-light leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
