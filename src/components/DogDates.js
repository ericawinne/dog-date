import React from "react"

function DogDates({ dogs, onUnMatch }) {
  const likeDogs = dogs.filter(dog => dog.matched === true)
    
    return (
      <div className="card">
        <ul>
          {likeDogs.map((match) => {
          return (
            <div>
              <li>{match.name} "{match.nickname}"</li>
              <li>📍 {match.location}</li>
              <li>age: {match.age}</li>
              <img src={match.image}
              alt={match.name}/>
              <button onClick={() => onUnMatch(match.id)} className="emoji-button delete">
               ❌un-match with {match.name}!
              </button>
            </div>
          )
          })}
        </ul>
      </div>
    );
  }
  export default DogDates






