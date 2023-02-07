import React from 'react';

const ContentBox = ( props ) => {
  return (
    <div className="box">
      <p className="box_title">{ props.title }</p>
      <p>{ props.text }</p>
    </div>
  )
}

export default ContentBox;