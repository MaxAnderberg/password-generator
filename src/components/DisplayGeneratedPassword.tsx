import CopyIcon from "./CopyIcon";
import { PasswordConfig } from "../domain/Domain";
import { CalculatePasswordStrength } from '../PasswordStrength';

interface Props {
	passwordConfig: PasswordConfig
}

const generatePassword = (config: PasswordConfig): string => {
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';
  let password = ''

  let allCharacters = '';
  
  if (config.uppercase) {
  	allCharacters += upperChars;
  	password += getRandomCharacter(upperChars)
  }

  if (config.lowercase) {
  	allCharacters += lowerChars;
  	password += getRandomCharacter(lowerChars)
  }

  if (config.numbers) {
  	allCharacters += numberChars;
  	password += getRandomCharacter(numberChars)
  }

  if (config.symbols) {
  	allCharacters += symbolChars;
  	password += getRandomCharacter(symbolChars)
	}


  for(let i = password.length + 1; i < config.charLength; i++) {
  	const randomIndex = Math.floor(Math.random() * allCharacters.length)
  	password += allCharacters[randomIndex]
  }

  return password;
}

const getRandomCharacter = (charactherList: string): string => {
	const randomIndex = Math.floor(Math.random() * charactherList.length)
	return charactherList[randomIndex]
}

const DisplayGeneratedPassword = ({passwordConfig}: Props) => {
	return (
	      <section className="bg-dark-grey w-full mb-[16px] p-[16px] flex">
	        <p className='text-almost-white text-[22px]'>
	          {generatePassword(passwordConfig)}
	        </p>
        	<CopyIcon />
	      </section>
	);
};

export default DisplayGeneratedPassword;
