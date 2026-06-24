import { BookmarkedEbookCard } from '@/components/ui/BookmarkedEbookCard';
import { getBookmarksByUserId } from '@/lib/api/bookmark';
import { getUserSession } from '@/lib/core/session';
import React from 'react';
import { FiBookmark } from "react-icons/fi";

const BookmarkPage = async () => {
    const user = await getUserSession();
    const bookmarks = await getBookmarksByUserId(user?.id) || [];

    return (
        <div className="w-full min-h-screen p-4 md:p-6 lg:p-8 font-sans bg-[#FAF8F5]">
            
            <div className="mb-8 border-b border-dashed pb-5 text-center" style={{ borderColor: "#E3DDCB" }}>
                <h1 className="ebook-font-serif text-2xl md:text-3xl font-bold tracking-tight" style={{ color: "#1B2430" }}>
                    My Bookmarks
                </h1>
                <p className="text-sm text-zinc-500 mt-1">
                    Your personal reading list. Access your saved ebooks anytime.
                </p>
            </div>

            
            {bookmarks.length === 0 ? (
                <div 
                    className="flex flex-col items-center justify-center text-center py-20 px-4 rounded-xl border border-dashed"
                    style={{ backgroundColor: "#FAF7F0", borderColor: "#E3DDCB" }}
                >
                    <div className="p-4 rounded-full bg-zinc-100 mb-4 text-[#B08D57]">
                        <FiBookmark size={36} />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-800">No Bookmarks Found</h3>
                    <p className="text-sm text-zinc-500 max-w-sm mt-1">
                        You have not bookmarked any ebooks yet. Explore the store and save books you would like to read later!
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6">
                    {bookmarks.map((bookmark) => {
                        const id = bookmark._id?.$oid || bookmark._id;
                        return (
                            <BookmarkedEbookCard key={id} bookmark={bookmark} />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default BookmarkPage;