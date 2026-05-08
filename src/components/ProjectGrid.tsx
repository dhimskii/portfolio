import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function ProjectGrid() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Mahakarya Yang Telah Selesai.</h3>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-lg border border-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <a href={project.link} className="p-4 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-600 line-clamp-2">
                  {project.description}
                </p>
                <a href={project.link} className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors group/link">
                  Lihat Detail 
                  <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-5 border-2 border-slate-900 text-slate-900 font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all">
            Lihat Semua Proyek
          </button>
        </div>
      </div>
    </section>
  );
}
