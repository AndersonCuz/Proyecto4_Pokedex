const listaPokemon = document.querySelector("#lista_pokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 6; i++) {
const a = Math.floor(Math.random() * 151);
   fetch(URL + a)
    .then((response) => response.json())
    .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke) {

    let tipos = poke.types.map((type) => `<p class = "${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }

    const div = document.createElement("div");
    div.classList.add("Pokemon");
    div.innerHTML = `
        <p class="Pokemon_id_back">#${pokeId}</p>
        <div class="Pokemon_imagen">
            <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
        </div>
        <div class="Pokemon_info">
            <div class="nombre_contenedor">
                <p class="Pokemon_id">#${pokeId}</p>
                <h2 class="Pokemon_nombre">${poke.name}</h2>
            </div>
            <div class="Pokemon_Tipo">
                ${tipos}
            </div>
        </div>
    `;
    listaPokemon.append(div);
}