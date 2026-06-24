
import { getUserSession } from "@/lib/core/session";
import { LayoutSideContent } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { ArrowLeftRight, Book, BookCopy, Bookmark, CirclePlus, History, Home, SquarePen, UserPen, Users} from "lucide-react";
import Link from "next/link";

export default async function DashboardSidebar() {
    
    const user = await getUserSession()

    const readerNavItems = [
        { icon: History, href: '/dashboard/user/purchase-history', label: "Purchase History" },
        { icon: BookCopy, href: '/dashboard/user/purchased-ebooks', label: "Purchased Ebooks" },
        { icon: UserPen, href: '/dashboard/user/profile-management', label: "Profile Management" },
        { icon: Bookmark, href: '/dashboard/user/bookmark-page', label: "Bookmark Page" },
    ]

    const writerNavItems = [
        { icon: Book, href: '/dashboard/writer/manage-ebooks', label: "Manage Ebooks" },
        { icon: CirclePlus, href: '/dashboard/writer/add-ebook', label: "Add Ebook" },
        { icon: SquarePen, href: '/dashboard/writer/edit-ebook', label: "Edit Ebook" },
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
        reader : readerNavItems,
        writer : writerNavItems,
        admin: adminNavItems
    }

    const navItems = sideBarNavItems[user?.role || "reader"]

    

    const navLinks = <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
            <Link
                key={item.label}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                href={item.href}
            >
                <item.icon className="size-5 text-muted" />
                {item.label}
            </Link>
        ))}
    </nav>

    return (
        <div className="border border-r-2">
            <aside className="hidden lg:block w-64 p-4">
                {navLinks}
            </aside>

            <Drawer>
                <Button className="lg:hidden" variant="secondary">
                    <LayoutSideContent />
                    Sidebar
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navLinks}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </div>
    );
}