import Person from "./components/Person";
import cat1 from "./assets/cat1.jpg";
import cat2 from "./assets/cat2.jpg";
import cat3 from "./assets/cat3.jpg";

function App() {
  return (
    <div>
      <Person name="Lina" img={cat1} color="white" />

      <Person name="Lida" img={cat2} color="white and gray" />

      <Person name="Luna" img={cat3} color="black" />
    </div>
  );
}

export default App;
