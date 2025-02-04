import styled from "styled-components"
import { Link } from "react-router-dom"

export default function LinkText({text, path} ){
      return(
        <>
    <Linker to={path}>{text}</Linker>
        </>
      )
}

const Linker = styled(Link)`
margin-top: 2vh;
    font-family: "Lexend Deca", serif;
    color: #52B6FF;
    text-decoration: underline;
    font-size: small;
`