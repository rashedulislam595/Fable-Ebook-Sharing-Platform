import { EbooksHeaderStats } from '@/components/dashboard/writer/EbooksHeaderStats';
import { EbooksTableList } from '@/components/dashboard/writer/EbooksTableList';
import NoManageEbookFound from '@/components/dashboard/writer/NoManageEbookFound';
import { getEbooksByWriterId } from '@/lib/api/ebooks';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const ManageEbooksPage =async () => {
    const user = await getUserSession()
    const ebooks = await getEbooksByWriterId(user?.id)
    return (
        <div>
            <EbooksHeaderStats total={ebooks.length} />
            {
                ebooks.length === 0 ?<NoManageEbookFound/>:
                <EbooksTableList initialEbooks={ebooks}/>}
        </div>
    );
};

export default ManageEbooksPage;