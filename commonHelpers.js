import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */function r(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`}let o;document.querySelector("[data-start]").addEventListener("click",a);document.querySelector("[data-stop]").addEventListener("click",n);function a(){const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.disabled=!0,e.disabled=!1,clearInterval(o),o=setInterval(()=>{document.body.style.backgroundColor=r()},1e3)}function n(){const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.disabled=!1,e.disabled=!0,clearInterval(o),document.body.style.backgroundColor=""}
//# sourceMappingURL=commonHelpers.js.map
