import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Shield, Award, BookOpen, ExternalLink, HelpCircle } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { EmergencyBanner } from '../components/EmergencyBanner';
// @ts-ignore
import doylesGuideBadge from '../assets/images/doyles_guide_badge_1779505784393.png';

export function AboutAdamPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <EmergencyBanner />
        
        <section className="py-20 lg:py-32 bg-charcoal-900 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-500 hover:text-gold-400 transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-16">
              {/* Photo & Simple Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="col-span-1"
              >
                <div className="aspect-[3/4] relative w-full overflow-hidden mb-6 border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                    alt="Adam Ashley - Principal Lawyer" 
                    className="w-full h-full object-cover grayscale opacity-90"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-xl font-serif text-white mb-1">Adam Ashley</h2>
                  <p className="text-xs uppercase tracking-widest text-gold-400 mb-4">Principal Defense Lawyer</p>
                  
                  {/* Doyle's Guide Badging */}
                  <div className="bg-white/5 border border-white/10 p-4 rounded-sm flex items-center gap-4">
                    <img 
                      src={doylesGuideBadge} 
                      alt="Doyle's Guide Recommended Criminal Defense Badge Logo" 
                      className="h-12 w-12 object-contain filter brightness-110 drop-shadow-[0_0_8px_rgba(65,107,158,0.2)]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-semibold">Accolade</span>
                      <span className="text-xs text-white font-medium">Recommended by Doyle's Guide</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Main bio details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="col-span-1 md:col-span-2"
              >
                <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">Adam Ashley</h1>
                <div className="w-20 h-1 bg-gold-400 mb-8"></div>
                
                <div className="prose prose-invert prose-lg text-neutral-400 font-light leading-relaxed space-y-6">
                  <p className="text-xl text-neutral-300 font-normal">
                    Known across the Northern Rivers and Gold Coast for straightforward, dependable representation. Adam Ashley prioritizes the individual needs of each client.
                  </p>

                  <div>
                    <h3 className="text-xl font-serif text-white mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-gold-400" />
                      Mentorship & Foundation
                    </h3>
                    <p>
                      Adam Ashley's sharp attention to detail and rigorous defense strategies were forged during his formative years in law. He was privileged to be mentored directly by <strong>John Weller</strong>, a highly esteemed figure in criminal defense. Under this prestigious guidance, Adam masterfully refined his client-first methodology, learning that a brilliant courtroom defense requires absolute transparency, deep preparation, and a thorough understanding of the local court system.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif text-white mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-gold-400" />
                      Doyle’s Guide Recommendation
                    </h3>
                    <p className="mb-4">
                      Adam is recognized within the legal field for his commitment, professional competence, and results-focused advocacy. He is highly recommended in the prestigious <strong>Doyle’s Guide</strong>, which compiles rankings of Australian lawyers based on rigorous peer-review and reviews from clients and colleagues alike.
                    </p>
                    <a 
                      href="https://doylesguide.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 bg-white/5 border border-white/20 hover:border-gold-400 px-4 py-2.5 text-xs uppercase tracking-widest text-white font-semibold transition-colors duration-300"
                    >
                      <span>View Doyle's Guide Profile</span>
                      <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif text-white mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-gold-400" />
                      No-Nonsense Local Defense
                    </h3>
                    <p>
                      Rather than relying on complex legalese, Adam believes in providing honest, practical advice, so you know exactly where you stand. Representing clients throughout New South Wales and Queensland local courts, including Murwillumbah, Southport, Tweed Heads, Byron Bay, Mullumbimby, and Lismore, Adam has built a stellar track record of word-of-mouth client recommendations.
                    </p>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-charcoal-950 border-l-4 border-gold-400">
                  <h4 className="text-lg font-serif text-white mb-2">Need to discuss your case directly with Adam?</h4>
                  <p className="text-sm text-neutral-400 mb-6">Receive a clear, free initial assessment without judging or pressure.</p>
                  <a href="tel:0421066608" className="inline-flex items-center justify-center gap-3 bg-gold-400 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gold-500 transition-colors duration-300">
                    <Phone className="w-4 h-4" /> Call 0421 066 608 Now
                  </a>
                </div>
              </motion.div>
            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
