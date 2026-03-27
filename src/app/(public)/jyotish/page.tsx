import { Sparkles, Eye, Lightbulb, CalendarDays } from "lucide-react";

export default function Jyotish() {
  return (
    <main className="w-full max-w-7xl mx-auto lg:px-8 lg:py-12 font-body">
      <div className="flex flex-col lg:flex-row lg:gap-16 lg:items-start">
        <div className="w-full lg:w-[40%] flex flex-col gap-8 px-6 lg:px-0 pt-8 lg:pt-0">
          <section className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <h1 className="font-headline text-5xl text-primary font-bold">Jyotish</h1>
          </section>
          <div className="relative rounded-[2rem] overflow-hidden shadow-sm">
            <img
              alt="Celestial map"
              className="w-full aspect-square object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHtIO_0H6wxZ093U30sK1vsvXQDtaLrQH2N7p1VbAUV4X7e6CfWsW1K0-PBLN6iXpguOO97y6n4qQeqnyOjTucCeyPmwI-yOmdM8unbr6BIEQecBA_dXKJa8SdXGrj6v7QE224H6SMBNjoQg3c3XiyePdvx_araEoMvNyHfthQDWIYieHOxTFKddu94QbdGd9x8uE2kHp3lUyUdGFLrxZ4XUNv0_csHpPenD6mqNoArbUBooWumxRU3l2rwUtr7rRQS8dZKfnVMic"
            />
          </div>
          <section className="bg-white rounded-3xl p-8 border border-outline-variant/30">
            <p className="text-outline text-[9px] uppercase tracking-widest font-bold mb-6">BENEFICIOS</p>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-on-surface text-sm mb-1">Autoconocimiento</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Descubre tus tendencias kármicas, fortalezas innatas y los desafíos que tu alma ha elegido transmutar.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-on-surface text-sm mb-1">Luz Guía</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Anticípate a los ciclos temporales (Dashas) para tomar decisiones alineadas con el ritmo universal.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CalendarDays className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-on-surface text-sm mb-1">Uso del Panchang</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Utiliza el calendario védico para elegir los momentos propicios (Muhurta) para tus proyectos más importantes.</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-10 px-6 lg:px-0 pb-8 lg:pb-0 lg:pt-10">
          <div className="bg-primary/5 p-10 lg:p-12 rounded-3xl relative overflow-hidden">
            <p className="italic text-xl lg:text-2xl text-on-surface-variant leading-relaxed mb-6 font-light font-headline">
              "Jyotish es la luz que disipa la oscuridad de la ignorancia, revelando la conexión intrínseca entre el macrocosmos y nuestro propio ser."
            </p>
            <div className="space-y-4 text-sm text-on-surface-variant font-light leading-relaxed">
              <p>La astrología védica nos invita a observar los cielos no como entidades distantes, sino como espejos de nuestra propia evolución. Un mapa celestial que guía el alma a través del tiempo y el karma.</p>
            </div>
          </div>
          <section>
            <h2 className="font-headline text-4xl text-primary mb-6">¿Qué es Jyotish?</h2>
            <div className="space-y-6 text-sm text-on-surface-variant leading-relaxed font-light">
              <p>Jyotish es la astrología tradicional de la India, revelada por los antiguos Rishis. Se fundamenta en tres pilares esenciales que sostienen la sabiduría del tiempo:</p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="font-bold text-primary">Surya Siddhanta:</span>
                  <span>El conocimiento astronómico y los cálculos matemáticos del movimiento planetario.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary">Samhita:</span>
                  <span>La observación de fenómenos colectivos y presagios naturales.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-primary">Hora:</span>
                  <span>La interpretación de la carta natal individual y el destino personal.</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
