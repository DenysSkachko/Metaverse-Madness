import { motion } from 'framer-motion'
import styles from '../styles'
import { slideIn, staggerContainer, textVariant, zoomIn } from '../utils/motion'
import { handleScroll } from '../utils/scroll'
import { socials } from '../constants'

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`} id="hero">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className={`${styles.colCenter} relative z-11`}>
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Metaverse
          </motion.h1>
          <motion.div variants={textVariant(1.2)} className="flex items-center">
            <h1 className={styles.heroHeading}>Ma</h1>
            <div className={styles.heroDText} />
            <h1 className={styles.heroHeading}>ness</h1>
          </motion.div>

          <motion.div variants={textVariant(1.1)} className="absolute right-0 top-6 2xl:px-0 px-6">
            <div className="flex flex-col gap-4">
              {socials.map(social => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl hover:text-pink-500 transition-all hover:scale-125 duration-300"
                >
                  <social.Icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-5 -mt-3"
        >
          <div className="absolute w-full h-75 hero-gradient rounded-tl-[140px] z-0 -top-7.5" />
          <img
            src="/cover.png"
            alt="cover"
            className="w-full sm:h-160 h-87.5 object-cover rounded-tl-[140px] z-10 relative"
          />

          <motion.div
            variants={zoomIn(0.4, 1)}
            className="w-full flex justify-end sm:-mt-17.5 -mt-12.5 pr-10 relative z-10 "
          >
            <button
              onClick={() => handleScroll('#explore')}
              className="cursor-pointer hover:scale-125  hover:rotate-90 transition-all duration-300"
            >
              <img
                src="./stamp.png"
                alt="stamp"
                className="sm:w-40 w-25 sm:h-40 h-25 object-contain"
              />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
