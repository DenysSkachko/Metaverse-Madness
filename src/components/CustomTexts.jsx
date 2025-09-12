import { motion } from 'framer-motion'
import { textContainer, textVariant2 } from '../utils/motion'

export const TypingText = ({ title, textStyles }) => (
  <motion.p variants={textContainer} className={`text-sm text-secondary ${textStyles}`}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
)

export const TitleText = ({ title, textStyles }) => {
  return <h2>TitleText</h2>
}
