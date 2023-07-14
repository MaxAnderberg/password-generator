import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import DisplayGeneratedPassword from "./components/DisplayGeneratedPassword";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  interface PasswordConfig {
    uppercase: boolean
    lowercase: boolean
    numbers: boolean
    symbols: boolean
  }

  const [value, setValue] = useState("20");
  const [passwordConfig, setPasswordConfig] = useState<PasswordConfig>({
    lowercase: false,
    uppercase: false,
    numbers: false,
    symbols: false,
  })

  const handleCharLength = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="App flex flex-col items-center mt-[64px] text-[#E6E5EA] mx-[16px] overflow-hidden font-[JetBrains-Mono] font-bold">
      <h1 className="text-[#817D92] mb-[16px]">Password </h1>
      <DisplayGeneratedPassword />
      <PasswordGenerator handleCharLength={handleCharLength} value={value} />
    </div>
  );
}

export default App;
