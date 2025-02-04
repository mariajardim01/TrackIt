import styled from "styled-components"
import NavBar from "../components/NavBar"
import Bottom from "../components/Bottom"
import AddHabit from "../components/AddHabit"
import UserContext from "../context/UserConstext"
import AllHabits from "../components/AllHabits"

export default function HabitsPage (){

    return(
        <Page>
         <NavBar></NavBar>
         <AddHabit></AddHabit>
         <AllHabits></AllHabits>
        <Bottom></Bottom>
        </Page>
    )

}

const Page = styled.div`
height: 100%;
min-height: 100vh;
box-sizing: border-box;
width: 100vw;
background-color: #f2f2f2;
padding-left: 6vw;
padding-right: 6vw;
padding-top: 10vh;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 8vh;


`