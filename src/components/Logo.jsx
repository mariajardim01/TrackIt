import logo from "../assets/logo.svg"
import styled from "styled-components"

export default function Logo(){
    return(
        <>
        <Img src={logo}></Img>
        </>
    )
}

const Img = styled.img`
    height: 30vh;
    width: 50vw;
`