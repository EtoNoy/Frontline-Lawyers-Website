import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { practiceAreasData } from '../data/practiceAreas';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-charcoal-900 relative">
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4">Confidential Consultation</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 uppercase tracking-widest">Contact Us</h3>
            <p className="text-neutral-400 mb-10 text-lg font-light">
              Do not speak to the police. Call us immediately. Book a free consultation today for expert advice and bail applications.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-charcoal-900 border border-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-serif mb-1">Direct Line</h4>
                  <p className="text-neutral-400 text-sm">Call/SMS: <a href="tel:0421066608" className="text-white hover:text-gold-400 transition-colors">0421 066 608</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-charcoal-900 border border-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-serif mb-1">Consultations</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">Available by appointment across<br/>Murwillumbah, Tweed, Byron Bay,<br/>and Mullumbimby.</p>
                  <p className="text-neutral-400 text-sm mt-2"><span className="text-white">Mailing:</span> P.O Box 104<br/>Murwillumbah 2484, NSW</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-charcoal-900 border border-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-serif mb-1">Secure Email</h4>
                  <p className="text-neutral-400 text-sm">adam@frontlinelaw.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-charcoal-950 p-8 md:p-10 rounded border border-white/5"
          >
            <h4 className="text-2xl font-serif text-white mb-6">Request A Callback</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-[11px] font-bold tracking-widest uppercase text-neutral-500 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[11px] font-bold tracking-widest uppercase text-neutral-500 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors" />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-[11px] font-bold tracking-widest uppercase text-neutral-500 mb-2">Phone Number *</label>
                <input type="tel" id="phone" required className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors" />
              </div>

              <div>
                <label htmlFor="charge" className="block text-[11px] font-bold tracking-widest uppercase text-neutral-500 mb-2">Nature of the Case</label>
                <select id="charge" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors appearance-none">
                  <option value="">Select Primary Issue</option>
                  {practiceAreasData.map((area) => (
                    <option key={area.slug} value={area.slug}>{area.title}</option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="details" className="block text-[11px] font-bold tracking-widest uppercase text-neutral-500 mb-2">Details (What happened / Have you been charged?)</label>
                <textarea id="details" rows={4} className="w-full bg-white/5 border border-white/10 px-4 py-3 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors resize-none" placeholder="Provide details about your situation..." />
              </div>

              <div className="pt-2">
                <button type="submit" className="w-full bg-white hover:bg-neutral-200 text-black font-bold uppercase tracking-widest text-xs py-4 px-6 transition-colors duration-300">
                  Request Confidential Callback
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-4">
                Submitting this form does not create an attorney-client relationship. All information submitted is strictly confidential.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
