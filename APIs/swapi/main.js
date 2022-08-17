

async function handleClickResidents() {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan').then(res => {
 //console.log(res.data.results[0].residents)

    //       for (let i = 0; i < res.data.results.length; i++) {
        res.data.results[0].residents.forEach(url => {
          axios.get(url).then(response => {
            //console.log(response.data.name)
            let residentName = response.data.name
            let residentNameContainer = document.getElementById("h2residents")
            let residentNameElement = document.createElement(`h2`)
            residentNameElement.textContent = residentName
            residentNameContainer.appendChild(residentNameElement)
          }
        )
          })
        })
      }

let getResidentsButton = document.querySelector("#residents");
getResidentsButton.addEventListener("click", handleClickResidents);
