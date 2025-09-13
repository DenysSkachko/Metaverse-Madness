export const handleScroll = id => {
  const el = document.getElementById(id.replace('#', ''))
  if (!el) return

  const offset = 50
  const top = el.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({ top, behavior: 'smooth' })
}
