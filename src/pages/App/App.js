import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { Routes, Route } from 'react-router-dom'


function App() {
  const user = 'null';
  return (
    <main className="App">
      { user ? 
      <Routes>
        <Route path="/orders/new" element={<NewOrderPage />} />
        <Route path="/orders/history" element={<OrderHistoryPage />} />
      </Routes>
      : 
      <AuthPage /> }
    </main>
  );
}

export default App;
