import React from "react"
import DogCard from "./DogCard"

function DogFinder({ onLiked, currentDogInfo, onNextDog }) {
  const handleLike = () => {
    onLiked(currentDogInfo.id)
  }

  return (

    <div>
      <h1>DogDate💕🐶</h1>
      <h2>{currentDogInfo.name}</h2>
       <DogCard dog={currentDogInfo} />
       <div>
      {currentDogInfo.matched ? 
        <button onClick={handleLike}>un-match!💔</button>
        : 
        <button onClick={handleLike}>Like</button>
      }
       <button onClick={onNextDog}> ---->   Next Dog Please  ----> </button>
       </div>
    </div>
  )
}

export default DogFinder
