import React from 'react'
import styles from './styles.module.css';

const GameOver = ({ setGameOver }) => {
  return (
    <div className={`${styles.gameOver}`}>
      <p> You Lost</p>
      <button onClick={(e) => setGameOver(false)}>Play again</button>
    </div>
  )
}

export default GameOver