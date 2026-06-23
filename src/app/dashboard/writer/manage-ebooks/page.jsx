import { EbooksTableList } from '@/components/dashboard/writer/EbooksTableList';
import { getEbooksByWriterId } from '@/lib/api/ebooks';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const ManageEbooksPage =async () => {
    const user = await getUserSession()
    const ebooks = await getEbooksByWriterId(user?.id)
    return (
        <div>
            Manage Ebooks page is coming soon
            <EbooksTableList initialEbooks={ebooks}/>
        </div>
    );
};

export default ManageEbooksPage;