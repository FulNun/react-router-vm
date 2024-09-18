
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink to="/" activeStyle={{ fontWeight: 'bold' }}>Vending Machine</NavLink>
      <NavLink to="/soda" activeStyle={{ fontWeight: 'bold' }}>Soda</NavLink>
      <NavLink to="/chips" activeStyle={{ fontWeight: 'bold' }}>Chips</NavLink>
      <NavLink to="/candy" activeStyle={{ fontWeight: 'bold' }}>Candy</NavLink>
    </nav>
  );
}

export default NavBar;
