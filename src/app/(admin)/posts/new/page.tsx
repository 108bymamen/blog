"use client";

import {
  Bold, Italic, Underline, Heading1, Quote, List, Link as LinkIcon,
  Image as ImageIcon, Save, Send, ChevronLeft, Menu, Check, Plus
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="bg-background-light font-body h-screen flex flex-col overflow-hidden antialiased selection:bg-primary/30">
      {/* Corporate Header */}
      <header className="bg-brand-turquoise shrink-0 z-20">
        <div className="flex items-center justify-between px-4 py-4 relative">
          <button className="flex size-10 items-center justify-center rounded-full hover:bg-white/10 text-white transition-colors focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2">
            <img
              alt="108 by Mamen"
              className="h-10 w-auto object-contain brightness-0 invert"
              src="https://lh3.googleusercontent.com/aida/ADBb0uikzI08D1BTjYw_fFV4ayMBUrb_pSV_FiBABF-peuZXgCUVmR-ca1oXr37X6QZHFo253-v2ossg-_F6zP36nmLEf6IUhwF4VC2TCeGHZEsMcge_dfCsBJJfe9ggdGOhC1at_zXso55e1L4UsdrGkJHnFWCWN9BWCax45AhgheySCVl15GBdmy_isKDldcRRW6A4rZy9jwFaavWaJhlPju1cDyfbeBQ3k8gzJcgORPZH-V3zYh-DkU6nuQAZSNBE5O2eI8hTLIKBLA"
            />
          </div>
          <div className="size-10"></div>
        </div>
      </header>

      {/* Sub-header */}
      <div className="shrink-0 flex items-center bg-white px-4 py-3 border-b border-gray-100 justify-between z-10">
        <Link
          href="/posts"
          className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 text-on-surface transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.01em] flex-1 text-center truncate px-2 text-on-surface">
          Nueva Entrada
        </h2>
        <div className="flex items-center justify-end w-20">
          <span className="text-brand-turquoise font-bold text-sm tracking-wide">Borrador</span>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto flex flex-col bg-white">
        <div className="flex flex-col gap-2 pt-8 pb-2">
          <div className="px-5">
            <input
              className="w-full bg-transparent border-0 p-0 text-[32px] leading-tight font-bold placeholder:text-gray-300 focus:ring-0 text-on-surface caret-primary"
              placeholder="Título de la entrada"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full overflow-x-auto no-scrollbar px-5 py-4 flex gap-2 items-center">
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-1.5 rounded-full bg-primary/10 border border-primary/20 px-4 transition-all hover:bg-primary/20">
              <Check className="w-4 h-4 text-primary" />
              <p className="text-primary text-[15px] font-bold leading-normal">Wellness</p>
            </button>
            {["Recetas", "Yoga", "Nutrición"].map((tag) => (
              <button key={tag} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-50 border border-transparent hover:border-gray-200 px-5 transition-all">
                <p className="text-outline text-[15px] font-medium leading-normal">{tag}</p>
              </button>
            ))}
            <button className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white border border-dashed border-gray-300 text-outline hover:text-primary hover:border-primary transition-colors">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 px-5 py-2 min-h-[40vh] relative group cursor-text">
          <textarea
            className="w-full h-full resize-none bg-transparent border-none p-0 text-[18px] leading-[1.6] text-on-surface placeholder:text-gray-300 focus:ring-0 font-normal caret-primary"
            placeholder="Empieza a escribir tu historia aquí..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      </main>

      {/* Formatting Toolbar */}
      <div className="bg-white border-t border-gray-100 z-20">
        <div className="px-4 py-2 flex items-center gap-1 overflow-x-auto no-scrollbar border-b border-gray-50">
          {[Bold, Italic, Underline, Heading1, Quote, List, LinkIcon].map((Icon, idx) => (
            <button key={idx} className="p-2 min-w-[44px] rounded-lg text-outline hover:text-on-surface transition-colors">
              <Icon className="w-6 h-6" />
            </button>
          ))}
        </div>
        <div className="px-5 py-4 flex items-center justify-between gap-4">
          <button className="group flex items-center justify-center size-12 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/50 transition-all">
            <ImageIcon className="text-outline group-hover:text-primary transition-colors w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 flex-1 justify-end">
            <button className="px-6 h-12 rounded-xl border border-gray-200 text-outline font-bold text-[16px] hover:bg-gray-50 transition-colors">
              Guardar
            </button>
            <button className="px-8 h-12 rounded-xl bg-brand-turquoise hover:bg-brand-turquoise/80 text-white font-bold text-[16px] shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
              Publicar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
