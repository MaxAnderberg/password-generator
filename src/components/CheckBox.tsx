import React from 'react'

type Props = {
  label: string
  checked: boolean
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const CheckBox = ({ label, checked, setChecked }: Props) => {
  return (
    <section className="flex flex-row-reverse">
      <label>{label}</label>
      <input type="checkbox" className="mr-[20px] h-[20px] w-[20px] bg-transparent border-[#E6E5EA] checked:bg-neon-green " onChange={() => setChecked(!checked)} />
    </section>
  )
}

export default CheckBox
