import styled from "styled-components"
import UserContext from "../context/UserConstext"
import { useContext } from "react"
import SetUser from "./SetUser"

export default function NavBar(){
    SetUser()
    const {photo} = useContext(UserContext)
    console.log(photo)
    
    return(
        <Bar>
            <h1>TrackIt</h1>
            <img src={`${photo}`} alt="user image"  />
        </Bar>
    )
}

const Bar = styled.div`
box-sizing: border-box;
box-shadow: 0px 4px 4px 0px #00000026;

    height: 10vh;
    width: 100vw;
    display: flex;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: #126BA5;
    padding-left: 2vw;
    padding-right: 2vw;
    align-items: center;
    justify-content: space-between;
    img{
        height: 8vh;
        width: 8vh;
        border-radius: 100%;
    }
    h1{
        font-family: "Playball", serif;
        font-size:50px ;
        color: #f2f2f2;
    }
`

