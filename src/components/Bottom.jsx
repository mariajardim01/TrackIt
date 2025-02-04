import styled from "styled-components"
import { useContext } from "react"
import PageContext from "../context/PageContext"
import {useNavigate } from "react-router-dom"
import SetUser from "./SetUser"
export default function Bottom(){
    SetUser()
    const navigate = useNavigate()
    const {page, setPage} =  useContext(PageContext)
    console.log(page)
    
    function changePage(newPage){
        
        if (newPage != page){
            setPage(newPage)
            navigate(`/${newPage}`)
        }
    }
    
    return(
        <BottomPages>
            <PageElement page={page} name="habitos" onClick={()=>{changePage("habitos")
                localStorage.setItem("page","habitos")
            }} >Hábitos</PageElement>
            <PageElement page={page} name="hoje" onClick={()=>{changePage("hoje")
                localStorage.setItem("page","hoje")
            }
        }>Hoje</PageElement>
        </BottomPages>
    )
}

const BottomPages = styled.div`
height: 8vh;
width: 100vw;
box-sizing: border-box;
background-color: #ffff;
display: flex;
position: fixed;
bottom: 0px;
left: 0px;
`

const PageElement = styled.div`
height: 100%;
width: 50%;
display: flex;
font-family: "Lexend Deca", serif;
align-items: center;
justify-content: center;
background-color: ${({page,name})=> page == name ? "#52B6FF" : "transparent" };
color: ${({page,name})=> page == name ? "white" : "#D4D4D4" };
`