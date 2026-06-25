'use client';

import React from 'react';
import { AlertDialog, Button } from '@heroui/react';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { deleteUserById } from '@/lib/action/users';


export default function DeleteUserModal({ user }) {
    const handleDelete = async () => {
        const result = await deleteUserById(user?._id)

        if (result.deletedCount > 0) {
            toast.success("User account deleted successfully");
            window.location.reload()
        } else {
            toast.error("Failed to delete user");
        }
    };

    return (
        <AlertDialog>
            <Button
                isIconOnly
                size="sm"
                variant="light"
                className="text-zinc-600 hover:text-red-600 rounded-lg min-w-8 h-8"
            >
                <FiTrash2 size={16} />
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[460] rounded-2xl">
                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete User Account?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                            <div className="space-y-3">
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    You are about to permanently remove this user from the
                                    platform.
                                </p>

                                <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                                    <p className="font-semibold text-red-700">
                                        {user?.name}
                                    </p>

                                    <p className="text-xs text-red-500 mt-1">
                                        {user?.email}
                                    </p>
                                </div>

                                <p className="text-sm text-zinc-500">
                                    This action cannot be undone. All associated access and
                                    permissions will be permanently removed.
                                </p>
                            </div>
                        </AlertDialog.Body>

                        <AlertDialog.Footer>
                            <Button
                                slot="close"
                                variant="bordered"
                            >
                                Cancel
                            </Button>

                            <Button
                                slot="close"
                                color="danger"
                                onPress={handleDelete}
                            >
                                Delete User
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}