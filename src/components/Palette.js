import React from 'react';
import './Palette.css';

const Color = ({ color, active, onClick }) => {
  return (
    <p className="color" style={{background: color}} onClick={onClick}/>
  )
}

const Palette = ({colors, selected, onSelect}) => {
  return (
    <div className="palette">
      {colors.map((color,i) =>
        <Color
          color={color}
          key={i}
          onClick={onSelect}
          />
      )}
    </div>
  )
}

export default Palette;
