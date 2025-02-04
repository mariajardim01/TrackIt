
import styled from "styled-components";

export default function Input({ placeholder, type, value, setValue, error, errorText,onBlur , isLoading}) {
  
  if(!errorText){
    errorText = "error"
  }
  
  

  return (
    <InputContainer error={error} isLoading={isLoading}>
      <input
        
        id={placeholder}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        
        disabled={isLoading == true}
      />
      
      <label htmlFor={placeholder} className={value ? "active" : ""}>
        {placeholder}
      </label>
      <p >{errorText}</p>
    </InputContainer>
    
  );
}

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 1vh;
  width: 100%;

  & input {
    width: 100%;
    padding: 12px;
    border:${({error}) => error == "true"? "2px solid red" : " 2px solid #D4D4D4" };
    border-radius: 5px;
    font-size: large;
    outline: none;
    background-color: ${({isLoading})=>isLoading == true? "#F2F2F2" :"#fff" };
    color:${({isLoading})=>isLoading == true? "#AFAFAF" : "black"};
    height: 6vh;
    box-sizing: border-box;
    
  }

  & label {
    position: absolute;
    border-radius: 5px;
    left: 12px;
    top: 40%;
    transform: translateY(-50%);
    transition: all 0.3s ease;
    background-color:  ${({isLoading})=>isLoading == true? "#F2F2F2" :"#fff" };
    padding: 0 5px;
    color: #D4D4D4;
    font-size: large;
    font-family: "Lexend Deca", serif;
  
}

& input:-webkit-autofill,
& input:-webkit-autofill:hover,
& input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px ${({ isLoading }) => (isLoading ? "#F2F2F2" : "#fff")} inset !important;
  box-shadow: 0 0 0px 1000px ${({ isLoading }) => (isLoading ? "#F2F2F2" : "#fff")} inset !important;
  -webkit-text-fill-color: ${({ isLoading }) => (isLoading ? "#AFAFAF" : "black")} !important;
  border: ${({ error }) => (error === "true" ? "2px solid red" : "2px solid #ccc")} !important;
  transition: background-color 5000s ease-in-out 0s;
}

  & input:focus + label,
  & label.active {
    top: 0;
    font-size: 12px;
    color: #333;
    
  }

  p{
    visibility: ${({error}) => (error == "true") ? "visible" : "hidden" };
    text-align: center;
    color: red;
    font-family: "Lexend Deca", serif;
    font-size: small;
  }
`;
