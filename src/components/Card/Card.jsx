import "./Card.css";

function Card({ data }) {
  return (
    <section>
      <div>
        <img src={data.sprites?.other.home.front_default} alt={data.name} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{data.id}</td>
          </tr>
          <tr>
            <td>Nombre</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Altura</td>
            <td>{data.height}</td>
          </tr>
          <tr>
            <td>Peso</td>
            <td>{data.weight}</td>
          </tr>
          <tr>
            <td>Experiencia base</td>
            <td>{data.base_experience}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
export default Card;
