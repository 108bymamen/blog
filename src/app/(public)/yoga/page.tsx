import { Flower2, CheckCircle, Heart, User } from "lucide-react";

export default function Yoga() {
  return (
    <main className="w-full max-w-7xl mx-auto lg:px-8 lg:py-12 font-body">
      <div className="flex flex-col lg:flex-row lg:gap-16 lg:items-start">
        <div className="w-full lg:w-[40%] flex flex-col gap-8 px-6 lg:px-0 pt-8 lg:pt-0">
          <section className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
              <Flower2 className="w-6 h-6" />
            </div>
            <h1 className="font-headline text-5xl text-primary">Yoga</h1>
          </section>
          <div className="relative rounded-[2rem] overflow-hidden shadow-sm">
            <img
              alt="Yoga Pose Practice"
              className="w-full aspect-[4/5] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKxJt0ntITyKCBsQEksI8UoZsYvEscaq355RV76zgxt6PVtSKbsnxGZgT_cAYZV6qVGkP0UXzZLChfCajrqUNIsRXuku5-EmWBJcD294fvSFuOVN8E_C7QQZSTDtnjdM_Jhr2--_9rBdGj-pad9O5a-XJFYxqz2QVtrahVL9geB-Ea3MVNrEApd8vUaG5y9Kk2ZRh-j2E1kVjHdbcI9A8vQTCseIY3_QPzR0wR4KdeFKn_h8v_E94kCI8LWRLXA0r84_vPIYL4POs"
            />
          </div>
          <section className="bg-white rounded-3xl p-8 border border-outline-variant/30">
            <p className="text-outline text-[9px] uppercase tracking-widest font-bold mb-6">BENEFICIOS</p>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-on-surface text-sm mb-1">Reducción del estrés</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Disminuye los niveles de cortisol, promoviendo la relajación profunda y la calma interior.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-on-surface text-sm mb-1">Mejora el ánimo</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Reduce síntomas de ansiedad y tristeza mediante la liberación natural de endorfinas.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-on-surface text-sm mb-1">Flexibilidad y fuerza</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Fortalece la musculatura profunda y mejora significativamente el rango de movimiento.</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-10 px-6 lg:px-0 pb-8 lg:pb-0 lg:pt-10">
          <div className="bg-primary/5 p-10 lg:p-12 rounded-3xl relative overflow-hidden">
            <p className="italic text-xl lg:text-2xl text-on-surface-variant leading-relaxed mb-6 font-light font-headline">
              «El <span className="text-primary italic">yoga</span> no es para mí...»
            </p>
            <div className="space-y-4 text-sm text-on-surface-variant font-light leading-relaxed">
              <p>Eso pensaba yo cuando veía por las redes las típicas imágenes de muchos practicantes. Después de cuatro años formándome como profe entiendo que el yoga es absolutamente necesario para todos.</p>
              <p>No solo la práctica de <span className="italic font-medium">āsanas</span> que hacen que tu cuerpo se alinee con tu mente, sino el yoga como sistema de vida... un comportamiento moral y ético, una práctica de respiraciones para ayudarte a entender las fluctuaciones de la mente, sonidos de <span className="italic font-medium">mantras</span> para interiorizar tu propio sonido interno...</p>
              <p className="font-bold text-on-surface">No importa tu peso, tu altura, tus dolencias o tu flexibilidad.</p>
              <p>Te acompaño para que puedas hacer tu práctica diaria facilitándote clases particulares y tablas semanales para hacerlas sin mi ayuda, así como ideas para adaptar el yoga a tu vida.</p>
            </div>
          </div>
          <section>
            <h2 className="font-headline text-4xl text-primary mb-6">¿Qué es Yoga?</h2>
            <div className="space-y-6 text-sm text-on-surface-variant leading-relaxed font-light">
              <p>El yoga es una disciplina milenaria originaria de la India, que significa <span className="text-brand-turquoise">«unión»</span> y busca la integración del cuerpo, mente y espíritu. Esto se logra a través de posturas físicas o <span className="italic text-primary font-medium">asanas</span>, técnicas de respiración o <span className="italic text-primary font-medium">pranayamas</span>, y la meditación.</p>
              <p>El yoga promueve el bienestar integral y la paz mental. Su objetivo es alcanzar la autorrealización y la conexión con la fuente universal, permitiéndonos vivir con mayor consciencia y armonía.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
