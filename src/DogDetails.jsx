import { useParams } from "react-router-dom";

/** DogDetails Component
 *
 * Props: dogs
 * State: None
 *
 */

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.filter(dog => dog.name === name);

  if (!dog) return <p>No dog found: {name}</p>

  return (
    <div>
      <h1>Name: { dog.name }</h1>
      <img src={dog.src}></img>
      <h3>Age: { dog.age }</h3>
      <p>Facts: { dog.facts.join(" ") }</p>
    </div>
  );
}

export default DogDetails;