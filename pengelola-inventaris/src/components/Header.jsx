// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <div className="bg-blue-500 p-4 text-white flex justify-between items-center">
            <h1 className="text-xl font-bold">Manajemen Inventaris Barang</h1>
            <span>Hi, Admin</span>
        </div>
    );
};

export default Header;
