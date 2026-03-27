import Link from "next/link";
import { MessageCircle, Mail, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-xl font-headline font-bold text-primary">ZenWell Wellness</span>
          <p className="font-body text-sm text-on-surface-variant">Equilibrio para tu cuerpo y mente.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          <Link href="/yoga" className="text-on-surface-variant hover:text-brand-turquoise transition-colors font-body text-sm">Yoga</Link>
          <Link href="/ayurveda" className="text-on-surface-variant hover:text-brand-turquoise transition-colors font-body text-sm">Ayurveda</Link>
          <Link href="/retiros" className="text-on-surface-variant hover:text-brand-turquoise transition-colors font-body text-sm">Retiros</Link>
          <Link href="/contacto" className="text-brand-turquoise font-bold font-body text-sm">Contacto</Link>
          <Link href="/privacidad" className="text-on-surface-variant hover:text-brand-turquoise transition-colors font-body text-sm">Privacidad</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm hover:text-brand-turquoise transition-colors">
            <Camera className="w-5 h-5" />
          </Link>
          <Link href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm hover:text-brand-turquoise transition-colors">
            <MessageCircle className="w-5 h-5" />
          </Link>
          <Link href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm hover:text-brand-turquoise transition-colors">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <div className="px-8 py-6 border-t border-slate-200 text-center">
        <p className="font-body text-xs text-on-surface-variant">© 2024 ZenWell Wellness. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
