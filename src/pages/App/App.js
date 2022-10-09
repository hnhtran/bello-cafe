import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Navbar from '../../components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { getUser } from '../../utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser())
  console.log(user)
  return (
    <main className="App">
      { user ? 
      <>
      <Navbar user={user} setUser={setUser}/>
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
