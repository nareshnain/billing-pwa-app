
import { useEffect, useState } from 'react';

interface Shop {
  id: number;
  shop_name: string;
  address: string;
}

const PAGE_SIZE = 10;

const mockFetchShops = async (page: number, pageSize: number): Promise<{ shops: Shop[]; total: number }> => {
  // Replace this with your real API call
  const total = 25;
  const shops: Shop[] = Array.from({ length: pageSize }, (_, i) => {
    const idx = (page - 1) * pageSize + i + 1;
    return {
      id: idx,
      shop_name: `Shop ${idx}`,
      address: `Address ${idx}`,
    };
  });
  return { shops, total };
};

export default function BusinessShopsList() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const totalPages = Math.ceil(total / PAGE_SIZE);

  useEffect(() => {
    mockFetchShops(page, PAGE_SIZE).then(({ shops, total }) => {
      setShops(shops);
      setTotal(total);
    });
  }, [page]);

  const handleUpdate = (id: number) => {
    alert(`Update shop ${id}`);
  };
  const handleDelete = (id: number) => {
    alert(`Delete shop ${id}`);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Shop List</h2>
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Shop Name</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {shops.map((shop) => (
            <tr key={shop.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{shop.id}</td>
              <td className="py-2 px-4 border-b">{shop.shop_name}</td>
              <td className="py-2 px-4 border-b">{shop.address}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2" onClick={() => handleUpdate(shop.id)}>
                  Update
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(shop.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex mt-4 w-full justify-end items-end">
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
}
