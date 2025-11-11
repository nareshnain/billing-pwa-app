import { useEffect, useState } from 'react';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  user_role: string;
  address: string;
}

const PAGE_SIZE = 10;

const mockFetchUsers = async (page: number, pageSize: number): Promise<{ users: User[]; total: number }> => {
  // Replace this with your real API call
  const total = 42;
  const users: User[] = Array.from({ length: pageSize }, (_, i) => {
    const idx = (page - 1) * pageSize + i + 1;
    return {
      id: idx,
      first_name: `First${idx}`,
      last_name: `Last${idx}`,
      email: `user${idx}@mail.com`,
      phone: `123-456-789${idx % 10}`,
      user_role: idx % 2 === 0 ? 'admin' : 'customer',
      address: `Address ${idx}`,
    };
  });
  return { users, total };
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const totalPages = Math.ceil(total / PAGE_SIZE);

  useEffect(() => {
    mockFetchUsers(page, PAGE_SIZE).then(({ users, total }) => {
      setUsers(users);
      setTotal(total);
    });
  }, [page]);

  const handleUpdate = (id: number) => {
    alert(`Update user ${id}`);
  };
  const handleDelete = (id: number) => {
    alert(`Delete user ${id}`);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">User List</h2>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
        >
          Register New User
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{user.first_name}</td>
              <td className="py-2 px-4 border-b">{user.last_name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.phone}</td>
              <td className="py-2 px-4 border-b">{user.user_role}</td>
              <td className="py-2 px-4 border-b">{user.address}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2" onClick={() => handleUpdate(user.id)}>
                  Update
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex mt-4 w-[100%] justify-end items-end">
        <div>
            <button
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            >
            Previous
            </button>
            <span>
            Page {page} of {totalPages}
            </span>
            <button
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            >
            Next
            </button>
        </div>
      </div>
    </div>
  );
};
