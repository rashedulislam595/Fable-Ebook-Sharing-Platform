import ManageEbooksTable from '@/components/dashboard/admin/ManageEbooksTable';
import { getAllEbooksByAdmin } from '@/lib/api/ebooks';
import React from 'react';

const ManageAllEbooksPage = async () => {
    const ebooks = await getAllEbooksByAdmin()
    return (
        <div>
            <ManageEbooksTable ebooks={ebooks} />
        </div>
    );
};

export default ManageAllEbooksPage;