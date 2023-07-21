import React from 'react'

type Props = {
  label: string
  checked: boolean
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const CheckBox = ({ label, checked, setChecked }: Props) => {
  return (
      <label className="cursor-pointer flex items-center">
        <div className={`w-5 h-5 inline-block border-2 border-[#E6E5EA] ${checked ? 'bg-neon-green border-[#A4FFAF]' : 'bg-transparent'}`}>
          {checked && (
            <svg
              className="fill-current text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </div>
      <input 
        className="hidden" 
        type="checkbox" 
        checked={checked} 
        onChange={() => setChecked(!checked)} 
      />
      <span className='ml-2'>{label}</span>
    </label>
  )
}

export default CheckBox