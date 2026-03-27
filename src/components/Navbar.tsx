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
              className="h-24 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/ADBb0ujdytC9wcRO5AHC1-fnvYUnMLMUjrROtXHUnMZ-dVZU9w6cF3lY2INYzzNuQEhCNuVWX89Tn3LbVMXaI88Lk0eKWigM1DQOlQEBIlWnjeuFNzin6P2py6JgbNa8sTtt4Lme60Z3QEdfUuYDkS6QXnZFc46H_7qw5iHCNRDVtdMeDunFWP9gdumAfH03rImIOlGSAv5uoBH17ix_y9BU4r47cwrO1CLhOD1DbcMrQRveGDXvCw2ebX8e6Pb7d9Craw4iu2UmIRCWpA"
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
