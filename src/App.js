import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [selectedFood, setSelectedFood] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const predefinedFoodItems = [
    { name: 'Burger', price: 50 },
    { name: 'Pizza', price: 100 },
    { name: 'Pasta', price: 80 },
    { name: 'Salad', price: 40 }
  ];

  const addFoodItem = () => {
    if (selectedFood === '' || quantity < 1) return;

    const foodItem = predefinedFoodItems.find(item => item.name === selectedFood);
    const newItem = { 
      id: foodItems.length + 1, 
      name: selectedFood, 
      quantity, 
      price: foodItem.price 
    };

    setFoodItems([...foodItems, newItem]);
    setSelectedFood('');
    setQuantity(1);
    setTotalPrice(totalPrice + (foodItem.price * quantity));
  };

  const deleteFoodItem = (id) => {
    const item = foodItems.find(item => item.id === id);
    setTotalPrice(totalPrice - (item.price * item.quantity));
    setFoodItems(foodItems.filter(item => item.id !== id));
  };

  const handleEdit = (id, newQuantity) => {
    const newFoodItems = foodItems.map(item => {
      if (item.id === id) {
        const oldQuantity = item.quantity;
        item.quantity = newQuantity;
        setTotalPrice(totalPrice + item.price * (newQuantity - oldQuantity));
      }
      return item;
    });
    setFoodItems(newFoodItems);
  };

  return (
    <div className="App">
      <h1>Food Order Management</h1>
      <div className="input-group">
        <select 
          value={selectedFood} 
          onChange={(e) => setSelectedFood(e.target.value)}
        >
          <option value="">Select food item</option>
          {predefinedFoodItems.map((item, index) => (
            <option key={index} value={item.name}>{item.name}</option>
          ))}
        </select>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          placeholder="Quantity"
        />
        <button onClick={addFoodItem}>Add Food Item</button>
      </div>
      <h2>Order List</h2>
      <ul className="order-list">
        {foodItems.map(item => (
          <li key={item.id} className="order-item">
            <span>{item.name} (x{item.quantity}) - ${item.price * item.quantity}</span>
            <div className="actions">
              <input 
                type="number" 
                value={item.quantity} 
                onChange={(e) => handleEdit(item.id, Number(e.target.value))}
              />
              <button onClick={() => deleteFoodItem(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
}

export default App;
