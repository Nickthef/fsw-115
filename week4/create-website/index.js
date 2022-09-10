const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    axios.get("https://swapi.dev/api/people")
    .then(function (res) {
        let results = res.data.results;
        for (var i = 0; i < results.length; i++) {
            let obj = results[i];
            let p = document.createElement("p");
            p.append(obj.name);
            document.body.append(p);
        }

    });
});


