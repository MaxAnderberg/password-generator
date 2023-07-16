type passwordStrength = 1 | 2 | 3 | 4

export const PasswordStrength = (password: string): passwordStrength => {
  const hasLowercase = /[a-z]/.test(password)
  const hasUppercase = /[A-Z]/.test(password)
  const hasNumbers = /\d/.test(password)
  const hasSymbols = /\W/.test(password)

  if (password.length
   >= 15 && hasLowercase && hasUppercase && hasNumbers && hasSymbols) {
    return 4;
  } 
  if (password.length >= 11 && hasLowercase && hasUppercase && hasNumbers) {
    return 3;
  }
  if (password.length >= 7 && (hasLowercase && hasUppercase)) {
    return 2;
  }
    
  return 1;
  
}