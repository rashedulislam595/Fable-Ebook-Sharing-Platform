'use client';

import React from 'react';
import { Button } from "@heroui/react";
import { FiLock, FiHome, FiArrowLeft } from "react-icons/fi";
import { useRouter } from 'next/navigation';

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 bg-[#FAF8F5] font-sans antialiased">
      <div 
        className="max-w-md w-full text-center p-8 md:p-10 rounded-2xl border border-dashed flex flex-col items-center shadow-[0_4px_20px_-10px_rgba(27,36,48,0.08)]"
        style={{ backgroundColor: "#FAF7F0", borderColor: "#E3DDCB" }}
      >
        <div className="p-5 rounded-full bg-red-50 text-red-500 mb-6 border border-red-100 animate-bounce">
          <FiLock size={36} />
        </div>

        <span className="text-xs font-mono tracking-widest uppercase text-[#B08D57] font-bold">
          Error 401
        </span>
        <h1 className="ebook-font-serif text-2xl md:text-3xl font-bold mt-2 mb-3" style={{ color: "#1B2430" }}>
          Unauthorized Access
        </h1>
        <p className="text-sm text-zinc-500 leading-relaxed max-w-sm mb-8">
          You do not have permission to view this page. Please log in with an authorized account or return to the store.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Button
            onClick={() => router.back()}
            variant="bordered"
            className="text-xs font-bold tracking-wider uppercase bg-white border border-[#E3DDCB] text-[#1B2430] hover:bg-zinc-50 h-11 px-5 flex items-center justify-center gap-1.5 rounded-lg"
          >
            <FiArrowLeft size={14} /> Go Back
          </Button>

          <Button
            onClick={() => router.push('/')}
            className="rounded-lg bg-linear-to-r from-[#EF573E] to-[#FADA59] text-black duration-500 hover:opacity-90 px-6 h-11 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-xs"
          >
            <FiHome size={14} /> Home Page
          </Button>
        </div>
      </div>
    </div>
  );
}