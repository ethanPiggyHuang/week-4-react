import React, { useState }  from 'react';

const Header = () => {
  const [ menuDisplay, setMenuDisplay ] = useState(false);

  const handleMenuDisplay = () => {
    menuDisplay ? setMenuDisplay(false) : setMenuDisplay(true)
  }
  
  return (
    <header className="header_container">
      <h2>Website Title/logo</h2>
      <p> { menuDisplay } </p>
      <div className="menu_icon">
        <i className="fa-solid fa-bars" onClick={ handleMenuDisplay }></i>
      </div>
      <ul className= { menuDisplay ? 'menu menu_shown' : 'menu'} >
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      <button className= { menuDisplay ? 'menu_closeIcon menu_shown' : 'menu_closeIcon'}>
        <i className="fa-solid fa-x" onClick={ handleMenuDisplay }></i>
      </button>
    </header>
  );
}

export default Header;