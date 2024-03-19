import { useState } from "react";
import { RegisterUser } from "../Services/ConnectToDB"
import { useNavigate } from "react-router-dom";

const INITIALFORM = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
}

function RegisterForm() {
    const [register, setRegister] = useState({ ...INITIALFORM })
    const navigate = useNavigate()

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('Register User')
        RegisterUser(register.firstName, register.lastName, register.email, register.password)
        setRegister({ ...INITIALFORM })
        navigate("/login")
    }

    const handleChange = (event) => {
        register[event.target.name] = event.target.value
        setRegister({ ...register })
    }

    return (
        <form onSubmit={onSubmit} className="registerForm">
            <p>Register</p>
            <div>
                <label> First name:
                    <input
                        name="firstName"
                        value={register.firstName}
                        onChange={handleChange}
                        required />
                </label>
            </div>
            <div>
                <label> Last name:
                    <input
                        name="lastName"
                        value={register.lastName}
                        onChange={handleChange} />
                </label>
            </div>
            <div>
                <label> Email:
                    <input
                        name="email"
                        value={register.email}
                        onChange={handleChange}
                        type="email" />
                </label>
            </div>
            <div>
                <label> Password:
                    <input
                        name="password"
                        value={register.password}
                        type="password"
                        onChange={handleChange} />
                </label>
            </div>
            <div>
                <input type="Submit" />
            </div>
            <a href="/login">Already have an account? Log in!</a>
        </form>
    )
}

export default RegisterForm