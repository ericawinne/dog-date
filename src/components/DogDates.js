import React from "react"

const DogDates = ({ dogs, onUnMatch }) => {
  const likeDogs = dogs.filter(dog => dog.matched)

  return (
      <div>
        <ul className="container">
          {likeDogs.map((match) => {
            return (
            <div className="dogDate-cards" key={match.id}>
              <h2>{match.name} {match.nickname}</h2>
              <a>Favorite hobby: &quot;{match.hobby}&quot;</a>
              <a>Best trick: &quot;{match.trick}&quot; </a>
              <p>Age: {match.age}</p>
              <h4>📍 {match.location}</h4>
              <img className="dogMatchCard" src={match.image}
              alt={match.name}/>
              <button onClick={() => onUnMatch(match)} className="emoji-button delete">
               ❌un-match with {match.name}!
              </button>
            </div>
            )
          })}
        </ul>
      </div>
  )
}
export default DogDates
