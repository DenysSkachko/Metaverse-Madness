import styles from '../styles'

const NewFeatures = ({ imgUrl, title, subtitle }) => {
  return (
    <div className="flex-1 flex flex-col sm:max-w-62 min-w-52">
      <div className={`${styles.flexCenter} w-17.5 h-17.5 rounded-3xl bg-[#323f5d]`}>
        <img src={imgUrl} alt={title} className="w-1/2 h-1/2 object-contain" />
      </div>
      <h1 className="mt-6.5 font-bold text-white leading-[30px] text-2xl">Title {title}</h1>
      <p className="flex-1 mt-4 text-lg text-[#b0b0b0] leading-[32px]">{subtitle}</p>
    </div>
  )
}

export default NewFeatures
