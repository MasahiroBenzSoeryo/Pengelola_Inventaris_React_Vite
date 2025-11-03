// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './Dashboard';
import InventoryList from './components/InventoryList';
import ItemDetail from './components/ItemDetail';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Laptop', category: 'Elektronik', stock: 100, price: 18000000 },
    { id: 2, name: 'Meja', category: 'Furniture', stock: 200, price: 200000 },
    // Tambahkan barang lain sesuai kebutuhan
  ]);

  const handleAddItem = (newItem) => {
    setItems([...items, { ...newItem, id: items.length + 1 }]);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard items={items} />} />
              <Route path="/inventory" element={<InventoryList items={items} />} />
              <Route path="/item/:itemId" element={<ItemDetail items={items} />} />
              <Route path="/add-item" element={<AddItem onAddItem={handleAddItem} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
