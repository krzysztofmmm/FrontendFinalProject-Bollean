import { useContext, useState } from "react"
import { userContext } from "../App"
import { LoginUser } from "../Services/ConnectToDB"
import { useNavigate } from "react-router-dom"

const INITIAL_FORM = {
    firstName: "",
    password: ""
}



function LoginForm() {
    const [login, setLogin] = useState({ ...INITIAL_FORM })
    const { setUser } = useContext(userContext)
    const navigate = useNavigate()

    const handleChange = (event) => {
        login[event.target.name] = event.target.value;
        setLogin({ ...login })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const output = LoginUser()
        //Check whether user exists in database
        setUser({ ...output })
        //setUser to user from the database
        //Navigate to posts 
        navigate("/")
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Login</p>
            <div>
                <label>
                    Firstname
                    <input
                        name="firstName"
                        value={login.firstName}
                        onChange={handleChange}>
                    </input>
                </label>
            </div>
            <div>
                <label>
                    Password
                    <input
                        name="password"
                        type="password"
                        value={login.password}
                        onChange={handleChange}>
                    </input>
                </label>
            </div>
            <div>
                <input type="Submit" value="Log in" readOnly />
            </div>
            <a href="/register">Don't have an account? Register!</a>
        </form >
    )
}

export default LoginForm