import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Shield, Target, Clock, Users, MessageSquare } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { EmergencyBanner } from '../components/EmergencyBanner';

export function WhyChooseUsDetail() {
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
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">WHY CHOOSE US?</h1>
              <div className="w-20 h-1 bg-gold-400 mb-8"></div>
              
              <div className="prose prose-invert prose-lg max-w-none text-neutral-400 font-light leading-relaxed">
                <p className="text-xl text-neutral-300 font-medium mb-8">
                  At Frontline Lawyers, we understand that facing criminal charges is one of the most daunting experiences of your life. 
                  Our reputation in the Northern Rivers is built on a foundation of trust, diligent advocacy, and unwavering commitment to our clients.
                </p>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-4 flex items-center gap-3">
                      <MessageSquare className="w-6 h-6 text-gold-400" />
                      Community Trust & Word of Mouth
                    </h3>
                    <p>
                      We are deeply embedded in the Northern Rivers community. The vast majority of our clients come to us through personal recommendations—a testament to the exceptional results we consistently deliver. From our main area in Murwillumbah to Tweed Heads, Ballina, Byron Bay, Maclean, Ocean Shores, Mullumbimby, and Lismore, our reputation precedes us. When you choose Frontline Lawyers, you are choosing a firm known locally for representing its residents with utmost care and diligence.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif text-white mb-4 flex items-center gap-3">
                      <Clock className="w-6 h-6 text-gold-400" />
                      Free Initial Consultation
                    </h3>
                    <p>
                      We believe everyone deserves exceptional legal defense. We offer a confidential, no-obligation free consultation, giving you the opportunity to discuss your charges, understand your options, and get immediate clarity on your situation without any financial pressure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif text-white mb-4 flex items-center gap-3">
                      <Target className="w-6 h-6 text-gold-400" />
                      Proactive Representation
                    </h3>
                    <p>
                      We do not passively wait for court dates. We actively investigate, negotiate, and work to examine the prosecution's case in its early stages. Our proactive approach often leads to charges being downgraded or resolved favorably before reaching final hearing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif text-white mb-4 flex items-center gap-3">
                      <Users className="w-6 h-6 text-gold-400" />
                      Dedicated Principal Lawyer
                    </h3>
                    <p>
                      Your case is not handed off to junior associates or paralegals. Adam Ashley, the firm's Principal Lawyer, personally leads and manages your defense strategy from the initial consultation through to the final resolution. You benefit directly from his extensive courtroom expertise and dedicated approach.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif text-white mb-4 flex items-center gap-3">
                      <Shield className="w-6 h-6 text-gold-400" />
                      Confidentiality & Discretion
                    </h3>
                    <p>
                      We manage complex and sensitive cases out of the media spotlight. We understand that your reputation, career, and family are on the line. We employ strict confidentiality measures from the moment you contact us, ensuring that your privacy is forcefully protected.
                    </p>
                  </div>

                </div>
                
                <div className="mt-16 p-8 bg-charcoal-950 border-l-4 border-gold-400">
                  <h3 className="text-2xl font-serif text-white mb-4">Secure Your Defense Today</h3>
                  <p className="mb-6 text-sm">Serving Murwillumbah, Tweed Heads, Ballina, Byron Bay, Maclean, Ocean Shores, Mullumbimby, Lismore, and the entire Northern Rivers region.</p>
                  <a href="tel:0421066608" className="inline-flex items-center justify-center gap-3 bg-gold-400 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gold-500 transition-colors duration-300">
                    <Phone className="w-4 h-4" /> Call 0421 066 608 Now
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
