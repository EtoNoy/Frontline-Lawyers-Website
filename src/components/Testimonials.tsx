import { motion } from 'motion/react';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { testimonialsData } from '../data/testimonials';

export function Testimonials() {
  return (
    <section id="results" className="py-24 bg-charcoal-950 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4">Proven Results</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">Strategic Counsel. Relentless Defense.</h3>
          <p className="text-gold-400/80 text-sm italic">
            * All reviews are anonymous for discretion reasons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonialsData.slice(0, 3).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-charcoal-800 p-6 border-l-2 border-gold-400 relative flex flex-col"
            >
              <Quote className="w-8 h-8 text-white/5 absolute top-4 right-4" />
              
              <div className="mb-4 inline-block bg-white/5 border border-white/10 text-gold-400 text-[10px] px-2 py-1 uppercase tracking-widest self-start">
                Result: {t.outcome}
              </div>
              
              <p className="text-neutral-300 text-sm italic leading-relaxed mb-6 flex-grow">"{t.quote}"</p>
              
              <div className="pt-2 border-t border-white/5 mt-auto">
                <p className="text-[10px] uppercase tracking-widest text-white">— {t.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            to="/reviews"
            className="inline-flex items-center gap-2 bg-transparent border border-white/20 px-8 py-3 text-xs uppercase tracking-widest text-white font-bold hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300"
          >
            See All Case Results
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
