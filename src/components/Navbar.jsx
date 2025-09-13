import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion'
import Menu from './Menu'
import Search from './Search'
import styles from '../styles'

const Navbar = () => (
  <div className="sm:pl-16 pl-6 relative z-50">
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.innerWidth} mx-auto py-8 relative 2xl:px-0 px-6`}
    >
      <div className="w-full mx-auto flex justify-between items-center gap-8">
        <Search />
        <h2 className="font-extrabold text-3xl leading-7.5 text-white uppercase">Metaverse</h2>
        <Menu />
      </div>
      <div className="absolute w-[50%] inset-0 gradient-01" />
    </motion.nav>
  </div>
)

export default Navbar
