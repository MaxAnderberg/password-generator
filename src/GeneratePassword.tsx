import { PasswordConfig } from "./domain/Domain"

export const GeneratePassword = (config: PasswordConfig, setPasswordStrength: Function): string => {
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

  setPasswordStrength(password)
  console.log('this is PW: ', password)
  return password;
}

const getRandomCharacter = (charactherList: string): string => {
	const randomIndex = Math.floor(Math.random() * charactherList.length)
	return charactherList[randomIndex]
}