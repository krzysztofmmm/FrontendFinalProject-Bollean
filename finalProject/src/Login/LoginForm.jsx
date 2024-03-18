import { useContext, useState } from "react"
import { userContext } from "../App"
import { LoginUser } from "../Services/ConnectToDB"
import { useNavigate } from "react-router-dom"

const INITIAL_FORM = {
    email: "",
    password: ""
}



function LoginForm() {
    const [login, setLogin] = useState({ ...INITIAL_FORM })
    const [error, setError] = useState(false)
    const { setUser } = useContext(userContext)
    const navigate = useNavigate()

    const handleChange = (event) => {
        login[event.target.name] = event.target.value;
        setLogin({ ...login })
        setError(false)
    }

    const handleSubmit = event => {
        event.preventDefault();
        LoginUser(login.email, login.password).then((response) => {
            if (response) {
                setUser({ ...response })
                navigate("/")
            }
            else {
                setError(true);
            }
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Login</p>
            {error && <p className="Error">Email or password is invalid</p>}
            <div>
                <label>
                    Email
                    <input
                        name="email"
                        type="email"
                        value={login.email}
                        required
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
                        required
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