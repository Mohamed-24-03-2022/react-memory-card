import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import apple from '../assets/apple.png';
import avocado from '../assets/avocado.png';
import bananas from '../assets/bananas.png';
import blueberries from '../assets/blueberries.png';
import cherries from '../assets/cherries.png';
import grape from '../assets/grape.png';
import lemon from '../assets/lemon.png';
import orange from '../assets/orange.png';
import peach from '../assets/peach.png';
import pineapple from '../assets/pineapple.png';
import strawberry from '../assets/strawberry.png';
import watermelon from '../assets/watermelon.png';

const Card = (fruitSrc, handleClickEvt, fruitName, index) => {
  return (
    <div className="card" onClick={handleClickEvt} key={index}>
      <img src={fruitSrc} alt={fruitName} />
      <p>
        {fruitName.toString().split('')[0].toUpperCase() +
          fruitName.toString().slice(1)}
      </p>
    </div>
  );
};

const Main = (props) => {
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

  const playerLose = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    setCurrentScore(0);
    setCardsArr(initialCardsArr);
  };

  const playerWinning = (card, index) => {
    const shallowCopy = [...cardsArr];
    shallowCopy.splice(index, 1);
    setCardsArr([
      ...shallowCopy,
      {
        src: card.src,
        name: card.name,
        isClicked: true,
      },
    ]);
    setCurrentScore(currentScore + 1);
  };

  const handleClick = (e) => {
    const fruitName = e.target.childNodes[1].textContent.toLowerCase();
    cardsArr.forEach((card, index) => {
      if (card.name === fruitName && card.isClicked === true) {
        playerLose();
      }
      if (card.name === fruitName && card.isClicked === false) {
        playerWinning(card, index);
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
      <div className={styles.secondRow}>
        {cardsArr.map((card, index) => {
          return Card(card.src, handleClick, card.name, index);
        })}
      </div>
    </div>
  );
};

export default Main;
