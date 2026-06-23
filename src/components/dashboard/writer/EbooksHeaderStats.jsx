"use client";

import React from 'react';
import { Button } from "@heroui/react";
import { Plus } from "@gravity-ui/icons";
import Link from 'next/link';

export function EbooksHeaderStats({ stats,total }) {
  // Fallback values if stats are not provided dynamically
  const totalPublished = stats?.totalPublished ?? 12;
  const inDraft = stats?.inDraft ?? 4;
  const totalSales = stats?.totalSales ?? 1240.50;

  return (
    <div className="w-full bg-white font-sans space-y-6 py-5 px-10">
      
      {/* 1. Header Title & Actions Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 tracking-tight">
            My Ebooks
          </h1>
          <p className="text-sm sm:text-base text-zinc-500 font-serif mt-1">
            Manage your digital library and publishing status.
          </p>
        </div>
        
        <div>
          <Link href={'/dashboard/writer/add-ebook'}>
            <Button
            className="bg-black text-white font-medium px-4 py-2 h-10 rounded-md hover:bg-zinc-800 transition-colors shadow-sm text-sm"
          >
            <Plus width={16} height={16} />
            Create New Ebook
          </Button>
          </Link>
        </div>
      </div>

      {/* 2. Stats Cards Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Card 1: Total Published */}
        <div className="bg-white border border-zinc-100 rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between h-28">
          <span className="text-[11px] font-bold tracking-wider text-zinc-500 uppercase">
            Total Ebook
          </span>
          <span className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950">
            {total}
          </span>
        </div>

        {/* Card 2: In Draft */}
        <div className="bg-white border border-zinc-100 rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between h-28">
          <span className="text-[11px] font-bold tracking-wider text-zinc-500 uppercase">
            In Draft
          </span>
          <span className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950">
            {inDraft}
          </span>
        </div>

        {/* Card 3: Total Sales */}
        <div className="bg-white border border-zinc-100 rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between h-28">
          <span className="text-[11px] font-bold tracking-wider text-zinc-500 uppercase">
            Total Sales
          </span>
          <span className="text-2xl sm:text-3xl font-serif font-bold text-zinc-950">
            ${totalSales.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>

      </div>
    </div>
  );
}