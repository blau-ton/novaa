function setLang(l){
  document.documentElement.lang=l;
  document.querySelectorAll('[data-lang]').forEach(function(e){e.classList.toggle('on',e.dataset.lang===l)});
  document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.set===l)});
  try{localStorage.setItem('novaa-lang',l)}catch(e){}
}
document.querySelectorAll('.lang button').forEach(function(b){b.onclick=function(){setLang(b.dataset.set)}});
var saved=null;try{saved=localStorage.getItem('novaa-lang')}catch(e){}
setLang(saved||((navigator.language||'de').slice(0,2)==='de'?'de':'en'));
