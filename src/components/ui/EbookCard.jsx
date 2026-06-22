'use client'
import React from "react";
import { Button, Card } from "@heroui/react";
import Image from "next/image";

export function EbookCard({ ebook, onCardClick }) {
  const { title, genre, price, coverImage, isSold } = ebook;

  return (
    <Card
      onClick={onCardClick}
      className="group relative rounded-sm overflow-hidden border transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "#FAF7F0",
        borderColor: "#E3DDCB",
        boxShadow: "0 4px 20px -10px rgba(27,36,48,0.08)"
      }}
    >
      {/* Cover Image Container */}
      <div className="relative w-full bg-[#F1EDE3] overflow-hidden rounded-md flex justify-center items-center">
        <Image
          src={coverImage}
          alt={title}
          width={200}
          height={200}
          className="object-cover transition-transform duration-500 group-hover:scale-105 h-64 rounded-md"
          priority={false}
        />

        {/* Sold Badge */}
        {isSold && (
          <div 
            className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase rounded-sm z-10 text-white"
            style={{ background: "#1B2430" }}
          >
            Sold
          </div>
        )}

        {/* Hover Overlay with View Details Button */}
        <div className="absolute inset-0 bg-[#1B2430]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-10">
          <Button
            size="sm"
            radius="sm"
            onClick={(e) => {
              e.stopPropagation(); 
              onCardClick();
            }}
            className="font-medium px-4 h-9 bg-linear-to-r from-[#EF573E] to-[#FADA59] text-black duration-1000  hover:bg-linear-to-r hover:from-[#FADA59] hover:to-[#EF573E]  text-xs tracking-wide transition hover:text-white"
          >
            View Details
          </Button>
        </div>
      </div>

      {/* Ebook Info */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h4 className="ebook-font-serif text-[16px] font-medium leading-snug line-clamp-1" style={{ color: "#1B2430" }}>
            {title}
          </h4>
          {/* জেনারটিকে ছোট ট্যাগ হিসেবে রাইটার নামের জায়গায় দেখানো হচ্ছে */}
          <p className="text-xs uppercase tracking-wider mt-1 font-mono text-[10px]" style={{ color: "#B08D57" }}>
            {genre}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-dashed" style={{ borderColor: "#E3DDCB" }}>
          <span className="font-mono text-sm font-semibold" style={{ color: "#1B2430" }}>
            {price === 0 ? "Free" : `$${price}`}
          </span>
          
          <span style={{ color: "#B08D57" }}>
            <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
          </span>
        </div>
      </div>
    </Card>
  );
}