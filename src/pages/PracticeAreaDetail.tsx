import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { practiceAreasData } from '../data/practiceAreas';
import { motion } from 'motion/react';
import { EmergencyBanner } from '../components/EmergencyBanner';

export function PracticeAreaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const area = practiceAreasData.find(a => a.slug === slug);

  if (!area) {
    return (
      <div className="min-h-screen bg-charcoal-950 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl text-white mb-4">Practice Area Not Found</h1>
            <Link to="/#practice-areas" className="text-gold-400 hover:underline flex items-center justify-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Practice Areas
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = area.icon;

  return (
    <div className="min-h-screen bg-charcoal-950 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <EmergencyBanner />
        
        <section className="py-20 lg:py-32 bg-charcoal-900 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/#practice-areas" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-500 hover:text-gold-400 transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Practice Areas
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <Icon className="w-8 h-8 text-gold-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">{area.title}</h1>
              <div className="w-20 h-1 bg-gold-400 mb-8"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-8 border-b border-white/5">
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase tracking-widest text-gold-400 block font-semibold">Severity & Potential Impact</span>
                  <p className="text-neutral-300 text-[13px] leading-relaxed">{area.severity}</p>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase tracking-widest text-gold-400 block font-semibold">Timeline & Procedural Urgency</span>
                  <p className="text-neutral-300 text-[13px] leading-relaxed">{area.urgency}</p>
                </div>
              </div>

              <div className="prose prose-invert prose-lg max-w-none text-neutral-400 font-light leading-relaxed">
                <p className="text-xl md:text-2xl text-white font-serif mb-8 leading-relaxed">
                  {area.fullDescription}
                </p>
                
                <div className="mt-12 p-8 bg-charcoal-950 border-l-4 border-gold-400 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-[50px] rounded-full pointer-events-none"></div>
                  <h3 className="text-2xl font-serif text-white mb-4">Urgent Case Evaluation</h3>
                  <p className="mb-6 text-sm text-neutral-400">Time is critical. Expert representation is available across the Northern Rivers region, including Murwillumbah, Tweed, Byron Bay, and Mullumbimby.</p>
                  <a href="tel:0421066608" className="inline-flex items-center justify-center gap-3 bg-gold-400 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gold-500 transition-colors duration-300">
                    <Phone className="w-4 h-4" /> Contact Us Now for Support: 0421 066 608
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
