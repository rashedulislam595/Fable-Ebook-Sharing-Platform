'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function EbookNotFound() {
  const router = useRouter();

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 bg-[#FAF7F0]/30 antialiased rounded-md  " style={{ background: "#FAF7F0", borderColor: "#E3DDCB" }}>
      <div className="max-w-md w-full text-center space-y-6">
        
        {/* 1. Custom Icon (Book with Search Glass & Close Icon) */}
        <div className="relative flex justify-center items-center h-20">
          <div className="relative">
            {/* Main Book Icon */}
            <svg 
              className="w-20 h-20 text-zinc-300" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            
            {/* Overlay Search + Close Icon Badge */}
            <div className="absolute -bottom-1 -right-2 bg-transparent p-1 rounded-full flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* Search Magnifier Handle */}
                <svg className="w-8 h-8 text-[#9A9180]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {/* Red Error Dot inside the glass */}
                <div className="absolute top-1.5 left-1.5 bg-[#DC2626] rounded-full w-3.5 h-3.5 flex items-center justify-center shadow-sm">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Heading text */}
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#1B2430]">
          Ebook not found
        </h1>

        {/* 3. Description paragraph */}
        <p className="text-sm md:text-base leading-relaxed text-[#9A9180] font-normal max-w-sm mx-auto">
          It seems this specific manuscript has retreated into the archives. 
          Please verify the link or return to our library to continue your search.
        </p>

        {/* 4. Action Button with strict border style */}
        <div className="pt-4">
          <button
            onClick={() => router.push('/')}
            className="h-11 px-8 bg-[#FAF7F0] hover:bg-[#F1EDE3] border border-[#1B2430] text-[#1B2430] text-sm font-semibold transition-colors duration-200 shadow-none rounded-none tracking-wide"
          >
            Back to Home
          </button>
        </div>

      </div>
    </div>
  );
}