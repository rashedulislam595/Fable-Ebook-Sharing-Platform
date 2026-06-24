"use client";

import { Button } from "@heroui/react";
import { ShoppingCart } from "@gravity-ui/icons";
import Link from "next/link";

export default function NoPurchaseHistory() {
    return (
        <div className="w-full bg-white border border-zinc-200 rounded-xl shadow-sm">
            <div className="flex flex-col items-center justify-center py-16 px-6 text-center">

                <div className="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center mb-5">
                    <ShoppingCart width={36} height={36} className="text-zinc-400" />
                </div>

                <h3 className="text-xl font-bold text-zinc-800">
                    No Purchase History Found
                </h3>

                <p className="mt-2 max-w-md text-sm text-zinc-500 leading-relaxed">
                    You have not purchased any ebooks yet. Explore our collection and
                    discover your next favorite read.
                </p>

                <Link href={'/browse-ebooks'}>
                    <Button
                        color="primary"
                        className="mt-6 font-medium"
                    >
                        Browse Ebooks
                    </Button>
                </Link>
            </div>
        </div>
    );
}