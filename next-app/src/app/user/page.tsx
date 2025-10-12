import Menu from "@/components/Menu";
import Link from "next/link";
import React from "react";

export default function page() {
  const users = [
    { id: 1, firstName: "phongsavanh", lastName: "onxayvieng" },
    { id: 2, firstName: "phongsavanh", lastName: "onxayvieng" },
    { id: 3, firstName: "phongsavanh", lastName: "onxayvieng" },
  ];
  return (
    <div className="p-6">
      <Menu title="USER" />
      <h1 className="text-2xl font-bold mb-4">List User</h1>

      <table className="min-w-full border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">
              ID
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">
              First Name
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">
              Last Name
            </th>
            <th className="px-4 py-2 text-center font-semibold text-gray-600">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t hover:bg-gray-50 transition duration-200"
            >
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.firstName}</td>
              <td className="px-4 py-2">{user.lastName}</td>
              <td className="px-4 py-2 text-center">
                <Link
                  href={`/user/${user.id}`}
                  className="inline-block bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
