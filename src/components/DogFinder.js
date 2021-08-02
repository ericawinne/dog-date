import React from "react"
import DogCard from "./DogCard"

const ToggleLikeButton = ({ onLike, matched }) => (
  <button onClick={onLike}>
    {matched ? "un-match!💔" : "Like"}
  </button>
)

const DogFinder = ({ onLiked, currentDogInfo, onNextDog }) => {
  const handleLike = () => {
    onLiked(currentDogInfo)
  }

  return (
    <div>
      <h1>DogDate💕🐶</h1>
      <h2>{currentDogInfo.name}</h2>
       <DogCard dog={currentDogInfo} />
       <div>
         <ToggleLikeButton matched={currentDogInfo.matched} onLike={handleLike} />
       <button onClick={onNextDog}>{"---->   Next Dog Please  ---->"}</button>
       </div>
    </div>
  )
}

export default DogFinder
