import { PurchaseHistoryTable } from '@/components/dashboard/user/PurchaseHistoryTable';
import { getPurchasesByBuyerId } from '@/lib/api/purchases';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const PurchaseHistoryPage = async () => {
    const user = await getUserSession();
    const purchaseData = await getPurchasesByBuyerId(user?.id)
    // console.log("purchasesData",purchaseData)
    return (
        <div className='space-y-6'>
            <div className=" p-6 text-center">
                <h1 className="text-3xl font-bold text-zinc-900">
                    My Purchase History
                </h1>

                <p className="mt-2 text-sm text-zinc-600 max-w-2xl mx-auto">
                    Manage your purchased ebooks, revisit previous purchases,
                    and keep track of your growing digital library.
                </p>
            </div>
            <PurchaseHistoryTable purchaseData={purchaseData} />
        </div>
    );
};

export default PurchaseHistoryPage;