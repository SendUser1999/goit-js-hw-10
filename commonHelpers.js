import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as y,i as c}from"./assets/vendor-651d7991.js";const g=1e3;let u=null,d=null,i=null;const n=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]"),S=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),C=document.querySelector("[data-minutes]"),T=document.querySelector("[data-seconds]");e.disabled=!0;e.addEventListener("click",w);const k={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0].getTime()<Date.now()?c.show({title:"Wrong",message:"Please choose a date in the future",theme:"dark",color:"white",backgroundColor:"red",position:"topRight"}):(u=t[0].getTime(),e.disabled=!1)}};y(n,k);function w(){l.start()}function D(t){const m=o(Math.floor(t/864e5)),h=o(Math.floor(t%864e5/36e5)),f=o(Math.floor(t%864e5%36e5/6e4)),p=o(Math.floor(t%864e5%36e5%6e4/1e3));return{days:m,hours:h,minutes:f,seconds:p}}const l={start(){i=setInterval(()=>{d=Date.now();const t=u-d;M(D(t)),e.disabled=!0,n.disabled=!0,t<=1e3&&(l.stop(),c.show({title:"Success",message:"Congratulations! The timer has stopped!",theme:"dark",color:"white",backgroundColor:"green",position:"topRight"}))},g)},stop(){clearInterval(i),e.disabled=!1,n.disabled=!1}};function M({days:t,hours:a,minutes:r,seconds:s}){S.textContent=t,b.textContent=a,C.textContent=r,T.textContent=s}function o(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map