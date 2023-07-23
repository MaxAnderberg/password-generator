import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './rc-slide-custom.css'

type Props = {
  handleCharLength: Function
}

export const PasswordLengthSlider = ({handleCharLength}: Props) => {
  return (
    <>
      <Slider
        min={4}
        max={20}

        handleStyle={{
          border: 'none',
          backgroundColor: '#E6E5EA',
          width: '20px',
          height: '20px',
          marginTop: '-7px',
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