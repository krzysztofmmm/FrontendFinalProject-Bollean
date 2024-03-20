import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetUserById } from "../Services/ConnectToDB"
import Header from "../Layout/Header"
import UserInfo from "./UserInfo"
import UserPosts from "./UserPosts"
import '../Stylesheets/ProfilePage.css'

function ProfilePage() {
    const { userId } = useParams()
    const [shownUser, setShownUser] = useState(null)
    const navigate = useNavigate()

    //Get the right user from the database
    //TODO: Check if user exists
    useEffect(() => {
        if (!localStorage.getItem("user")) { navigate("/login") }

        GetUserById(userId).then((response) => {
            setShownUser(response)
        })
    }, [shownUser])

    //If user doesn't exist (yet), return loading screen 
    if (!shownUser) return (
        <h1>Loading...</h1>
    )

    return (
        <>
            <Header />
            <div className='profilePage'>
                <UserInfo user={shownUser} />
                <UserPosts userId={shownUser.id} />
            </div>
        </>

    )
}

export default ProfilePage