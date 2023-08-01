import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
	{
		name: 'ENSRIG (Woring On it)',
		description:
			'The ENSRIG (Ethereum Naming System Domain Auction Platform with Real-time Valuation and On-chain Bidding) is a software system aimed at providing a web 3.0-enabled platform for buying, selling, and auctioning ENS (Ethereum Name Service) domains. The system leverages blockchain technology to enable secure and efficient transactions, offering users a user-friendly interface to interact with ENS domains. ENSRIG also incorporates AI-based valuation and appraisal features to provide real-time domain valuations, making it easier for users to invest in ENS domains.',
		image: '/ensrig.png',
		github: 'https://github.com/ensrig',
		link: 'https://ensrig.com/',
	},
	{
		name: 'DigiArt',
		description:
			' DigiArt was our first platform for selling art online.The website features millions of digital downloads for users who purchase graphics, templates, fonts, brushes, web themes, and photos, and create their art online as well ',
		image: '/library.png',
		github: 'https://github.com/MuhammadAsadAkmal/digit-art',
		link: 'https://github.com/MuhammadAsadAkmal/digit-art',
	},
	{
		name: 'BWMM ',
		description:
			'BWMM is an ecommerce store web-based application built using ReactJS and DJANGO. The architecture of BWMM follows the D2C model, where retailers can sell their products directly to customers. The primary aim of this project was to provide customers with a secure payment procedure through crypto wallets, specifically Coinbase Commerce, and encrypted bank payments via Stripe. To achieve this, we integrated the Coinbase Commerce API and the Stripe payment gateway into the application. Customers can make purchases using their MetaMask wallet or through encrypted bank payments. The application also features a responsive design and a user-friendly interface that allows customers to easily browse through products, add them to their cart, and complete their purchases.',
		image: '/bwmm.png',
		github: 'https://github.com/MuhammadAsadAkmal/buywith-meta-mask-Ecomstore',
		link: '#projects',
	},
	{
		name: 'HMS',
		description:
			'Hospital management system aims to build a digital healthcare community that bridges the gap in knowledge between health and computing and addresses the present and future complexities of design and development of digital health solutions. The intent of HMS in Pakistan is to support the provision of health care services to reduce the mortality rate of women and children, to timely address the maternity related issues in remote areas and to monitor old people.',
		image: '/hms.png',
		github: 'https://github.com/MuhammadAsadAkmal/hms_management_system',
		link: 'https://github.com/MuhammadAsadAkmal/hms_management_system',
	},
	{
		name: 'raffle ',
		description:
			'smart contract of Lottery system on Ethereum Testnet Goerli Blockchain using Solidity and Smart Contract, and randomness is overcome by oracal chainlink',
		image: '/solidity.png',
		github: '#',
		link: '#',
	},
	{
		name: 'Fundme',
		description:
			'smart contract of Blockchain based crowdfunding platform for students to raise funds for their projects. The platform is built using ReactJS and Django. The application features a user-friendly interface that allows students to easily create campaigns and raise funds for their projects. The application also features a responsive design that allows users to access the platform from any device.',
		image: '/solidity.png',
		github: 'https://github.com/MuhammadAsadAkmal/brownie_fund_me',
		link: 'https://github.com/MuhammadAsadAkmal/brownie_fund_me',
	},
];

const ProjectsSection = () => {
	return (
		<section id='projects'>
			<h1 className='my-10 text-center font-bold text-4xl'>
				Projects
				<hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
			</h1>

			<div className='flex flex-col space-y-28'>
				{projects.map((project, idx) => {
					return (
						<div key={idx}>
							<SlideUp offset='-300px 0px -300px 0px'>
								<div className='flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
									<div className=' md:w-1/2'>
										<Link href={project.link}>
											<Image
												src={project.image}
												alt=''
												width={1000}
												height={1000}
												className='rounded-xl shadow-xl hover:opacity-70 my-32 cursor-pointer'
											/>
										</Link>
									</div>
									<div className='mt-8 md:w-1/2'>
										<h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
										<p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
											{project.description}
										</p>
										<div className='flex flex-row align-bottom space-x-4'>
											<Link
												href={project.github}
												target='_blank'
											>
												<BsGithub
													size={30}
													className='hover:-translate-y-1 transition-transform cursor-pointer'
												/>
											</Link>
											<Link
												href={project.link}
												target='_blank'
											>
												<BsArrowUpRightSquare
													size={30}
													className='hover:-translate-y-1 transition-transform cursor-pointer'
												/>
											</Link>
										</div>
									</div>
								</div>
							</SlideUp>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectsSection;
