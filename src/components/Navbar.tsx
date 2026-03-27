import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white py-6 border-b border-outline-variant/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="block">
            <img
              alt="108 by Mamen Logo"
              className="h-28 w-auto object-contain"
              src="/logo.png"
            />
          </Link>
          <nav className="flex items-center gap-8">
            <Link href="/ayurveda" className="text-sm font-label font-semibold tracking-widest text-on-surface-variant hover:text-primary transition-colors">AYURVEDA</Link>
            <Link href="/yoga" className="text-sm font-label font-semibold tracking-widest text-on-surface-variant hover:text-primary transition-colors">YOGA</Link>
            <Link href="/jyotish" className="text-sm font-label font-semibold tracking-widest text-on-surface-variant hover:text-primary transition-colors">JYOTISH</Link>
            <Link href="/blog" className="text-sm font-label font-semibold tracking-widest text-on-surface-variant hover:text-primary transition-colors">BLOG</Link>
            <Link href="/contacto" className="text-sm font-label font-semibold tracking-widest text-brand-turquoise">CONTACTO</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
