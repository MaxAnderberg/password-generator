import React from 'react'

type Props = {
  label: string;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckBox = ({ label, checked, setChecked }: Props) => {

  const handleChecking = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <label htmlFor={label} className="cursor-pointer flex items-center">
      <div className={`w-5 h-5 inline-block border-2 flex justify-center items-center ${checked ? 'bg-neon-green border-[#A4FFAF]' : 'bg-transparent'}`}>
        {checked && (
          <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke="#18171F" stroke-width="3" fill="none" d="M1 5.607 4.393 9l8-8" /></svg>
        )}
      </div>
      <input
        id={label}
        className="hidden"
        type="checkbox"
        checked={checked}
        onChange={handleChecking}
      />
      <span className='ml-[20px] text-[16px] md:text-[18px]'>{label}</span>
    </label>
  );
};

export default CheckBox;