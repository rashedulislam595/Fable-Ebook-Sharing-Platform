import React from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center bg-linear-to-br from-[#F4F6FA] to-[#ECEFF5] px-6 py-12 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Content Column */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
                        Discover & Read Original Ebooks
                    </h1>

                    <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed font-sans">
                        Step into a sanctuary of words. Curated stories from the world is most
                        evocative independent authors, delivered in a focused reading experience.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <Link href='/'>
                            <Button
                                className="bg-[#090D16] text-white font-medium px-8 h-12 rounded-md hover:bg-slate-800 transition-all shadow-sm"
                                radius="sm"
                            >
                                Browse Ebooks
                            </Button>
                        </Link>
                        <Link href='/' >
                            <Button
                                variant="bordered"
                                className="border border-slate-300 bg-white/50 text-slate-800 font-medium px-8 h-12 hover:border-gray-400 hover:bg-slate-200 rounded-md  transition-all backdrop-blur-sm"
                                radius="sm"
                            >
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right Featured Book Column */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end items-center w-full">
                    <div className="relative group pivot-element transition-transform duration-500 hover:scale-[1.02]">
                        {/* Soft decorative glow background behind the book */}
                        <div className="absolute -inset-4 bg-linear-to-r from-slate-200 to-slate-300 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />

                        {/* The Book Container styled exactly like the white-bordered card */}
                        <div className="relative bg-white p-4 pb-6 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100/80 transform rotate-2 max-w-[360] sm:max-w-[400]">
                            <div className="relative h-[500] w-full overflow-hidden rounded-xs bg-[#0F172A]">
                                <Image
                                    src="/images/book-cover.png"
                                    alt="Featured Read - The Gilded Silence"
                                    width={500}
                                    height={500}
                                    className="object-cover object-center"
                                    sizes="(max-w-768px) 100vw, 400px"
                                />

                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/90 via-black/40 to-transparent text-white flex flex-col justify-end h-1/3">
                                    <span className="text-[10px] tracking-[0.2em] text-slate-300 font-mono uppercase mb-1">
                                        Featured Read
                                    </span>
                                    <h3 className="text-lg font-serif font-medium tracking-wide">
                                        The Gilded Silence
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}