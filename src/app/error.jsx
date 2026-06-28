"use client";
import React from 'react';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 bg-[#FAF7F0]">
      <div className="max-w-lg text-center">
        <div className="mb-6">
          <span className="text-6xl">⚠️</span>
        </div>

        <h2 className="text-3xl font-bold text-[#1B2430] mb-3">
          Something went wrong
        </h2>

        <p className="text-[#6B6354] mb-8">
          An unexpected error occurred while loading this page.
        </p>

        <button
          onClick={() => reset()}
          className="rounded-lg bg-[#1B2430] px-6 py-3 text-white font-medium transition hover:opacity-90"
        >
          Reload
        </button>
      </div>
    </div>
  );
}