import { motion } from 'framer-motion'
import styles from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion'
import { TypingText, TitleText } from '../components/CustomTexts'

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
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

        <motion.div variants={fadeIn('up', 'tween', 0.3 , 1)} className="relative mt-0 md:mt-17 flex w-wull h-138">
            <img src="/map.png" alt="Map" className="w-full h-full object-contain"/>

            <div className="absolute bottom-[40%] right-[5%] md:bottom-[25%] md:right-[10%] w-17.5 h-17.5 p-1.5 rounded-full bg-[#5d6680]">
                <img src="/people-01.png" alt="People" className="w-full h-full"/>
            </div>
            <div className="absolute top-[30%] left-10  xl:top-10 md:left-20 xl:left-40 w-17.5 h-17.5 p-1.5 rounded-full bg-[#5d6680]">
                <img src="/people-02.png" alt="People" className="w-full h-full"/>
            </div>
            <div className="absolute top-1/2 left-[45%] w-17.5 h-17.5 p-1.5 rounded-full bg-[#5d6680]">
                <img src="/people-03.png" alt="People" className="w-full h-full"/>
            </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default World
