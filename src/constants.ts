import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern E-commerce Platform',
    description: 'Sebuah platform belanja online modern dengan fitur real-time inventory dan sistem pembayaran terintegrasi.',
    image: 'https://picsum.photos/seed/shop/800/600',
    tags: ['React', 'Next.js', 'Stripe', 'Tailwind'],
    link: '#'
  },
  {
    id: '2',
    title: 'AI Productivity Dashboard',
    description: 'Dashboard analitik yang menggunakan AI untuk memberikan wawasan tentang produktivitas tim secara cerdas.',
    image: 'https://picsum.photos/seed/dashboard/800/600',
    tags: ['Gemini API', 'TypeScript', 'Recharts'],
    link: '#'
  },
  {
    id: '3',
    title: 'Travel Inspiration App',
    description: 'Aplikasi mobile-first untuk menemukan destinasi wisata tersembunyi berdasarkan preferensi pengguna.',
    image: 'https://picsum.photos/seed/travel/800/600',
    tags: ['React Native', 'Firebase', 'Google Maps'],
    link: '#'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Membangun situs web yang cepat, aman, dan dapat diskalakan menggunakan teknologi terbaru.',
    icon: 'Code2'
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'Menciptakan antarmuka pengguna yang intuitif dan pengalaman yang memikat.',
    icon: 'Palette'
  },
  {
    id: '3',
    title: 'Mobile Apps',
    description: 'Pengembangan aplikasi mobile lintas platform untuk performa maksimal di iOS dan Android.',
    icon: 'Smartphone'
  }
];
