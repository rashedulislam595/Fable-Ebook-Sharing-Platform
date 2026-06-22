import AddEbookForm from '@/components/dashboard/writer/AddEbookForm';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const AddEbookPage = async() => {
    const user = await getUserSession()
    return (
        <div>
            <AddEbookForm user={user}/>
        </div>
    );
};

export default AddEbookPage;