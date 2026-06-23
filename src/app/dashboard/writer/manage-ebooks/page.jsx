import { EbooksHeaderStats } from '@/components/dashboard/writer/EbooksHeaderStats';
import { EbooksTableList } from '@/components/dashboard/writer/EbooksTableList';
import { getEbooksByWriterId } from '@/lib/api/ebooks';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const ManageEbooksPage =async () => {
    const user = await getUserSession()
    const ebooks = await getEbooksByWriterId(user?.id)
    return (
        <div>
            <EbooksHeaderStats total={ebooks.length} />
            <EbooksTableList initialEbooks={ebooks}/>
        </div>
    );
};

export default ManageEbooksPage;