import SalesHistoryTable from '@/components/dashboard/writer/SalesHistoryTable';
import SalesNotFound from '@/components/dashboard/writer/SalesNotFound';
import { getPurchasesByWriterId } from '@/lib/api/purchases';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const SalesHistoryPage = async () => {
    const user = await getUserSession()
    const sales = await getPurchasesByWriterId(user?.id)
    return (
        <div>
            {/* Header */}
            <div className="mb-6 mt-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1B2430]">
                    Sales History
                </h2>

                <p className="text-sm text-zinc-500 mt-2">
                    Track ebook purchases and revenue records.
                </p>
            </div>

            {
                sales.length === 0 ? <SalesNotFound /> :
                    <SalesHistoryTable sales={sales} />
            }
        </div>
    );
};

export default SalesHistoryPage;