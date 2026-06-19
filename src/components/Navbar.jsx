"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button, Spinner } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Browse Ebooks", href: "/browse-ebooks" },
  ];

  const handleLogout = async () => {
    try {
      await authClient.signOut();

      toast.success("Successfully logged out.", {
        position: "top-center",
        theme: "dark",
      });

      window.location.href = "/";
    } catch (error) {
      console.error(error);

      toast.error("Failed to logout. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 items-center">
          {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="Logo"
            width={60}
            height={50}
            priority
            className="w-full h-full"
          />
        </Link>
        <h2 className="bg-linear-to-r from-[#EF573E] to-[#FADA59] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent" >Fable</h2>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-4 sm:flex">
          {/* LINKS */}
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full px-5 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:bg-white hover:text-indigo-600 hover:shadow-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="h-6 w-px bg-slate-200" />

          {isPending?
          <>
          <Spinner/>
          </>:
          
            user?<div className="flex items-center gap-3">
                <div className="flex items-center gap-3 rounded-full px-3 py-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-violet-500 text-sm font-semibold text-white shadow-md">
                    {user?.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="bordered"
                  onPress={handleLogout}
                  className="border border-danger rounded-md text-red-600 hover:bg-danger hover:text-white"
                >
                  Logout
                </Button>
              </div>:<>
              <Link
                href="/login">
                <Button variant="secondary" className="text-sm  font-medium text-slate-700 transition hover:text-indigo-600  rounded-md" >Sign In</Button>
              </Link>

              <Link href={'/register'}>
              <Button
                className="rounded-md bg-linear-to-r from-[#EF573E] to-[#FADA59] text-black duration-1000 transition hover:bg-linear-to-r hover:from-[#FADA59] hover:to-[#EF573E] hover:text-white"
              >
                Get Started
              </Button>
              </Link>
            </>
          }
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center text-slate-700 sm:hidden"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "border-t border-slate-200 bg-white"
            : "max-h-0"
        }`}
      >
        <div className="space-y-5 px-4 py-5">
          {/* LINKS */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-medium text-slate-600 hover:text-indigo-600"
            >
              {link.name}
            </Link>
          ))}

          <div className="border-t border-slate-200 pt-5">
            {isPending?
          <>
          <Spinner/>
          </>:
          
            user?<div className="flex items-center gap-3">
                <div className="flex items-center gap-3 rounded-full px-3 py-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-violet-500 text-sm font-semibold text-white shadow-md">
                    {user?.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="bordered"
                  onPress={handleLogout}
                  className="border border-danger rounded-md hover:bg-danger hover:text-white text-red-600 "
                >
                  Logout
                </Button>
              </div>:<div className="flex gap-5 items-center">
              <Link
                href="/login"
                
              >
                <Button variant="secondary" className="text-sm  font-medium text-slate-700 transition hover:text-indigo-600  rounded-md" >Sign In</Button>
              </Link>

              <Link href={'/register'}>
              <Button
                className="rounded-md bg-linear-to-r from-[#EF573E] to-[#FADA59] text-black duration-1000 transition hover:bg-linear-to-r hover:from-[#FADA59] hover:to-[#EF573E] hover:text-white"
              >
                Get Started
              </Button>
              </Link>
            </div>

          }
          </div>
        </div>
      </div>
    </nav>
  );
}
