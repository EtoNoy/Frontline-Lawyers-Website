import { ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
// @ts-ignore
import frontlineLogo from '../assets/images/cd2eee_e0511956a9d54b74accf1487de012a66~mv2.png';

export function Footer() {
  return (
    <footer className="bg-charcoal-980 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center mb-6 hover:opacity-80 transition-opacity">
              <img 
                src={frontlineLogo} 
                alt="Frontline Lawyers Logo" 
                className="h-10 w-auto object-contain filter brightness-110"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
              Exclusive criminal defense representation. We defend cases across the Northern Rivers region.
            </p>
            <div className="flex items-center gap-2 text-gold-400">
              <ShieldAlert className="w-4 h-4" />
              <span className="uppercase tracking-widest text-xs font-semibold">Available For Free Consultations</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6 text-lg">Practice Areas</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/practice-areas/police-matters" className="hover:text-gold-400 transition-colors">Police Matters</Link></li>
              <li><Link to="/practice-areas/drink-driving-dui" className="hover:text-gold-400 transition-colors">DUI & Drink Driving</Link></li>
              <li><Link to="/practice-areas/assault-charges" className="hover:text-gold-400 transition-colors">Assault Charges</Link></li>
              <li><Link to="/practice-areas/drug-offences" className="hover:text-gold-400 transition-colors">Drug Offenses</Link></li>
              <li><Link to="/practice-areas/domestic-violence" className="hover:text-gold-400 transition-colors">Domestic Violence</Link></li>
              <li><Link to="/practice-areas/bail-matters" className="hover:text-gold-400 transition-colors">Bail Applications</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6 text-lg">Firm</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/#about" className="hover:text-gold-400 transition-colors">About</a></li>
              <li><Link to="/reviews" className="hover:text-gold-400 transition-colors">Case Results</Link></li>
              <li><a href="/#contact" className="hover:text-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6 text-lg">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/privacy-policy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-gold-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-gold-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-gray-500 text-xs leading-relaxed max-w-4xl">
            &copy; {new Date().getFullYear()} Frontline Lawyers. All rights reserved. Liability limited by a scheme approved under Professional Standards Legislation.
            <span className="block mt-2 text-gray-600">
              Disclaimer: No content on this website should be considered formal legal advice. Accessing or using this site does not constitute a lawyer-client relationship.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
