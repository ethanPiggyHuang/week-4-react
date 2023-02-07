import React, { useState }  from 'react';

const MainMessage = () => {
  const [ message, setMessage ] = useState('Welcome Message');
  const newMessage = (prev) => 'Have a Good Time!';

  return (
    <section className="h1_container" onClick={ () => setMessage(newMessage) }>
      <h1 id="message">{ message }</h1>
    </section>
  )
}

export default MainMessage;