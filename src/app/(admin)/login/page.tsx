import { Mail, Lock, Menu } from "lucide-react";

export default function Login() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden font-body bg-slate-50">
      <header className="bg-brand-turquoise shadow-sm">
        <div className="flex items-center justify-between px-4 py-4 relative">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2">
            <img
              alt="108 by Mamen"
              className="h-14 w-auto object-contain brightness-0 invert"
              src="https://lh3.googleusercontent.com/aida/ADBb0uikzI08D1BTjYw_fFV4ayMBUrb_pSV_FiBABF-peuZXgCUVmR-ca1oXr37X6QZHFo253-v2ossg-_F6zP36nmLEf6IUhwF4VC2TCeGHZEsMcge_dfCsBJJfe9ggdGOhC1at_zXso55e1L4UsdrGkJHnFWCWN9BWCax45AhgheySCVl15GBdmy_isKDldcRRW6A4rZy9jwFaavWaJhlPju1cDyfbeBQ3k8gzJcgORPZH-V3zYh-DkU6nuQAZSNBE5O2eI8hTLIKBLA"
            />
          </div>
          <div className="size-10"></div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-md mx-auto">
        <div className="w-full bg-white rounded-xl shadow-sm p-8 sm:p-10 flex flex-col gap-8 border border-gray-50/50">
          <div className="text-center">
            <h2 className="text-on-surface tracking-tight text-[32px] leading-tight">
              <span className="font-light">Acceso al</span> <span className="font-headline font-black italic">blog</span>
            </h2>
          </div>

          <form className="flex flex-col gap-6">
            <label className="flex flex-col flex-1 gap-2.5">
              <span className="text-on-surface text-[15px] font-medium leading-normal">Correo electrónico</span>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-turquoise transition-colors w-5 h-5" />
                <input
                  className="flex w-full min-w-0 rounded-lg text-on-surface focus:outline-0 focus:ring-1 focus:ring-brand-turquoise focus:border-brand-turquoise border border-gray-200 bg-white h-12 pl-11 pr-4 text-[15px] placeholder:text-gray-400 transition-all"
                  placeholder="nombre@ejemplo.com"
                  type="email"
                />
              </div>
            </label>
            <label className="flex flex-col flex-1 gap-2.5">
              <span className="text-on-surface text-[15px] font-medium leading-normal">Contraseña</span>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-turquoise transition-colors w-5 h-5" />
                <input
                  className="flex w-full min-w-0 rounded-lg text-on-surface focus:outline-0 focus:ring-1 focus:ring-brand-turquoise focus:border-brand-turquoise border border-gray-200 bg-white h-12 pl-11 pr-4 text-[15px] placeholder:text-gray-400 transition-all"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
            </label>
            <div className="pt-2">
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-brand-turquoise hover:bg-brand-turquoise/80 active:scale-[0.99] transition-all text-white text-base font-medium leading-normal shadow-sm">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </main>
      <footer className="py-6 px-4 text-center">
        <p className="text-xs text-outline">© 2024 108 by Mamen. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
