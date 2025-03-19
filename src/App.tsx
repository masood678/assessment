import React from 'react';
import logo from './logo.svg';
import './App.css';
import TicketPrice from './TicketPrice';
import TicketsList from './TicketList';

function App() {
  return (
    <div className="App">
      <TicketPrice basePrice={50} demandFactor={0.2} />
      <TicketsList tickets={[{name: "GA", price: 20}, {name: "VIP",price: 50}]}/>
    </div>
  );
}

export default App;
