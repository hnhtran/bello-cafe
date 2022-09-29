import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Navbar from '../../components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [user, setuser] = useState(null)
  return (
    <main className="App">
      { user ? 
      <>
      <Navbar/>
      <Routes>
        <Route path="/orders/new" element={<NewOrderPage />} />
        <Route path="/orders/history" element={<OrderHistoryPage />} />
      </Routes>
      </>
      : 
      <AuthPage /> }
    </main>
  );
}

export default App;
