import { Shrub, ShieldCheck, Accessibility, ArrowRight } from "lucide-react";

export default function Ayurveda() {
  return (
    <main className="max-w-7xl mx-auto pb-20 lg:pb-32 px-6 lg:px-12 pt-4 lg:pt-8 font-body">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-10">
          <h1 className="font-headline text-5xl lg:text-8xl text-primary lg:leading-tight">Ayurveda</h1>
          <div className="relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] lg:aspect-[4/5] w-full">
            <img
              alt="Ayurvedic herbs and oils in wooden bowls"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqjJp6SNu_tfU21aEKxP5Cq_L968N7cpUR_XT-peawg5DQy3p-S7oKsO4bWzNCdAeLVLVbxtSdsehglpqCDEnxFj-FhDtnR3KEQLmBMjYrWbYPQ_siFYmbw9oDoUrPPUXeMHYfs1J1pR8oqmVYk-E_ciFKxzV1qu9LUJrRuVfnDVpDSb33AWKmh5nVyTHvmqc3bRC4rVTnt_qJ91nsf2UHFDQdY6Mbxct8hn_pnTXF7Npj8o0KmdE8MU6ugrkQunTjmEGDndONJV0"
            />
          </div>
          <div className="space-y-8 mt-4">
            <div>
              <h3 className="text-[10px] font-bold text-outline uppercase tracking-[0.25em] mb-8 flex items-center gap-4">
                Beneficios
                <span className="h-px flex-1 bg-outline-variant/30"></span>
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Shrub className="text-primary w-6 h-6" />
                  <div>
                    <span className="block text-xl font-medium text-on-surface font-headline">Salud Inmejorable</span>
                    <span className="text-sm text-outline">Equilibrio integral del cuerpo.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldCheck className="text-primary w-6 h-6" />
                  <div>
                    <span className="block text-xl font-medium text-on-surface font-headline">Prevención</span>
                    <span className="text-sm text-outline">Evita enfermedades futuras.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Accessibility className="text-primary w-6 h-6" />
                  <div>
                    <span className="block text-xl font-medium text-on-surface font-headline">Conciencia</span>
                    <span className="text-sm text-outline">Arte de vivir plenamente.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-32 space-y-12">
          <div className="bg-secondary-container/20 p-8 lg:p-12 rounded-3xl italic leading-relaxed text-lg lg:text-xl text-on-surface-variant border-l-4 border-primary">
            <p className="mb-6">
              <strong>Ayurveda</strong> significa conocimiento de la vida, o mejor expresado, el arte de vivir.
            </p>
            <p>
              Los antiguos sabios querían expresar los conocimientos necesarios para que todos disfrutáramos de una salud inmejorable, previniendo las enfermedades y elevando el nivel de conciencia en el arte que es vivir...
            </p>
          </div>
          <section className="space-y-8">
            <h2 className="font-headline text-4xl lg:text-5xl text-primary">¿Qué es Ayurveda?</h2>
            <div className="space-y-6 text-on-surface-variant leading-loose text-lg font-light">
              <p>Ayurveda es un sistema de medicina tradicional originario de India, con más de 5000 años de antigüedad.</p>
              <p>Su nombre proviene del sánscrito <i className="text-on-surface">ayur</i> que significa vida, y <i className="text-on-surface">veda</i> que significa conocimiento. El conocimiento de la vida, la ciencia de la vida ...o el arte de vivir.</p>
              <p>Los primeros textos védicos como el Rig veda y el Atharva veda es donde aparecen los primeros conceptos sobre Ayurveda, pero es en el Caraka Samhita donde se marca el punto clave en su sistematización de conocimientos de una forma más empírica que los textos anteriores.</p>
            </div>
            <div className="mt-8 pt-4">
              <button className="w-full lg:w-auto px-12 py-5 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-3 text-xs tracking-[0.2em] group">
                DESCUBRE MÁS
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
