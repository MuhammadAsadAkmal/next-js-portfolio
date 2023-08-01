import React from 'react';
import {
	AiOutlineGithub,
	AiOutlineTwitter,
	AiOutlineLinkedin,
} from 'react-icons/ai';

const Footer = () => {
	return (
		<footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl '>
			<hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0'></hr>
			<div className='mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
				<div className='flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100'>
					© 2023 Muhammad asad akmal{' '}
					<a
						href='/'
						className='hover:underline'
					></a>
				</div>
				<div className='flex flex-row items-center justify-center space-x-2 mb-1'>
					<a
						href='https://github.com/MuhammadAsadAkmal'
						rel='noreferrer'
						target='_blank'
					>
						<AiOutlineGithub
							className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
							size={30}
						/>
					</a>
					<a
						href='https://twitter.com/M_Asad_Akmal'
						rel='noreferrer'
						target='_blank'
					>
						<AiOutlineTwitter
							className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
							size={30}
						/>
					</a>

					<a
						href='https://www.linkedin.com/in/muhammad-asad-akmal-927715232/'
						rel='noreferrer'
						target='_blank'
					>
						<AiOutlineLinkedin
							className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
							size={30}
						/>
					</a>
				</div>
			</div>

			<div className='mx-auto flex flex-col  justify-center '>
				<p className=' flex flex-row text-neutral-600 dark:text-neutral-400'>
					contact on:
					<a
						href='https://www.linkedin.com/in/muhammad-asad-akmal-927715232/'
						rel='noreferrer'
						target='_blank'
						className='mx-32'
					>
						<AiOutlineLinkedin
							className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
							size={30}
						/>
					</a>
				</p>
				<p className='text-neutral-600 dark:text-neutral-400'>
					phone no: <span className='mx-20'>(+92 336 1532 755)</span>
				</p>
				<p className='mx-8 text-neutral-600 dark:text-neutral-400'>
					email:<span className='mx-10'>m.asadakmal1999@gmail.com</span>
				</p>
			</div>
			<hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0'></hr>
		</footer>
	);
};

export default Footer;
