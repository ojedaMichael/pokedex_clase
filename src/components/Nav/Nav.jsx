import "./Nav.css";

function Nav({ fnSubmit, fnClick, fnOnChange, dataOptions }) {
  return (
    <nav>
      <form onSubmit={fnSubmit}>
        <input className="inputEspecific" placeholder="Escribe el nombre específico de un pokemon" type="text" />
        <button className="botonEspecific" type="submit">Buscar</button>
      </form>
      <div>
        <div id="options">
          <input type="text" placeholder="Filtra según escribes" onChange={fnOnChange} />
          <ul>
            {dataOptions?.map((pokemon, i) => (
              <li key={i}>
                <button value={pokemon.name} onClick={fnClick}>{pokemon.name}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div>
          <button className="botonPika" onClick={fnClick} value="pikachu">
            Pikachu
          </button>
        </div>
        <div>
          <button className="botonChari" onClick={fnClick} value="charizard">
            Charizard
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
