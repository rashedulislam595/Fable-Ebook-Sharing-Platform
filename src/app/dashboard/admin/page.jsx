'use client';

import React, { useState, useEffect } from 'react';
import { Card } from "@heroui/react";
import { FiUsers, FiEdit3, FiShoppingBag, FiDollarSign, FiTrendingUp, FiPieChart } from "react-icons/fi";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

export default function DashboardHome() {
  const [isMounted, setIsMounted] = useState(true);

  const stats = [
    { id: 1, title: "Total Users", value: "1,248", icon: <FiUsers size={22} />, change: "+12% this month" },
    { id: 2, title: "Total Writers", value: "84", icon: <FiEdit3 size={22} />, change: "+4 new joining" },
    { id: 3, title: "Total Ebooks Sold", value: "3,412", icon: <FiShoppingBag size={22} />, change: "+18% vs last month" },
    { id: 4, title: "Total Revenue", value: "$42,850.00", icon: <FiDollarSign size={22} />, change: "+24% growth", isPrice: true },
  ];

  // monthly sales data
  const salesData = [
    { name: 'Jan', sales: 2400 },
    { name: 'Feb', sales: 1398 },
    { name: 'Mar', sales: 9800 },
    { name: 'Apr', sales: 3908 },
    { name: 'May', sales: 4800 },
    { name: 'Jun', sales: 7800 },
  ];

  // genreData
  const genreData = [
    { name: 'Fiction', value: 400 },
    { name: 'Sci-Fi', value: 300 },
    { name: 'Mystery', value: 300 },
    { name: 'Romance', value: 200 },
  ];

  const COLORS = ['#1B2430', '#B08D57', '#EF573E', '#FADA59'];

  return (
    <div className="w-full min-h-screen p-4 md:p-6 lg:p-8 bg-[#FAF8F5] font-sans antialiased text-[#1B2430]">

      {/* পেজ হেডার */}
      <div className="mb-8 border-b border-dashed pb-5" style={{ borderColor: "#E3DDCB" }}>
        <h1 className="ebook-font-serif text-2xl md:text-3xl font-bold tracking-tight">
          Dashboard Overview
        </h1>
        <p className="text-sm text-zinc-500 mt-1">
          Real-time analytics, sales reports, and platform distribution metrics.
        </p>
      </div>

      {/* ১. অ্যানালিটিক্স ওভারভিউ কার্ডস */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat) => (
          <Card
            key={stat.id}
            className="rounded-xl border shadow-[0_4px_20px_-10px_rgba(27,36,48,0.06)] flex flex-col justify-between"
            style={{ backgroundColor: "#FAF7F0", borderColor: "#E3DDCB" }}
          >
            <Card.Header className="p-4 flex items-center justify-between pb-2">
              <Card.Description className="text-xs uppercase tracking-wider font-mono text-[#9A9180] font-bold">
                {stat.title}
              </Card.Description>
              <div className={`p-2.5 rounded-lg ${stat.isPrice ? 'bg-linear-to-r from-[#EF573E] to-[#FADA59] text-black' : 'bg-[#1B2430] text-white'}`}>
                {stat.icon}
              </div>
            </Card.Header>
            <Card.Content className="px-4 pb-2">
              <Card.Title className="text-2xl md:text-3xl font-bold tracking-tight font-mono">
                {stat.value}
              </Card.Title>
            </Card.Content>
            <Card.Footer className="px-4 pb-4 pt-0">
              <p className="text-[11px] font-mono text-emerald-600 font-medium">
                {stat.change}
              </p>
            </Card.Footer>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Monthly Sales Area Chart */}
        <Card
          className="lg:col-span-8 rounded-xl border p-4 shadow-sm"
          style={{ backgroundColor: "#FAF7F0", borderColor: "#E3DDCB" }}
        >
          <Card.Header className="flex items-center gap-2 pb-6">
            <FiTrendingUp className="text-[#B08D57]" size={18} />
            <div>
              <Card.Title className="text-base font-bold">Monthly Sales Performance</Card.Title>
              <Card.Description className="text-xs text-zinc-400">Overview of recent subscription and ebook revenues</Card.Description>
            </div>
          </Card.Header>

          <Card.Content className="w-full h-80 min-h-[320]">
            {isMounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF573E" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#FADA59" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E3DDCB" opacity={0.5} />
                  <XAxis dataKey="name" stroke="#9A9180" fontSize={12} tickLine={false} />
                  <YAxis stroke="#9A9180" fontSize={12} tickLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="sales" stroke="#EF573E" strokeWidth={2} fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs text-zinc-400 font-mono">Loading Chart...</div>
            )}
          </Card.Content>
        </Card>

        {/* Ebooks by Genre Pie Chart */}
        <Card
          className="lg:col-span-4 rounded-xl border p-4 shadow-sm flex flex-col"
          style={{ backgroundColor: "#FAF7F0", borderColor: "#E3DDCB" }}
        >
          <Card.Header className="flex items-center gap-2 pb-6">
            <FiPieChart className="text-[#B08D57]" size={18} />
            <div>
              <Card.Title className="text-base font-bold">Ebooks by Genre</Card.Title>
              <Card.Description className="text-xs text-zinc-400">Distribution across active genres</Card.Description>
            </div>
          </Card.Header>

          <Card.Content className="w-full h-64 min-h-[250] flex items-center justify-center">
            {isMounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genreData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {genreData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" wrapperStyle={{ fontSize: 11 }} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs text-zinc-400 font-mono">Loading Chart...</div>
            )}
          </Card.Content>
        </Card>

      </div>

    </div>
  );
}