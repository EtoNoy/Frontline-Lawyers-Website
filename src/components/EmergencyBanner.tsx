import { AlertTriangle, Phone } from 'lucide-react';

export function EmergencyBanner() {
  return (
    <div className="bg-gold-400 text-white py-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 animate-pulse" />
            <h2 className="text-sm font-bold uppercase tracking-tighter">Arrested or Charged?</h2>
          </div>
          <span className="hidden sm:inline-block opacity-80 uppercase text-[10px] tracking-widest">Call For A Free Consultation</span>
        </div>
        <a href="tel:0421066608" className="flex items-center gap-2 text-2xl font-sans font-bold hover:opacity-80 transition-opacity tracking-normal">
          <span>0421 066 608</span>
        </a>
      </div>
    </div>
  );
}
