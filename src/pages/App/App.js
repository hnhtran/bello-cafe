import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

function App() {
  const user = null;
  return (
    <main className="App">
      { user ? <NewOrderPage /> : <AuthPage /> }
    </main>
  );
}

export default App;
