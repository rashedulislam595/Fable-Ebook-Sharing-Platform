'use client'

import React from "react";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export function PurchasedEbookCard({ ebook }) {
  
  const { title, coverImage, writerName, _id } = ebook;
  // console.log(ebook)

  return (
    <Card
      className="group relative rounded-sm overflow-hidden border transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
      style={{
        background: "#FAF7F0",
        borderColor: "#E3DDCB",
        boxShadow: "0 4px 20px -10px rgba(27,36,48,0.08)"
      }}
    >
      {/* Cover Image Container */}
      <div className="relative w-full bg-[#F1EDE3] overflow-hidden rounded-md flex justify-center items-center p-3">
        <div className="relative w-full h-64 rounded-md overflow-hidden shadow-md">
          <Image
            src={coverImage}
            alt={title || "Ebook Cover"}
            width={200}
            height={200}
            className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-full"
          />
        </div>

        <div 
          className="absolute top-5 right-5 px-2.5 py-1 text-[9px] font-mono tracking-wider uppercase rounded-sm z-10 text-white font-bold"
          style={{ background: "#1B2430" }}
        >
          ✓ Owned
        </div>
      </div>

      {/* Ebook Info */}
      <div className="p-4 flex flex-col justify-between flex-1">
        <div className="space-y-1">
          <h4 className="ebook-font-serif text-[16px] font-bold leading-snug line-clamp-2" style={{ color: "#1B2430" }}>
            {title}
          </h4>
          
          <p className="text-xs uppercase tracking-wider font-mono text-[11px] font-medium" style={{ color: "#B08D57" }}>
            By: {writerName }
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-2.5 border-t border-dashed" style={{ borderColor: "#E3DDCB" }}>
          <span className="text-[11px] font-mono text-zinc-400">
            Ready to Read
          </span>
          <span style={{ color: "#B08D57" }}>
            <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
          </span>
        </div>

        {/* View Details Link */}
        <div className="mt-4">
          <Link href={`/dashboard/user/purchased-ebooks/${_id}`}>
            <Button
              size="sm"
              radius="sm"
              className="font-medium px-4 h-9 bg-linear-to-r from-[#EF573E] to-[#FADA59] text-black duration-1000 hover:bg-linear-to-r hover:from-[#FADA59] hover:to-[#EF573E] text-xs tracking-wide transition hover:text-white w-full rounded-lg"
            >
              View Details & Read
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}