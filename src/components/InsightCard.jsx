import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const InsightCard = ({ imgUrl, title, subtitle, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className="flex flex-col md:flex-row gap-4"
    >
        <img src={imgUrl} alt={title} className="md:w-67.5 w-full h-62.5 rounded-4xl object-cover" />
        <div className="w-full flex justify-between items-center"> 
            <div className="flex-1 flex flex-col md:ml-15.5 max-w-162.5">
                <h4 className="lg:text-4xl text-2xl text-white">{title}</h4>
                <p className="mt-4 lg:text-xl text-sm text-secondary">{subtitle}</p>
            </div>
            <div className="lg:flex hidden items-center justify-center w-25 h-25 rounded-full bg-transparent border border-white">
                <img src="/arrow.svg" alt="Arrow" className="w-[40%] h-[40%] object-contain"/>
            </div>
        </div>
    </motion.div>
  )
}

export default InsightCard
