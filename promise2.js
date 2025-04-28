function fetchUser() {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve({data: {user: 'Monkey', admin: true}})
        },3000)
    })
}

function login(obj) {
    
    if (obj.admin === true) {
        console.log('Successfully logged in')
    } else {
        console.log('Failed to log in. Please try again later')
    }
}
console.log('Program starting...')
async function fetchData() {
    const response =  await fetchUser()
    login(response.data)
}

fetchData();
console.log('Program complete')

