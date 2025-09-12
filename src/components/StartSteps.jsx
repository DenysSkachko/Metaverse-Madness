import styles from '../styles'

const StartSteps = ({ number, text }) => {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div className={`${styles.flexCenter} w-17.5 h-17.5 rounded-3xl bg-[#323f5d]`}>
        <p className="font-bold text-xl text-white"> {number} </p>
      </div>
      <p className="flex-1 ml-7.5 text-lg text-[#B0B0B0] leadeing-[30px]">{text}</p>
    </div>
  )
}

export default StartSteps
