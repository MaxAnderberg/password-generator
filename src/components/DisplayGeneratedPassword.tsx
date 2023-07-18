import { useEffect } from "react";
import CopyIcon from "./CopyIcon";
import { PasswordConfig } from "../domain/Domain";
import { CalculatePasswordStrength } from '../CalculatePasswordStrength';

interface Props {
	passwordConfig: PasswordConfig
  setPasswordStrength: Function
  password: string
}

const DisplayGeneratedPassword = ({passwordConfig, setPasswordStrength, password}: Props) => {

	return (
	      <section className="bg-dark-grey w-full mb-[16px] p-[16px] flex">
	        <p className='text-almost-white text-[22px]'>
	          {password}
	        </p>
        	<CopyIcon />
	      </section>
	);
};

export default DisplayGeneratedPassword;
