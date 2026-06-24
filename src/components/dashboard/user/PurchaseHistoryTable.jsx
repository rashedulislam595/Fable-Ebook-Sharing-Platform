"use client";

import React from 'react';
import { Table, Chip, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { EllipsisVertical, ArrowDownToLine, FileText } from "@gravity-ui/icons";
import Image from 'next/image';
import NoPurchaseHistory from './NoPurchaseHistory';
import Link from 'next/link';

export function PurchaseHistoryTable({ purchaseData }) {
    // Array format
    const historyList = Array.isArray(purchaseData) ? purchaseData : [purchaseData].filter(Boolean);

    //   date formate 
    const formatDate = (dateObj) => {
        if (!dateObj) return "N/A";
        const dateStr = dateObj.$date || dateObj;
        return new Date(dateStr).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };
    console.log(historyList)

    if (historyList.length === 0) {
        return <NoPurchaseHistory />;
    }

    return (
        <div className="w-full bg-white border border-zinc-200 shadow-sm rounded-xl overflow-hidden p-3 sm:p-5 font-sans">
            <div className="block lg:hidden space-y-3.5">
                {
                    historyList.map((item) => {
                        const id = item._id?.$oid || item._id;
                        return (
                            <div
                                key={id}
                                className="bg-zinc-50/40 border border-zinc-200/60 rounded-xl p-4 flex flex-col gap-3.5 transition-all hover:bg-zinc-50"
                            >

                                <div className="flex gap-3.5 items-start justify-between">
                                    <div className="flex gap-3.5 items-center min-w-0">
                                        {item.coverImage && (
                                            <div className="relative w-12 h-16 shrink-0 shadow-sm rounded border border-zinc-200 overflow-hidden bg-zinc-100">
                                                <Image
                                                    src={item.coverImage}
                                                    alt={item.title || "Book"}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className="min-w-0">
                                            <h4 className="text-sm font-bold text-zinc-800 tracking-tight truncate">
                                                {item.title || "Untitled Ebook"}
                                            </h4>
                                            <p className="text-[11px] font-mono text-zinc-400 mt-1 uppercase tracking-tight">
                                                ID: {item.ebookId?.substring(0, 8)}...
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* মিডেল সেকশন: ইনফো গ্রিড */}
                                <div className="grid grid-cols-2 gap-y-2.5 pt-2 border-t border-zinc-200/50 text-xs">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider">Writer</span>
                                        <span className="text-zinc-700 font-medium truncate">{item.writerName}</span>
                                    </div>
                                    <div className="flex flex-col gap-0.5 items-end">
                                        <span className="text-zinc-400 text-[10px] uppercase font-bold tracking-wider">Price</span>
                                        <span className="text-zinc-900 font-mono font-bold">${Number(item.amount).toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* বটম ফুটার: ডেট এবং স্ট্যাটাস */}
                                <div className="flex items-center justify-between pt-2.5 border-t border-dashed border-zinc-200 text-[11px]">
                                    <div className="text-zinc-500 font-medium">
                                        {formatDate(item.createdAt)}
                                    </div>
                                    <Chip
                                        size="sm"
                                        variant="flat"
                                        className="capitalize font-bold text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-100/80 px-2 h-5 rounded-full"
                                    >
                                        ● Completed
                                    </Chip>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            <div className="hidden lg:block overflow-x-auto">
                <Table className="bg-white shadow-none">
                    <Table.ResizableContainer>
                        <Table.Content aria-label="Purchase history directory">

                            <Table.Header className="bg-zinc-50 border-b border-zinc-200">

                                <Table.Column
                                    isRowHeader
                                    id="ebook"
                                    defaultWidth="2.5fr"
                                    minWidth={250}
                                >
                                    Ebook Name
                                    <Table.ColumnResizer />
                                </Table.Column>

                                <Table.Column
                                    id="writer"
                                    defaultWidth="1.2fr"
                                    minWidth={120}
                                >
                                    Writer
                                    <Table.ColumnResizer />
                                </Table.Column>

                                <Table.Column
                                    id="date"
                                    defaultWidth="1.3fr"
                                    minWidth={130}
                                >
                                    Purchase Date
                                    <Table.ColumnResizer />
                                </Table.Column>

                                <Table.Column
                                    id="price"
                                    defaultWidth="1fr"
                                    minWidth={100}
                                >
                                    Price
                                    <Table.ColumnResizer />
                                </Table.Column>

                                <Table.Column
                                    id="status"
                                    defaultWidth="1fr"
                                    minWidth={100}
                                >
                                    Status
                                    <Table.ColumnResizer />
                                </Table.Column>

                                <Table.Column
                                    id="actions"
                                    defaultWidth="1fr"
                                    minWidth={120}
                                >
                                    Actions
                                </Table.Column>

                            </Table.Header>

                            <Table.Body emptyContent="No orders found.">

                                {historyList.map((item) => {
                                    const id = item._id?.$oid || item._id;

                                    return (
                                        <Table.Row key={id}>

                                            <Table.Cell>
                                                <div className="flex items-center gap-3 py-1.5 px-2 overflow-hidden">
                                                    {item.coverImage && (
                                                        <Image
                                                            src={item.coverImage}
                                                            alt={item.title}
                                                            width={40}
                                                            height={56}
                                                            className="w-10 h-14 object-cover rounded shadow-sm bg-zinc-100  border border-zinc-200"
                                                        />
                                                    )}
                                                    <div className="flex flex-col ">
                                                        <span className="text-sm font-semibold text-zinc-800 tracking-tight line-clamp-1">
                                                            {item.title}
                                                        </span>
                                                        <span className="text-[11px] text-zinc-400 mt-0.5 capitalize line-clamp-1">
                                                            id:{item.transactionId}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Table.Cell>

                                            <Table.Cell className='overflow-hidden'>
                                                {item?.writerName}
                                            </Table.Cell>

                                            <Table.Cell>
                                                {formatDate(item.createdAt)}
                                            </Table.Cell>

                                            <Table.Cell>
                                                ${Number(item.amount).toFixed(2)}
                                            </Table.Cell>

                                            <Table.Cell>
                                                <Chip
                                                    size="sm"
                                                    variant="flat"
                                                >
                                                    Completed
                                                </Chip>
                                            </Table.Cell>

                                            <Table.Cell>
                                                <Link href={`/dashboard/user/purchased-ebooks/${item._id}`} >
                                                    <Button
                                                    size="sm"
                                                    variant="light"
                                                    
                                                    className="text-zinc-500 hover:text-blue-500 hover:bg-zinc-100 min-w-8 w-8 h-8 rounded-md transition-colors disabled:opacity-30"
                                                    title="Delete Ebook"
                                                >
                                                    view Details
                                                </Button>
                                                </Link>
                                                
                                            </Table.Cell>

                                        </Table.Row>
                                    );
                                })}

                            </Table.Body>

                        </Table.Content>
                    </Table.ResizableContainer>
                </Table>
            </div>

        </div>
    );
}