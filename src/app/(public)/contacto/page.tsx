import { Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contacto() {
  return (
    <main className="pt-16 pb-20 px-6 max-w-7xl mx-auto font-body">
      <div className="flex items-center gap-4 mb-16">
        <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary">
          <Mail className="w-6 h-6" />
        </div>
        <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary tracking-tight">Contacto</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-on-surface-variant max-w-md">
              Estamos aquí para acompañarte en tu camino hacia el bienestar. Si tienes dudas sobre nuestras clases, retiros o consultas de Ayurveda, escríbenos.
            </p>
            <div className="h-1 w-20 bg-brand-turquoise rounded-full"></div>
          </div>

          <div className="grid gap-8">
            <div className="flex items-start gap-4 p-6 rounded-xl bg-surface-container-low border border-outline-variant/30">
              <Mail className="text-primary mt-1 w-5 h-5" />
              <div>
                <p className="text-sm font-label uppercase tracking-wider text-outline mb-1">Escríbenos</p>
                <a className="text-lg font-semibold text-on-surface hover:text-primary transition-colors" href="mailto:hola@108bymamen.com">hola@108bymamen.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-xl bg-surface-container-low border border-outline-variant/30">
              <MapPin className="text-primary mt-1 w-5 h-5" />
              <div>
                <p className="text-sm font-label uppercase tracking-wider text-outline mb-1">Ubicación</p>
                <p className="text-lg font-semibold text-on-surface">Madrid, España & Online</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-xl bg-surface-container-low border border-outline-variant/30">
              <Clock className="text-primary mt-1 w-5 h-5" />
              <div>
                <p className="text-sm font-label uppercase tracking-wider text-outline mb-1">Horario de Atención</p>
                <p className="text-lg font-semibold text-on-surface">Lunes a Viernes: 09:00 - 20:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-outline-variant/20">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-sm font-label font-medium text-outline" htmlFor="name">Nombre completo</label>
                <input className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-colors text-lg" id="name" name="name" placeholder="Tu nombre" type="text" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-label font-medium text-outline" htmlFor="email">Email</label>
                <input className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-colors text-lg" id="email" name="email" placeholder="tu@email.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-label font-medium text-outline" htmlFor="subject">Asunto</label>
              <select className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-colors text-lg" id="subject" name="subject">
                <option>Consulta General</option>
                <option>Clases de Yoga</option>
                <option>Consultoría Ayurveda</option>
                <option>Retiros y Eventos</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-label font-medium text-outline" htmlFor="message">Mensaje</label>
              <textarea className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-colors text-lg resize-none" id="message" name="message" placeholder="¿En qué podemos ayudarte?" rows={5}></textarea>
            </div>
            <div className="pt-4">
              <button className="w-full md:w-auto px-12 py-4 bg-brand-turquoise hover:bg-brand-turquoise/80 text-white font-label font-bold rounded-full shadow-lg transition-all active:scale-95 flex items-center justify-center gap-3" type="submit">
                Enviar mensaje
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
          <p className="mt-8 text-xs text-outline leading-relaxed">
            Al enviar este formulario, aceptas nuestra política de privacidad. Trataremos tus datos únicamente para responder a tu solicitud de información.
          </p>
        </div>
      </div>
    </main>
  );
}
