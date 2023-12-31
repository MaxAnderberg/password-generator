interface Props {
	width?: string
	height?: string
}

export const ArrowIcon = ({width = '12', height = '12'}: Props) => {

	return (
		<svg 
			width={width}
			height={height} 
			viewBox="0 0 12 12" 
			fill="none" 
			className="color-[#A4FFAF]"
			xmlns="http://www.w3.org/2000/svg">
		<g id="bx_arrow-to-left">
		<path id="Shape" d="M5.10547 12L11.1054 6.00002L5.10547 0L3.84045 1.26501L7.68094 5.10547L0 5.10547V6.8946L7.68094 6.8946L3.84045 10.735L5.10547 12Z" fill="currentcolor"/>
		</g>
		</svg>
	)
}

