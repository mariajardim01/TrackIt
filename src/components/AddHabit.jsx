import styled from "styled-components"
import { useState } from "react"
import Input from "./Input"
import Button from "./Button"
import axios from "axios"
import { useContext } from "react"
import UserContext from "../context/UserConstext"

export default function AddHabit(){
    const[isLoading,setIsLoading] = useState(false)
    const [valueName, setValueName] = useState("")
    const [nameError, setNameError] = useState (false)
    const [nameErrorText, setNameErrorText] = useState("")
    const [isShown, setIsShown] = useState(false)
    const [days, setDays] = useState([]);
    const token = localStorage.getItem("token")
    
    function addDay(day){
        if (days.includes(day)){
            const removedDay = days.filter(d => d !== day);

            setDays([...removedDay])
           
        }
        else {
            setDays([...days, day])
            
        }

    }

    function showAddHabit(){
        setIsShown(true)
    }
    
    function validName(value){
            
            if (!value.trim()) { 
                 
                 setNameError(true)
                 setNameErrorText("O nome não pode ser vazio")
                 setIsLoading(false)
                 
            } else {

                setIsLoading(false)
                 setNameError(false) 
                 setNameErrorText("")
            }
        

    }

    function notShown(){
        setIsShown(false)
    }

    function clearNewHabit(){
        setIsLoading(false)
        setIsShown(false)
        setValueName("")
        setNameError(false)
        setDays([])
        
    }

    function sendNewHabit(){
        

        if (valueName.trim() != ""){
            setIsLoading(true)
           
            const body = {
            name: `${valueName}`,
            days: days
           }

           const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        
         const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",body,config)
         promise.then((res)=> clearNewHabit())
         promise.catch((error)=>console.log(error))
        } 
    }


    return(<>
        <Top>
        <h1>Meus hábitos</h1>
        <button onClick={showAddHabit}>+</button>
        </Top>
        <NewHabit isShown={isShown}>
         <Input 
         value={valueName}
         type="text"
         setValue={setValueName}
         placeholder="Nome do hábito"
         onBlur={()=>validName(valueName)}
         errorText={nameErrorText}
         error={nameError}
         isLoading={isLoading}
        ></Input>
        
        <WeekDays>
                    {[ "S", "T", "Q", "Q", "S", "S","D"].map((letter, index) => (
                        <Day 
                            key={index} 
                            isSelected={days.includes(index + 1)} 
                            onClick={() => addDay(index + 1 )}
                        >
                            {letter}
                        </Day>
                    ))}
                </WeekDays>

         <Buttons>
            <CancelButton onClick={notShown}>Cancelar</CancelButton>
            <Button text="Salvar" 
            isLoading={isLoading}
            heigh="100%"
            width="40%"
            onClick={sendNewHabit}
            error={nameError}
            
            ></Button>
         </Buttons>
        </NewHabit>
        </>
    )
}



const Top = styled.div`
    margin-top: 2vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-family: "Lexend Deca", serif;
        font-size: x-large;
        color: #126BA5;
    }

    button{
        height: 4vh;
        width: 4vh;
        background-color:#52B6FF;
        font-family: "Lexend Deca", serif;
        border: none;
        color: #f2f2f2;
        border-radius: 5px;
        font-size: x-large;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    button:active{
        transform: translateY(2px);
    }


`

const NewHabit =  styled.div`
margin-top: 2vh;
box-sizing: border-box;
padding-left: 4vw;
padding-right: 4vw;
padding-top: 2vh;
padding-bottom: 2vh;
    background-color: white;
    display: ${({isShown})=> isShown ? "flex" : "none"};
    flex-direction: column;
    border-radius: 5px;
    width: 100%;
`

const WeekDays = styled.div`
    display: flex;
   
    gap:2vw;
    margin-bottom: 2vh;
`
const Day = styled.div`
  border: 2px solid #D4D4D4;
  color: ${({ isSelected }) => (isSelected ? "#f2f2f2" : "#d4d4d4")};
  background-color: ${({ isSelected }) => (isSelected ? "#D4D4D4" : "transparent")};
  height: 3vh;
  width: 3vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Lexend Deca", serif;
  border-radius: 5px;
`
const CancelButton = styled.button`
    background-color: transparent;
    border: none;
    color: #52B6FF;
    font-family: "Lexend Deca", serif;
    font-size: large;
    display: flex;
    align-items: center;
    width: 68%;

`
const Buttons = styled.div`
    width: fit-content;
    display: flex;
    right: 0px;
    box-sizing: border-box;
    justify-content: right;
    align-self: flex-end;
    
    
    
    
    height: 3vh;
    
`