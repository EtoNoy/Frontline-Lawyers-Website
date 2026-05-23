import { Link } from 'react-router-dom';
import { ArrowLeft, Quote, Shield } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { testimonialsData } from '../data/testimonials';

export function ReviewsPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 font-sans selection:bg-gold-500/30 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <EmergencyBanner />
        <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/#results" className="inline-flex items-center gap-2 text-gold-400 hover:text-white transition-colors text-xs tracking-widest uppercase font-bold mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-gold-400" />
              <h1 className="text-4xl md:text-5xl font-serif text-white">Case Results & Client Reviews</h1>
            </div>
            <p className="text-neutral-400 leading-relaxed text-lg mb-2">
              Our reputation is built on the outcomes we secure for our clients. Read about real cases where our strategic defense changed lives.
            </p>
            <p className="text-gold-400/80 text-sm italic">
              * All reviews are anonymous for discretion reasons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
