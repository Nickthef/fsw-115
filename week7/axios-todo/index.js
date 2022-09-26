function getTodos() {
  axios
    .get("http://api.bryanuniversity.edu/nicolasfranks/list")
    .then((response) => {
      console.log(response)
      clear();
      function clear() {
        const element = document.getElementById("wrapper");

        while (element.firstChild) {
          element.removeChild(element.firstChild)
        }
      }

      for (let i = 0; i < response.data.length; i++) {
        const p = document.createElement("p");
        p.textContent = response.data[i].name;

        let id = response.data[i]._id;

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "isCompleteBox";
        checkbox.value = "isCompleteBox";
        checkbox.id = "isComplete";
        checkbox.checked = response.data[i].isComplete;

        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";

        checkbox.onclick = function () {
          axios
            .put("http://api.bryanuniversity.edu/nicolasfranks/list/" + id, {
              isComplete: !response.data[i].isComplete,
            })
            .then((response) => {
              getTodos();
            })
            .catch((error) => console.log(error));
        };

        deleteButton.onclick = function () {
          axios
            .delete("http://api.bryanuniversity.edu/nicolasfranks/list/" + id)
            .then((response) => {
              getTodos();
            })
            .catch((error) => console.log(error));
        };

        p.appendChild(checkbox);
        p.appendChild(deleteButton);

        if (response.data[i].isComplete) {
          checkbox.checked = true;
          p.style.setProperty("text-decoration", "line-through");
        }
        const div = document.getElementById("wrapper");
        div.appendChild(p);
      }

    })
    .catch((error) => console.log(error));
}

const add = document.getElementById("button");

add.addEventListener("click", createTodo);

function createTodo(e) {
  
  e.preventDefault();

  let name = todoForm.name.value;
  let price = todoForm.price.value;
  let description = todoForm.description.value;
  let obj = {
    name, price, description
  }

  axios.post("http://api.bryanuniversity.edu/nicolasfranks/list", obj)
  .then(response =>{
    console.log(response)
    todoForm.name.value = "";
    todoForm.price.value = "";
    todoForm.description.value = "";
    getStarWarsInfo();
    getTodos();
  })
}

function getStarWarsInfo() {
  axios.get("https://swapi.dev/api/people/1")
  .then(response => {
    let name = document.getElementById("name");
    let price = document.getElementById("price");
    let description = document.getElementById("description");

    console.log(response)
    name.value = response.data.name;
    price.value = response.data.height;
    description.value = `eye color: ${response.data.eye_color} hair color: ${response.data.hair_color}` 
  })
}
getTodos();
getStarWarsInfo();
