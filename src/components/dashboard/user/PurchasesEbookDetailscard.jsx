'use client';

import React from 'react';
import { Button, Chip } from "@heroui/react";
import { FiBookOpen, FiDownload, FiFileText, FiAward } from "react-icons/fi";
import Image from 'next/image';

export default function PurchasesEbookDetailsCard({ ebook }) {
  if (!ebook) return null;

  const rawDate = ebook.createdAt?.$date || ebook.createdAt;
  const formattedDate = rawDate
    ? new Date(rawDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : 'N/A';

  return (
    <div className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF7F0]/30 antialiased font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">

        {/* LEFT COLUMN: Book Cover Image with Polarized Tilt Frame */}
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <div className="bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#E3DDCB] transform -rotate-1 hover:rotate-0 transition-transform duration-300 max-w-sm w-full">
            <div className="w-full relative h-[450] bg-[#FAF7F0] overflow-hidden rounded-sm">
              <Image
                src={ebook.coverImage}
                alt={ebook.title || "Ebook Cover"}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Purchased Ebook Metadata & Actions */}
        <div className="md:col-span-7 space-y-6 pt-2">

          {/* Tags / Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <Chip
              variant="flat"
              className="bg-[#E3DDCB]/40 text-[#9A9180] font-medium tracking-wider text-[10px] uppercase rounded-sm px-2 h-6"
            >
              {ebook.genre || "Digital Success"}
            </Chip>

            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[10px] uppercase font-bold tracking-wider">Purchased & Owned</p>
            </div>
          </div>

          {/* Title & Author */}
          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1B2430] leading-tight">
              {ebook.title}
            </h1>
            <p className="text-lg font-serif text-[#9A9180]">
              by <span className="underline underline-offset-4 cursor-pointer hover:text-[#1B2430] transition-colors">{ebook.writerName}</span>
            </p>
          </div>

          {/* Meta Info: Purchase Date & Transaction ID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-[#E3DDCB]/60 py-4 my-6">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-[#9A9180] mb-0.5">Purchased On</p>
              <p className="text-sm font-semibold text-[#1B2430]">{formattedDate}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-[#9A9180] mb-0.5">Amount Paid</p>
              <p className="text-sm font-bold text-[#1B2430] font-mono">${Number(ebook.amount).toFixed(2)}</p>
            </div>
            <div className="sm:col-span-1">
              <p className="text-[10px] uppercase font-bold tracking-wider text-[#9A9180] mb-0.5">Transaction ID</p>
              <p className="text-xs font-semibold text-zinc-500 font-mono truncate max-w-[180]" title={ebook.transactionId}>
                {ebook.transactionId?.substring(0, 15)}...
              </p>
            </div>
          </div>

          {/* Synopsis Section */}
          <div className="space-y-2">
            <h3 className="text-[11px] uppercase font-bold tracking-widest text-[#9A9180]">Synopsis</h3>
            <div className="border-l-2 border-[#E3DDCB] pl-4 max-h-60 overflow-y-auto custom-scrollbar">
              <p className="text-sm leading-relaxed text-[#1B2430]/80 italic font-light whitespace-pre-line">
                {ebook.description}
              </p>
            </div>
          </div>

          {/* Action Buttons for Purchased Users */}
          <div className="pt-4 space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              
              {/* Primary Action: Read Now */}
              <Button
                className="rounded-lg bg-linear-to-r from-[#EF573E] to-[#FADA59] text-black duration-500 transition hover:opacity-90 px-8 h-12 text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-sm"
                radius="none"
              >
                <FiBookOpen size={16} />
                Read Ebook Now
              </Button>

              {/* Secondary Action: Download PDF */}
              <Button
                variant="bordered"
                className="text-xs font-bold tracking-wider uppercase bg-white border border-[#E3DDCB] text-[#1B2430] hover:bg-[#FAF7F0] transition-all rounded-lg h-12 px-6 flex items-center gap-2"
                radius="none"
              >
                <FiDownload size={16} /> Download PDF
              </Button>

              {/* Invoice / Receipt Action */}
              <Button
                variant="light"
                className="text-xs font-bold tracking-wider uppercase text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100/80 rounded-lg h-12 px-4 flex items-center gap-2"
                radius="none"
              >
                <FiFileText size={16} /> View Receipt
              </Button>
            </div>

            {/* Lifetime Access Info */}
            <div className="flex items-center gap-2 text-[11px] text-emerald-600 pl-0.5 font-medium">
              <FiAward size={13} />
              <span>You have lifetime access to this publication.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}