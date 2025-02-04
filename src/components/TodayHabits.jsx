import styled from "styled-components"
import check from "../assets/check.svg"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"



export default function TodayHabits() {
    const [todayHabits, setTodayHabits] = useState(null);
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
  
    useEffect(() => {
      getTodayHabits();
    }, []);
  
    function getTodayHabits() {
      axios
        .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        .then((res) => setTodayHabits(res.data))
        .catch((error) => console.log(error));
    }
  
    function checkHabit(habitId, done) {
        
        setTodayHabits((prevHabits) =>
          prevHabits.map((habit) =>
            habit.id === habitId
              ? {
                  ...habit,
                  done: !done, 
                  currentSequence: done  ? habit.currentSequence - 1 : habit.currentSequence + 1,
                  highestSequence: done ? habit.currentSequence - 1 : habit.currentSequence + 1
                }
              : habit
          )
        );
      
        
        const url = done
          ? `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/uncheck`
          : `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`;
      
        axios.post(url, {}, config)
          .then(() => {
            getTodayHabits(); 
          })
          .catch((error) => {
            console.log(error.response.data);
      
            
            setTodayHabits((prevHabits) =>
              prevHabits.map((habit) =>
                habit.id === habitId
                  ? {
                      ...habit,
                      done, 
                      currentSequence: done ? habit.currentSequence + 1 : habit.currentSequence - 1,
                      highestSequence: habit.highestSequence
                    }
                  : habit
              )
            );
          });
      }
      
  
    return (
      <>
        {todayHabits == null ? (
          <P>Carregando...</P>
        ) : (
          <ContainerHabits>
            {todayHabits.map(({ id, name, done, currentSequence, highestSequence }) => (
              <ContainerHabit key={id}>
                <HabitsInfo>
                  <h1>{name}</h1>
                  <h2>{`Sequência atual: ${currentSequence} ${currentSequence > 1 ? "dias" : "dia"}`}</h2>
                  <h2>{`Seu recorde: ${highestSequence} ${highestSequence > 1 ? "dias" : "dia"}`}</h2>
                </HabitsInfo>
  
                <Box isDone={done} onClick={() => checkHabit(id, done)}>
                  <img src={check} alt="check" />
                </Box>
              </ContainerHabit>
            ))}
          </ContainerHabits>
        )}
      </>
    );
  }
  
const P = styled.p`
    font-family: "Lexend Deca", serif;
    font-size: large;
    margin-top: 2vh;
`
const ContainerHabits = styled.div`
    margin-top: 2vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    gap: 2vh;
`

const ContainerHabit = styled.div`
    height: 13vh;
    width: 100%;
    border-radius: 5px;
    background-color: white;
    display: flex;
    box-sizing: border-box;
    padding-left: 2vw;
    padding-right: 2vw;
    padding-top: 2vh;
    padding-bottom: 2vh;
    
`

const Box = styled.div`
    width: 9vh;
    border-radius: 5px;
    height: 9vh;
    background-color: ${({isDone})=> isDone ? "#8FC549" : "#EBEBEB" };
    align-items: center;
    justify-content: center;
    display: flex;
    ;
`

const HabitsInfo = styled.div`
    width: calc(100% - 9vh);
    height: 100%;
    font-family: "Lexend Deca", serif;
        
        color: #666666;
    h1{
        
        
        font-size: x-large;
        margin-bottom: 1vh;
       
    }
    h2 {
        font-size: small;
    }
`