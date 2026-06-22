'use client';

import React from 'react';
import { Button, Chip } from "@heroui/react";
import { FiArrowRight, FiBookmark, FiLock } from "react-icons/fi";
import Image from 'next/image';

export default function EbookDetails({ ebook }) {
  // ডেটা স্ট্রাকচার সেফটি হ্যান্ডেলিং
  if (!ebook) return null;

  // ডেটা ফরম্যাটিং (যদি createdAt অবজেক্ট আকারে থাকে)
  const rawDate = ebook.createdAt?.$date || ebook.createdAt;
  const formattedDate = rawDate 
    ? new Date(rawDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : 'N/A';

  return (
    <div className="w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF7F0]/30 antialiased">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Book Cover Image with Polarized Tilt Frame */}
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <div className="bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#E3DDCB] transform -rotate-1 hover:rotate-0 transition-transform duration-300 max-w-sm w-full">
            <div className="w-full relative h-[500] bg-[#FAF7F0] overflow-hidden">
              <Image 
                src={ebook.coverImage} 
                alt={ebook.title}
                width={200}
                height={200} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Ebook Metadata & Purchase Info */}
        <div className="md:col-span-7 space-y-6 pt-2">
          
          {/* Tags / Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <Chip 
              variant="flat" 
              className="bg-[#E3DDCB]/40 text-[#9A9180] font-medium tracking-wider text-[10px] uppercase rounded-sm px-2 h-6"
            >
              {ebook.genre || "Uncategorized"}
            </Chip>
            
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EAF5EA] text-[#2E7D32]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
              <p className="text-[10px] uppercase font-bold tracking-wider">Available</p>
            </div>
          </div>

          {/* Title & Author */}
          <div className="space-y-1">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#1B2430] leading-tight">
              {ebook.title}
            </h1>
            <p className="text-lg md:text-xl font-serif text-[#9A9180]">
              by <span className="underline underline-offset-4 cursor-pointer hover:text-[#1B2430] transition-colors">{ebook.writerName}</span>
            </p>
          </div>

          {/* Meta Info: Published & Format Grid */}
          <div className="grid grid-cols-2 gap-4 border-t border-b border-[#E3DDCB]/60 py-5 my-6 max-w-md">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-[#9A9180] mb-1">Published</p>
              <p className="text-sm font-semibold text-[#1B2430]">{formattedDate}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-[#9A9180] mb-1">Format</p>
              <p className="text-sm font-semibold text-[#1B2430]">EPUB, PDF, Kindle</p>
            </div>
          </div>

          {/* Synopsis Section */}
          <div className="space-y-3">
            <h3 className="text-[11px] uppercase font-bold tracking-widest text-[#9A9180]">Synopsis</h3>
            <div className="border-l-2 border-[#E3DDCB] pl-5">
              <p className="text-sm md:text-base leading-relaxed text-[#1B2430]/80 italic font-light line-clamp-3">
                {ebook.description}
              </p>
            </div>
          </div>

          {/* Pricing & CTA Buttons */}
          <div className="pt-6 space-y-3">
            <div className="flex flex-wrap items-center gap-4">
              {/* Price Label */}
              <div className="text-3xl font-medium text-[#1B2430] tracking-tight">
                ${ebook.price ? (ebook.price / 100).toFixed(2) : "0.00"}
              </div>

              <div className='flex gap-5 items-center'>
                {/* Purchase Button */}
              <Button
                className="rounded-md bg-linear-to-r from-[#EF573E] to-[#FADA59] text-black duration-1000 transition hover:bg-linear-to-r hover:from-[#FADA59] hover:to-[#EF573E] hover:text-white px-7 h-12 text-sm font-medium flex items-center gap-2"
                radius="none"
              >
                Purchase Ebook
                <FiArrowRight size={15} />
              </Button>

              {/* Bookmark / Wishlist Button */}
              <Button
                variant="bordered"
                className="text-sm bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all  rounded-md h-12 px-7"
                radius="none"
              >
                <FiBookmark size={18} /> BookMark
              </Button>
              </div>
            </div>

            {/* Secure Redirection Alert */}
            <div className="flex items-center gap-2 text-[11px] text-[#9A9180] pl-0.5">
              <FiLock size={12} />
              <span>Secure redirection to Stripe checkout.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}