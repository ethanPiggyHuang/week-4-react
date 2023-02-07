import React, { useState }  from 'react';
import ContentBox from './ContentBox';

const Content = () => {
  const [ isExtend, setIsExtend ] = useState(false);
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

  const handleExtend = () => {
    setIsExtend(true)
  }

  return (
    <section>
      <h3>Section Title</h3>
      <div className="box_container"  >
        {boxArray(1,4).map( boxHTML )}
      </div>
      <div className="button_container">
        <button className="click_button" onClick = { handleExtend }>Call to Action</button>
      </div>
      <div className="box_container" id={ isExtend ? 'box_show' : 'box_hidden' }>
        {boxArray(5,4).map( boxHTML )}
      </div>
    </section>
  )
}

export default Content;