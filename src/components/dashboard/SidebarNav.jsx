"use client";

import Link from "next/link";
import { ArrowLeftRight, Book, BookCopy, Bookmark, CirclePlus, History, Home, SquarePen, UserPen, Users} from "lucide-react";
import { usePathname } from "next/navigation";

export default function SidebarNav({ user }) {
    const pathname = usePathname();

    const readerNavItems = [
        { icon: History, href: '/dashboard/user/purchase-history', label: "Purchase History" },
        { icon: BookCopy, href: '/dashboard/user/purchased-ebooks', label: "Purchased Ebooks" },
        { icon: UserPen, href: '/dashboard/user/profile-management', label: "Profile Management" },
        { icon: Bookmark, href: '/dashboard/user/bookmark-page', label: "Bookmark Page" },
    ]

    const writerNavItems = [
        { icon: Book, href: '/dashboard/writer/manage-ebooks', label: "Manage Ebooks" },
        { icon: CirclePlus, href: '/dashboard/writer/add-ebook', label: "Add Ebook" },
        { icon: Bookmark, href: '/dashboard/writer/bookmark-page', label: "Bookmark Page" },
        { icon: History, href: '/dashboard/writer/sales-history', label: "Sales History" }
    ];

    const adminNavItems = [
        { icon: Home, href: '/dashboard/admin', label: "Home" },
        { icon: Users, href: '/dashboard/admin/manage-users', label: "Manage Users" },
        { icon: Book, href: '/dashboard/admin/manage-all-ebooks', label: "Manage All Ebooks" },
        { icon: ArrowLeftRight, href: '/dashboard/admin/transactions', label: "View All Transactions" },
    ]

    const sideBarNavItems = {
        reader: readerNavItems,
        writer: writerNavItems,
        admin: adminNavItems
    }

    const navItems = sideBarNavItems[user?.role || "reader"]

    return (
        <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
                const isActive =
                    pathname === item.href ;

                return (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors
              ${isActive
                                ? "bg-green-50 text-green-600 font-semibold"
                                : "text-foreground hover:bg-default"
                            }`}
                    >
                        <item.icon
                            className={`size-5 ${isActive ? "text-green-600" : "text-muted"
                                }`}
                        />

                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
}