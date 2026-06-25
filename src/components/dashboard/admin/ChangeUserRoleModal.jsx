'use client';

import React, { useState } from 'react';
import { Modal, Button, RadioGroup, Radio } from '@heroui/react';
import { FiUserCheck } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { updateUserRole } from '@/lib/action/users';

export default function ChangeUserRoleModal({ user }) {
    const [selectedRole, setSelectedRole] = useState(user?.role || 'user');

    const handleSubmit = async () => {
        const result = await updateUserRole(
        user._id,
        {role : selectedRole}
    );

    if (result.modifiedCount > 0) {
        toast.success("User role updated successfully");
        window.location.reload();
    }else{
        toast.error('error')
    }
    // console.log(user._id,selectedRole)
    };


    return (
        <Modal
            placement="center"
            backdrop="blur"
            size="lg"
        >
            <Modal.Trigger>
                <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    className='opacity-60 hover:opacity-100'
                >
                    <FiUserCheck size={16} />
                </Button>
            </Modal.Trigger>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="rounded-2xl">
                        <Modal.Header>
                            <div>
                                <h2 className="text-xl font-bold text-[#1B2430]">
                                    Change User Role
                                </h2>

                                <p className="text-sm text-zinc-500 mt-2">
                                    Select a new role for{" "}
                                    <span className="font-semibold text-[#1B2430]">
                                        {user?.name}
                                    </span>
                                    . This will update their system permissions immediately.
                                </p>
                            </div>
                        </Modal.Header>

                        <Modal.Body>
                            <div>
                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 block">
                                    Select Role
                                </label>

                                <div className="space-y-3">

                                    <div
                                        onClick={() => setSelectedRole("admin")}
                                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${selectedRole === "admin"
                                                ? "border-blue-600 bg-blue-50"
                                                : "border-slate-200 hover:bg-slate-50"
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <input
                                                type="radio"
                                                checked={selectedRole === "admin"}
                                                readOnly
                                                className="mt-1"
                                            />

                                            <div>
                                                <p className="font-semibold text-sm text-slate-800">
                                                    Administrator
                                                </p>
                                                <p className="text-xs text-slate-500 mt-1">
                                                    Full access to system settings and reader management.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        onClick={() => setSelectedRole("writer")}
                                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${selectedRole === "writer"
                                                ? "border-blue-600 bg-blue-50"
                                                : "border-slate-200 hover:bg-slate-50"
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <input
                                                type="radio"
                                                checked={selectedRole === "writer"}
                                                readOnly
                                                className="mt-1"
                                            />

                                            <div>
                                                <p className="font-semibold text-sm text-slate-800">
                                                    Writer
                                                </p>
                                                <p className="text-xs text-slate-500 mt-1">
                                                    Can manage ebooks and content, but no admin access.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        onClick={() => setSelectedRole("reader")}
                                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${selectedRole === "reader"
                                                ? "border-blue-600 bg-blue-50"
                                                : "border-slate-200 hover:bg-slate-50"
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <input
                                                type="radio"
                                                checked={selectedRole === "reader"}
                                                readOnly
                                                className="mt-1"
                                            />

                                            <div>
                                                <p className="font-semibold text-sm text-slate-800">
                                                    Reader
                                                </p>
                                                <p className="text-xs text-slate-500 mt-1">
                                                    Can read and purchase ebooks only.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <div className="flex justify-end gap-3 w-full">
                                <Button
                                    variant="light"
                                    slot='close'
                                >
                                    Cancel
                                </Button>

                                <Button
                                    color="primary"
                                    className="px-8"
                                    onPress={handleSubmit}
                                >
                                    Update Role
                                </Button>
                            </div>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}