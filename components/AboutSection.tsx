import React from 'react';
import Image from 'next/image';

const skills = [
	{ skill: 'HTML' },
	{ skill: 'CSS' },
	{ skill: 'JavaScript' },
	{ skill: 'React.js' },
	{ skill: 'Next.js(13)' },
	{ skill: 'Django' },
	{ skill: 'Django rest framework' },
	{ skill: 'Browne' },
	{ skill: 'Hardhat' },
	{ skill: 'MySQL' },
	{ skill: 'SQLite' },
	{ skill: 'PostgreSQL' },
	{ skill: 'Python' },
	{ skill: 'Solidity' },
	{ skill: 'Java' },
	{ skill: 'OOP' },
	{ skill: 'Git' },
	{ skill: 'GitHub' },
	{ skill: 'Data structure' },
	{ skill: 'Cryptography' },
	{ skill: 'Blockchain' },
	{ skill: 'Ethereum' },
	{ skill: 'Dapps' },
];

const AboutSection = () => {
	return (
		<section id='about'>
			<div className='my-12 pb-12 md:pt-16 md:pb-48'>
				<h1 className='text-center font-bold text-4xl'>
					About Me
					<hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
				</h1>

				<div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
					<div className='md:w-1/2 '>
						<h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
							Get to know me!
						</h1>
						<p>
							Hi, my name is Muhammad Asad akmal and I am a{' '}
							<span className='font-bold'>{'highly ambitious'}</span>,
							<span className='font-bold'>{' self-motivated'}</span>, and
							<span className='font-bold'>{' driven'}</span> software engineer
							based Islamabad, Pakistan.
						</p>
						<br />
						<p>
							As a final year BS Software Engineering candidate at Comsats
							University, Islamabad, I am an accomplished Full-stack Software
							Engineer with over 2 year of experience in web development using
							Python and Blockchain.
						</p>
						<br />
						<p>
							My proficiency in popular frameworks like Django, NextJS, and
							ReactJS, along with libraries such as TensorFlow, Keras, and
							Scikit-learn, has enabled me to create robust RESTful APIs using
							Django Rest Framework. I am also skilled in using hardhat and
							truffle for blockchain development.
						</p>
						<br />
						<p>
							As a continuous learner, I am always eager to acquire new skills
							and stay updated with the latest industry trends. With a strong
							work ethic and readiness to take on new challenges, I am
							well-prepared to contribute my expertise to innovative software
							development projects. 🙂
						</p>
					</div>
					<div className='text-center md:w-1/2 md:text-left'>
						<h1 className='text-2xl font-bold mb-6'>My Skills</h1>
						<div className='flex flex-wrap flex-row justify-center z-10 md:justify-start'>
							{skills.map((item, idx) => {
								return (
									<p
										key={idx}
										className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'
									>
										{item.skill}
									</p>
								);
							})}
						</div>
						{/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
