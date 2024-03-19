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

function GetAllPosts() {
    //TODO: Fetch all posts from the backend
    return fetch(`${URL}/posts`, {}).then((response) => { return response.json(); })
}

function CreatePost(userId, title, content) {
    const bodyPayload = {
        userId: userId,
        title: title,
        content: content
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
    fetch(`${URL}/posts`, PostOptions);
}

function GetUserById(userId) {
    return fetch(`${URL}/users/${userId}`).then((response) => { return response.json() })
}

export { RegisterUser, LoginUser, GetAllPosts, CreatePost, GetUserById }