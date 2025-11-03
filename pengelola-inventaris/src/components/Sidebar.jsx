// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-black text-white w-64 h-screen p-4">
            <h2 className="text-xl font-bold mb-6">Aplikasi Inventaris</h2>
            <ul>
                <li className="mb-4">
                    <Link to="/" className="text-white hover:text-gray-300">Dashboard</Link>
                </li>
                <li className="mb-4">
                    <Link to="/inventory" className="text-white hover:text-gray-300">Inventory List</Link>
                </li>
                <li className="mb-4">
                    <Link to="/add-item" className="text-white hover:text-gray-300">Add Item</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
