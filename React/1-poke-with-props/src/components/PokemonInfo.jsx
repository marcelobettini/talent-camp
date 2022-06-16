//recibe el nombre (versión english) y el objeto base, que tiene los atributos de pelea
//si pasamos name, luego el <h2> es name.english


const PokemonInfo = ({ name: { english }, base }) => (
    <div>
        <h2>{english}</h2>
        <table>
            <tbody>
                {/* Object.keys toma un objeto y retorna un arreglo con todas las keys (hp, attack, defense...). Vamos luego a apilar un map, que por cada elemento del arreglo, o sea, cada key, genere una table row con dos table data (key y valor) por ej: HP:75... etc  */}
                {Object.keys(base).map((key) => (
                    <tr key={key}>
                        <td>{key}:</td>
                        <td>{base.key}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default PokemonInfo