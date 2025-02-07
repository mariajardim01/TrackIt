import styled from "styled-components"
import ReactLoading from 'react-loading';

export default function Button({text,onClick, isLoading, heigh, error,width}){
    if(!heigh){
        heigh = "6vh"
    }
    if(!width){
        width = "100%"
    }
    
    return(
    <>
    <Button1 onClick={onClick} height={heigh} disabled={ error == true} width={width}>
    
    {isLoading == true? <ReactLoading type="bubbles" color="#fff" /> : text}
    
    </Button1>
    </>
    )
}

const Button1 = styled.button`
    display: flex;
    box-sizing: border-box;
    font-family: "Lexend Deca", serif;
    border: none;
    font-size: large;
    color: white;
    text-align: center;
    
    align-items: center;
    justify-content: center;
    &:disabled{
        background-color:#d4d4d4;
    }
    
    
    background-color: #52B6FF;
    margin-bottom: 2vh;
    height: ${({height})=> height};
    border-radius: 5px;
    width:  ${({width})=> width};
`