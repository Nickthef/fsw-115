// const { default: axios } = require("axios");

function createTodo() {
  axios
    .get("http://api.bryanuniversity.edu/nicolasfranks/list")
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        const para = document.createElement("p");
        para.textContent = response.data[i].name;
        document.body.appendChild(para);

        para.addEventListener("click", function() {
          para.style.setProperty("text-decoration", "line-through");
        })
      }
    })
    .catch((error) => console.log(error));
}
createTodo();
