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
	      <section className="bg-dark-grey w-full mb-[16px] p-[16px] md:px-[32px] py-[19px] flex items-center" onClick={copyPassword}>
	        <p className={` cursor-default text-almost-white ${password ? 'opacity-100' : 'opacity-25'}  text-[22px] md:text-[24px]`}>
	          {password ? password : 'P4$5W0rD!'}
	        </p>
	        <section className='cursor-pointer ml-auto' onClick={copyPassword}>
        		<CopyIcon />	        	
	        </section>
	      </section>
	);
};

export default DisplayGeneratedPassword;
