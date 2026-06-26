'use client';

import Image from "next/image";
import { Table, Chip } from "@heroui/react";

export default function SalesHistoryTable({ sales = [] }) {

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="w-full p-4">

      {/* Table Container */}
      <div className="overflow-x-auto rounded-xl border border-[#E3DDCB] bg-white">

        <Table>
          <Table.ScrollContainer>

            <Table.Content aria-label="Sales History Table">

              <Table.Header>
                <Table.Column isRowHeader>
                  Ebook
                </Table.Column>

                <Table.Column>
                  Buyer
                </Table.Column>

                <Table.Column>
                  Purchase Date
                </Table.Column>

                <Table.Column>
                  Amount
                </Table.Column>
              </Table.Header>

              <Table.Body>

                {sales.length === 0 ? (
                  <Table.Row>
                    <Table.Cell>No sales found</Table.Cell>
                    <Table.Cell />
                    <Table.Cell />
                    <Table.Cell />
                  </Table.Row>
                ) : (

                  sales.map((sale) => (

                    <Table.Row key={sale._id}>

                      {/* Ebook Info */}
                      <Table.Cell>
                        <div className="flex items-center gap-3 ">

                          <div className="relative w-10 h-14 shrink-0 overflow-hidden rounded-md border border-[#E3DDCB]">
                            <Image
                              src={sale.coverImage}
                              alt={sale.title}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="min-w-0">
                            <p className="font-semibold text-[#1B2430] truncate">
                              {sale.title}
                            </p>

                            <p className="text-xs text-zinc-500 capitalize">
                              {sale.genre}
                            </p>
                          </div>

                        </div>
                      </Table.Cell>

                      {/* Buyer */}
                      <Table.Cell>
                        <div className="">
                          <p className="text-sm text-zinc-700 break-all">
                            {sale.buyerName || sale.buyerEmail}
                          </p>
                        </div>
                      </Table.Cell>

                      {/* Purchase Date */}
                      <Table.Cell>
                        <span className="text-sm text-zinc-600 whitespace-nowrap">
                          {formatDate(sale.createdAt)}
                        </span>
                      </Table.Cell>

                      {/* Amount */}
                      <Table.Cell>
                        <Chip
                          size="sm"
                          variant="flat"
                          className="bg-[#EEF5F0] text-[#2E7D57] font-semibold"
                        >
                          ${sale.amount}
                        </Chip>
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