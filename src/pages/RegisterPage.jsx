import Logo from "../components/Logo"
import Input from "../components/Input"
import styled from "styled-components"
import Button from "../components/Button"
import LinkText from "../components/LinkText"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"



export default function RegisterPage(){
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errorSignUp, setErrorSignUp]= useState(false)
    const [textErrorSignUp, setTextErrorSignUp] = useState("Error")

    const [valueEmail, setValueEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorTextEmail, setErrorTextEmail] = useState(" Error");
  
    const [valuePassword, setValuePassword] = useState("");
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorTextPassword, setErrorTextPassword] = useState("Error ");
  
    const [valueName, setValueName] = useState("");
    const [errorName, setErrorName] = useState(false);
    const [errorTextName, setErrorTextName] = useState(" Error");
  
    const [valuePhoto, setValuePhoto] = useState("");
    const [errorPhoto, setErrorPhoto] = useState(false);
    const [errorTextPhoto, setErrorTextPhoto] = useState("Error ");
  
    const validateInput = (field, value, setError, setErrorText) => {
      if (!value.trim()) {
        setError(true);
        setErrorText("Campo obrigatório!");
    
        return;
      }
  
      if (field === "email" && !/\S+@\S+\.\S+/.test(value)) {
        setError(true);
        setErrorText("Email inválido!");
       
        return;
      }
  
      if (field === "senha" && value.length < 6) {
        setError(true);
        setErrorText("A senha deve ter pelo menos 6 caracteres!");
       
        return;
        
      }
  
      if (field === "foto" && !value.startsWith("http")) {
        setError(true);
        setErrorText("A URL da foto deve começar com 'http'");
     
        return;
      }
  
      
      setError(false);
      setErrorText("Error ");
     
    };

   function SuccessSignUp(){
    setTimeout(() => navigate("/"), 3000);
   }
   function ErrorSignUp(error){
    setErrorSignUp(true)
    setTextErrorSignUp(error.response.data.message)
    if (error.status == 422){
      setIsLoading(false)
      return
    }
    else if (error.status == 409){
      setTimeout(()=>navigate("/"),2000)
      return
    }
   
    

   }

    function signUp (e){
      e.preventDefault()
      if (errorEmail == false && errorName == false && errorPassword == false && errorPhoto == false){
       
       setIsLoading(true)

       const body ={ email: `${valueEmail}`, name: `${valueName}`, image:`${valuePhoto}`, password:`${valuePassword}` }
       if (errorEmail == false && errorName == false && errorPassword == false && errorPhoto == false){
           const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",body)
           promise.then((res)=>SuccessSignUp())
           promise.catch((error)=>ErrorSignUp(error))
           
        }}

       
    }

    return(
        <Page>

        <Logo />
        <P errorSignUp={errorSignUp}>{textErrorSignUp}</P>
        <Form>

        <Input
          placeholder="Email"
          type="email"
          value={valueEmail}
          setValue={setValueEmail}
          error={errorEmail}
          errorText={errorTextEmail}
          isLoading={isLoading}
          onBlur={() => validateInput("email", valueEmail, setErrorEmail, setErrorTextEmail)}
        />
        <Input
          placeholder="Senha"
          type="password"
          value={valuePassword}
          setValue={setValuePassword}
          error={errorPassword}
          errorText={errorTextPassword}
          isLoading={isLoading}
          onBlur={() => validateInput("senha", valuePassword, setErrorPassword, setErrorTextPassword)}
        />
        <Input
          placeholder="Nome"
          type="text"
          value={valueName}
          setValue={setValueName}
          error={errorName}
          errorText={errorTextName}
          isLoading={isLoading}
          onBlur={() => validateInput("nome", valueName, setErrorName, setErrorTextName)}
        />
        <Input
          placeholder="Foto"
          type="text"
          value={valuePhoto}
          setValue={setValuePhoto}
          error={errorPhoto}
          errorText={errorTextPhoto}
          isLoading={isLoading}
          onBlur={() => validateInput("foto", valuePhoto, setErrorPhoto, setErrorTextPhoto)}
        />
        <Button text={"Cadastrar"} isLoading={isLoading} onClick={(e)=>signUp(e)}/>
       

        </Form>
        <LinkText text="Já tem uma conta? Faça login!" path="/"></LinkText>

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

`

const Form = styled.form`
   
    display: flex;
    flex-direction: column;
    width: 100%;
    
    align-items: center;
`
const  P = styled.p`
    font-family: "Lexend Deca", serif;
    font-size: large;
    color: #3f3f3f;
    visibility: ${({errorSignUp})=> errorSignUp ? "visible" : "hidden"};
    
`



