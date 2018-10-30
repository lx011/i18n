import { i18nTypes as types, getLang, setLang, getJSON } from './utils'

window.addEventListener('load', () => {
  let getFormat = document.querySelector('head meta[i18n]')

  if(getFormat) {
    getFormat = getFormat.getAttribute('i18n')
    // (Get & Set) language
    let _getLang = getLang()
    const langBtns = document.querySelectorAll('[i18n-lang-btn]')
    if(!_getLang) {
      const currLang = document.querySelector('[i18n-def]') || langBtns[0]
      currLang.classList.add('i18n-active')
      if(currLang) _getLang = currLang.getAttribute('i18n-lang-btn')
      setLang(_getLang)
    } else {
      langBtns.forEach(i => {
        if(i.getAttribute('i18n-lang-btn') === getLang()) {
          i.classList.add('i18n-active')
        }
      })
    }
    
    const rules = () => {
      const path = getFormat.replace('{lang}', getLang())
      const basePath = path.match(/(.*i18n\/)(.*)/)[1]
      types.forEach(i => {
        const _attr = `i18n-${i}`
        const _el = document.querySelectorAll(`[${_attr}]`)
        if(_el.length > 0) {
          switch (true) {
            case /^c((-ph)?|(-i)?)$/.test(i): // common
              getJSON(`${basePath}/pub/common.${getLang()}.json`, 'c', _el, _attr, i)
              break
            case /^k(-ph)?$/.test(i): // keyword
              getJSON(`${basePath}/pub/keywords.${getLang()}.json`, 'k', _el, _attr, i)
              break
            case /^p((-ph)?|(-i)?)$/.test(i): // current page
              getJSON(`${path}.json`, 'p', _el, _attr, i)
              break
            case /^s$/.test(i): // i18n class
              document.querySelectorAll('[i18n-s]').forEach(i => {
                const notI18nCls = Array.from(i.classList).filter(j => !/i18n-*/.test(j)).join(' ')
                i.classList = notI18nCls
                i.classList.add(`i18n-${getLang()}`)
              })
              break
            default:
              break
          }
        }
      })
    }
    rules()
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if(getLang() !== btn.getAttribute('i18n-lang-btn')) {
          langBtns.forEach(i => {
            i.classList.remove('i18n-active')
          })
          btn.classList.add('i18n-active')
          setLang(btn.getAttribute('i18n-lang-btn'))
          rules()
        }
      })
    })
  }
})