function getData(t,e){var n;if(window.XMLHttpRequest&&(n=new XMLHttpRequest),!n)return alert("Giving up :( Cannot create an XMLHTTP instance"),!1;n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?e(JSON.parse(n.responseText)):console.error("There was a problem with the request."))},n.open("GET",t),n.send(null)}const i18nTypes=["c","k","p","s","p-ph","c-ph","k-ph","p-i","c-i","k-i"],setLang=t=>window.localStorage.setItem("nofwlI18nLang",t),getLang=()=>window.localStorage.getItem("nofwlI18nLang"),getJSON=(t,e,n,a,s)=>{n.forEach(n=>{null===n.getAttribute("i18n-o")&&getData(t,t=>{const i=n.getAttribute(a);s===e&&(n.innerHTML=t[i]),s===`${e}-i`&&(n.src=t[i]),s===`${e}-ph`&&(n.placeholder=t[i])})})};window.addEventListener("load",()=>{let t=document.querySelector("head meta[i18n]");if(t){t=t.getAttribute("i18n");let e=getLang();const n=document.querySelectorAll("[i18n-lang-btn]");if(e)n.forEach(t=>{t.getAttribute("i18n-lang-btn")===getLang()&&t.classList.add("i18n-active")});else{const t=document.querySelector("[i18n-def]")||n[0];t.classList.add("i18n-active"),t&&(e=t.getAttribute("i18n-lang-btn")),setLang(e)}const a=()=>{const e=t.replace("{lang}",getLang()),n=e.match(/(.*i18n\/)(.*)/)[1];i18nTypes.forEach(t=>{const a=`i18n-${t}`,s=document.querySelectorAll(`[${a}]`);if(s.length>0)switch(!0){case/^c((-ph)?|(-i)?)$/.test(t):getJSON(`${n}/pub/common.${getLang()}.json`,"c",s,a,t);break;case/^k(-ph)?$/.test(t):getJSON(`${n}/pub/keywords.${getLang()}.json`,"k",s,a,t);break;case/^p((-ph)?|(-i)?)$/.test(t):getJSON(`${e}.json`,"p",s,a,t);break;case/^s$/.test(t):document.querySelectorAll("[i18n-s]").forEach(t=>{const e=Array.from(t.classList).filter(t=>!/i18n-*/.test(t)).join(" ");t.classList=e,t.classList.add(`i18n-${getLang()}`)})}})};a(),n.forEach(t=>{t.addEventListener("click",()=>{getLang()!==t.getAttribute("i18n-lang-btn")&&(n.forEach(t=>{t.classList.remove("i18n-active")}),t.classList.add("i18n-active"),setLang(t.getAttribute("i18n-lang-btn")),a())})})}});
//# sourceMappingURL=i18n.esm.js.map
