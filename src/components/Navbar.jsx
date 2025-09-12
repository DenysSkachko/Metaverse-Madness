import { motion } from 'framer-motion'

import styles from '../styles'
import { navVariants } from '../utils/motion'

const Navbar = () => (
  <>
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="sm:px-16 px-6 py-8 relative"
    >
      <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8">
        <img src="/search.svg" alt="search" className="w-6 h-6 object-contain" />
        <h2 className="font-extrabold text-2xl leading-[30px] text-white">METAVERSUS</h2>
        <img src="/menu.svg" alt="menu" className="w-6 h-6 object-contain" />
      </div>

      <div className="absolute w-[50%] inset-0 gradient-01" />
    </motion.nav>
  </>
)

export default Navbar
