import CopyIcon from "./CopyIcon";
const DisplayGeneratedPassword = () => {
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