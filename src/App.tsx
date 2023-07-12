import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState('20')
  const handleCharLength = (event) => {
    setValue(event.target.value)
  }
  return (
    <div className="App flex flex-col items-center mt-[64px] text-[#E6E5EA] mx-[16px] overflow-hidden">
      <h1 className="text-[#817D92] mb-[16px]">Password Generator</h1>
      <section className="bg-[#24232C] w-full mb-[16px] p-[16px]">
        Generated Password
      </section>
      <article className="bg-[#24232C] p-[16px] w-full">
        <section className="flex justify-between">
          <span>Character Length</span>
          <span>{value}</span>
        </section>
        <section className=''>
          <input type="range" onChange={handleCharLength} className="w-full" min='0' max='20'/>
        </section>
        <button className="bg-[#A4FFAF] text-[#24232C] w-full">Generate</button>
      </article>
    </div>
  );
}

export default App;
