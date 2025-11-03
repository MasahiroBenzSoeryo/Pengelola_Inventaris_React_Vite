// src/components/Dashboard.jsx
import React from 'react';

const Dashboard = ({ items }) => {
    // Menghitung total stok dari semua barang
    const totalStock = items.reduce((acc, item) => acc + item.stock, 0);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <p className="text-lg">Total Stok Barang: <span className="font-semibold">{totalStock}</span></p>
        </div>
    );
};

export default Dashboard;
