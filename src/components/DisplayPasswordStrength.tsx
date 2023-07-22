type Props = {
	passwordStrength: number
	password: string
}

export const DisplayPasswordStrength = ({ passwordStrength }: Props) => {
	return (
		<section className='flex bg-[#18171F] px-[16px] py-[17px] mb-[16px] md:mb-[32px] md:px-[32px] md:py-[14px] items-center justify-between'>
			<p className='text-[#817D92] text-[16px] md:text-[18px]'>STRENGTH</p>
			<div className='flex gap-[8px] items-center'>
				{
					passwordStrength === 1
						? (
							<>
								<p className='text-[#E6E5EA] text-[18px] md:text-[24px] mr-[8px]'>TOO WEAK</p>
								<span className='w-[10px] h-[28px] bg-red-500'> </span> 
								<span className='border-[#E6E5EA] border-[2px] w-[10px] h-[28px] bg-transparent'> </span> 
								<span className='border-[#E6E5EA] border-[2px] w-[10px] h-[28px] bg-transparent'> </span> 
								<span className='border-[#E6E5EA] border-[2px] w-[10px] h-[28px] bg-transparent'> </span>
							</>
						)
						: ''
				}

				{
					passwordStrength === 2
						? (
							<>
								<p className='text-[#E6E5EA] text-[18px] md:text-[24px] mr-[8px]'>WEAK</p>
								<span className='w-[10px] h-[28px] bg-[#FB7C58]'> </span> 
								<span className='w-[10px] h-[28px] bg-[#FB7C58]'> </span>
								<span className='border-[#E6E5EA] border-[2px] w-[10px] h-[28px] bg-transparent'> </span>
								<span className='border-[#E6E5EA] border-[2px] w-[10px] h-[28px] bg-transparent'> </span>
							</>
						)
						: ''
				}

				{
					passwordStrength === 3
						? (
							<>
								<p className='text-[#E6E5EA] text-[18x] md:text-[24px] mr-[8px]'>MEDIUM</p>
								<span className='w-[10px] h-[28px] bg-[#F8CD65]'> </span> 
								<span className='w-[10px] h-[28px] bg-[#F8CD65]'> </span>
								<span className='w-[10px] h-[28px] bg-[#F8CD65]'> </span>
								<span className='border-[#E6E5EA] border-[2px] w-[10px] h-[28px] bg-transparent'> </span>
							</>
						)
						: ''
				}

				{
					passwordStrength === 4
						? (
							<>
								<p className='text-[#E6E5EA] text-[18px] md:text-[24px] mr-[8px]'>STRONG</p>
								<span className='w-[10px] h-[20px] bg-[#A4FFAF]'> </span> 
								<span className='w-[10px] h-[20px] bg-[#A4FFAF]'> </span>
								<span className='w-[10px] h-[20px] bg-[#A4FFAF]'> </span>
								<span className='w-[10px] h-[20px] bg-[#A4FFAF]'> </span>
							</>
						)
						: ''
				}


			</div>
		</section>
	)
}