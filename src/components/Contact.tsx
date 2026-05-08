import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
       {/* Background accents */}
       <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-400/10 blur-[100px] -translate-y-1/2 -translate-x-1/2 rounded-full" />
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white rounded-[40px] shadow-2xl border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Info pane */}
            <div className="lg:col-span-2 bg-slate-900 p-12 lg:p-16 text-white space-y-12">
              <div>
                <h3 className="text-3xl font-display font-bold mb-4">Mari Berkolaborasi.</h3>
                <p className="text-slate-400">Punya proyek impian? Ceritakan pada saya dan mari kita wujudkan bersama.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</div>
                    <div className="font-semibold">halo@kreatif.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Telepon</div>
                    <div className="font-semibold">+62 812 3456 7890</div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Lokasi</div>
                    <div className="font-semibold">Jakarta, Indonesia</div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
              </div>
            </div>

            {/* Form pane */}
            <div className="lg:col-span-3 p-12 lg:p-20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Nama Lengkap</label>
                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Alamat Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Subjek Proyek</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all">
                    <option>Pilih Kategori</option>
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Mobile App</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Pesan Anda</label>
                  <textarea rows={4} placeholder="Ceritakan detail proyek Anda..." className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none"></textarea>
                </div>

                <button type="button" className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-200 flex items-center justify-center gap-2">
                  Kirim Pesan <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
