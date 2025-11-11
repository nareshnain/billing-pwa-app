
import { useEffect, useState } from 'react';

interface Order {
  id: number;
  email: string;
  phone: string;
  order_id: string;
  total: number;
  total_price: number;
  discount_price: number;
  item_list: string;
  payment_status: string;
}

const PAGE_SIZE = 10;

const mockFetchOrders = async (page: number, pageSize: number): Promise<{ orders: Order[]; total: number }> => {
  // Replace this with your real API call
  const total = 30;
  const orders: Order[] = Array.from({ length: pageSize }, (_, i) => {
    const idx = (page - 1) * pageSize + i + 1;
    return {
      id: idx,
      email: `user${idx}@mail.com`,
      phone: `123-456-789${idx % 10}`,
      order_id: `ORD-${1000 + idx}`,
      total: 2 + (idx % 5),
      total_price: 100 + idx * 10,
      discount_price: idx % 3 === 0 ? 10 : 0,
      item_list: `ItemA, ItemB${idx}`,
      payment_status: idx % 2 === 0 ? 'Paid' : 'Pending',
    };
  });
  return { orders, total };
};

export default function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const totalPages = Math.ceil(total / PAGE_SIZE);

  useEffect(() => {
    mockFetchOrders(page, PAGE_SIZE).then(({ orders, total }) => {
      setOrders(orders);
      setTotal(total);
    });
  }, [page]);

  const handleUpdate = (id: number) => {
    alert(`Update bill for order ${id}`);
  };
  const handleDelete = (id: number) => {
    alert(`Delete bill for order ${id}`);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Order List</h2>
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Id</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Order Id</th>
            <th className="py-2 px-4 border-b">Total</th>
            <th className="py-2 px-4 border-b">Total Price</th>
            <th className="py-2 px-4 border-b">Discount Price</th>
            <th className="py-2 px-4 border-b">Item List</th>
            <th className="py-2 px-4 border-b">Payment Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{order.id}</td>
              <td className="py-2 px-4 border-b">{order.email}</td>
              <td className="py-2 px-4 border-b">{order.phone}</td>
              <td className="py-2 px-4 border-b">{order.order_id}</td>
              <td className="py-2 px-4 border-b">{order.total}</td>
              <td className="py-2 px-4 border-b">{order.total_price}</td>
              <td className="py-2 px-4 border-b">{order.discount_price}</td>
              <td className="py-2 px-4 border-b">{order.item_list}</td>
              <td className="py-2 px-4 border-b">{order.payment_status}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2" onClick={() => handleUpdate(order.id)}>
                  Update Bill
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(order.id)}>
                  Delete Bill
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
