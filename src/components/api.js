const updateDog = (id, updatedDog) => (
  fetch(`http://localhost:4000/dogs/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedDog)
  }).then((r) => r.json())
)

const listDogs = () => (
  fetch("http://localhost:4000/dogs")
    .then((response) => response.json())
)

const toggleLikeDog = (dog) => (
  updateDog({ matched: !dog.matched })
)

export { updateDog, listDogs, toggleLikeDog }