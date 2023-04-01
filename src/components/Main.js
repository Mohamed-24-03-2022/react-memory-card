import React, { useState, useEffect } from 'react';
import GameOver from './GameOver';
import Card from './Card'
import styles from './styles.module.css';
import pics from '../assets/pics';

const {
  apple,
  avocado,
  bananas,
  blueberries,
  cherries,
  grape,
  lemon,
  orange,
  peach,
  pineapple,
  strawberry,
  watermelon,
} = pics;

const Main = () => {
  const initialCardsArr = [
    {
      src: apple,
      name: 'apple',
      isClicked: false,
    },
    {
      src: avocado,
      name: 'avocado',
      isClicked: false,
    },
    {
      src: bananas,
      name: 'bananas',
      isClicked: false,
    },
    {
      src: blueberries,
      name: 'blueberries',
      isClicked: false,
    },
    {
      src: cherries,
      name: 'cherries',
      isClicked: false,
    },
    {
      src: grape,
      name: 'grape',
      isClicked: false,
    },
    {
      src: lemon,
      name: 'lemon',
      isClicked: false,
    },
    {
      src: orange,
      name: 'orange',
      isClicked: false,
    },
    {
      src: peach,
      name: 'peach',
      isClicked: false,
    },
    {
      src: pineapple,
      name: 'pineapple',
      isClicked: false,
    },
    {
      src: strawberry,
      name: 'strawberry',
      isClicked: false,
    },
    {
      src: watermelon,
      name: 'watermelon',
      isClicked: false,
    },
  ];

  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [cardsArr, setCardsArr] = useState(initialCardsArr);
  const [gameOver, setGameOver] = useState(false);

  const playerLose = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    setGameOver(true);
    setCurrentScore(0);
    setCardsArr([...initialCardsArr.sort((a, b) => 0.5 - Math.random())])
  };

  const playerWinning = (card) => {
    setCardsArr([
      ...cardsArr.filter((elem, i) => elem.name !== card.name),
      {
        ...card,
        isClicked: true,
      },
    ]);
    setCurrentScore(currentScore + 1);
  };

  const handleClick = (e) => {
    const fruitName = e.target.childNodes[1].textContent.toLowerCase();
    cardsArr.forEach((card) => {
      if (card.name !== fruitName) return;
      if (card.isClicked === true) {
        playerLose();
      }
      if (card.isClicked === false) {
        playerWinning(card);
      }
    });
  };

  useEffect(() => {
    const shuffledArray = [...cardsArr].sort((a, b) => 0.5 - Math.random());
    setCardsArr(shuffledArray);
  }, [currentScore]);

  return (
    <div className={styles.mainContent}>
      <div className={styles.firstRow}>
        <div className="current-score">
          <p>Current Score: {currentScore}</p>
        </div>
        <div className="best-score">
          <p>Best Score: {bestScore}</p>
        </div>
      </div>
      <div className={`${styles.secondRow} ${gameOver ? styles.noEvent : ''}`}>
        {
          cardsArr.map((card, index) => {
            return <Card key={index} fruitSrc={card.src} handleClickEvt={handleClick} fruitName={card.name} />
          })
        }
      </div>
      {gameOver && <GameOver setGameOver={setGameOver} />}
      {/* setGameOver={(isGameOver) => setGameOver(isGameOver) */}
    </div>
  );
};

export default Main;
