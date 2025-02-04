import styled from "styled-components"
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

let todayDay = dayjs().format("dddd");
const today = todayDay.charAt(0).toUpperCase() + todayDay.substring(1);
const todayDate = dayjs().format("DD/MM");




export default function TodayDate(){
    return(<Title>
    <h1>{`${today}, ${todayDate}`}</h1>
    </Title>)
}

const Title = styled.div `
margin-top: 2vh;
align-self: flex-start;

h1{
    font-family: "Lexend Deca", serif;
    font-size: x-large;
    color: #126BA5;
    display: flex;
    
}`