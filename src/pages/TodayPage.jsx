import NavBar from "../components/NavBar"
import Bottom from "../components/Bottom"
import styled from "styled-components"
import TodayDate from "../components/TodayDate"
import TodayHabits from "../components/TodayHabits"

export default function HabitsPage (){
    

    
    return(
        <Page>
         <NavBar></NavBar>
         <TodayDate></TodayDate>
         <TodayHabits></TodayHabits>
        <Bottom></Bottom>
        </Page>
    )

}

const Page = styled.div`
height: 100%;
box-sizing: border-box;
width: 100vw;
min-height: calc(100vh - 8vh);
background-color: #f2f2f2;
padding-left: 6vw;
padding-right: 6vw;
padding-top: 10vh;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 8vh;


`