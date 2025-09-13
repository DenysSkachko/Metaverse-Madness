import { motion } from 'framer-motion'
import styles from '../styles'
import { socials } from '../constants'
import { footerVariants } from '../utils/motion'
import { handleScroll } from '../utils/scroll'

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-6xl text-5xl text-white">Enter the Metaverse </h4>
          <button
            type="button"
            onClick={() => handleScroll('#explore')}
            className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-4xl gap-3 cursor-pointer group hover:scale-110 transition-all duration-300"
          >
            <img src="/headset.svg" alt="Headset" className="w-6 h-6 object-contain" />
            <span className="text-white group-hover:tracking-widest transition-all duration-300">
              ENTER METAVERSE
            </span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-12.5 h-0.5 opacity-10 bg-white" />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <h4 className="font-extrabold text-2xl text-white uppercase">Metaverse </h4>
            <p className="text-sm text-white opacity-70">
              Copyright © 2021 - 2022 Metaversus. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socials.map(social => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl hover:text-pink-500 transition-all hover:scale-125 duration-300"
                >
                  <social.Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
