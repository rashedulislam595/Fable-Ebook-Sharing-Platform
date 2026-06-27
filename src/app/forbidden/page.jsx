'use client'
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiLock } from "react-icons/fi";

export default function ForbiddenPage() {
    const router = useRouter()
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F0] px-6">

      <div className="max-w-md text-center">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#F1EDE3]">
          <FiLock
            size={42}
            className="text-[#B08D57]"
          />
        </div>

        {/* Status Code */}
        <h1 className="text-6xl font-bold text-[#1B2430]">
          403
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-semibold text-[#1B2430]">
          Access Forbidden
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          You do not have permission to access this page.
          Please contact an administrator if you believe this is a mistake.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">

          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-[#1B2430] text-white font-medium transition hover:opacity-90"
          >
            Go Home
          </Link>

          <Button
            onClick={()=>router.back()}
            className="px-6 py-3 rounded-lg border border-[#E3DDCB] bg-white text-[#1B2430] font-medium transition hover:bg-[#F8F4EC]"
          >
            Go Back
          </Button>

        </div>

        {/* Footer Note */}
        <p className="mt-8 text-xs tracking-wide uppercase text-[#B08D57]">
          Permission Required
        </p>

      </div>

    </div>
  );
}