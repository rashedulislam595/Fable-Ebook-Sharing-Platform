import ProfileManagement from '@/components/dashboard/user/ProfileManagement';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const ProfileManagementPage = async() => {
    const user = await getUserSession()
    return (
        <div>
            <ProfileManagement user={user} />
        </div>
    );
};

export default ProfileManagementPage;