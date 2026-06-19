"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Browse Ebooks",
        href: "/ebooks",
    },
    {
        name: "Dashboard",
        href: "/dashboard",
    },
];


export default function Navbar() {

    const pathname = usePathname();
    const [open, setOpen] = useState(false);


    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">

            <nav className="max-w-7xl mx-auto h-20 px-6 md:px-12 lg:px-24 flex items-center justify-between">


                {/* Logo */}
                <div className="flex-1">

                    <Link
                        href="/"
                        className="text-2xl font-serif font-bold text-slate-900 tracking-tight"
                    >
                        BookVerse
                    </Link>

                </div>



                {/* Desktop Menu */}
                <ul className="hidden md:flex flex-1 items-center justify-center gap-8">

                    {
                        navLinks.map((link) => {

                            const isActive = {
                                status: pathname === link.href,
                                className: pathname === link.href
                                    ? "text-indigo-600"
                                    : "text-slate-600 hover:text-indigo-600"
                            };


                            return (
                                <li key={link.href}>

                                    <Link
                                        href={link.href}
                                        className={`relative text-sm font-medium transition-colors ${isActive.className}`}
                                    >

                                        {link.name}

                                        {
                                            isActive.status && (
                                                <span className="absolute left-0 -bottom-2 w-full h-0.5 rounded-full bg-indigo-600" />
                                            )
                                        }

                                    </Link>

                                </li>
                            );

                        })
                    }

                </ul>



                {/* Login Button */}
                <div className="hidden md:flex flex-1 justify-end">

                    <Link
                        href="/login"
                        className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 hover:shadow-md"
                    >
                        Login
                    </Link>

                </div>




                {/* Mobile Hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                >

                    <span className={`w-6 h-0.5 bg-slate-700 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />

                    <span className={`w-6 h-0.5 bg-slate-700 transition-all ${open ? "opacity-0" : ""}`} />

                    <span className={`w-6 h-0.5 bg-slate-700 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />

                </button>


            </nav>



            {/* Mobile Menu */}

            {
                open && (
                    <div className="md:hidden border-t border-slate-200 bg-white px-6 py-5">

                        <div className="flex flex-col gap-3">

                            {
                                [
                                    ...navLinks,
                                    {
                                        name: "Login",
                                        href: "/login"
                                    }
                                ].map((link) => {

                                    const isActive = {
                                        status: pathname === link.href,
                                        className: pathname === link.href
                                            ? "bg-indigo-50 text-indigo-600"
                                            : "text-slate-600 hover:bg-slate-50"
                                    };


                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className={`rounded-lg px-4 py-3 text-sm font-medium transition ${isActive.className}`}
                                        >
                                            {link.name}
                                        </Link>
                                    );

                                })
                            }

                        </div>

                    </div>
                )
            }


        </header>
    );
}