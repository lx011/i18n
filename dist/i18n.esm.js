function getData(e,t){var n;if(window.XMLHttpRequest?n=new XMLHttpRequest:window.ActiveXObject&&(n=new ActiveXObject("Microsoft.XMLHTTP")),!n)return alert("Giving up :( Cannot create an XMLHTTP instance"),!1;n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?t(n.responseText):console.error("There was a problem with the request."))},n.open("GET",e),n.send(null)}const i18nTypes=["c","k","p","s","p-ph","c-ph","k-ph","p-i","c-i","k-i"],setLang=e=>window.localStorage.setItem("lx011I18nLang",e),getLang=()=>window.localStorage.getItem("lx011I18nLang"),getJSON=(e,t,n,a,i)=>{n.forEach(n=>{null===n.getAttribute("i18n-o")&&getData(e,e=>{e=JSON.parse(e);let s=n.getAttribute(a);i===t&&(n.innerHTML=e[s]),i===`${t}-i`&&(n.src=e[s]),i===`${t}-ph`&&(n.placeholder=e[s])})})};window.addEventListener("load",()=>{let e=document.querySelector("head meta[i18n]");if(e){e=e.getAttribute("i18n");let t=getLang(),n=document.querySelectorAll("[i18n-lang-btn]");if(t)n.forEach(e=>{e.getAttribute("i18n-lang-btn")===getLang()&&e.classList.add("i18n-active")});else{let e=document.querySelector("[i18n-def]")||n[0];e.classList.add("i18n-active"),e&&(t=e.getAttribute("i18n-lang-btn")),setLang(t)}const a=()=>{let t=e.replace("{lang}",getLang()),n=t.match(/(.*i18n\/)(.*)/)[1];i18nTypes.forEach(e=>{let a=`i18n-${e}`,i=document.querySelectorAll(`[${a}]`);if(i.length>0)switch(!0){case/^c((-ph)?|(-i)?)$/.test(e):getJSON(`${n}/pub/common.${getLang()}.json`,"c",i,a,e);break;case/^k(-ph)?$/.test(e):getJSON(`${n}/pub/keywords.${getLang()}.json`,"k",i,a,e);break;case/^p((-ph)?|(-i)?)$/.test(e):getJSON(`${t}.json`,"p",i,a,e);break;case/^s$/.test(e):document.querySelectorAll("[i18n-s]").forEach(e=>{let t=Array.from(e.classList).filter(e=>!/i18n-*/.test(e)).join(" ");e.classList=t,e.classList.add(`i18n-${getLang()}`)})}})};a(),n.forEach(e=>{e.addEventListener("click",()=>{getLang()!==e.getAttribute("i18n-lang-btn")&&(n.forEach(e=>{e.classList.remove("i18n-active")}),e.classList.add("i18n-active"),setLang(e.getAttribute("i18n-lang-btn")),a())})})}});
//# sourceMappingURL=i18n.esm.js.map
