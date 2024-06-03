import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

/** Find a dog with params
 *
 * Props:
 * dogs: array of objects
 * eg. [ { name: string, age: number, src: string, facts: ["string"...] } ...]
 *
 * State:
 * None
 *
 * App -> DogFinder -> DogDetails
 *
*/

function DogFinder({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(dog => dog.name === name);
  return <DogDetails dog={dog}/>
}

export default DogFinder;