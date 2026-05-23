import { motion } from 'motion/react';
import { ArrowRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <section id="about" className="py-24 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] relative z-10 w-full overflow-hidden">
              {/* Using a professional, high-end placeholder image */}
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                alt="Lead Defense Attorney" 
                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-gold-400 z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold-400 font-semibold tracking-widest uppercase text-sm">About Adam Ashley</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">Grounded, Dedicated Client Focus.</h3>
            
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
              When navigating the criminal justice system, you deserve straightforward representation that represents your side of the story clearly and thoroughly. Adam treats every client as his main priority. He isn't here to judge you or treat you like a case number—he is here to listen, answer your calls, and put in the work to achieve the best possible result for your situation.
            </p>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              Over the years, Adam has built a strong local reputation throughout the Northern Rivers simply by standing by his clients and being honest with them. Because of this personal commitment, nearly all of his clients come to him through word-of-mouth recommendations from friends, families, and neighbors who have trusted him during difficult times.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Highly regarded local representation',
                'Client-first, personal approach',
                'Deeply familiar with Northern Rivers courts',
                'Committed to straightforward, honest guidance'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-300">
                  <Award className="w-4 h-4 text-gold-400" />
                  <span className="text-sm uppercase tracking-widest">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-8 justify-between mt-8 pt-6 border-t border-white/5">
              <div className="flex items-center gap-6">
                {/* Signature placeholder */}
                <div className="font-serif text-3xl text-white/50 italic mb-2">Adam Ashley</div>
                <div className="w-px h-10 bg-white/20"></div>
                <div className="text-sm uppercase tracking-widest text-gold-400">Principal Defense Lawyer</div>
              </div>
              <Link to="/about-adam" className="inline-flex items-center gap-2 bg-white/5 border border-white/20 px-6 py-3 text-xs uppercase tracking-widest text-gold-400 font-bold hover:bg-gold-400 hover:text-white hover:border-gold-400 transition-all duration-300 rounded-sm shrink-0">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
