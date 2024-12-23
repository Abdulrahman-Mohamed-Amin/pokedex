
let pokemonCont = document.querySelector(".pokemon .cont")

let mainColor = ['#fddfdf' , "#defde0" , "#f8d5a3" , "#98d7a5"]
let numberColor = ['#e3c8c8' , "#c7e3c9" , "#dfbf92" , "#89c194"] 
let imgContColor = ["#fef2f2" , "#f2fef3" , "#fceeda" , "#d6efdb"]
let pokeindex = 0 ;

function getPokeMoon () {
    pokeindex++
     
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeindex}`).then(res =>{
            return res.json()
        }).then(data =>{
            createPokemon(data)
        })

        
    }
    
    let pokeinterval =   setInterval(() => {
        getPokeMoon()

        if(pokeindex > 49){
            clearInterval(pokeinterval)
        }
    }, 100);

function createPokemon(data) {
    let radomNum =  Math.floor(Math.random() * mainColor.length)
    
    pokemonCont.innerHTML += `
          <div class="box" style="background:${getMainColor(radomNum)}">
        <div class="img_cont" style="background:${getImgcolor(radomNum)}">
          <img src="${data.sprites.front_default}" alt="">
        </div>
        <div class="poke_num" style="${getNumColor(radomNum)}">${getNumber()}</div>
        <h3>${data.name}</h3>
        <span class="type">Type : ${data.types[0].type.name} <span></span></span>
      </div>
    `
}


function getNumber(){
    if(pokeindex < 10){
        return `#00${pokeindex}`
    }else if(pokeindex >= 10 && pokeindex < 100){
        return `#0${pokeindex }`
    }else{
        return `#${pokeindex}`
    }
}

function getMainColor(rand){
    return mainColor[rand]
}
function getImgcolor(rand){
    return imgContColor[rand]
}
function getNumColor(rand){
    return numberColor[rand]
}

