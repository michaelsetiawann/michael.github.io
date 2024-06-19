"use client"
import Link from 'next/link';
import Image from 'next/image';
import photoProfile from 'public/images/profile-transparent-bg.png';
import { motion } from "framer-motion";
import { Motions } from '@/utils/motion';

export default function HomePage() {
    return (
        <motion.div
            viewport={{ once: true, amount: 0.55 }}
            whileInView="show"
            initial="hidden"
            className="container min-h-[calc(100vh-95px)] sm:w-10/12 md:w-8/12 mx-auto flex flex-col items-center xl:flex-row xl:items-start xl:pt-28 p-4">
            <motion.div
                className='flex flex-col w-full xl:w-8/12'>
                <motion.span
                    variants={Motions.fadeIn("left", "tween", 0.04, 0.4)}
                    className='text-2xl text-blue-600 dark:text-blue-600 font-bold'>Hi!, I&apos;m</motion.span>
                <motion.span
                    variants={Motions.fadeIn("up", "tween", 0.1, 1)}
                    className='text-4xl md:text-6xl xl:text-7xl font-bold text-green-600 dark:text-purple-600'>Michael Setiawan</motion.span>
                <motion.div
                    variants={Motions.textVariants(0.9)}
                    className='mt-5 w-full'>
                    <p className='text-base md:text-lg lg:text-xl'>I&apos;m an undergraduate student of Informatics Engineering at <Link className='hover:text-green-600 dark:hover:text-purple-600' href=''>Institut Teknologi Harapan Bangsa</Link>. I have a career in the field of Information Technology, especially in efficient web development. I utilize strong analytical skills and programming abilities in a variety of programming languages.</p>
                </motion.div>
            </motion.div>
            <motion.div
                variants={Motions.slideIn("right", "tween", 0.9, 1)}
                className='mt-10 xl:mt-0 w-full flex justify-center'>
                <div className='relative w-72 md:w-96 lg:w-[25rem] xl:w-[30rem] h-72 md:h-96 lg:h-[25rem] xl:h-[30rem]'>
                    <svg className='fill-unique-color dark:fill-white absolute inset-0 w-full h-full' viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M 110 0 C 165 0 220 55 220 110 C 220 165 165 220 110 220 C 55 220 0 165 0 110 C 0 55 55 0 110 0 Z"></path>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M 110 0 C 165 0 220 55 220 110 C 220 165 165 220 110 220 C 55 220 0 165 0 110 C 0 55 55 0 110 0 Z"></path>
                            <motion.image
                                variants={Motions.fadeIn("up", "tween", 1.1, 0.8)}
                                x="0" y="0" xlinkHref={photoProfile.src} width="220" height="220" style={{borderRadius: '50%', border: '4px solid white', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}/>
                        </g>
                    </svg>
                </div>
            </motion.div>
        </motion.div>
    )
}
