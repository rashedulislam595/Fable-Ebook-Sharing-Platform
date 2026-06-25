import React from "react";
import { Link, Input, Button } from "@heroui/react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#111622] text-slate-300 border-t border-slate-800/60 pt-16 pb-8 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* Main Grid Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col space-y-4">
                        <div className="flex gap-2 items-center">
                                  {/* LOGO */}
                                <Link href="/" className="flex items-center">
                                  <Image
                                    src="/images/logo.png"
                                    alt="Logo"
                                    width={60}
                                    height={50}
                                    priority
                                    className="w-full h-full"
                                  />
                                </Link>
                                <h2 className="bg-linear-to-r from-[#EF573E] to-[#FADA59] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent animate-pulse" >Fable</h2>
                                </div>
                        <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                            The focused atmosphere for modern readers. Crafting the future of independent publishing.
                        </p>
                    </div>

                    {/* Links Column 1: Company */}
                    <div className="lg:col-span-2 flex flex-col space-y-3">
                        <h4 className="text-white font-serif font-medium tracking-wide text-md">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/archive" className="text-slate-400 hover:text-white transition-colors">Library Archive</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links Column 2: Legal */}
                    <div className="lg:col-span-2 flex flex-col space-y-3">
                        <h4 className="text-white font-serif font-medium tracking-wide text-md">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-4 flex flex-col space-y-4">
                        <h4 className="text-white font-serif font-medium tracking-wide text-md">Subscribe to our Newsletter</h4>
                        <p className="text-xs text-slate-400"> Get latest releases and editorial picks straight to your inbox.</p>
                        <div className="flex w-full max-w-md items-center gap-2">
                            <Input
                                type="email"
                                placeholder="rashedulislam956581@gmail.com"
                                variant="bordered"
                                size="sm"
                                className="bg-slate-900/40 text-white rounded-md max-w-xs"
                                
                            />
                            <Button
                                size="sm"
                                className="bg-linear-to-r from-[#EF573E] to-[#FADA59] text-black font-bold rounded-md duration-1000 transition hover:bg-linear-to-r hover:from-[#FADA59] hover:to-[#EF573E] hover:text-white shadow-sm px-4 h-9"
                            >
                                Join
                            </Button>
                        </div>
                    </div>

                </div>

                {/* Bottom Section: Copyright & Socials */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-500 text-center sm:text-left">
                        &copy; {new Date().getFullYear()} Fable. All rights reserved.
                    </p>

                    {/* Social Media Rounded Buttons matching image style */}
                    <div className="flex items-center gap-3">
                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700/60 bg-slate-900/30 hover:bg-slate-800 hover:border-slate-500 transition-all text-slate-400 hover:text-white" aria-label="Global Website">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                        </a>
                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700/60 bg-slate-900/30 hover:bg-slate-800 hover:border-slate-500 transition-all text-slate-400 hover:text-white" aria-label="Share">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" /></svg>
                        </a>
                        <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700/60 bg-slate-900/30 hover:bg-slate-800 hover:border-slate-500 transition-all text-slate-400 hover:text-white" aria-label="Contact Contact">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" /></svg>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}