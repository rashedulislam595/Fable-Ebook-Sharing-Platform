import React from 'react';
import { getAllEbooks } from '@/lib/api/ebooks';
import { FiArrowRight, FiGrid } from "react-icons/fi";
import { EbookCard } from '../ui/EbookCard';
import Link from 'next/link';

const FeaturedEbooks = async () => {
    const allEbooks = await getAllEbooks("published") || [];

    const ebooks = allEbooks.slice(0, 6);

    return (
        <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
            <div className="max-w-7xl mx-auto">

                <div className=" mb-5 " style={{ borderColor: "#E3DDCB" }}>
                    <div className="space-y-2 text-center">
                        <div className="flex items-center gap-2 text-[#B08D57] text-xs font-mono uppercase tracking-widest font-bold justify-center">
                            <FiGrid size={14} />
                            <span>Curated Collection</span>
                        </div>
                        <h2 className="ebook-font-serif text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#1B2430" }}>
                            Featured Ebooks
                        </h2>
                        <p className="text-sm text-zinc-500 max-w-md mx-auto">
                            Explore our top-selling and handpicked digital publications crafted by expert writers.
                        </p>
                    </div>

                    <div className='flex justify-end'>
                        <Link href="/browse-ebooks">
                            <div
                                className="mt-4 sm:mt-0 font-mono text-xs px-3.5 py-1.5 text-blue-500 flex items-center gap-1.5 transition-all duration-300  cursor-pointer hover:font-bold hover:text-blue-700 group "

                            >
                                <span>View All</span>
                                <FiArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                        </Link>
                    </div>
                </div>

                {ebooks.length === 0 ? (
                    <div
                        className="flex flex-col items-center justify-center text-center py-16 px-4 rounded-xl border border-dashed"
                        style={{ backgroundColor: "#FAF7F0", borderColor: "#E3DDCB" }}
                    >
                        <h3 className="text-base font-bold text-zinc-700">No Featured Books Available</h3>
                        <p className="text-xs text-zinc-400 mt-1">Please check back later or refresh the page.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ebooks.map((ebook) => {
                            const id = ebook._id?.$oid || ebook._id || ebook.id;
                            return (
                                <EbookCard key={id} ebook={ebook} />
                            );
                        })}
                    </div>
                )}

            </div>
        </section>
    );
};

export default FeaturedEbooks;