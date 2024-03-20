import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetUserById } from "../Services/ConnectToDB"
import Header from "../Layout/Header"
import UserInfo from "./UserInfo"
import UserPosts from "./UserPosts"
import '../Stylesheets/ProfilePage.css'

function ProfilePage() {
    const { userId } = useParams()
    const [shownUser, setShownUser] = useState(null)

    //Get the right user from the database
    //TODO: Check if user exists
    useEffect(() => {
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