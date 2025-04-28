function fetchFast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fast Done!')
        },2000)
    })
}

function fetchSlow() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Slow Done')

        }, 6000)
    })
}

console.log('program Starting...')

async function fetchData() {
    const fast = await fetchFast();
    console.log(fast)
    const slow = await fetchSlow();
    console.log(slow)


}
fetchData();
console.log('Program complete')