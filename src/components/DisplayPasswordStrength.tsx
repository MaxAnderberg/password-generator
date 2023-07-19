type Props = {
	passwordStrength: number
	password: string
}

export const DisplayPasswordStrength = ({ passwordStrength }: Props) => {
	return (
		<section className='flex bg-[#18171F] p-[17px] mb-[16px] justify-between'>
			<p className='text-[#817D92] text-[16px]'>STRENGTH</p>
			<div className='flex gap-[8px]'>
				{
					passwordStrength === 1
						? (
							<>
								<p className='text-[#E6E5EA] text-[18px]'>TOO WEAK</p>
								<span className='w-[10px] h-[20px] bg-red-500'> </span> 
								<span className='border-[#E6E5EA] border-[2px] w-[10px] h-[20px] bg-transparent'> </span> 
								<span className='border-[#E6E5EA] border-[2px] w-[10px] h-[20px] bg-transparent'> </span> 
								<span className='border-[#E6E5EA] border-[2px] w-[10px] h-[20px] bg-transparent'> </span> 
							</>
						)
						: ''
				}

				{
					passwordStrength === 2
						? (
							<>
								<p className='text-[#E6E5EA] text-[18px]'>WEAK</p>
								<span className='w-[10px] h-[20px] bg-[#FB7C58]'> </span> 
								<span className='w-[10px] h-[20px] bg-[#FB7C58]'> </span>
								<span className='border-[#E6E5EA] border-[2px] w-[10px] h-[20px] bg-transparent'> </span>
								<span className='border-[#E6E5EA] border-[2px] w-[10px] h-[20px] bg-transparent'> </span>
							</>
						)
						: ''
				}

				{
					passwordStrength === 3
						? (
							<>
								<p className='text-[#E6E5EA] text-[18x]'>MEDIUM</p>
								<span className='w-[10px] h-[20px] bg-[#F8CD65]'> </span> 
								<span className='w-[10px] h-[20px] bg-[#F8CD65]'> </span>
								<span className='w-[10px] h-[20px] bg-[#F8CD65]'> </span>
								<span className='border-[#E6E5EA] border-[2px] w-[10px] h-[20px] bg-transparent'> </span>
							</>
						)
						: ''
				}

				{
					passwordStrength === 4
						? (
							<>
								<p className='text-[#E6E5EA] text-[18px]'>STRONG</p>
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