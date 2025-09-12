import { motion } from 'framer-motion'
import styles from '../styles'
import { staggerContainer } from '../utils/motion'
import { TypingText, TitleText } from '../components/CustomTexts'
import { insights } from '../constants'
import InsightCard from '../components/InsightCard'

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText
          title={<>Insight about metaverse</>}
          textStyles="text-center"
        />

        <div className="mt-12.5 flex flex-col gap-7.5 ">
            {insights.map((insight, index) => (
                <InsightCard key={`insight-${index}`} {...insight} index={index + 1}/>
            ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Insights
