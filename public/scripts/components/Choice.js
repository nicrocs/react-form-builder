import React from 'react';
function Choice(props) {
    return (
      <div className="choice">
        <input type={props.type} value={props.text} name={props.type}/>
        <label>{props.text}</label>
      </div>
    );
};

export default Choice;
