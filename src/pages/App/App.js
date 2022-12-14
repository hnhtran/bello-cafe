import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Navbar from '../../components/Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react';
import { getUser } from '../../utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser())
  // console.log(user)
  return (
    <main className="App">
      { user ? 
      <>
      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
        <Route path="/orders/history" element={<OrderHistoryPage />} />
        <Route path="*" element={<Navigate to="/orders/new" />} />
      </Routes>
      </>
      : 
      <AuthPage user={user} setUser={setUser}/> 
      }
    </main>
  );
}

export default App;
