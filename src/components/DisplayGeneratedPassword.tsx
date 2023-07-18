import { useEffect } from "react";
import CopyIcon from "./CopyIcon";

interface Props {
  password: string
}

const DisplayGeneratedPassword = ({ password }: Props) => {

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
