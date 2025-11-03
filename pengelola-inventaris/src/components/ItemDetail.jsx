// src/components/ItemDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ItemDetail = ({ items }) => {
    const { itemId } = useParams();
    const navigate = useNavigate();

    // Mencari barang berdasarkan itemId
    const item = items.find((item) => item.id === parseInt(itemId));

    // Jika barang tidak ditemukan, tampilkan pesan
    if (!item) {
        return <p>Barang tidak ditemukan.</p>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Detail Barang</h2>
            <div className="mb-4">
                <p><strong>Nama Barang:</strong> {item.name}</p>
                <p><strong>Kategori:</strong> {item.category}</p>
                <p><strong>Stok:</strong> {item.stock}</p>
                <p><strong>Harga:</strong> Rp {item.price.toLocaleString()}</p>
            </div>
            <button onClick={() => navigate(-1)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
                Kembali
            </button>
        </div>
    );
};

export default ItemDetail;
