import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] -z-10 opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-400 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium shadow-sm"
          >
            <Sparkles size={16} className="mr-2" />
            <span>Membangun Masa Depan Digital</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.1]"
          >
            Desain <span className="text-gradient">Elegan</span> Untuk Ide Berlian Anda.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Saya membantu startup dan perusahaan besar menciptakan pengalaman digital yang memukau, responsif, dan berorientasi pada pengguna.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button id="hero-cta-primary" className="group px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all flex items-center shadow-2xl shadow-slate-200">
              Mulai Proyek
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button id="hero-cta-secondary" className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-full border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
              Lihat Portfolio
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100"
        >
           <img 
            src="https://picsum.photos/seed/portfolio-hero/1200/600" 
            alt="Hero Presentation" 
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
