import { useContext } from "react"
import PageContext from "../context/PageContext"
import UserContext from "../context/UserConstext"
export default function SetUser(){
    const {page, setPage} = useContext(PageContext)
    const { photo, setPhoto, token, setToken} =useContext(UserContext)

    setPhoto(localStorage.getItem("photo"))
    setToken(localStorage.getItem("token"))
    setPage(localStorage.getItem("page"))
}