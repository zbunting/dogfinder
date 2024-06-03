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
 *   initial state is []
 *   eg. [ { name: string, age: number, src: string, facts: ["string"...] }... ]
 *
 * App -> {BrowserRouter, Nav, Routes, Route, DogList, DogFinder}
*/

function App() {
  const [dogs, setDogs] = useState([]);

  async function fetchDogs() {
    const response = await fetch("http://localhost:5001/dogs");
    const result = await response.json();
    setDogs(result);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogNames={dogs.map(dog => dog.name)} />
        <Routes>
          <Route path="/dogs" element={<DogList fetchDogs={fetchDogs} dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogFinder dogs={dogs}/>} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
