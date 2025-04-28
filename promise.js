function fetchPokemon() {
    const pokemon = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Danger'))
            

        }, 2000)

    })
    return pokemon;
}
console.log('Program starting....')

async function fetchData() {
    try {
        const response = await fetchPokemon()
        console.log(response)

    } catch (error) {
        console.log(error)

    }
    
}
fetchData()
console.log('program complete')