import React from 'react'

const Card = ({ fruitSrc, handleClickEvt, fruitName }) => {
  return (
    <div className="card" onClick={handleClickEvt}>
      <img src={fruitSrc} alt={fruitName} />
      <p>
        {fruitName.toString().split('')[0].toUpperCase() +
          fruitName.toString().slice(1)}
      </p>
    </div>
  );
};

export default Card