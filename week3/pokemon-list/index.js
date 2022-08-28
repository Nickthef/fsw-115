const xhr = new XMLHttpRequest();

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        // console.log(data.results)
        showNames(data.results);   
    }
}

function showNames(data) {
    for (let i = 0; i < data.length; i++) {
        const character = document.createElement("h1");
        character.textContent = data[i].name;
        document.body.appendChild(character);
        character.style = "color: red";
        character.style.backgroundColor = "lightblue";
        character.style.textAlign = "center";
    }
}







