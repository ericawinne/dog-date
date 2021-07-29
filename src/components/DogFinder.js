import React from "react"
import DogCard from "./DogCard"

function DogFinder({ onLiked, currentDogInfo, onNextDog }) {
  const handleLike = () => {
    onLiked(currentDogInfo.id)
  }

  return (

    <div>
      <h1>DogDate💕🐶</h1>
       <DogCard dog={currentDogInfo} />
       <p>Name: {currentDogInfo.name}</p>
      {currentDogInfo.matched ? 
        <button onClick={handleLike}>un-match!💔</button>
        : 
        <button className="primary" onClick={handleLike}>Like</button>
      }
       <button onClick={onNextDog}>Next Dog Please</button>
    </div>
  )
}

export default DogFinder
