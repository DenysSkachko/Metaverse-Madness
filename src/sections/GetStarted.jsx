import { motion } from 'framer-motion'
import styles from '../styles'
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion'
import { TypingText, TitleText } from '../components/CustomTexts'
import StartSteps from '../components/StartSteps'
import { startingFeatures } from '../constants'

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
      >
        <motion.div variants={planetVariants('left')} className={`flex-1 ${styles.flexCenter}`}>
            <img src="/get-started.png" alt="Get Started" className="w-[90%] h-[90%] object-contain"/>
        </motion.div>

        <motion.div variants={fadeIn('left', 'tween' , 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col">
            <TypingText title="| How Metaverse Works" />
            <TitleText title={<>Get Started with just a few click</>} />

            <div className="mt-8 flex flex-col max-w-92 gap-6">
                {startingFeatures.map((feature, index) => (
                    <StartSteps key={feature} number={index + 1} text={feature}/>
                ))}

            </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default GetStarted
