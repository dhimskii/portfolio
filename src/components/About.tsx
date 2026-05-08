import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const points = [
    'Pengembangan Web Full-stack',
    'Desain Antarmuka Pengguna (UI)',
    'Optimasi Performa & SEO',
    'Integrasi API & Sistem AI',
    'Arsitektur Software Berbasis Cloud',
    'Konsultasi Produk Digital'
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-slate-800">
              <img 
                src="https://picsum.photos/seed/creative-person/800/800" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 p-8 bg-blue-600 rounded-2xl shadow-2xl z-20 hidden md:block">
              <div className="text-4xl font-display font-black">7+</div>
              <div className="text-sm font-bold uppercase tracking-widest text-blue-100">Tahun Pengalaman</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Tentang Saya</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 italic leading-tight">
                "Menggabungkan Logika Teknik Dengan Estetika Desain."
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Halo! Saya seorang Software Engineer dan Product Designer yang berdedikasi untuk membangun produk digital yang bermakna. Saya percaya bahwa setiap baris kode harus memiliki tujuan, dan setiap elemen desain harus mempermudah pengguna.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point) => (
                <div key={point} className="flex items-center space-x-3 group">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-slate-300 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 flex items-center space-x-12">
              <div>
                <div className="text-3xl font-display font-bold">120+</div>
                <div className="text-slate-500 text-sm">Proyek Selesai</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold">45+</div>
                <div className="text-slate-500 text-sm">Klien Global</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
