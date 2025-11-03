// src/components/InventoryList.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InventoryList = ({ items }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Fungsi untuk mem-filter barang berdasarkan nama atau kategori
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Inventory List</h2>

            {/* Input pencarian */}
            <input
                type="text"
                placeholder="Cari barang berdasarkan nama atau kategori"
                className="border p-2 mb-4 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Daftar barang */}
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Nama Barang</th>
                        <th className="px-4 py-2">Kategori</th>
                        <th className="px-4 py-2">Stok</th>
                        <th className="px-4 py-2">Harga</th>
                        <th className="px-4 py-2">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <tr key={item.id}>
                                <td className="border px-4 py-2">{item.name}</td>
                                <td className="border px-4 py-2">{item.category}</td>
                                <td className="border px-4 py-2">{item.stock}</td>
                                <td className="border px-4 py-2">Rp {item.price.toLocaleString()}</td>
                                <td className="border px-4 py-2">
                                    <Link to={`/item/${item.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                                        Detail
                                    </Link>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center py-4">Barang tidak ditemukan</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryList;
