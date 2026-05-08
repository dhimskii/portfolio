import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <span className="text-3xl font-display font-bold tracking-tighter text-slate-900">
              KREATIF<span className="text-blue-600">.</span>
            </span>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Agensi desain dan pengembangan web independen yang berbasis di Indonesia. Kami mencintai apa yang kami lakukan dan melakukannya dengan integritas.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Tautan</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-500 hover:text-blue-600 transition-colors">Beranda</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-blue-600 transition-colors">Layanan</a></li>
              <li><a href="#projects" className="text-slate-500 hover:text-blue-600 transition-colors">Proyek</a></li>
              <li><a href="#about" className="text-slate-500 hover:text-blue-600 transition-colors">Tentang Kami</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Berlangganan</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Kreatif Studio. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            Dibuat dengan <Heart size={14} className="text-red-500 fill-red-500" /> di Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
