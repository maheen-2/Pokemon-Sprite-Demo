
const container = document.querySelector("#container");
const baseUrl = "https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/";


for (let i = 0; i < 150; i++) {
    const pokemon = document.createElement("div");
    pokemon.classList.add("pokemon");
    const label = document.createElement("span");
    label.innerText = `${i}`;
    const newImg = document.createElement("img");
    newImg.src = `${baseUrl}${i}.png`
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);

}