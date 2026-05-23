import { motion } from 'motion/react';
import { ArrowRight, ShieldAlert } from 'lucide-react';
// @ts-ignore
import wavesBackground from '../assets/images/Frontline Lawyers Image (1).jpg';
// @ts-ignore
import doylesGuideBadge from '../assets/images/doyles_guide_badge_1779505784393.png';
// @ts-ignore
import frontlineLogo from '../assets/images/cd2eee_e0511956a9d54b74accf1487de012a66~mv2.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-charcoal-950">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${wavesBackground}")` }}
      ></div>
      
      {/* Seamless and refined gradient overlays to show the image clearly while maintaining text readability */}
      <div 
        className="absolute inset-0 z-10 bg-black/25" 
      ></div>
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `linear-gradient(to top, 
            rgba(12, 12, 12, 1.0) 0%, 
            rgba(12, 12, 12, 0.8) 25%, 
            rgba(12, 12, 12, 0.45) 55%, 
            rgba(12, 12, 12, 0.15) 80%, 
            rgba(12, 12, 12, 0.0) 100%)`
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-8 justify-center"
          >
            <ShieldAlert className="w-5 h-5 text-gold-400" />
            <span className="text-gold-400 font-semibold tracking-widest uppercase text-sm">Northern Rivers NSW Criminal Defense Lawyer</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center mb-8 select-none text-center"
          >
            <img 
              src={frontlineLogo} 
              alt="Frontline Lawyers" 
              className="h-28 sm:h-36 md:h-44 w-auto object-contain filter brightness-110 drop-shadow-[0_0_24px_rgba(65,107,158,0.2)]"
              referrerPolicy="no-referrer"
            />
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed mx-auto"
          >
            Straightforward legal representation to protect your rights, livelihood, and future. From our base in Murwillumbah, we represent clients in local courts across Southport, Tweed Heads, Ballina, Byron Bay, Mullumbimby, and Lismore.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contact" className="group flex items-center justify-center gap-3 border border-white/20 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300">
              Request Immediate Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:0421066608" className="flex items-center justify-center gap-3 bg-gold-400 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gold-500 transition-colors duration-300">
              Free Consultation
            </a>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.8 }}
             className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 border-t border-white/10 pt-8 w-full"
          >
            <div className="flex items-center gap-4 text-left">
              <img 
                src={doylesGuideBadge} 
                alt="Doyle's Guide Recommended Criminal Defense Badge" 
                className="h-16 w-16 object-contain filter brightness-110 drop-shadow-[0_0_12px_rgba(65,107,158,0.25)] shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="text-lg md:text-xl font-serif text-white mb-0.5 tracking-wide uppercase font-medium">Recommended</div>
                <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold leading-tight">Doyle's Guide Criminal Defense</div>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-white/10"></div>
            
            <div className="pt-4 sm:pt-0 text-center sm:text-left">
              <div className="text-lg md:text-xl font-serif text-white mb-0.5 tracking-wide uppercase font-medium">Peer Ranked</div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold leading-tight">Independent Legal Review</div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-white/10"></div>

            <div className="pt-4 sm:pt-0 text-center sm:text-left">
              <div className="text-lg md:text-xl font-serif text-white mb-0.5 tracking-wide uppercase font-medium">Admitted</div>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold leading-tight">NSW & QLD Supreme Courts</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
