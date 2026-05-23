import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { practiceAreasData } from '../data/practiceAreas';

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 bg-charcoal-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4">Areas of Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Uncompromising Defense.</h3>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            We focus exclusively on criminal law. Our specialized expertise ensures that every loophole is found and every constitutional right is fiercely protected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {practiceAreasData.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <Link to={`/practice-areas/${practice.slug}`} key={practice.slug}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                  className="group p-6 bg-white/5 border border-white/10 hover:border-gold-400 transition-colors duration-300 h-full flex flex-col"
                >
                  <h4 className="text-gold-400 text-sm mb-2">{practice.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4 flex-grow">{practice.desc}</p>
                  <div className="flex items-center gap-2 text-neutral-500 group-hover:text-gold-400 transition-colors text-[10px] uppercase tracking-widest mt-auto">
                    <span>Learn More</span>
                    <Icon className="w-3 h-3" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
