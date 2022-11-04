import React, { useState } from 'react';
import './App.css';
import Card from './component/card';

const cardsDefault = [
  {id: 1, title: "Card Number1", rederCount: 0},
  {id: 2, title: "Card Number2", rederCount: 0},
  {id: 3, title: "Card Number3", rederCount: 0},
  {id: 4, title: "Card Number4", rederCount: 0},
  {id: 5, title: "Card Number5", rederCount: 0}
]

function App() {
  const [ cards, setCards ] = useState(cardsDefault);
  const editCardCount = (id) => {
    setCards((prev)=> {
     return prev.map(item => {
        if(item.id === id){
          item.rederCount++
        }
      return item
       })
    })
  };
  return (
    <div className="conatiner">
      {cards.map(card => 
      <Card key={card.id}
      id={card.id}
       title={card.title}
        editCardCount={ editCardCount }/>)}
    </div>
  );
}

export default App;
