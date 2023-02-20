import './App.css';
import Header from './Components/Header.js';
import Balance from './Components/Balance.js';
import IncomeExpenses from './Components/IncomeExpenses.js';

function App() {
  return (
    <div className="container">
      <Header/>
      <Balance/>
      <IncomeExpenses/>
    </div>
  );
}

export default App;
