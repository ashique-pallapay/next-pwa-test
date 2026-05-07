"use client";

import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:flex flex-col">
        <div className="p-6 text-xl font-bold border-b">My Dashboard</div>

        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="block px-4 py-2 rounded-lg bg-gray-100 font-medium">
            Overview
          </a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100">
            Analytics
          </a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100">
            Users
          </a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-gray-100">
            Settings
          </a>
        </nav>

        <div className="p-4 border-t text-sm text-gray-500">
          © 2026 Dashboard UI
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Overview</h1>

          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-black"
            />

            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-sm text-gray-500">Total Users</p>
            <h2 className="text-2xl font-bold mt-2">12,450</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-sm text-gray-500">Revenue</p>
            <h2 className="text-2xl font-bold mt-2">$34,290</h2>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-sm text-gray-500">Active Sessions</p>
            <h2 className="text-2xl font-bold mt-2">1,245</h2>
          </div>
        </div>

        {/* Table */}
        <div className="mt-8 bg-white rounded-2xl shadow overflow-x-auto">
          <div className="p-4 border-b font-semibold">Recent Users</div>

          <table className="w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr>
                <th className="p-4">Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4].map((item) => (
                <tr key={item} className="border-t">
                  <td className="p-4">User {item}</td>
                  <td>user{item}@mail.com</td>
                  <td>
                    <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                      Active
                    </span>
                  </td>
                  <td>2026-05-07</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
