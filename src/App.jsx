import './App.css';
import Nav from './Nav.jsx';
import DogList from './DogList.jsx';
import DogDetails from './DogDetails.jsx';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';

/** Component for dog viewing app
 *
 * Props: none
 *
 * State:
 * - dogs: array of objects
 *   initial state is []
 *   eg. [ { name: string, age: number, src: string, facts: ["string"...] }... ]
 *
 * App -> {BrowserRouter, Nav, Routes, Route, DogList, DogDetails}
*/
function App() {
  const [dogs, setDogs] = useState([]);

  function handleDogList(dogsFromApi) {
    setDogs(dogsFromApi);
  }

  // console.log({ dogs });

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogNames={dogs.map(dog => dog.name)} />
        <Routes>
          <Route path="/dogs" element={<DogList fetchDogs={handleDogList} dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
