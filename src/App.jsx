import './App.css';
import Nav from './Nav.jsx';
import DogList from './DogList.jsx';
import DogFinder from './DogFinder.jsx';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';

/** Component for dog viewing app
 *
 * Props: none
 *
 * State:
 * - dogs: array of objects
 *   initial state is null
 *   eg. [ { name: string, age: number, src: string, facts: ["string"...] }... ]
 *
 * App -> {BrowserRouter, Nav, Routes, Route, DogList, DogFinder}
*/

function App() {
  const [dogs, setDogs] = useState(null);

  async function fetchDogs() {
    const response = await fetch("http://localhost:5001/dogs");
    const result = await response.json();
    setDogs(result);
  }

  if(dogs === null) {
    fetchDogs();
    return <p>Loading...</p>
  }
  else if(dogs.length === 0) {
    return <p>No dogs found</p>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogNames={dogs.map(dog => dog.name)} />
        <Routes>
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogFinder dogs={dogs}/>} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
