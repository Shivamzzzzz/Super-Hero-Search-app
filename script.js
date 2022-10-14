const baseurl = 'https://www.superheroapi.com/api.php/1733385043696710'
const button = document.getElementById('btn')
const nw = document.getElementById('new')
const search = document.getElementById('search')
const text = document.getElementById('txt')
const heading = document.getElementById('heading')

//``````````````````````````````````````````````````````````````````````

const GetSearchSuperHero = (name) => {
  fetch(`${baseurl}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const hero = json.results[0]
      console.log(hero)
      GetStatsHTML(hero)
    })
}


//``````````````````````````````````````````````````````````````````````

const superhero = (id) => {
  fetch(`${baseurl}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      GetStatsHTML(json)

    })
}

const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}


const GetStatsHTML = (character) => {
  const name = `<h2>${character.name}</h2>`
  const img = `<img src="${character.image.url}" height=200 width=200/>`

  let STATS = Object.keys(character.powerstats).map(stat => {
    return `<p>${statToEmoji[stat]} ${stat.toUpperCase()} :    ${character.powerstats[stat]}</p>`
  }).join('')

  nw.innerHTML = `${name}${img}${STATS}`

}


//``````````````````````````````````````````````````````````````````````


function rndnm() {
  let a = Math.floor(Math.random() * 731)
  return a
}




//``````````````````````````````````````````````````````````````````````



button.onclick = () => superhero(rndnm())
search.onclick = () => GetSearchSuperHero(txt.value)



//``````````````````````````````````````````````````````````````````````




