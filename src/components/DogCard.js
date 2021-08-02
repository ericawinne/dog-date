import React, { useState } from "react"

const DogCard = ({ dog }) => {
  const [showFront, setShowFront] = useState(true)

  const handleClick = () => {
    setShowFront(!showFront)
  }

  if (showFront) {
    return (
      <div onClick={handleClick} className="dogFinder-card">
        <img src={dog.image} alt={dog.name} />
        <p>📍{dog.location}</p>
      </div>
    )
  } else {
    return (
      <div onClick={handleClick} className="dogDate-cards" key={dog.id}>
        <h4>📍 {dog.location}</h4>
        <img className="dogMatchCard" src={dog.image}
        alt={dog.name}/>
        <br/>
        <b>Favorite hobby:</b>
        <a> {`"${dog.hobby}"`} </a>
        <br/>
        <b>Best Trick:</b>
        <a> {`"${dog.trick}"`} </a>
        <br/>
        <b>Age:</b>
        <a>{dog.age}</a>
      </div>
    )
  }
}

export default DogCard
