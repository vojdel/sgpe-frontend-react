/**
    * @param {string} show
    * @param {string} hidden
    * @return {void}
    * */
export const handleTabs = (show, hidden) => {
  const showContent = document.querySelector(`#nav-${show}`)
  const showTabContent = document.querySelector(`#nav-${show}-tab`)
  const hiddenContent = document.querySelector(`#nav-${hidden}`)
  const hiddenTabContent = document.querySelector(`#nav-${hidden}-tab`)

  showTabContent.classList.add('active')
  hiddenTabContent.classList.remove('active')

  showContent.classList.remove('d-none')
  showContent.classList.remove('fade')
  showContent.classList.add('show')
  showContent.classList.add('active')
  hiddenContent.classList.remove('active')
  hiddenContent.classList.remove('show')
  hiddenContent.classList.add('d-none')
}
