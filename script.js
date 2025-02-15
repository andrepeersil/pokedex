async function buscarPokemon() {
    const nomeOuId = document.getElementById("search").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Pokémon não encontrado");
        
        const data = await response.json();

        document.getElementById("pokemon-name").textContent = data.name.toUpperCase();
        document.getElementById("pokemon-img").src = data.sprites.front_default;
        document.getElementById("pokemon-type").textContent = data.types.map(t => t.type.name).join(", ");
        document.getElementById("pokemon-height").textContent = data.height / 10 + " m";
        document.getElementById("pokemon-weight").textContent = data.weight / 10 + " kg";
    } catch (error) {
        alert("Pokémon não encontrado!");
    }
}
