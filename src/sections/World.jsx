import { motion } from 'framer-motion'
import styles from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion'
import { TypingText, TitleText } from '../components/CustomTexts'

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`} id="world">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={<>Track friends around you and invite them to play together in the same world</>}
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-0 md:mt-17 flex w-wull h-138"
        >
          <img src="/map.png" alt="Map" className="w-full h-full object-contain" />

          <div className="absolute bottom-[40%] right-[5%] md:bottom-[25%] md:right-[10%] w-30 h-30">
            <img src="/Union.svg" alt="Union" className="w-30 h-30 object-contain" />
            <img
              src="/people-01.png"
              alt="People"
              className="absolute w-15 h-15 top-1/3 left-1/2 -translate-1/2 drop-shadow-[0_0_25px_rgba(255,159,128,1)]"
            />
          </div>

          <div className="absolute top-[30%] left-10 xl:top-10 md:left-20 xl:left-40 w-30 h-30 ">
            <img src="/Union.svg" alt="Union" className="w-30 h-30 object-contain" />
            <img
              src="/people-02.png"
              alt="People"
              className="absolute w-15 h-15 top-1/3 left-1/2 -translate-1/2 drop-shadow-[0_0_25px_rgba(255,20,147,1)]"
            />
          </div>

          <div className="absolute top-1/2 left-[45%] w-30 h-30">
            <img src="/Union.svg" alt="Union" className="w-30 h-30 object-contain" />
            <img
              src="/people-03.png"
              alt="People"
              className="absolute w-15 h-15 top-1/3 left-1/2 -translate-1/2  drop-shadow-[0_0_25px_rgba(128,128,128,1)]"
            />
          </div>

          <div className="absolute top-1/3 left-[22%] bg-[#80808080] p-1.5 rounded-[26px] drop-shadow-[0_0_25px_rgba(255,20,147,0.3)]">
            <img
              src="/map-pic2.png"
              alt="People"
              className="drop-shadow-[0_0_15px_rgba(255,20,147,0.3)]"
            />

            <div className="absolute bottom-4 left-6 texl-lg  text-white whitespace-nowrap flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img src="/people-03.png" alt="" className="w-6 h-6" />
                <p className="text-xs text-secondary">+ 264 has joined</p>
              </div>
              <h4>The Upside Down</h4>
            </div>
          </div>

          <div className="absolute top-[15%] right-[28%] bg-[#80808080] p-1.5 rounded-[26px] drop-shadow-[0_0_25px_rgba(255,159,128,0.5)]">
            <img
              src="/map-pic1.png"
              alt="People"
              className="drop-shadow-[0_0_15px_rgba(255,159,128,0.5)]"
            />

            <div className="absolute bottom-4 left-6 texl-lg  text-white whitespace-nowrap flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img src="/people-01.png" alt="" className="w-6 h-6" />
                <p className="text-xs text-secondary">+ 264 has joined</p>
              </div>
              <h4>Hawkins Labs</h4>
            </div>
          </div>

          
        </motion.div>
      </motion.div>
    </section>
  )
}

export default World
