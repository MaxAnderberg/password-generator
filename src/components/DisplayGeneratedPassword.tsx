import { useCallback, useState } from "react";
import CopyIcon from "./CopyIcon";

interface Props {
  password: string
}

const DisplayGeneratedPassword = ({ password }: Props) => {

  const copyPassword = useCallback(() => {
    navigator.clipboard.writeText(password);
  }, [password]);

	const [hasCopied, setCopied] = useState(false)

	const handleCopyingPassword = () => {
		setCopied(true)
		setTimeout(() => {
			setCopied(false)
		}	, 10000)
	}

	return (
	      <section className="bg-dark-grey w-full mb-[16px] p-[16px] md:px-[32px] py-[19px] flex items-center" onClick={copyPassword}>
	        <p className={` cursor-default text-almost-white ${password ? 'opacity-100' : 'opacity-25'}  text-[18px] md:text-[24px]`}>
	          {password ? password : 'P4$5W0rD!'}
	        </p>
	        <section className='cursor-pointer ml-auto flex text-center' onClick={copyPassword}>
					<p className={`text-[#A4FFAF] uppercase mr-[10px] md:mr-[16px] text-center text-[14px] md:text-[18px] ${hasCopied ? 'visible' : 'invisible'}`}>Copied</p>
					<section onClick={handleCopyingPassword}>
						<CopyIcon />	        	
					</section>
	        </section>
	      </section>
	);
};

export default DisplayGeneratedPassword;
