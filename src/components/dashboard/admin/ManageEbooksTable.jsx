'use client';

import { Table, Chip, Tooltip, Button } from "@heroui/react";
import { FiTrash2, FiUserCheck } from "react-icons/fi";
import Image from "next/image";
import { EyeSlash } from "@gravity-ui/icons";
import { Globe } from "lucide-react";
import { updateStatus } from "@/lib/action/ebooks";
import { toast } from "react-toastify";

export default function ManageEbooksTable({ ebooks = [] }) {

    const renderStatusChip = (status) => {
        const styles = {
            published: "bg-emerald-50 text-emerald-600",
            unpublished: "bg-red-50 text-red-600",
        };

        return (
            <Chip
                size="sm"
                variant="flat"
                className={`${styles[status] || styles.unpublished} font-semibold uppercase`}
            >
                {status}
            </Chip>
        );
    };

    const handleTogglePublish = async (id, status) => {
        const toggleStatus = status === "published" ? "unpublished" : "published"

        const result = await updateStatus(id, { status: toggleStatus })
        if (result.modifiedCount > 0) {
            toast.success(status === "published"
                ? "The ebook has been removed from public visibility."
                : "The ebook is now live and available to readers.");
            window.location.reload();
        }
    }

    return (
        <div className="w-full p-4">
            <div className="mb-6 text-center mt-6">
                <h2 className="text-4xl font-bold">Manage Ebooks</h2>
                <p className="text-sm text-zinc-500">
                    Review, publish, unpublish and manage all ebooks.
                </p>
            </div>

            <div className="overflow-x-auto rounded-xl border bg-white">
                <Table>
                    <Table.ScrollContainer>
                        <Table.Content aria-label="Manage Ebooks">
                            <Table.Header>
                                <Table.Column isRowHeader>Title</Table.Column>
                                <Table.Column>Writer</Table.Column>
                                <Table.Column>Price</Table.Column>
                                <Table.Column>Status</Table.Column>
                                <Table.Column>Actions</Table.Column>
                            </Table.Header>

                            <Table.Body>
                                {ebooks.length === 0 ? (
                                    <Table.Row>
                                        <Table.Cell>No ebooks found</Table.Cell>
                                        <Table.Cell />
                                        <Table.Cell />
                                        <Table.Cell />
                                        <Table.Cell />
                                    </Table.Row>
                                ) : (
                                    ebooks.map((ebook) => (
                                        <Table.Row key={ebook._id}>
                                            <Table.Cell>
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src={ebook.coverImage}
                                                        alt={ebook.title}
                                                        width={48}
                                                        height={64}
                                                        className="w-12 h-16 rounded-md object-cover border"
                                                    />

                                                    <div>
                                                        <p className="font-semibold">
                                                            {ebook.title}
                                                        </p>

                                                        <p className="text-xs text-zinc-500">
                                                            {ebook.category}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Table.Cell>

                                            <Table.Cell>
                                                <span className="text-sm">
                                                    {ebook.writerName}
                                                </span>
                                            </Table.Cell>

                                            <Table.Cell>
                                                <span className="font-medium">
                                                    ${ebook.price}
                                                </span>
                                            </Table.Cell>

                                            <Table.Cell>
                                                {renderStatusChip(
                                                    ebook?.status || "unpublished"
                                                )}
                                            </Table.Cell>

                                            <Table.Cell>
                                                <div className="flex items-center gap-2">

                                                    <Tooltip
                                                    >
                                                        <Button
                                                            isIconOnly
                                                            size="sm"
                                                            className={`transition-all duration-200 ${ebook.status === "published"
                                                                ? "bg-[#FFF6E8] text-[#B08D57] hover:bg-[#FDF0D5]"
                                                                : "bg-[#EEF5F0] text-[#2E7D57] hover:bg-[#E2F0E7]"
                                                                }`}
                                                            variant="light"
                                                            onClick={() => handleTogglePublish(ebook._id, ebook.status)}

                                                        >
                                                            {ebook.status === "published" ? <EyeSlash width={15} height={15} /> : <Globe width={15} height={15} />}
                                                        </Button>
                                                    </Tooltip>

                                                    <Tooltip content="Delete Ebook">
                                                        <Button
                                                            isIconOnly
                                                            size="sm"
                                                            variant="light"
                                                            className="text-zinc-600 hover:text-red-600 rounded-lg min-w-8 h-8"
                                                        >
                                                            <FiTrash2 size={16} />
                                                        </Button>
                                                    </Tooltip>

                                                </div>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))
                                )}
                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>
            </div>
        </div>
    );
}