import { motion } from 'framer-motion'
import styles from '../styles'
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion'
import { handleScroll } from '../utils/scroll'

const Feedback = () => {
  return (
    <section className={`${styles.paddings} relative z-10`} id="feedback">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="relative flex-[0.5] lg:max-w-92.5 flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-4xl border border-[#6a6a6a]"
        >
          <div className="feedback-gradient z-[-1]" />
          <div>
            <h4 className="font-bold sm:text-3xl text-2xl sm:leading-[40px] leading-[36px] text-white">
              Denys
            </h4>
            <p className="mt-2 sm:text-lg text-xs sm:leading-5.5 leading-4 text-white">
              Founder | Metaversus
            </p>
          </div>

          <p className="mt-4 sm:text-2xl text-lg sm:leading-11 leading-10 text-white">
            “With the development of today's technology, metaverse is very useful for today's work,
            or can be called web 3.0. by using metaverse you can use it as anything”
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center "
        >
          <img
            src="/planet-09.png"
            alt="Planet 09"
            className="w-full lg:h-152.5 h-auto min-h-52.5 object-cover rounded-4xl"
          />

          <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
          >
            <button onClick={() => handleScroll('#explore')} className="cursor-pointer hover:scale-125  hover:rotate-90 transition-all duration-300">
              <img src="/stamp.png" alt="Stamp" className="w-39 h-39 object-contain" />
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Feedback
