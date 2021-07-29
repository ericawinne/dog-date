import React from "react"
import DogCard from "./DogCard"

function DogFinder({ onLiked, currentDogInfo, onNextDog }) {

  return (

    <div>
      <h1>DogDate💕🐶</h1>
       <DogCard dog={currentDogInfo} />
       <p>Name: {currentDogInfo.name}</p>
      {currentDogInfo.matched ? 
        <button onClick={onLiked}>un-match!💔</button>
        : 
        <button className="primary" onClick={onLiked}>Like</button>
      }
       <button onClick={onNextDog}>Next Dog Please</button>
    </div>
  )
}

export default DogFinder
