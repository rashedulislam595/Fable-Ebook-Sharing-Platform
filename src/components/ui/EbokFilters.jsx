'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Select, Label, ListBox } from "@heroui/react";

export default function EbookFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL থেকে বর্তমান কুয়েরি ভ্যালু রিড করা
  const currentSearch = searchParams.get('search') || '';
  const currentGenre = searchParams.get('genre') || '';

  // ইউনিভার্সাল ইউআরএল প্যারামস মডিফায়ার ফাংশন
  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/ebooks?${params.toString()}`, { scroll: false });
  };

  const handleReset = () => {
    router.push('/ebooks', { scroll: false });
  };

  return (
    <div 
      className="w-full p-6 rounded-sm border space-y-6 mb-8 shadow-sm"
      style={{ background: "#FAF7F0", borderColor: "#E3DDCB" }}
    >
      {/* সার্চ ইনপুট এবং ক্লিয়ার ফিল্টার বাটন */}
      <div className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium mb-1.5 text-[#1B2430]">
            Search Ebooks
          </label>
          <input
            type="text"
            className="w-full h-11 px-3 bg-white border border-[#D8D1BC] text-[#1B2430] rounded-sm placeholder-[#9A9180] focus:outline-none focus:ring-1 focus:ring-[#B08D57] focus:border-[#B08D57] text-sm transition-all"
            placeholder="Search by title, desc or keyword..."
            value={currentSearch}
            onChange={(e) => updateFilter('search', e.target.value)}
          />
        </div>
        
        <button
          onClick={handleReset}
          className="h-11 px-5 bg-white hover:bg-[#F1EDE3] border border-[#D8D1BC] text-[#1B2430] text-sm font-medium rounded-sm transition-colors whitespace-nowrap"
        >
          Clear Filters
        </button>
      </div>

      <hr className="border-[#E3DDCB]" />

      {/* Hero UI Select Anatomy (লাইট থিম গাইডলাইন) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select 
          className="w-full text-[#1B2430]" 
          placeholder="All Genres"
          selectedKey={currentGenre}
          onSelectionChange={(selected) => updateFilter('genre', selected)}
        >
          <Label className="text-[#9A9180] text-xs mb-1">Genre</Label>
          <Select.Trigger className="bg-white border border-[#D8D1BC] text-[#1B2430] rounded-sm h-11 hover:border-[#B08D57] data-[hover=true]:border-[#B08D57]">
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover className="bg-white border border-[#E3DDCB] shadow-md rounded-sm">
            <ListBox className="text-[#1B2430] p-1">
              {['historical', 'fiction', 'mystery', 'sci-fi', 'fantasy'].map((g) => (
                <ListBox.Item 
                  key={g} 
                  id={g} 
                  textValue={g.charAt(0).toUpperCase() + g.slice(1)}
                  className="data-[hover=true]:bg-[#F1EDE3] data-[hover=true]:text-[#1B2430] data-[selected=true]:bg-[#E3DDCB] data-[selected=true]:text-[#1B2430] cursor-pointer text-sm rounded-sm py-2 px-3 capitalize"
                >
                  {g} <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
    </div>
  );
}