import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from "./NavBar"
import DogFinder from "./DogFinder"
import DogDates from "./DogDates"
import NewDogProfile from "./NewDogProfile"
import Home from "./Home"
import { toggleLikeDog, listDogs } from "./api"

const App = () => {
  const [dogs, setDogs] = useState([])
  const [currentDog, setCurrentDog] = useState(0)
  const [currentDogInfo, setCurrentDogInfo] = useState(null)

  const handleAddDog = (newDog) => {
    const updatedDogFinderArray = [...dogs, newDog]
    setDogs(updatedDogFinderArray)
  }

  const handleLikedToggle = (match) => {
    toggleLikeDog(match)
      .then(data => {
        if (!match.matched) {
          alert("✨✨💕It's a Match!💕✨✨")
        }
        const updatedDogs = dogs.map(dog => {
          if (dog.id === data.id) {
            setCurrentDogInfo(data)
            return data
          } else return dog
        })
        setDogs(updatedDogs)
      })
  }

  const handleNextDog = () => {
    if (currentDog < dogs.length - 1) {
      setCurrentDog(currentDog => currentDog + 1)
    } else {
      setCurrentDog(0)
    }
  }

  useEffect(() => {
    listDogs().then((dogs) => {
      setDogs(dogs)
      setCurrentDogInfo(dogs[currentDog])
    })
  }, [currentDog])

  if (!currentDogInfo) {
    return <div>Loading...</div>
  }

  return (
    <div>
    <NavBar />
    <Switch>
        <Route path="/DogFinder">
            <DogFinder
                onLiked={handleLikedToggle}
                currentDogInfo={currentDogInfo}
                onNextDog={handleNextDog}
            />
        </Route>
        <Route path="/NewDogProfile">
            <NewDogProfile onAddDog={handleAddDog}/>
        </Route>
        <Route path="/DogDates">
            <DogDates dogs={dogs} onUnMatch={handleLikedToggle} />
        </Route>
        <Route exact path="/" >
            <Home />
        </Route>
    </Switch>
</div>
  )
}

export default App
