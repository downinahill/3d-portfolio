import { motion } from 'framer-motion'

import { styles } from '../constants/styles';
import { ComputersCanvas } from './canvas'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute 
    inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915eff]">
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
          <div>
            <h2 className={`${styles.heroHeadText} text-white z-10`}>
              Hi, I'm <span className="text-[#915eff]">Brian</span>
            </h2>
            <motion.p className={`${styles.heroSubText} mt-2 text-white-100 flex flex-col`}>
              {/* I develop web and mobile apps<br className="sm:block hidden"/>, learning and applying all the newest 
              technology as well as some more familiar things. 
              I also dabble in networking and cyber security as well. */}
            </motion.p>
          </div>

          
        </div>
      </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero