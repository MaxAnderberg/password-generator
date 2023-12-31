import { useState, FormEvent } from 'react'
import CheckBox from './CheckBox';
import { DisplayPasswordStrength } from './DisplayPasswordStrength';
import { ArrowIcon } from './ArrowIcon';
import 'rc-slider/assets/index.css';
import { PasswordLengthSlider } from './PasswordLendthSlider/PasswordLengthSlider';
import { GeneratePassword } from '../GeneratePassword';

type Props = {
	setPassword:  (value: string) => void;
	passwordStrength: number
};

export const PasswordForm = ({ setPassword, passwordStrength }: Props) => {
	const [uppercase, setUppercase] = useState(true)
	const [lowercase, setLowercase] = useState(false)
	const [numbers, setNumbers] = useState(false)
	const [symbols, setSymbols] = useState(false)
	const [value, setValue] = useState(10);
	
	const handleCharLength = (newValue: number | number[]) => {
		if (Array.isArray(newValue)) {
			setValue(newValue[0]);
		} else {
			setValue(newValue);
		}
	};

	const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const charLength = value
		
		try {
			const password = GeneratePassword({
				uppercase,
				lowercase,
				numbers,
				symbols,
				charLength,
			})

			setPassword(password)
		} catch (error) {
			console.error(error)
		}

	}

	const	isGenerateDisabled = !uppercase && !lowercase && !numbers && !symbols

	return (
		<form className="bg-dark-grey p-[16px] md:p-[32px] w-full" onSubmit={handleOnSubmit}>
			<section className="flex justify-between mb-[23px]">
				<span className='md:text-[18px]'>Character Length</span>
				<span className='text-[#A4FFAF] text-[24px] font-bold'>{value}</span>
			</section>
			<section className="mb-[42px]">
				<PasswordLengthSlider handleCharLength={handleCharLength} value={value}/>
			</section>
			<section className="flex flex-col items-start gap-[17px] mb-[32px]">
				<CheckBox label='Include Uppercase Letters' checked={uppercase} setChecked={setUppercase} />
				<CheckBox label='Include Lowercase Letters' checked={lowercase} setChecked={setLowercase} />
				<CheckBox label='Include Numbers' checked={numbers} setChecked={setNumbers} />
				<CheckBox label='Include Symbols' checked={symbols} setChecked={setSymbols} />
			</section>
			<DisplayPasswordStrength passwordStrength={passwordStrength} />
			<button disabled={isGenerateDisabled} type='submit' className="disabled:opacity-25 bg-[#A4FFAF] flex gap-[16px] items-center text-[#24232C] w-full py-[17px] px-[103px] disabled:bg-transparent disabled:text-[#A4FFAF] hover:bg-transparent border-[#A4FFAF] hover:text-[#A4FFAF] border-[2px] md:text-[18px] md:justify-center">
				Generate
				<ArrowIcon />
			</button>
		</form>
	);
};
