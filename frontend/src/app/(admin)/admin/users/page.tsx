"use client";

import { useEffect } from "react";
import { Trash2 } from "lucide-react";
import type { Metadata } from "next";
import { Heading, Text, Badge, Avatar, Button } from "@/components/atoms";
import { DataTable } from "@/components/organisms/DataTable";
import { useUsersStore } from "@/features/users/store/usersStore";
import type { Column } from "@/components/organisms/DataTable";
import type { User } from "@/shared/types";
import { formatDate } from "@/shared/lib/utils";

const columns: Column<User>[] = [
  {
    key: "name",
    header: "User",
    sortable: true,
    render: (row) => (
      <div className="flex items-center gap-3">
        <Avatar name={row.name} src={row.avatarUrl} size="sm" />
        <div>
          <p className="font-medium text-slate-200">{row.name}</p>
          <p className="text-xs text-slate-500">{row.email}</p>
        </div>
      </div>
    ),
  },
  {
    key: "role",
    header: "Role",
    sortable: true,
    render: (row) => (
      <Badge variant={row.role === "admin" ? "admin" : "user"} dot>
        {row.role}
      </Badge>
    ),
  },
  {
    key: "createdAt",
    header: "Joined",
    sortable: true,
    render: (row) => <Text variant="muted">{formatDate(row.createdAt)}</Text>,
  },
  {
    key: "actions",
    header: "",
    render: (row) => (
      <DeleteButton userId={row.id} />
    ),
    className: "text-right w-12",
  },
];

function DeleteButton({ userId }: { userId: string }) {
  const deleteUser = useUsersStore((s) => s.deleteUser);
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => deleteUser(userId)}
      className="text-rose-400 hover:bg-rose-500/10 hover:text-rose-300"
      aria-label="Delete user"
    >
      <Trash2 size={16} />
    </Button>
  );
}

export default function AdminUsersPage() {
  const { users, loadingState, fetchUsers } = useUsersStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Heading as="h1" variant="title">User Management</Heading>
        <Text variant="muted" className="mt-1">Manage all registered users.</Text>
      </div>

      <DataTable
        columns={columns}
        data={users}
        isLoading={loadingState === "loading"}
        searchable
        pageSize={10}
        getRowKey={(row) => row.id}
        emptyMessage="No users found."
      />
    </div>
  );
}
