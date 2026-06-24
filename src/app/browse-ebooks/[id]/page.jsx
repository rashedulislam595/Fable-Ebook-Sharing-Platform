import EbookDetails from '@/components/ui/EbookDetails';
import { getEbookById } from '@/lib/api/ebooks';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const EbookDetailsPage =async ({params}) => {
    const {id} = await params;
    const ebook = await getEbookById(id)
    const user = await getUserSession()
    return (
        <div>
            <EbookDetails ebook={ebook} user={user} />
        </div>
    );
};

export default EbookDetailsPage;