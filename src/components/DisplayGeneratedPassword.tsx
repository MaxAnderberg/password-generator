import { useCallback } from "react";
import CopyIcon from "./CopyIcon";

interface Props {
  password: string
}

const DisplayGeneratedPassword = ({ password }: Props) => {

  const copyPassword = useCallback(() => {
    navigator.clipboard.writeText(password);
  }, [password]);

	return (
	      <section className="bg-dark-grey w-full mb-[16px] p-[16px] flex" onClick={copyPassword}>
	        <p className='text-almost-white text-[22px]'>
	          {password}
	        </p>
	        <section className='cursor-pointer' onClick={copyPassword}>
        		<CopyIcon />	        	
	        </section>
	      </section>
	);
};

export default DisplayGeneratedPassword;
