import { Clock, Calendar, Share, Mail } from "lucide-react";

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <main className="w-full font-body">
      <div className="relative w-full h-[60vh] max-h-[60vh] overflow-hidden">
        <img
          alt="Yoga meditation concept"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgoeixTjoti_yLO015VOtraZ6nTPpI908pwsSjBbAQZJlZHbh5i6O8s_d6VBsK4jdKH_2QpqX3c2bXJ9iXa11oGRUcz3cpmXAhqaU-6PMWlWxzMgyCoaSVrEUhHGI_zfh8ogc1sMWDxI0RH_h874mA5_4BOBiKkilHGdAfEGAUFWjnFhMbbJFSpxeyZtrxu9Na0e-_4wMEFVSZnhGsfcaXFmy33kyCXK4xTyYOfb-wYJCNDpz1EDLMh_C7cgvW5G-swRB7p7d9_9k"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white"></div>
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 px-4 text-center">
          <span className="bg-primary/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Filosofía & Estilo de Vida</span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface mb-4 drop-shadow-2xl">¿Por qué 108?</h1>
          <div className="flex items-center text-on-surface/90 text-sm font-medium space-x-6">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 5 min de lectura</span>
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> 14 Mayo, 2024</span>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <article className="lg:col-span-8">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="font-headline text-3xl italic text-on-surface-variant leading-relaxed mb-12 border-l-4 border-primary/30 pl-8">
                "El número 108 tiene un profundo significado espiritual en diversas tradiciones, especialmente en el hinduismo y en el budismo, corrientes a las que me siento muy ligada a medida que me adentro en ellas."
              </p>
              <p className="text-xl leading-relaxed mb-8">
                En la cosmovisión védica, el 108 no es simplemente un número, sino un puente entre el individuo y el cosmos. Representa la totalidad de la existencia, una medida de la distancia entre lo terrenal y lo divino que se repite tanto en las galaxias como en la estructura de nuestra propia alma.
              </p>
              <h2 className="font-headline text-4xl mt-16 mb-8 text-on-surface underline decoration-primary/20 underline-offset-8">El Simbolismo Sagrado</h2>
              <ul className="list-none pl-0 text-lg space-y-4">
                <li className="flex gap-4">
                  <span className="text-primary font-bold">◆</span>
                  <span><strong className="font-semibold text-on-surface">En astrología védica</strong>: Se considera sagrado porque representa la totalidad del universo.</span>
                </li>
                {/* More list items */}
              </ul>
            </div>
          </article>
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-12">
              <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-primary rotate-3">
                    <img alt="Mamen Author" className="w-full h-full object-cover -rotate-3 scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkJ64LvSXu83o_6BOkyrPWcMP2dUQqIYBLcB3d3f7IXYn2fEaditgfgcpc44t7zFiNu_Le1kqPcxaGYaHsxdbD9L8gJo_noH3xI5EI2JqQzhAZXZ2J5flhUjdqsbQkSZG5KRh-3_V32oV1f-JDct-mvsOGJdPY2O-Or3Dc7_X47MDE4VbgMkkZFs7VerC5M_COEqJiEki-iyOAz1upwjjiI4mlss_5F4eVC4ckrPNnFSP5qhpaPHhm2kASxg101tRwQ3t4HxCv40s" />
                  </div>
                  <div>
                    <h4 className="font-headline text-2xl text-on-surface leading-none mb-2">Mamen</h4>
                    <p className="text-sm text-primary font-semibold">Fundadora de 108</p>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  Especialista en Ayurveda, Yoga y Jyotish. Mi misión es acompañarte en tu camino de autodescubrimiento a través de las ciencias milenarias de la India.
                </p>
                <div className="flex space-x-3">
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-outline hover:text-primary transition-all shadow-sm"><Share className="w-5 h-5" /></button>
                  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-outline hover:text-primary transition-all shadow-sm"><Mail className="w-5 h-5" /></button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
