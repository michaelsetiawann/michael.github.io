"use client"
import Link from 'next/link';
import photoProfile from 'public/profile-transparent-bg.png';
import { motion } from "framer-motion";
import { Motions } from '@/utils/motion';
import Landing from './landing';


export default function Home() {

  return (
    <>
      <motion.div
        viewport={{ once: true, amount: 0.55 }}
        whileInView="show"
        initial="hidden"
        className="container xl:pt-20 sm:w-8/12 mx-auto flex flex-col items-center xl:flex-row">
        <motion.div
          className='flex flex-col w-full xl:w-8/12'>
          <motion.span
            variants={Motions.fadeIn("left", "tween", 0.04, 0.4)}
            className='text-xl dark:text-neutral-300 '>Hi👋, i&apos;m</motion.span>
          <motion.span
            variants={Motions.fadeIn("up", "tween", 0.1, 1)}
            className='text-7xl font-bold text-cyan-600 dark:text-amber-500'>Glenn Pray</motion.span>
          <motion.div
            variants={Motions.textVariants(0.9)}
            className='mt-5 w-10/12 max-lg:w-full'>
            <p>I&apos;m a undergraduate student of Informatics Engineering at <Link className='hover:text-cyan-500 dark:hover:text-amber-500' href=''>Institut Teknologi Harapan Bangsa</Link>. Passionate about technology and specializing in Software Engineering.</p>
            <p>I&apos;m dedicated to developing my skills and seeking growth opportunities. I approach challenges practically, aiming to enhance my expertise and contribute to the ever-changing tech field.</p>
          </motion.div>
        </motion.div>
        <motion.div
          variants={Motions.slideIn("right", "tween", 0.9, 1)}
          className='w-80 xl:w-96 flex items-center justify-center '>
          <svg className=' fill-cyan-600 dark:fill-amber-500' viewBox="0 -12 220 220" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
            <mask id="mask0" mask-type="alpha">
              <path d="M 190.312 36.4879 C 228 87 201.309 102.826 182.328 134.186 C 163.346 165.547 130.807 187.559 100.226 186.353 C 69.6454 185.297 12 172 21.7403 129.362 C 28 107 17 58 6.6758 34.5279 C 2 17 21 -16 97.9666 0.0016 C 134 13 174.193 10.857 190.312 36.4879 Z"></path>
            </mask>
            <g mask="url(#mask0)">
              <path d="M 190.312 36.4879 C 228 87 201.309 102.826 182.328 134.186 C 163.346 165.547 130.807 187.559 100.226 186.353 C 69.6454 185.297 12 172 21.7403 129.362 C 28 107 17 58 6.6758 34.5279 C 2 17 21 -16 97.9666 0.0016 C 134 13 174.193 10.857 190.312 36.4879 Z"></path>
              <motion.image
                variants={Motions.fadeIn("up", "tween", 1.1, 0.8)}
              x="0" y="-35" xlinkHref={photoProfile.src} width="225" height="225"/>
            </g>
          </svg>

        </motion.div>
      </motion.div>
      <div className='h-screen mt-44 md:mt-52 xl:mt-72'>
        <Landing />
      </div>
    </>
  )
}
