import { PurchasedEbookCard } from '@/components/dashboard/user/PurchasedEbookCard';
import { getPurchasesByBuyerId } from '@/lib/api/purchases';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const PurchasedEbooksPage = async () => {
    const user = await getUserSession();
    const ebooks = await getPurchasesByBuyerId(user?.id) || [];

    return (
        <div className="w-full min-h-screen p-4 md:p-6 lg:p-8 font-sans bg-[#FAF8F5]">
            
            <div className="mb-8 border-b border-dashed pb-5 text-center" style={{ borderColor: "#E3DDCB" }}>
                <h1 className="ebook-font-serif text-2xl md:text-3xl font-bold tracking-tight" style={{ color: "#1B2430" }}>
                    Purchased Ebooks
                </h1>
                <p className="text-sm text-zinc-500 mt-1">
                    Manage and read all the digital books you have purchased.
                </p>
            </div>

            {ebooks.length === 0 ? (
            
                <div 
                    className="flex flex-col items-center justify-center text-center py-20 px-4 rounded-xl border border-dashed"
                    style={{ backgroundColor: "#FAF7F0", borderColor: "#E3DDCB" }}
                >
                    <div className="p-4 rounded-full bg-zinc-100 mb-4 text-[#B08D57]">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-800">No Purchased Ebooks Found</h3>
                    <p className="text-sm text-zinc-500 max-w-sm mt-1">
                        You have not bought any ebooks yet. Explore our store to find your next great read!
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6">
                    {ebooks.map((ebook) => {
                        const id = ebook._id?.$oid || ebook._id || ebook.id;
                        return (
                            
                            <PurchasedEbookCard key={id} ebook={ebook} />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default PurchasedEbooksPage;