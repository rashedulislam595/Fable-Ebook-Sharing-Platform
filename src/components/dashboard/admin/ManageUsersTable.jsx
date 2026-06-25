'use client';

import { Table, Chip, Button, Tooltip } from "@heroui/react";
import { FiUserCheck, FiTrash2 } from "react-icons/fi";
import ChangeUserRoleModal from "./ChangeUserRoleModal";

export default function ManageUsersTable({ users = [] }) {
  
  const handleRoleUpdate = async (userId, currentRole) => {
    console.log("Update User:", userId, currentRole);

    // API Ready
    // await updateUserRole(userId, newRole)
  };

  const handleDeleteUser = async (userId) => {
    console.log("Delete User:", userId);

    // API Ready
    // await deleteUser(userId)
  };

  const renderRoleChip = (role) => {
    const styles = {
      admin: "bg-blue-50 text-blue-600",
      writer: "bg-orange-50 text-orange-600",
      user: "bg-zinc-100 text-zinc-600",
    };

    return (
      <Chip
        size="sm"
        variant="flat"
        className={`${styles[role] || styles.user} font-semibold uppercase`}
      >
        {role}
      </Chip>
    );
  };

  return (
    <div className="w-full">
      <div className="mb-6 text-center mt-10">
        <h2 className="text-2xl font-bold">Manage Users</h2>
        <p className="text-sm text-zinc-500">
          Manage platform users and writers.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border bg-white">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Manage Users">
              <Table.Header>
                <Table.Column isRowHeader>Name</Table.Column>
                <Table.Column>Email</Table.Column>
                <Table.Column>Role</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Actions</Table.Column>
              </Table.Header>

              <Table.Body>
                {users.length === 0 ? (
                  <Table.Row>
                    <Table.Cell>No users found</Table.Cell>
                    <Table.Cell />
                    <Table.Cell />
                    <Table.Cell />
                    <Table.Cell />
                  </Table.Row>
                ) : (
                  users.map((user) => (
                    <Table.Row key={user._id}>
                      <Table.Cell>
                        <div className="">
                          <p className="font-semibold">{user.name}</p>
                        </div>
                      </Table.Cell>

                      <Table.Cell>
                        <span className="text-sm break-all">
                          {user.email}
                        </span>
                      </Table.Cell>

                      <Table.Cell>
                        {renderRoleChip(user?.role || 'reader')}
                      </Table.Cell>

                      <Table.Cell>
                        <span
                          className={`text-xs font-medium ${
                            user.emailVerified
                              ? "text-green-600"
                              : "text-zinc-500"
                          }`}
                        >
                          {user.emailVerified ? "Active" : "Inactive"}
                        </span>
                      </Table.Cell>

                      <Table.Cell>
                        <div className="flex items-center gap-2">
                          <Tooltip content="Change Role">
                            <ChangeUserRoleModal user={user} />
                          </Tooltip>

                          <Tooltip content="Delete User">
                            <Button
                              isIconOnly
                              size="sm"
                              variant="light"
                              className='text-danger opacity-60 hover:opacity-100 hove:font-bold'
                              color="danger"
                              onPress={() =>
                                handleDeleteUser(user._id)
                              }
                            >
                              <FiTrash2 size={16} />
                            </Button>
                          </Tooltip>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  ))
                )}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
}