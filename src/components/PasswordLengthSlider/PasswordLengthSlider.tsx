import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './rc-slide-custom.css'

type Props = {
  handleCharLength: Function
  value: number
}

export const PasswordLengthSlider = ({handleCharLength, value}: Props) => {
  return (
    <>
      <Slider
        min={4}
        max={20}
        value={value}
        handleStyle={{
          border: 'none',
          backgroundColor: '#E6E5EA',
          width: '28px',
          height: '28px',
          marginTop: '-10px',
          opacity: '1',
          boxShadow: 'none',
        }}
        railStyle={{
          backgroundColor: 'black',
          height: '8px',
          borderRadius: '0px',
        }}
        trackStyle={{
          backgroundColor: '#A4FFAF',
          height: '8px',
          borderRadius: '0px',
        }}
        onChange={handleCharLength}
      />
    </>
  )
}