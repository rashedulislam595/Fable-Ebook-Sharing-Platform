import TransactionsTable from '@/components/dashboard/admin/TransactionsTable';
import { getAllPurchasesData } from '@/lib/api/purchases';
import React from 'react';

const TransactionsPage = async () => {
    const transactions = await getAllPurchasesData();
    return (
        <div>
            <TransactionsTable transactions={transactions} />
        </div>
    );
};

export default TransactionsPage;