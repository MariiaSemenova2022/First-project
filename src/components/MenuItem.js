import React from 'react';

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h4> {name} </h4>
      <p> ${price} </p>
    </div>
  );
}

export default MenuItem;