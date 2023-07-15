import CopyIcon from "./CopyIcon";
import { PasswordConfig } from "../App";

interface Props {
	passwordConfig: PasswordConfig
}

const generatePassword = (config: PasswordConfig): string => {
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';

  let allCharacters = '';
  if (config.uppercase) allCharacters += upperChars;
  if (config.lowercase) allCharacters += lowerChars;
  if (config.numbers) allCharacters += numberChars;
  if (config.symbols) allCharacters += symbolChars;

  let password = ''

  for(let i = 1; i <= config.charLength; i++) {
  	const randomIndex = Math.floor(Math.random() * allCharacters.length)
  	password += allCharacters[randomIndex]
  }

  return password;
}

const DisplayGeneratedPassword = ({passwordConfig}: Props) => {
	return (
	      <section className="bg-dark-grey w-full mb-[16px] p-[16px] flex">
	        <p className='text-almost-white text-[22px]'>
	          12345678912345678912
	        </p>
        	<CopyIcon />
	      </section>
	);
};

export default DisplayGeneratedPassword;
