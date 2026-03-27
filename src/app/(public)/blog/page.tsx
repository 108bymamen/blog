import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Grid, List } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      category: "Yoga",
      date: "15 Oct, 2023",
      title: "Vinyasa Flow para la Energía Matinal",
      description: "Una secuencia dinámica diseñada para despertar cada célula de tu cuerpo y enfocar tu mente para el día que comienza.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJASP8mHFgV9KqfJXzzi7L_y2yziJEwmg9vjBumfjhMZ63oChppC22OpNg4Hw3NM_9iUJnp2exEfAlZyFyxckblqSNKtn8ePUNnJfPLhSzN2IYAbewtRPNbW4imJbggcQyVRXlqUbXfXg15xOC09Tt3_GUnrXAutNMoYhufhyQKkpD05qLvyRe8U8YXDxr8cES_uxz-GGtdQwYs74qopw3LLfbSs66eTvko3gKTl_97CiXVqkW2RMZ3jjTaTLgpVkdSkz7SREm-AY"
    },
    {
      id: 2,
      category: "Jyotish",
      date: "12 Oct, 2023",
      title: "Tu Mapa Estelar: Introducción a la Astrología Védica",
      description: "Entiende el karma y el destino a través de la lente de los planetas y las casas en tu carta natal única.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0G26s_tnnKnq20oKc-DjmRRHzyQQMoRCTUCqyAZEjZNWn8dTvVg03CMsC2aAGPpAXxul23zuiy68evGx04kh7a9J7Ol3Osix4iOC7a624BdRPQIt0LwHJ_uo9PF703zSb1ulNQQywqsV9rDTrTW9lU4Xlb8hpyGRTSdYGGnSH4hwi74WO1UEZBof2t8SW5P6WhQyoySCvrc02YANwggrG1piXFjum-yEsR1ut1E4nREW8tYhSwKfoTlz3qC1BElfjXzCMVKqfNt4"
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 font-body">
      {/* Featured Post */}
      <section className="mb-12">
        <div className="relative group overflow-hidden rounded-xl bg-surface-container shadow-sm border border-outline-variant/30">
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img
              alt="Featured Meditation"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZoveXWQN97iTgmBlslzCjUylgt3SducarOeCBHBvwlNuY2JH6J0JGXv8rKZbzLApiFXv4NppVwYM-TeilanbZVY3jVaEZgkirQGJul0G6idCJynjYQPQZkGE4A4ukBh48zzlOH6Ob2xnAOOxYTxE_HCJC22uEw4q1-SJaKFFe9oKOBJ5rMV6tRbtZ_mQEtP2WP9G9jJU9CWQc2mE2jo1KnqeP4VpE-BntTZap6PHcqAN9yBEaV0Ia9AhZdbwWCt39NPIHheF_P9Y"
            />
          </div>
          <div className="p-6 md:p-10 space-y-4">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full uppercase tracking-wider">Ayurveda & Wellness</span>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface leading-tight">Encontrando la Calma en el Caos: El Arte de la Meditación Diaria</h2>
            <p className="text-on-surface-variant max-w-2xl text-lg">Descubre cómo integrar prácticas milenarias de atención plena en tu ajetreada vida moderna para restaurar el equilibrio de tu Dosha.</p>
            <Link href="/blog/meditacion-diaria" className="inline-flex items-center text-brand-turquoise font-bold gap-2 hover:gap-4 transition-all duration-300">
              LEER MÁS
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
            <h3 className="text-2xl font-headline font-bold text-on-surface">Artículos Recientes</h3>
            <div className="flex gap-2">
              <button className="p-2 rounded-full hover:bg-slate-100 transition-colors"><Grid className="w-5 h-5 text-outline" /></button>
              <button className="p-2 rounded-full hover:bg-slate-100 transition-colors"><List className="w-5 h-5 text-outline" /></button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col group">
                <div className="aspect-video rounded-lg overflow-hidden mb-4 border border-outline-variant/30">
                  <img alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={post.image} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs font-label text-on-surface-variant">
                    <span className="text-brand-turquoise font-bold">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h4 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{post.title}</h4>
                  <p className="text-on-surface-variant line-clamp-2 text-sm">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center pt-12">
            <nav className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-outline hover:bg-secondary-container transition-colors"><ChevronLeft className="w-5 h-5" /></button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-outline hover:bg-secondary-container transition-colors"><ChevronRight className="w-5 h-5" /></button>
            </nav>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-12">
          {/* Categories */}
          <div className="bg-white p-6 rounded-xl border border-outline-variant/30 shadow-sm">
            <h4 className="text-lg font-headline font-bold mb-6 text-on-surface flex items-center gap-2">
              <span className="w-1 h-6 bg-brand-turquoise rounded-full"></span>
              Categorías
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Ayurveda (12)", "Yoga (18)", "Jyotish (8)", "Meditación (15)"].map((cat) => (
                <Link key={cat} href="#" className="px-4 py-2 rounded-full border border-outline-variant/30 text-sm hover:bg-brand-turquoise hover:text-white hover:border-brand-turquoise transition-all">{cat}</Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
