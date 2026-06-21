'use client'
import React, { useState, useEffect } from "react";
import { Input, Select, ListBox, Card, Skeleton } from "@heroui/react";
import { useRouter } from "next/navigation";
import { EbookCard } from "@/components/ui/EbookCard";
import { getAllEbooks } from "@/lib/api/ebooks";

const genresList = [
    { label: "All Genres", value: "all" },
    { label: "Historical", value: "historical" },
    { label: "Fiction", value: "fiction" },
    { label: "Mystery", value: "mystery" },
    { label: "Sci-Fi", value: "sci-fi" },
    { label: "Fantasy", value: "fantasy" }
];

export default function BrowseEbooksPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("all");
    const [ebooksData, setEbooksData] = useState([]);

    useEffect(() => {
        const fetchAllEbooks = async () => {
            try {
                setLoading(true);
                const result = await getAllEbooks();
                setEbooksData(result || []);
            } catch (error) {
                console.error("Error fetching ebooks:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllEbooks();
    }, []);

    // সার্চ এবং জেনার ফিল্টারিং লজিক (নিখুঁত ম্যাচিং)
    const filteredEbooks = ebooksData.filter((ebook) => {
        const titleMatch = ebook.title?.toLowerCase().includes(searchQuery.toLowerCase());
        const descMatch = ebook.description?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSearch = titleMatch || descMatch;

        const matchesGenre = selectedGenre === "all" || 
            ebook.genre?.toLowerCase() === selectedGenre.toLowerCase();

        return matchesSearch && matchesGenre;
    });

    const handleCardNavigation = (id) => {
        const ebookId = id?.$oid || id;
        router.push(`/ebooks/${ebookId}`);
    };

    return (
        <div className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF7F0]/30">
            <div className="max-w-7xl mx-auto space-y-10">

                {/* Banner */}
                <div className="text-center space-y-2">
                    <p className="text-[11px] tracking-[0.2em] uppercase font-semibold" style={{ color: "#B08D57" }}>
                        Lumina Catalog
                    </p>
                    <h1 className="ebook-font-serif text-3xl sm:text-4xl text-[#1B2430] font-medium">
                        Explore Masterpieces
                    </h1>
                </div>

                {/* Controls Area */}
                <div
                    className="p-5 rounded-sm border flex flex-col sm:flex-row gap-4 items-center justify-between shadow-sm"
                    style={{ background: "#FAF7F0", borderColor: "#E3DDCB" }}
                >
                    {/* Search Input */}
                    <div className="w-full sm:max-w-md">
                        <Input
                            type="text"
                            placeholder="Search by title or content..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            variant="bordered"
                            className='border-[#D8D1BC] hover:border-[#B08D57]  shadow-none h-11 bg-white rounded-sm text-sm'
                        />
                    </div>

                    {/* Genre Dropdown - HeroUI Official Custom Anatomy অনুযায়ী */}
                    <div className="w-full sm:w-48">
                        <Select
                            selectedKeys={new Set([selectedGenre])}
                            onSelectionChange={(keys) => {
                                const value = Array.from(keys)[0];
                                setSelectedGenre(value || "all");
                            }}
                            className="w-full"
                        >
                            <Select.Trigger
                                variant="bordered"
                                className="border-[#D8D1BC] hover:border-[#B08D57] data-[hover=true]:border-[#B08D57] shadow-none h-11 bg-white rounded-sm text-sm text-[#1B2430]"
                            >
                                <Select.Value placeholder="Genre" />
                                <Select.Indicator />
                            </Select.Trigger>
                            
                            <Select.Popover>
                                <ListBox className="p-1">
                                    {genresList.map((genre) => (
                                        <ListBox.Item
                                            key={genre.value}
                                            id={genre.value}
                                            textValue={genre.label}
                                            className="data-[hover=true]:bg-[#F1EDE3] data-[hover=true]:text-[#1B2430] data-[selected=true]:bg-[#E3DDCB] cursor-pointer py-2 px-3 text-sm rounded-sm"
                                        >
                                            {genre.label}
                                        </ListBox.Item>
                                    ))}
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>
                </div>

                {/* Grid Layout System */}
                {loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <Card key={i} className="space-y-4 p-4 rounded-sm border" style={{ background: "#FAF7F0", borderColor: "#E3DDCB" }}>
                                <Skeleton className="rounded-sm bg-neutral-200 w-full" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-3/4 rounded-sm bg-neutral-200" />
                                    <Skeleton className="h-3 w-1/2 rounded-sm bg-neutral-200" />
                                </div>
                            </Card>
                        ))}
                    </div>
                ) : filteredEbooks.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredEbooks.map((ebook) => (
                            <EbookCard
                                key={ebook._id?.$oid || ebook._id}
                                ebook={ebook}
                                onCardClick={() => handleCardNavigation(ebook._id)}
                            />
                        ))}
                    </div>
                ) : (
                    <div
                        className="text-center py-20 rounded-sm border"
                        style={{ background: "#FAF7F0", borderColor: "#E3DDCB" }}
                    >
                        <h3 className="ebook-font-serif text-lg text-[#1B2430]">No Ebooks Found</h3>
                        <p className="text-xs mt-1" style={{ color: "#9A9180" }}>
                            We could not find any results matching your filter.
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
}