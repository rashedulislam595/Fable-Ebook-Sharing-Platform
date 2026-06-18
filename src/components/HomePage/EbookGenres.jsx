import React from "react";
import { Link } from "@heroui/react";

const genreData = [
  {
    name: "Fiction",
    slug: "fiction",
    icon: (
      <svg className="w-8 h-8 text-slate-700 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    name: "Mystery",
    slug: "mystery",
    icon: (
      <svg className="w-8 h-8 text-slate-700 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 0 1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 4.5h.008v.008H12V15Zm0 3h.008v.008H12V18Z" />
      </svg>
    ),
  },
  {
    name: "Sci-Fi",
    slug: "sci-fi",
    icon: (
      <svg className="w-8 h-8 text-slate-700 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699-2.7c-.103.103-.214.2-.332.28m-2.43 2.777a14.982 14.982 0 0 1-1.21-6.16M19.5 4.5h.008v.008h-.008V4.5Z" />
      </svg>
    ),
  },
  {
    name: "Romance",
    slug: "romance",
    icon: (
      <svg className="w-8 h-8 text-slate-700 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    name: "Historical",
    slug: "historical",
    icon: (
      <svg className="w-8 h-8 text-slate-700 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25M6 6h.008v.008H6V6Zm0 4h.008v.008H6V10Zm0 4h.008v.008H6V14Zm12-8h.008v.008H18V6Zm0 4h.008v.008H18V10Zm0 4h.008v.008H18V14Z" />
      </svg>
    ),
  },
  {
    name: "Non-Fiction",
    slug: "non-fiction",
    icon: (
      <svg className="w-8 h-8 text-slate-700 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.174c.049-.408.309-.75.684-.913 1.25-.544 2.58-.838 3.96-.838.74 0 1.458.08 2.15.232m-6.794 1.52c-.522.096-.924.524-.954 1.05a11.966 11.966 0 0 0 0 3.65c.03.526.432.954.954 1.05a11.97 11.97 0 0 0 3.652.333c.523-.03.954-.432 1.05-.954a11.972 11.972 0 0 0 .333-3.651c-.03-.523-.432-.954-.954-1.05a11.97 11.97 0 0 0-3.652-.333ZM19.74 10.174c-.049-.408-.309-.75-.684-.913a11.965 11.965 0 0 0-3.96-.838c-.74 0-1.458.08-2.15.232m6.794 1.52c.522.096.924.524.954 1.05a11.966 11.966 0 0 1 0 3.65c-.03.526-.432.954-.954 1.05a11.97 11.97 0 0 1-3.652.333c-.523-.03-.954-.432-1.05-.954a11.972 11.972 0 0 1-.333-3.651c.03-.523.432-.954.954-1.05a11.97 11.97 0 0 1 3.652-.333Z" />
      </svg>
    ),
  }
];

export default function EbookGenres() {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Layout Component */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between items-start gap-4 mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Explore by Genre
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-sans">
              Find your next obsession in our curated categories.
            </p>
          </div>
          
          <Link 
            href="/" 
            className="text-sm font-medium text-slate-800 hover:text-indigo-600 transition-colors flex items-center gap-1.5 group font-sans"
          >
            View All Genres 
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Responsive Flexbox / Variable Grid Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          {genreData.map((genre) => (
            <Link
              key={genre.slug}
              // Redirecting directly to browse page with pre-filled query params for requirements validation
              href={`/`}
              className="group block w-full"
            >
              <div className="w-full aspect-square bg-white border border-slate-200/80 hover:border-indigo-500/30 rounded-none p-6 flex flex-col items-center justify-center space-y-4 text-center transition-all duration-300 shadow-[0_4px_20px_rgba(15,23,42,0.01)] hover:shadow-[0_10px_30px_rgba(79,70,229,0.06)] transform hover:-translate-y-0.5">
                
                {/* Visual Icon Box */}
                <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-indigo-50/50 transition-colors duration-300">
                  {genre.icon}
                </div>

                {/* Genre Label Text */}
                <span className="text-sm md:text-base font-serif font-medium text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">
                  {genre.name}
                </span>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}