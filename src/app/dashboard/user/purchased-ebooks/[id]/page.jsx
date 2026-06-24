import PurchasesEbookDetailsCard from '@/components/dashboard/user/PurchasesEbookDetailscard';
import { getPurchasesBookById } from '@/lib/api/purchases';
import React from 'react';

const PurchasedEbookDetailsPage =async ({params}) => {
    const {id} = await params;
    const ebook = await getPurchasesBookById(id)
    
    return (
        <div>
            <PurchasesEbookDetailsCard ebook={ebook} />
        </div>
    );
};

export default PurchasedEbookDetailsPage;