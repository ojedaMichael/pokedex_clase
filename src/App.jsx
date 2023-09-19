import "./App.css";
import Card from "./components/Card/Card";
import Nav from "./components/Nav/Nav";
import usePokemon from "./services/usePokemon";

function App() {
  const { data, filtered, handleClick, handleSubmit, handleOnChange } = usePokemon(); //traer el custontomEffect y usar las funciones que importamos

  return (
    <main>
      <Nav
        fnSubmit={handleSubmit}
        fnClick={handleClick}
        fnOnChange={handleOnChange}
        dataOptions={filtered}
      />
      {data && <Card data={data} />}
    </main>
  );
}

export default App;
