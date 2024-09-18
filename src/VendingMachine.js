
import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <Link to="/soda">Soda</Link>
      <Link to="/chips">Chips</Link>
      <Link to="/candy">Candy</Link>
    </div>
  );
}

export default VendingMachine;
