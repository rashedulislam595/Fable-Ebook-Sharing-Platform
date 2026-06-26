"use client";

import React, { useState, useTransition } from 'react';
import { Table, Chip, Button } from "@heroui/react";
import { Pencil, TrashBin, Globe, EyeSlash} from "@gravity-ui/icons";
import Image from 'next/image';
import DeleteManageEbooksModal from '../admin/DeleteManageEbooksModal';
import EditEbookModal from './EditEbookModal';

export function EbooksTableList({ initialEbooks }) {
  const [ebooks, setEbooks] = useState(initialEbooks);
  const [isPending, startTransition] = useTransition();

  // Handle Toggle Publish/Unpublish
  // const handleTogglePublish = (ebookId, currentStatus) => {
  //   const nextStatus = currentStatus === "published" ? "unpublished" : "published";
  //   if (confirm(`Are you sure you want to change this ebook status to ${nextStatus}?`)) {
  //     startTransition(async () => {
  //       // API Call here
  //       setEbooks((prev) =>
  //         prev.map(ebook => {
  //           const id = ebook._id?.$oid || ebook._id;
  //           return id === ebookId ? { ...ebook, status: nextStatus } : ebook;
  //         })
  //       );
  //     });
  //   }
  // };

  return (
    <div className="w-full bg-white border border-zinc-200 shadow-sm rounded-xl overflow-hidden p-2 sm:p-4 ">

      {/* 1. Mobile & Tablet View (Card List for Light Theme) */}
      <div className="block lg:hidden space-y-3">
        {ebooks.length === 0 ? (
          <div className="text-center py-8 text-zinc-400 text-sm">No ebooks found for this writer.</div>
        ) : (
          ebooks.map((ebook) => {
            const ebookId = ebook._id?.$oid || ebook._id;
            const ebookStatus = ebook.status || "published";

            return (
              <div
                key={ebookId}
                className="bg-zinc-50/50 border border-zinc-200/80 rounded-lg p-3 flex flex-col gap-3 transition-colors hover:bg-zinc-50"
              >
                {/* Book Info Header */}
                <div className="flex gap-3 items-start">
                  {ebook.coverImage && (
                    <Image
                      src={ebook.coverImage}
                      alt={ebook.title}
                      width={48}
                      height={64}
                      className="w-12 h-16 object-cover rounded shadow-sm bg-zinc-100  border border-zinc-200"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-zinc-800 tracking-tight truncate">
                      {ebook.title}
                    </h4>
                    <p className="text-[11px] text-zinc-500 mt-0.5 capitalize truncate">
                      Genre: {ebook.genre}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-zinc-700 font-mono font-semibold">
                        {Number(ebook.price).toLocaleString()} <span className="text-[10px] text-zinc-400 font-sans font-normal">BDT</span>
                      </span>
                      <Chip
                        color={ebookStatus === "published" ? "success" : "danger"}
                        size="sm"
                        variant="flat"
                        className="capitalize font-medium text-[10px] h-5 px-1.5"
                      >
                        {ebookStatus}
                      </Chip>
                    </div>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="flex items-center justify-end gap-2 pt-2 border-t border-zinc-200/60">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    disabled={isPending}
                    onClick={() => handleTogglePublish(ebookId, ebookStatus)}
                    className={`w-8 h-8 rounded-md ${ebookStatus === "published" ? "text-zinc-500 hover:text-red-500 hover:bg-zinc-100" : "text-zinc-500 hover:text-emerald-600 hover:bg-zinc-100"
                      }`}
                    title={ebookStatus === "published" ? "Unpublish Ebook" : "Publish Ebook"}
                  >
                    {ebookStatus === "published" ? <EyeSlash width={15} height={15} /> : <Globe width={15} height={15} />}
                  </Button>

                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    className="text-zinc-500 hover:text-amber-600 hover:bg-zinc-100 w-8 h-8 rounded-md"
                    title="Edit Ebook"
                  >
                    <Pencil width={14} height={14} />
                  </Button>

                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    disabled={isPending}
                    onClick={() => handleDelete(ebookId)}
                    className="text-zinc-500 hover:text-red-500 hover:bg-zinc-100 w-8 h-8 rounded-md disabled:opacity-30"
                    title="Delete Ebook"
                  >
                    <TrashBin width={14} height={14} />
                  </Button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* 2. Desktop View (Table List for Light Theme) */}
      <div className="hidden lg:block">
        <Table className="bg-white shadow-none">
          <Table.ResizableContainer>
            <Table.Content aria-label="Ebooks management directory">
              <Table.Header className="bg-zinc-50 border-b border-zinc-200">
                <Table.Column isRowHeader defaultWidth="2.5fr" id="ebookTitle" minWidth={220} className="text-zinc-600 font-semibold">
                  Ebook Title
                  <Table.ColumnResizer />
                </Table.Column>
                <Table.Column defaultWidth="1.2fr" id="price" minWidth={100} className="text-zinc-600 font-semibold">
                  Price
                  <Table.ColumnResizer />
                </Table.Column>
                <Table.Column defaultWidth="1fr" id="status" minWidth={110} className="text-zinc-600 font-semibold">
                  Status
                  <Table.ColumnResizer />
                </Table.Column>
                <Table.Column defaultWidth="1.5fr" id="actions" minWidth={150} className="text-zinc-600 font-semibold">
                  Actions
                </Table.Column>
              </Table.Header>

              <Table.Body emptyContent={"No ebooks found for this writer."} className="divide-y divide-zinc-100">
                {ebooks.map((ebook) => {
                  const ebookId = ebook._id?.$oid || ebook._id;
                  const ebookStatus = ebook.status || "published";

                  return (
                    <Table.Row key={ebookId} className="hover:bg-zinc-50/80 border-b border-zinc-100 transition-colors">
                      <Table.Cell>
                        <div className="flex items-center gap-3 py-1.5">
                          {ebook.coverImage && (
                            <Image
                              src={ebook.coverImage}
                              alt={ebook.title}
                              width={40}
                              height={56}
                              className="w-10 h-14 object-cover rounded shadow-sm bg-zinc-100  border border-zinc-200"
                            />
                          )}
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-zinc-800 tracking-tight line-clamp-1">
                              {ebook.title}
                            </span>
                            <span className="text-[11px] text-zinc-400 mt-0.5 capitalize">
                              Genre: {ebook.genre} • By {ebook.writerName}
                            </span>
                          </div>
                        </div>
                      </Table.Cell>

                      <Table.Cell>
                        <span className="text-xs text-zinc-700 font-mono font-semibold">
                          {Number(ebook.price).toLocaleString()}
                          <span className="text-[10px] text-zinc-400 font-sans ml-1 font-normal">BDT</span>
                        </span>
                      </Table.Cell>

                      <Table.Cell>
                        <Chip
                          color={ebookStatus === "published" ? "success" : "danger"}
                          size="sm"
                          variant="flat"
                          className="capitalize font-medium text-[11px]"
                        >
                          {ebookStatus}
                        </Chip>
                      </Table.Cell>

                      <Table.Cell>
                        <div className="flex items-center gap-1">
                          {/* <Button
                            isIconOnly
                            size="sm"
                            variant="light"
                            disabled={isPending}
                            onClick={() => handleTogglePublish(ebookId, ebookStatus)}
                            className={`min-w-8 w-8 h-8 rounded-md transition-colors ${ebookStatus === "published"
                                ? "text-zinc-500 hover:text-red-500 hover:bg-zinc-100"
                                : "text-zinc-500 hover:text-emerald-600 hover:bg-zinc-100"
                              }`}
                            title={ebookStatus === "published" ? "Unpublish Ebook" : "Publish Ebook"}
                          >
                            {ebookStatus === "published" ? <EyeSlash width={15} height={15} /> : <Globe width={15} height={15} />}
                          </Button> */}

                          <EditEbookModal ebook={ebook} />

                          <DeleteManageEbooksModal ebook={ebook} />
                        </div>
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