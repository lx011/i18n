import getData from "./newFile";

const i18nTypes = ['c', 'k', 'p', 's', 'p-ph', 'c-ph', 'k-ph', 'p-i', 'c-i', 'k-i']

const setLang = lang => window.localStorage.setItem('lx011I18nLang', lang)
const getLang = () => window.localStorage.getItem('lx011I18nLang')

const getJSON = (uri, type, _el, _attr, i) => {
  _el.forEach(j => {
    if(j.getAttribute('i18n-o') === null) {
      getData(uri, data => {
        const val = j.getAttribute(_attr)
        if(i === type) j.innerHTML = data[val]
        if(i === `${type}-i`) j.src = data[val]
        if(i === `${type}-ph`) j.placeholder = data[val]
      })
    }
  })
}

export {
  i18nTypes,
  setLang,
  getLang,
  getJSON,
}