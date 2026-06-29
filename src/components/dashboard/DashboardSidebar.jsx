
import { getUserSession } from "@/lib/core/session";
import { LayoutSideContent } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";

import Link from "next/link";
import SidebarNav from "./SidebarNav";

export default async function DashboardSidebar() {
    
    const user = await getUserSession()

    const navLinks = <SidebarNav user={user} />

    return (
        <div className="border border-r-2">
            <aside className="hidden lg:block w-64 p-4">
                {navLinks}
            </aside>

            <Drawer>
                <Button className="lg:hidden rounded-md bg-linear-to-r from-[#EF573E] to-[#FADA59] text-black duration-1000 transition hover:bg-linear-to-r hover:from-[#FADA59] hover:to-[#EF573E] hover:text-white my-5 mx-2">
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