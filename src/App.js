import './App.css';
import React, { useState, useEffect }  from 'react';

/* -----------------
  Component Header
------------------ */

const Header = () => {
  const [ menuStat, setMenuStat ] = useState(false);
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
  
  useEffect(() => {
    const menu = document.getElementsByClassName('menu');
    const closeIcon = document.getElementById('menu_closeIcon');
  
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

    if(windowWidth >= 800){
      menu[0].style.display = 'flex';
      closeIcon.style.display = 'none';
    } else {
      if(menuStat){
        menu[0].style.display = 'block';
        closeIcon.style.display = 'block';
      } else {
        menu[0].style.display = 'none';
        closeIcon.style.display = 'none';
      }
    }

    return(() => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    })

  },[ menuStat, windowWidth ]);
  
  return (
    <header className="header_container">
      <h2>Website Title/logo</h2>
      <div className="menu_icon">
        <i className="fa-solid fa-bars" onClick={ () => setMenuStat((prev) => true) }></i>
      </div>
      <ul className="menu">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      <button id="menu_closeIcon">
        <i className="fa-solid fa-x" onClick={ () => setMenuStat((prev) => false) }></i>
      </button>
    </header>
  );
}

/* ---------------------
  Component MainMessage
---------------------- */

const MainMessage = () => {
  const [ message, setMessage ] = useState('Welcome Message');
  const newMessage = (prev) => 'Have a Good Time!';

  return (
    <section className="h1_container" onClick={ () => setMessage(newMessage) }>
      <h1 id="message">{ message }</h1>
    </section>
  )
}

/* ------------------
  Component Content
------------------- */
const Content = () => {
  const [ isHidden, setIsHidden ] = useState(true);
  const boxArray = (start, num) => {
    let boxes = [];
    for(let i=0; i<num; i++){
      boxes.push({title:`Content Box ${ start+i }`, text:'',id:`${ start+i }`});
    }
    return boxes;
  }
  const boxHTML = (box) => {
    return (
      <ContentBox 
        title={box.title}
        text={box.text}
        id={box.id}
        key={box.id}
      />  
    );
  };

  useEffect(() => {
    if(!isHidden){
      const extend = document.getElementById('extend');
      extend.style.display = 'flex';
    }
  },[ isHidden ]);

  return (
    <section>
      <h3>Section Title</h3>
      <div className="box_container">
        {boxArray(1,4).map( boxHTML )}
      </div>
      <div className="button_container">
        <button className="click_button" onClick={ () => setIsHidden((prev) => false) }>Call to Action</button>
      </div>
      <div className="box_container" id="extend">
        {boxArray(5,4).map( boxHTML )}
      </div>
    </section>
  )
}

const ContentBox = ( props ) => {
  return (
    <div className="box">
      <p className="box_title">{ props.title }</p>
      <p>{ props.text }</p>
    </div>
  )
}

/* ------------
   Main App
------------ */

const App = () => {
  const hiddenStat = true;

  return (
    <div>
      <Header />
      <MainMessage />
      <Content />
    </div>
  );
}

export default App;
