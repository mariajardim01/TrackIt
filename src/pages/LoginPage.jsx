import Logo from "../components/Logo"
import Input from "../components/Input"
import styled from "styled-components"
import Button from "../components/Button"
import LinkText from "../components/LinkText"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import React, { useContext } from 'react';
import UserContext from "../context/UserConstext"
import PageContext from "../context/PageContext"

export default function LoginPage(){
   const navigate = useNavigate()
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState("")
  
    const [valueEmail, setValueEmail] = useState("");
   
    const [valuePassword, setValuePassword] = useState("");
   const {name, setName, email, setEmail, password, setPassword, photo, setPhoto, token, setToken} =useContext(UserContext)
   const {page, setPage} = useContext(PageContext)
    
    function UserData (user){
        setName(user.name)
        setEmail(user.email)
        setPassword(user.password)
        setPhoto(user.image)
        setToken(user.token)

        localStorage.setItem("token",user.token)
        localStorage.setItem("photo",user.image)
        localStorage.setItem("page", page)
        navigate("/hoje")
        setPage("hoje")
        localStorage.setItem("page","hoje")

    }
   
    function SignInError(error){
      setIsLoading(false)
      if (error.status == 422){
        setError("Email inválido")
      }
      else {
      setError(`${error.response.data.message}`)}
    }

    function signIn (e){
       e.preventDefault()
       setIsLoading(true)

       const body ={email: `${valueEmail}`, password: `${valuePassword}`}
       
       const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)
       promise.then((res) => UserData(res.data))
       promise.catch((error)=> SignInError(error))
    
    }

    return(
        <Page>

        <Logo />

        <Form>
        <p>{error}</p>
        <Input
          placeholder="Email"
          type="email"
          value={valueEmail}
          setValue={setValueEmail}
          errorText={"a"}
          isLoading={isLoading}
          
        />
        <Input
          placeholder="Senha"
          type="password"
          value={valuePassword}
          setValue={setValuePassword}
          errorText={"a"}
          isLoading={isLoading}
          
          
        />
       
        <Button text={"Entrar"} isLoading={isLoading} onClick={(e)=>signIn(e)}/>
       

        </Form>
        <LinkText text="Não tem uma conta? Cadastre-se!" path="/cadastro"></LinkText>

        </ Page>
    )
}

const Page = styled.div`
height: 100vh;
box-sizing: border-box;
width: 100vw;
color: white;
padding-left: 6vw;
padding-right: 6vw;
padding-top: 10vh;
display: flex;
flex-direction: column;
align-items: center;

p{
  font-family: "Lexend Deca", serif;
  font-size: medium;
  color: red;
  margin-bottom: 1vh;
}

`

const Form = styled.form`
   
    display: flex;
    flex-direction: column;
    width: 100%;
    
    align-items: center;
`




