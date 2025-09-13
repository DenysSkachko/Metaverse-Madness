import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Search = () => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleSearch = () => setIsOpen(prev => !prev)

  return (
    <div ref={containerRef} className="relative flex items-center z-30">
      <motion.img
        src="/search.svg"
        alt="search"
        className="w-6 h-6 cursor-pointer z-20"
        onClick={toggleSearch}
        whileHover={{ scale: 1.2 }}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 200, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="ml-6 px-4 rounded-md bg-primary/50 h-12 text-white placeholder-gray-400 outline-none absolute left-6"
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Search
