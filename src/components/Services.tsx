import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Layanan Spesialis</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Solusi Komprehensif Untuk Kebutuhan Digital Anda.</h3>
          </div>
          <p className="text-lg text-slate-600 max-w-sm">
            Fokus pada kualitas kode dan desain yang modern untuk memberikan hasil terbaik bagi bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <h4 className="text-2xl font-display font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
