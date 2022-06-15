let residentButton = document.getElementById('resButton')
let mydiv = document.getElementById('myDiv')


// const clickHandler = () => {
//     console.log('button clikced')
//     axios.get("https://swapi.dev/api/planets/?search=alderaan")
//         .then(res => console.log(res.data.result[0].resident))
// }

let myURL = "https://swapi.dev/api/planets/?search=alderaan"

const clickHandler = () => {
    console.log('button clikced')
    axios.get(`${myURL}`)
        .then(res => {
            for (let i = 0; i < res.data.results[0].residents.length; i++){
                // console.log(res.data.results[0].residents[i])
                axios.get(res.data.results[0].residents[i])
                    // .then((res => console.log(res.data.name)))
                    .then(res => {
                        let newH2 = document.createElement("h2")
                        newH2.textContent = res.data.name
                        mydiv.appendChild(newH2)
                    })
            }
        })
        
}

residentButton.addEventListener('click', clickHandler)

