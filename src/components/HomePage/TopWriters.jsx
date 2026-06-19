import React from "react";
import { Chip } from "@heroui/react";
import Image from "next/image";

const topWriters = [
  {
    id: 1,
    name: "Evelyn Thorne",
    genre: "Dark Academia & Fantasy",
    sales: "12.4k Sales",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    ringColor: "ring-indigo-200",
  },
  {
    id: 2,
    name: "Jasper Vance",
    genre: "Noir & Contemporary Fiction",
    sales: "9.8k Sales",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    ringColor: "ring-purple-200",
  },
  {
    id: 3,
    name: "Morgana Black",
    genre: "High Fantasy & Mythos",
    sales: "15.2k Sales",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    ringColor: "ring-emerald-200",
  },
];

export default function TopWriters() {
  return (
    <section className="w-full bg-linear-to-b from-white via-slate-50 to-white py-24 px-6 md:px-12 lg:px-24">
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 font-medium mb-3">
            Featured Authors
          </p>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Top Writers of the Month
          </h2>

          <p className="mt-4 max-w-xl text-slate-500 text-sm md:text-base">
            Discover the voices behind this months most celebrated stories and
            bestselling collections.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 w-full max-w-5xl">

          {topWriters.map((writer) => (
            <div
              key={writer.id}
              className="
                group 
                flex flex-col 
                items-center 
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >

              {/* Avatar */}
              <div className="relative mb-6">

                <div
                  className="
                    absolute 
                    inset-0 
                    rounded-full 
                    bg-indigo-100 
                    blur-xl 
                    opacity-50
                    group-hover:opacity-80
                    transition
                  "
                />

                <div
                  className={`
                    relative
                    rounded-full
                    p-1.5
                    bg-white
                    shadow-lg
                    ring-4
                    ${writer.ringColor}
                  `}
                >

                  <div className="
                    w-28 
                    h-28 
                    rounded-full 
                    overflow-hidden
                    border
                    border-slate-100
                  ">

                    <Image
                      src={writer.avatar}
                      alt={writer.name}
                      width={112}
                      height={112}
                      className="
                        w-full 
                        h-full 
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    />

                  </div>

                </div>

              </div>


              {/* Writer Info */}
              <h3
                className="
                  text-xl 
                  font-serif 
                  font-semibold
                  text-slate-900
                  group-hover:text-indigo-600
                  transition-colors
                "
              >
                {writer.name}
              </h3>


              <p className="
                mt-2
                text-sm
                text-slate-500
                max-w-56
                leading-relaxed
              ">
                {writer.genre}
              </p>


              {/* Sales Chip */}
              <Chip
                variant="flat"
                className="
                  mt-5
                  bg-white
                  border
                  border-slate-200
                  text-slate-600
                  shadow-sm
                  rounded-full
                  px-4
                  py-1
                "
              >

                <div className="flex items-center gap-2">

                  <svg
                    className="w-4 h-4 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>

                  <span className="text-xs font-medium">
                    {writer.sales}
                  </span>

                </div>

              </Chip>


            </div>
          ))}

        </div>

      </div>

    </section>
  );
}