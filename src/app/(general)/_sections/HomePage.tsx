"use client"
import Link from 'next/link';
import photoProfile from 'public/images/profile-transparent-bg.png';
import { motion } from "framer-motion";
import { Motions } from '@/utils/motion';

export default function HomePage() {
    return (
        <motion.div
            viewport={{ once: true, amount: 0.55 }}
            whileInView="show"
            initial="hidden"
            className="container min-h-[calc(100vh-95px)] sm:w-8/12 mx-auto flex flex-col items-center xl:flex-row xl:items-start xl:pt-28">
            <motion.div
                className='flex flex-col w-full xl:w-8/12'>
                <motion.span
                    variants={Motions.fadeIn("left", "tween", 0.04, 0.4)}
                    className='text-2xl text-blue-600 dark:text-blue-600 font-bold'>Hi!, I'm</motion.span>
                <motion.span
                    variants={Motions.fadeIn("up", "tween", 0.1, 1)}
                    className='text-7xl font-bold text-green-600 dark:text-purple-600'>Michael Setiawan</motion.span>
                <motion.div
                    variants={Motions.textVariants(0.9)}
                    className='mt-5 w-10/12 max-lg:w-full'>
                    <p>I&apos;m a undergraduate student of Informatics Engineering at <Link className='hover:text-green-600 dark:hover:text-purple-600' href=''>Institut Teknologi Harapan Bangsa</Link>. I have a career in the field of Information Technology, especially in the field of efficient web development. I utilize strong analytical skills and programming abilities in a variety of programming languages.</p>
                </motion.div>
            </motion.div>
            <motion.div
                variants={Motions.slideIn("right", "tween", 0.9, 1)}
                className='w-80 xl:w-96 flex items-center justify-center '>
                <svg className='fill-unique-color dark:fill-white' viewBox="0 -12 220 220" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                    <mask id="mask0" mask-type="alpha">
                        <path d="M 196 -10 C 108 24 299 123 100.226 186.353 C -28 97 14 -23 196 -11 Z"></path>
                    </mask>
                    <g mask="url(#mask0)">
                        <path d="M 196 -10 C 108 24 299 123 100.226 186.353 C -28 97 14 -23 196 -11 Z"></path>
                        <motion.image
                            variants={Motions.fadeIn("up", "tween", 1.1, 0.8)}
                            x="0" y="-20" xlinkHref={photoProfile.src} width="225" height="225" />
                    </g>
                </svg>

            </motion.div>
        </motion.div>
    )
}