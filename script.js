const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonSpriteContainer = document.getElementById("sprite-container");
const pokemonTypes = document.getElementById("types");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpecialAttack = document.getElementById("special-attack");
const pokemonSpecialDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");
const resultContainer = document.getElementById("result-container");

const apiUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

async function getData() {
	try {
		const response = await fetch(`${apiUrl}${searchInput.value.toLowerCase()}`);
		const data = await response.json();
		console.log(data);

		pokemonName.innerText = `${data["name"].toUpperCase()}`;
		pokemonId.innerText = `${data["id"]}`;
		pokemonWeight.innerText = `Weight: ${data["weight"]}`;
		pokemonHeight.innerText = `Height: ${data["height"]}`;
		pokemonSpriteContainer.innerHTML = `<img id="sprite" src="${data["sprites"]["front_default"]}" alt="${data["name"]} image"/>`;

		pokemonTypes.innerHTML = `${data["types"]
			.map(
				(e) =>
					`<span>${e["type"]["name"].charAt(0).toUpperCase()}${e["type"][
						"name"
					].slice(1)}</span>`
			)
			.join("")}`;

		pokemonHp.innerText = `${data["stats"][0]["base_stat"]}`;
		pokemonAttack.innerText = `${data["stats"][1]["base_stat"]}`;
		pokemonDefense.innerText = `${data["stats"][2]["base_stat"]}`;
		pokemonSpecialAttack.innerText = `${data["stats"][3]["base_stat"]}`;
		pokemonSpecialDefense.innerText = `${data["stats"][4]["base_stat"]}`;
		pokemonSpeed.innerText = `${data["stats"][5]["base_stat"]}`;

		resultContainer.style.display = "flex";
	} catch (err) {
		alert("Pokemon not found!");
	}
}

function resetDisplay() {
	pokemonName.innerText = ``;
	pokemonId.innerText = ``;
	pokemonWeight.innerText = ``;
	pokemonHeight.innerText = ``;
	pokemonSpriteContainer.innerHTML = ``;
	pokemonTypes.innerHTML = ``;
	pokemonHp.innerText = ``;
	pokemonAttack.innerText = ``;
	pokemonDefense.innerText = ``;
	pokemonSpecialAttack.innerText = ``;
	pokemonSpecialDefense.innerText = ``;
	pokemonSpeed.innerText = ``;
	resultContainer.style.display = "none";
}

searchButton.addEventListener("click", (e) => {
	resetDisplay();
	getData();
});

searchInput.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		resetDisplay();
		getData();
	}
});
