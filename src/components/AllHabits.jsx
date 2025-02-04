import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

export default function AllHabits() {
    const token = localStorage.getItem("token")
    const [habits, setHabits] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        GetHabits();
        const interval = setInterval(GetHabits, 5000);
        return () => clearInterval(interval); 
    }, []);

    function GetHabits() {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        

        axios
            .get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
            .then((res) => {
                setHabits(res.data);
                setIsLoading(false); // Desativa o carregamento após a resposta
            })
            .catch((error) => {
                console.log(error.response.data);
                setIsLoading(false); // Mesmo se houver erro, remove o carregamento
            });
    }

    return (
        <>
            {isLoading ? (
                <P>Carregando...</P>
            ) : habits.length === 0 ? (
                <P>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</P>
            ) : (
                habits.map((habit) => (
                    <Habit key={habit.id}>
                        <p>{habit.name}</p>

                        <WeekDays>
                            {["S", "T", "Q", "Q", "S", "S", "D"].map((letter, index) => (
                                <Day key={index} isSelected={habit.days.includes(index + 1)}>
                                    {letter}
                                </Day>
                            ))}
                        </WeekDays>
                    </Habit>
                ))
            )}
        </>
    );
}

const P = styled.p`
    font-family: "Lexend Deca", serif;
    font-size: large;
    margin-top: 2vh;
`

const WeekDays = styled.div`
    display: flex;
    gap: 2vw;
`;

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
`;

const Habit = styled.div`
    margin-top: 1vh;
    height: 10vh;
    width: 100%;
    border-radius: 5px;
    background-color: #fff;
    padding: 2vh 2vw;
    box-sizing: border-box;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    margin-bottom: 1vh;

    p {
        color: #666666;
        font-family: "Lexend Deca", serif;
        font-size: large;
    }
`;
