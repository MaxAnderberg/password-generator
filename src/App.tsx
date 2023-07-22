import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import DisplayGeneratedPassword from "./components/DisplayGeneratedPassword";
import { PasswordForm } from "./components/PasswordForm";
import { PasswordConfig } from "./domain/Domain";
import { CalculatePasswordStrength } from "./CalculatePasswordStrength";
import { GeneratePassword } from "./GeneratePassword";

function App() {
  
  const [passwordConfig, setPasswordConfig] = useState<PasswordConfig>({
    lowercase: false,
    uppercase: false,
    numbers: false,
    symbols: false,
    charLength: 1
  })

  const [password, setPassword] = useState<string>('')
  const [passwordStrength, setPasswordStrength] = useState<number>(2)

  const handleGeneratePassword = (config: PasswordConfig) => {
    setPassword(GeneratePassword(config))
  }

    useEffect(() => {
    setPasswordStrength(CalculatePasswordStrength(password))
  }, [password])

  return (

    <div className="App flex flex-col items-center mt-[64px] md:mt-[133px] text-[#E6E5EA] mx-[16px] md:m-auto md:max-w-[540px] overflow-hidden">
      <h1 className="text-[#817D92] mb-[16px]">Password</h1>
      <DisplayGeneratedPassword password={password}/>
      <PasswordForm handleGeneratePassword={handleGeneratePassword} passwordStrength={passwordStrength}/>
    </div>
  );
}

export default App;
