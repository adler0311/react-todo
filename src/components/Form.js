import React from 'react';
import './Form.css';

const Form = ({color, value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input
        style={{color: color}}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress} />
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
    </div>
  )
}

export default Form;
