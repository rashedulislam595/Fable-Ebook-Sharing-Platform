import ManageUsersTable from '@/components/dashboard/admin/ManageUsersTable';
import { getUsers } from '@/lib/api/users';
import React from 'react';

const ManageUsersPage = async () => {
    const users = await getUsers()
    return (
        <div>
            <ManageUsersTable users={users} />
        </div>
    );
};

export default ManageUsersPage;