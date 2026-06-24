'use client';

import React from "react";
import { Card, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FiTrash2, FiEye } from "react-icons/fi";

export function BookmarkedEbookCard({ bookmark }) {
  const { title, coverImage, writerName, ebookId, _id } = bookmark;
  
  console.log(bookmark)
  const actualEbookId = ebookId?.$oid || ebookId;
  const bookmarkId = _id?.$oid || _id;

  const handleOnRemove = async()=>{
    // todo : delete functionality
  }

  return (
    <Card
      className="group relative rounded-sm overflow-hidden border transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
      style={{
        background: "#FAF7F0",
        borderColor: "#E3DDCB",
        boxShadow: "0 4px 20px -10px rgba(27,36,48,0.08)"
      }}
    >
      {/* Cover Image Wrapper inside Card.Content */}
      <Card.Content className="p-3 bg-[#F1EDE3] flex justify-center items-center relative">
        <div className="relative w-full h-64 rounded-md overflow-hidden shadow-md">
          <Image
            src={coverImage}
            alt={title || "Ebook Cover"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
        </div>

        {/* বুকমার্ক রিমুভ করার কুইক বাটন */}
        <Button
          isIconOnly
          size="sm"
          variant="flat"
          onClick={handleOnRemove}
          className="absolute top-5 right-5 z-10 bg-white/80 hover:bg-red-50 text-zinc-600 hover:text-red-600 backdrop-blur-sm min-w-8 h-8 rounded-full shadow-xs transition-colors"
          title="Remove Bookmark"
        >
          <FiTrash2 size={14} />
        </Button>
      </Card.Content>

      {/* Card Header Section for Titles */}
      <Card.Header className="px-4 pt-4 pb-2 flex flex-col items-start gap-0.5 flex-1">
        <Card.Title 
          className="ebook-font-serif text-[16px] font-bold leading-snug line-clamp-1 w-full" 
          style={{ color: "#1B2430" }}
        >
          {title || "Untitled Ebook"}
        </Card.Title>
        <Card.Description 
          className="text-xs uppercase tracking-wider font-mono text-[10px] font-medium" 
          style={{ color: "#B08D57" }}
        >
          By: {writerName || "Unknown Author"}
        </Card.Description>
      </Card.Header>

      {/* Card Footer for Action Navigation */}
      <Card.Footer className="p-4 pt-0 mt-auto">
        <Link href={`/browse-ebooks/${actualEbookId}`} className="w-full">
          <Button
            size="sm"
            radius="sm"
            className="font-medium px-4 h-9 bg-linear-to-r from-[#EF573E] to-[#FADA59] text-black duration-1000 hover:bg-linear-to-r hover:from-[#FADA59] hover:to-[#EF573E] text-xs tracking-wide transition hover:text-white w-full rounded-lg flex items-center justify-center gap-1.5"
          >
            <FiEye size={14} />
            View Details
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}