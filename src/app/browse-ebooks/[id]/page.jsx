import EbookDetails from '@/components/ui/EbookDetails';
import { getEbookById } from '@/lib/api/ebooks';
import React from 'react';

const EbookDetailsPage =async ({params}) => {
    const {id} = await params;
    const ebook = await getEbookById(id)
    return (
        <div>
            <EbookDetails ebook={ebook} />
        </div>
    );
};

export default EbookDetailsPage;