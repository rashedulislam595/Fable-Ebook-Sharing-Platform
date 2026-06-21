
import { LayoutSideContent } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { Book, Bookmark, CirclePlus, History, SquarePen} from "lucide-react";
import Link from "next/link";

export default async function DashboardSidebar() {
    

    const navItems = [
        { icon: Book, href: '/dashboard/writer/manage-ebooks', label: "Manage Ebooks" },
        { icon: CirclePlus, href: '/dashboard/writer/add-ebook', label: "Add Ebook" },
        { icon: SquarePen, href: '/dashboard/writer/edit-ebook', label: "Edit Ebook" },
        { icon: Bookmark, href: '/dashboard/writer/bookmark-page', label: "Bookmark Page" },
        { icon: History, href: '/dashboard/writer/sales-history', label: "Sales History" }
    ];

    

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