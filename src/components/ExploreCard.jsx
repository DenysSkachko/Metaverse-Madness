import { AnimatePresence, motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn } from '../utils/motion'

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } ${styles.flexCenter}
        min-w-42.5 h-175 transition-all duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)] cursor-pointer overflow-hidden`}
      onClick={() => handleClick(id)}
    >
      <img src={imgUrl} alt={title} className="absolute w-full h-full object-cover rounded-3xl" />

      <AnimatePresence mode="wait">
        {active !== id ? (
          <motion.h3
            key="title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1, ease: 'easeInOut' }}
            className="font-semibold sm:text-2xl text-lg text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]"
          >
            {title}
          </motion.h3>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute bottom-0 p-8 justify-start w-full flex flex-col bg-[rgba(0,0,0,0.5)] rounded-b-3xl"
          >
            <div className={`${styles.flexCenter} w-15 h-15 rounded-3xl glassmorphism mb-4`}>
              <img src="/headset.svg" alt="headset" className="w-1/2 h-1/2 object-contain" />
            </div>
            <p className="leading-[20px] text-white uppercase">Enter the Metaverse</p>
            <h2 className="mt-6 font-semibold sm:text-3xl text-2xl text-white">{title}</h2>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default ExploreCard
