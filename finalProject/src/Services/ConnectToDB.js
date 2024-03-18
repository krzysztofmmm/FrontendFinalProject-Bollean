//CURRENTLY CONNECTS TO JSON DATABASE. SHOULD BE REPLACED WITH BACKEND CONNECTION!!!

import { resolvePath } from "react-router-dom"

const URL = 'https://localhost:59151'


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

function LoginUser(email, password) {
    const bodyPayload = {
        email: email,
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
    return fetch(`${URL}/users/login`, PostOptions).then((response) => { if (response.ok) return response.json(); else return null })

}


export { RegisterUser, LoginUser }