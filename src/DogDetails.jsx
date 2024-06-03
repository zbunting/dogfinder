import { useParams } from "react-router-dom";

/** DogDetails Component
 *
 * Props: dogs
 * State: None
 *
 */

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(dog => dog.name === name);

  if (!dog) return <p>No dog found: {name}</p>

  console.log({ dogs });
  console.log({ dog });
  console.log(dog.name);
  console.log(dog.facts);

  return (
    <div>
      <h1>Name: {dog.name}</h1>
      <img src={`./public/${dog.src}.jpg`} alt={`Picture of ${dog.name}`} />
      <h3>Age: {dog.age}</h3>
      <p>Facts: {dog.facts.join(" ")}</p>
    </div>
  );
}

export default DogDetails;