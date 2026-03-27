import Link from "next/link";
import { Leaf, Flower2, Sparkles } from "lucide-react";

export default function Home() {
  const trendingPosts = [
    { id: "01", category: "Ayurveda", title: "Rituales de mañana para equilibrar Pitta" },
    { id: "02", category: "Filosofía", title: "¿Por qué 108? El número sagrado" },
    { id: "03", category: "Jyotish", title: "Predicciones lunares para este mes" },
    { id: "04", category: "Yoga", title: "Secuencia de apertura de corazón" },
  ];

  return (
    <div className="font-body text-on-surface">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[400px] overflow-hidden bg-primary/20">
        <div className="absolute inset-0">
          <img
            alt="Turquoise Ocean Coast"
            className="w-full h-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida/ADBb0uj67EwrIVsnLuYul43d3mrXG_ebRVSVHPlLxlfFccIfMjjHyYHxvrNdzJFuixx1oShFmsZvpU1ys9hLJGMnXrxCZ2qJlDs3kNPPYyOap5eNK7JCQHnQnt-f9uEqoU92YS0EbhfcCsR9zNU3R5anV8YVq56Y6zz22J6WgkFZWWFxlrKaXU4bYmR2-J6PPKF11jlI8mrPVmV0uz2kEN1j_t-w-HU-6NQTWcCvZA1_4oviO4b55R5oj4Snvuqs_3tU6WjmmhjJ0qJM"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <div className="flex flex-row gap-8 md:gap-16 lg:gap-32 justify-center max-w-5xl mx-auto px-6 pb-8 items-center text-white">
            <Link href="/ayurveda" className="group flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2">
              <Leaf className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 stroke-1 drop-shadow-lg" />
              <span className="font-bold uppercase tracking-[0.2em] text-xs md:text-sm lg:text-base border-b-2 border-transparent group-hover:border-white pb-1 transition-all">Ayurveda</span>
            </Link>
            <Link href="/yoga" className="group flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2">
              <Flower2 className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 stroke-1 drop-shadow-lg" />
              <span className="font-bold uppercase tracking-[0.2em] text-xs md:text-sm lg:text-base border-b-2 border-transparent group-hover:border-white pb-1 transition-all">Yoga</span>
            </Link>
            <Link href="/jyotish" className="group flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2">
              <Sparkles className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 stroke-1 drop-shadow-lg" />
              <span className="font-bold uppercase tracking-[0.2em] text-xs md:text-sm lg:text-base border-b-2 border-transparent group-hover:border-white pb-1 transition-all">Jyotish</span>
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8 group">
            <div className="relative overflow-hidden rounded-2xl aspect-[16/10] lg:aspect-[16/9]">
              <img
                alt="¿Quién Soy?"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida/ADBb0ugHun7g5U0EfhsjZPkI94BTMq1MYFCpFPVTfi5gfEpgM-rEsU2qDRKMASHTfQ5f585zqKa3aYdIaMCQGbz5bN74pgT0GuLeFYRhYPanhLvKi57b6OnIaM9JD9bQYC5P-2EPm8QpF0tEyVIk27zPIkH6OOwUJUk4Nzu32BWcDVh39JwKWwdhJ-cR1LgLlNuoR_-3p1ifPU1p9lKxvv0wkWv7aERueQ5RqvpJjfXwf6ruudcT8mL0mF5I7ZyEeyHgRKBdvZusS9aT"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white max-w-xl">
                <span className="inline-block px-3 py-1 bg-primary/90 text-[10px] font-bold uppercase tracking-widest mb-4">Sobre Mí</span>
                <h2 className="text-4xl lg:text-6xl font-headline mb-4 leading-tight">¿Quién Soy? Mi viaje holístico</h2>
                <p className="text-white/80 text-lg font-light mb-6">Un recorrido por las disciplinas que cambiaron mi forma de ver la vida: Ayurveda, Yoga y Astrología Védica.</p>
                <Link href="#" className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-primary hover:border-primary transition-all">Leer historia</Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="border-l border-slate-100 pl-8 relative">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-10">Trending Now</h3>
              <div className="space-y-10">
                {trendingPosts.map((post) => (
                  <article key={post.id} className="group relative">
                    <span className="text-4xl font-headline text-slate-100 absolute -translate-x-12 translate-y-1">{post.id}</span>
                    <div className="relative">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-turquoise mb-2 block">{post.category}</span>
                      <h4 className="text-xl font-headline font-bold group-hover:text-primary transition-colors cursor-pointer">{post.title}</h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-headline text-on-surface">Explora el Blog</h3>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest border border-outline-variant rounded-full hover:bg-slate-50 transition-colors">Todos</button>
              <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-outline hover:text-primary transition-colors">Ayurveda</button>
              <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-outline hover:text-primary transition-colors">Yoga</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4 h-[380px]">
                <img alt="Ayurveda" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmVfSlfh1SwfYf6nvyig6GpW7S2ghD2rjMqchwhMJvybKwneY8lRBX_bdP1ISuUYRw0IDpW02LhKtK_Fp0vzg8XQ697QJqhnnV6Fwbpb93Pmsnqn2siZypYvisZm2Ap_9sLY9FewLDtpLSw2BrYI9ko_ZVBPOLeW1ui67QUF2Cuho313nnrKmfPyoV0BXPBXtHb-_Z5F44Jr0j6i8G8wb3b6LkPD1dz6BACsPRsJhfBf3eeWIe1gNgB6PUNH2i2I5DcJl1hKqTmxM" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">Ayurveda</span>
              <h4 className="text-2xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">La dieta ayurvédica en invierno</h4>
              <p className="text-sm text-outline line-clamp-2">Cómo mantener el fuego digestivo (Agni) durante los meses más fríos del año...</p>
            </div>
            {/* More cards can be added here */}
          </div>
          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-on-surface text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-primary transition-colors">Cargar más artículos</button>
          </div>
        </section>
      </main>
    </div>
  );
}
