import { useState, ChangeEvent, FormEvent } from 'react'
import CheckBox from './CheckBox';

type Props = {
	handleCharLength: Function;
	value: string;
};

/*
	TODO: Create an on submit handler
	TODO: Create an verify form is working
	TODO: Hook form up to global state
*/

const PasswordGenerator = ({ handleCharLength, value}: Props) => {

	const [uppercase, setUppercase] = useState(false)
	const [lowercase, setLowercase] = useState(false)
	const [numbers, setNumbers] = useState(false)
	const [symbols, setSymbols] = useState(false)
	
	const handleOnSubmit = ( event:FormEvent<HTMLFormElement> ) => {
		event.preventDefault()
	}

	return (
		<form className="bg-dark-grey p-[16px] w-full" onSubmit={handleOnSubmit}>
			<section className="flex justify-between mb-[23px]">
				<span className=''>Character Length</span>
				<span className='text-[#A4FFAF] text-[24px] font-bold'>{value}</span>
			</section>
			<section className="mb-[42px]">
				<input
					type="range"
					onChange={handleCharLength}
					className="w-full appearance-none bg-black h-[8px]"
					min="0"
					max="20"
				/>
			</section>
			<section className="flex flex-col items-start gap-[17px] mb-[32px]">
				<CheckBox label='Include Uppercase Letters' checked={uppercase} setChecked={setUppercase}/>
				<CheckBox label='Include Lowercase Letters' checked={lowercase} setChecked={setLowercase}/>
				<CheckBox label='Include Numbers' checked={numbers} setChecked={setNumbers}/>
				<CheckBox label='Include Symbols' checked={symbols} setChecked={setSymbols}/>
			</section>
			<section className='flex bg-[#18171F] p-[17px] mb-[16px] justify-between'>
				<p className='text-[#817D92]'>STRENGTH</p>
				<p className='text-[#817D92]'>MEDIUM</p>
			</section>
			<button className="bg-[#A4FFAF] text-[#24232C] w-full py-[17px] px-[103px]">Generate</button>
		</form>
	);
};

export default PasswordGenerator;
