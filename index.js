import{a as l,S as u,i}from"./assets/vendor-CucEYOFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();function p(a){return l({method:"get",url:"https://pixabay.com/api/",params:{_limit:10,key:"53619914-87b740f2b3a0dec47a2b3fec9",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,lang:"ua",page:"",per_page:9}})}function d(a){const o=a.map(e=>`<li class="item-gallery">
                <a href="${e.largeImageURL}" class="a-item">
                  <img
                    class="img-gallery"
                    src="${e.webformatURL}" likes='${e.likes}' view='${e.views}' comments='${e.comments}' downloads='${e.downloads}' data-source="${e.largeImageURL} alt=${e.tags}"
                  />
                </a>
                <ul class='info'>
                  <li>Likes <span class='info-span'>${e.likes}</span></li>
                  <li>Views <span class="info-span">${e.views}</span></li>
                  <li>Comments <span class="info-span">${e.comments}</span>
                  <li>Downloads <span class="info-span">${e.downloads}</span></li>
                </ul>
              </li>`);document.querySelector("ul.gallery").insertAdjacentHTML("afterbegin",o.join(""))}function f(){document.querySelector("span").classList.add("showLoader")}function c(){document.querySelector("span").classList.remove("showLoader")}const m=new u("a",{nav:!0,captions:!0,captionsData:"data",captionsPosition:"bottom",captionType:"attr",sourceAttr:"href",overlay:!0,captionSelector:"img",captionDelay:250}),g=document.querySelector("form");g.addEventListener("submit",a=>{if(a.preventDefault(),f(),document.querySelector('input[name="search-text"]').value.toLowerCase().trim()!=="")p(document.querySelector("input[name='search-text']").value.toLowerCase().trim()).then(o=>(console.log(o),c(),o.data.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:" #ef4040;"}):i.error({message:`Sorry, here ${error}!`,position:"topRight",backgroundColor:" #ef4040;"}),o)).catch(o=>{console.log(o),c()}).then(o=>{d(o.data.hits),m.refresh()});else return i.error({message:"Sorry, input is empty!",position:"topRight",backgroundColor:" #ef4040;"})});
//# sourceMappingURL=index.js.map
