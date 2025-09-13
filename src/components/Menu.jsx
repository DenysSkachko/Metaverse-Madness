import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { menuVariants } from '../utils/motion'
import { menuLinks } from '../constants/index'
import { handleScroll } from '../utils/scroll'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollBarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 z-20" />
      )}

      {isOpen && (
        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={menuVariants}
          className="fixed top-0 right-0 h-full w-74 bg-primary z-30 shadow-lg py-8 px-12 flex flex-col gap-6"
        >
          {menuLinks.map(link => (
            <button
              key={link.id}
              onClick={() => {
                setIsOpen(false)
                handleScroll(link.id)
              }}
              className="text-white font-bold text-xl text-left cursor-pointer hover:tracking-[0.2em] transition-all duration-300 uppercase"
            >
              {link.title}
            </button>
          ))}
          <div className="gradient-03 z-[-1]" />
        </motion.div>
      )}

      <img
        src="/menu.svg"
        alt="menu"
        className="w-6 h-6 object-contain cursor-pointer hover:scale-125 transition-all duration-300"
        onClick={() => setIsOpen(true)}
      />
    </>
  )
}

export default Menu
