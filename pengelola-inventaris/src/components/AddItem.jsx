// src/components/AddItem.jsx
import React, { useState } from 'react';

const AddItem = ({ onAddItem }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && category && stock && price) {
            onAddItem({ name, category, stock: parseInt(stock), price: parseFloat(price) });
            setName('');
            setCategory('');
            setStock('');
            setPrice('');
        } else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Add Item</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label>Nama Barang</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border p-1 w-full" />
                </div>
                <div className="mb-2">
                    <label>Kategori</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="border p-1 w-full" />
                </div>
                <div className="mb-2">
                    <label>Stok</label>
                    <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} className="border p-1 w-full" />
                </div>
                <div className="mb-2">
                    <label>Harga</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="border p-1 w-full" />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">Add Item</button>
            </form>
        </div>
    );
};

export default AddItem;
