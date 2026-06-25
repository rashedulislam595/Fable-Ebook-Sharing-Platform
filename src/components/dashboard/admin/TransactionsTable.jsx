'use client';

import React from 'react';
import { Table, Chip } from '@heroui/react';

export default function TransactionsTable({ transactions = [] }) {
  const formatDate = (date) => {
    if (!date) return 'N/A';

    return new Date(date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="w-full bg-[#FAF8F5] min-h-screen p-4">
      
      <div className="mb-8 border-b border-dashed border-[#E3DDCB] pb-5 text-center">
        <h1 className="text-3xl font-bold text-[#1B2430]">
          Transaction History
        </h1>

        <p className="text-sm text-zinc-500 mt-2">
          Monitor all publishing fees and ebook purchase transactions across the platform.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-[#E3DDCB] bg-white shadow-sm">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Transactions Table">
              
              <Table.Header>
                <Table.Column isRowHeader>
                  Transaction ID
                </Table.Column>

                <Table.Column>
                  Type
                </Table.Column>

                <Table.Column>
                  User Email
                </Table.Column>

                <Table.Column>
                  Amount
                </Table.Column>

                <Table.Column allowsSorting>
                  {({ sortDirection }) => (
                    <Table.SortableColumnHeader sortDirection={sortDirection}>
                      Date
                    </Table.SortableColumnHeader>
                  )}
                </Table.Column>
              </Table.Header>

              <Table.Body>
                {transactions.length === 0 ? (
                  <Table.Row>
                    <Table.Cell>No transactions found</Table.Cell>
                    <Table.Cell>-</Table.Cell>
                    <Table.Cell>-</Table.Cell>
                    <Table.Cell>-</Table.Cell>
                    <Table.Cell>-</Table.Cell>
                  </Table.Row>
                ) : (
                  transactions.map((transaction) => (
                    <Table.Row key={transaction._id}>
                      
                      <Table.Cell>
                        <div className="max-w-[180] text-center">
                          <p
                            className="font-mono text-xs text-zinc-700 truncate"
                            title={transaction.transactionId}
                          >
                            {transaction.transactionId}
                          </p>
                        </div>
                      </Table.Cell>

                      <Table.Cell >
                        {transaction.type === 'purchase' ? (
                          <Chip
                            size="sm"
                            variant="flat"
                            className="bg-emerald-50 text-emerald-700 font-semibold"
                          >
                            Purchase
                          </Chip>
                        ) : (
                          <Chip
                            size="sm"
                            variant="flat"
                            className="bg-orange-50 text-orange-700 font-semibold"
                          >
                            Publishing Fee
                          </Chip>
                        )}
                      </Table.Cell>

                      <Table.Cell>
                        <p
                          className="text-sm text-zinc-600 truncate max-w-[220]"
                          title={transaction.buyerEmail}
                        >
                          {transaction.buyerEmail}
                        </p>
                      </Table.Cell>

                      <Table.Cell>
                        <span className="font-semibold text-[#1B2430]">
                          ${transaction.amount}
                        </span>
                      </Table.Cell>

                      <Table.Cell>
                        <span className="text-sm text-zinc-500">
                          {formatDate(
                            transaction.createdAt ||
                              transaction.purchasedAt
                          )}
                        </span>
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