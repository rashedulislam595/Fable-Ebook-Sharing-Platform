'use client';

import React from 'react';
import { AlertDialog, Button } from '@heroui/react';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { deleteBookmark } from '@/lib/action/bookmark';


export default function DeleteBookmarkModal({ ebook }) {
    const handleDelete = async () => {
        const result = await deleteBookmark(ebook._id)

        if (result.deletedCount > 0) {
            toast.success(`${ebook.title} deleted successfully`);
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
                variant="flat"
                className="absolute top-5 right-5 z-10 bg-white/80 hover:bg-red-50 text-zinc-600 hover:text-red-600 backdrop-blur-sm min-w-8 h-8 rounded-full shadow-xs transition-colors"
                title="Remove Bookmark"
            >
                <FiTrash2 size={14} />
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[460] rounded-2xl">
                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className='text-3xl'>
                                {ebook.title}?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body>
                            <div className="space-y-3">
                                <p className="text-sm text-zinc-600 leading-relaxed">
                                    You are about to permanently remove this ebook from the
                                    platform.
                                </p>

                                <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                                    <p className="font-semibold text-red-700">
                                        {ebook.writerName}
                                    </p>

                                    <p className="text-xs text-red-500 mt-1">
                                        {ebook.writerEmail}
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
                                Delete Ebook
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}