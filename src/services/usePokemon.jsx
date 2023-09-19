import { useEffect, useState } from "react";

function usePokemon() {
  const [pokemon, setPokemon] = useState("pikachu");
  const [data, setData] = useState(null);
  const [all, setAll] = useState(null);
  const [filtered, setFiltered] = useState([]);

  //fetch a diferentes APIs
  const getData = async (url, setDatos) => {
    const res = await fetch(url);
    const datos = await res.json();

    setDatos(datos);
  };
  
  useEffect(() => {
    getData("https://pokeapi.co/api/v2/pokemon?limit=100000", setAll); //primera APi
  }, []);

  useEffect(() => {
    getData(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, setData); //segunda API que cambia cada vez que cambia "pokemon" en la dependencia
  }, [pokemon]);

  //funcion que captura los valores cuando se hace submit en el form
  const handleSubmit = (e) => {
    e.preventDefault();
    const pokName = e.target[0].value;
    setPokemon(pokName);
  };

  // funcion que toma el valor de las opciones que salen en la lista
  const handleClick = (e) => {
    const pokeName = e.target.value;
    setPokemon(pokeName);
    setFiltered([])
  };

  //funcion que captura cada cambio
  const handleOnChange = (e) => {
    const value = e.target.value.toLowerCase();
    const dataFiltered =
      value === ""
        ? []
        : all.results.filter((pokemon) => pokemon.name.includes(value));
    setFiltered(dataFiltered);
  };
  //retorna todas las funciones
  return { data, filtered, handleSubmit, handleClick, handleOnChange };
}

export default usePokemon;
