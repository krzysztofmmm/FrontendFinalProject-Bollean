//CURRENTLY CONNECTS TO JSON DATABASE. SHOULD BE REPLACED WITH BACKEND CONNECTION!!!

const URL = 'http://localhost:59151'


function RegisterUser(firstName, lastName, email, password) {
    const bodyPayload = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
    }
    const PostOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS',
            "mode": "no-cors"
        },
        body: JSON.stringify(bodyPayload)
    }
    console.log("Registering user...")
    fetch(`${URL}/users/register`, PostOptions).then((response) => { return response.json(); }).then((jsonData) => console.log(jsonData))
}

function LoginUser(firstName, password) {
    const bodyPayload = {
        firstName: firstName,
        password: password,
    }
    const PostOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyPayload)
    }
    return fetch(`${URL}/login`, PostOptions)

}


export { RegisterUser, LoginUser }