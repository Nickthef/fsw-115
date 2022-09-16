const getData = async () => {

  try {
      let apiResponse = await axios.get("https://swapi.dev/api/people");

      for (let i = 0; i < apiResponse.data.results.length; i++) {
          let myP = document.createElement('p');
          myP.textContent = apiResponse.data.results[i].name;
          document.querySelector('#people').appendChild(myP);
      }
  } catch (error) {
      console.log(error);
  }

  try {
      let apiResponse = await axios.get("https://swapi.dev/api/starships");

      for (let i = 0; i < apiResponse.data.results.length; i++) {
          let myP = document.createElement('p');
          myP.textContent = apiResponse.data.results[i].name;
          document.querySelector('#ships').appendChild(myP);
      }
  } catch (error) {
      console.log(error);
  }

  try {
      let apiResponse = await axios.get("https://swapi.dev/api/planets");

      for (let i = 0; i < apiResponse.data.results.length; i++) {
          let myP = document.createElement('p');
          myP.textContent = apiResponse.data.results[i].name;
          document.querySelector('#planets').appendChild(myP);
      }
  } catch (error) {
      console.log(error);
  }
};

getData();