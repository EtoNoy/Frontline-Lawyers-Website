import { Target, Clock, Users, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    icon: MessageSquare,
    title: 'Word of Mouth & Trust',
    desc: 'We are deeply known in the Northern Rivers community, with nearly all our clients coming through personal recommendations.'
  },
  {
    icon: Clock,
    title: 'Free Consultations',
    desc: 'We offer a confidential, no-obligation free consultation to discuss your charges, outline your options, and provide immediate clarity.'
  },
  {
    icon: Target,
    title: 'Strategic Aggression',
    desc: 'We do not passively wait for court dates. We actively investigate, negotiate, and dismantle the prosecution\'s case early.'
  },
  {
    icon: Users,
    title: 'Dedicated Principal Lawyer',
    desc: 'Your case is not handed off to junior associates. Adam Ashley leads your defense strategy at every stage.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-charcoal-900 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4">WHY CHOOSE US?</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Why Clients in the Northern Rivers Choose Us.</h3>
            <p className="text-neutral-400 text-lg font-light leading-relaxed mb-8">
              We proudly serve the entire Northern Rivers region. Based primarily out of Murwillumbah, our services extend across Tweed Heads, Ballina, Byron Bay, Maclean, Ocean Shores, Mullumbimby, and Lismore.
            </p>
            <p className="text-neutral-400 text-lg font-light leading-relaxed">
              We employ relentless preparation, exceptional legal acumen, and strategic advocacy to ensure the best possible outcome. We are not just defending a charge; we are defending your future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <Link to="/why-choose-us" key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white/5 border border-white/10 p-6 hover:border-gold-400 transition-colors duration-300 h-full flex flex-col cursor-pointer"
                  >
                    <Icon className="w-8 h-8 text-gold-400 mb-4" />
                    <h4 className="text-gold-400 text-sm tracking-widest uppercase mb-2">{r.title}</h4>
                    <p className="text-neutral-400 text-xs leading-relaxed flex-grow">{r.desc}</p>
                    <div className="flex items-center gap-2 text-neutral-500 mt-4 text-[10px] uppercase tracking-widest">
                      <span>Learn More</span>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
