export const DisplayPasswordStrength = () => {
	return (
		<section className='flex bg-[#18171F] p-[17px] mb-[16px] justify-between'>
			<p className='text-[#817D92]'>STRENGTH</p>
			<p className='text-[#817D92]'>TOO WEAK</p>
			<div className='flex gap-[8px]'>
				<span className='border-white w-[10px] h-[20px] bg-red-500'> </span>
				<span className='border-white w-[10px] h-[20px] bg-red-500'> </span>
				<span className='border-white w-[10px] h-[20px] bg-red-500'> </span>
				<span className='border-white w-[10px] h-[20px] bg-red-500'> </span>
			</div>
		</section>
	)
}