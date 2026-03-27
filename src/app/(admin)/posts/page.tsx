import { Menu, Plus, CheckCircle, Clock, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { PostStatus } from "@/types/blog";

export default function PostsList() {
  const posts = [
    { id: 1, date: "14 Ene, 2026", title: "La serenidad en el diseño minimalista", status: "publicada" as PostStatus },
    { id: 2, date: "20 Ene, 2026", title: "Tendencias de color para el invierno tardío", status: "programada" as PostStatus },
    { id: 3, date: "05 Feb, 2026", title: "Entrevista con artesanos locales de cerámica", status: "borrador" as PostStatus },
  ];

  const getStatusStyles = (status: PostStatus) => {
    switch (status) {
      case "publicada":
        return "bg-secondary-container text-on-secondary-container";
      case "programada":
        return "bg-tertiary-container text-on-tertiary-container";
      case "borrador":
        return "bg-surface-variant text-on-surface-variant";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: PostStatus) => {
    switch (status) {
      case "publicada":
        return <CheckCircle className="w-4 h-4" />;
      case "programada":
        return <Clock className="w-4 h-4" />;
      case "borrador":
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-surface min-h-screen font-body">
      <header className="fixed top-0 w-full z-50 bg-brand-turquoise shadow-sm flex items-center justify-between px-4 h-16">
        <button className="text-white p-2 hover:bg-white/10 transition-colors rounded-full">
          <Menu className="w-6 h-6" />
        </button>
        <div className="h-10">
          <img
            alt="108 by Mamen"
            className="h-full object-contain brightness-0 invert"
            src="https://lh3.googleusercontent.com/aida/ADBb0uikzI08D1BTjYw_fFV4ayMBUrb_pSV_FiBABF-peuZXgCUVmR-ca1oXr37X6QZHFo253-v2ossg-_F6zP36nmLEf6IUhwF4VC2TCeGHZEsMcge_dfCsBJJfe9ggdGOhC1at_zXso55e1L4UsdrGkJHnFWCWN9BWCax45AhgheySCVl15GBdmy_isKDldcRRW6A4rZy9jwFaavWaJhlPju1cDyfbeBQ3k8gzJcgORPZH-DkU6nuQAZSNBE5O2eI8hTLIKBLA"
          />
        </div>
        <div className="w-10"></div>
      </header>

      <main className="pt-24 px-4 max-w-3xl mx-auto pb-8">
        <header className="mb-8">
          <h1 className="font-headline text-3xl font-bold text-on-surface-variant">Entradas</h1>
          <p className="font-label text-sm text-outline mt-1 uppercase tracking-wider">Gestión de contenido</p>
        </header>

        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-5 rounded-xl border border-outline-variant hover:border-primary transition-colors flex items-center justify-between group cursor-pointer">
              <div className="flex flex-col gap-1">
                <span className="font-label text-xs font-medium text-outline uppercase tracking-tighter">{post.date}</span>
                <h2 className="font-headline text-lg font-bold text-on-surface group-hover:text-primary transition-colors">{post.title}</h2>
              </div>
              <div className="flex items-center gap-3">
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${getStatusStyles(post.status)}`}>
                  {getStatusIcon(post.status)}
                  <span className="font-label text-xs font-semibold capitalize">{post.status}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-outline group-hover:text-primary" />
              </div>
            </div>
          ))}
        </div>
      </main>

      <Link
        href="/posts/new"
        className="fixed right-6 bottom-6 w-14 h-14 bg-[#006064] text-white rounded-xl shadow-lg flex items-center justify-center hover:bg-[#004d40] transition-all active:scale-90 z-50"
      >
        <Plus className="w-8 h-8" />
      </Link>
    </div>
  );
}
