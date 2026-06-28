import Link from "next/link";
import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 bg-[#FAF7F0]">
      <div className="max-w-xl text-center">
        {/* Illustration */}
        <div className="mb-8">
          <h1 className="text-8xl font-extrabold text-[#B08D57]">404</h1>
        </div>

        <h2 className="text-3xl font-bold text-[#1B2430] mb-3">
          Page Not Found
        </h2>

        <p className="text-[#6B6354] mb-8 leading-relaxed">
          The page you are looking for does not exist or may have been moved.
          Let is get you back to your reading journey.
        </p>

        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-[#1B2430] px-6 py-3 text-white font-medium transition hover:opacity-90"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}