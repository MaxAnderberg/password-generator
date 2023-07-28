import { useState, useEffect } from "react";
import "./styles/App.css";
import DisplayGeneratedPassword from "./components/DisplayGeneratedPassword";
import { PasswordForm } from "./components/PasswordForm";
import { CalculatePasswordStrength } from "./CalculatePasswordStrength";

function App() {
  
  const [password, setPassword] = useState<string>('')
  const [passwordStrength, setPasswordStrength] = useState<number>(2)

    useEffect(() => {
    setPasswordStrength(CalculatePasswordStrength(password))
  }, [password])

  return (

    <div className="App flex flex-col items-center mt-[64px] md:mt-[133px] text-[#E6E5EA] mx-[16px] md:m-auto md:max-w-[540px] overflow-hidden">
      <h1 className="text-[#817D92] mb-[16px] md:text-[24px] md:mb-[31px]">Password Generator</h1>
      <DisplayGeneratedPassword password={password}/>
      <PasswordForm setPassword={setPassword} passwordStrength={passwordStrength}/>
    </div>
  );
}

export default App;
