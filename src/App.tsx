import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("20");
  const handleCharLength = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App flex flex-col items-center mt-[64px] text-[#E6E5EA] mx-[16px] overflow-hidden">
      <h1 className="text-[#817D92] mb-[16px]">Password Generator</h1>
      <section className="bg-[#24232C] w-full mb-[16px] p-[16px]">
        Generated Password
      </section>
      <article className="bg-[#24232C] p-[16px] w-full">
        <section className="flex justify-between mb-[23px]">
          <span>Character Length</span>
          <span>{value}</span>
        </section>
        <section className="mb-[42px]">
          <input
            type="range"
            onChange={handleCharLength}
            className="w-full appearance-none bg-black h-[8px] range"
            min="0"
            max="20"
          />
        </section>
        <section className="flex flex-col items-start gap-[17px] mb-[32px]">
          <section className="flex flex-row-reverse">
            <label>Include Uppercase Letters</label>
            <input type="checkbox" className="mr-[20px] " />
          </section>
          <section className="flex flex-row-reverse">
            <label>Include Lowercase Letters</label>
            <input type="checkbox" className="mr-[20px]" />
          </section>
          <section className="flex flex-row-reverse">
            <label>Include Numbers</label>
            <input type="checkbox" className="mr-[20px]" />
          </section>
          <section className="flex flex-row-reverse">
            <label>Include Symbols</label>
            <input type="checkbox" className="mr-[20px]" />
          </section>
        </section>
        <section className='bg-[#18171F] p-[17px] mb-[16px]'>
          <p className='text-[#817D92]'>STRENGTH</p>
        </section>
        <button className="bg-[#A4FFAF] text-[#24232C] w-full py-[17px] px-[103px]">Generate</button>
      </article>
    </div>
  );
}

export default App;
