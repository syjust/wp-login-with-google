(()=>{var e,o={525:()=>{({init:function(){document.addEventListener("DOMContentLoaded",this.onContentLoaded),document.getElementById("remember-google-login").addEventListener("change",this.rememberMe)},onContentLoaded:function(){this.form=document.getElementById("loginform")||document.getElementById("registerform"),document.querySelector(".wp_google_login")&&null===this.form&&(document.cookie="vip-go-cb=1;wp-login-with-google=1;path="+encodeURI(window.location.pathname)+";"),null!==this.form&&(this.googleLoginButton=this.form.querySelector(".wp_google_login"),this.googleLoginButton.classList.remove("hidden"),this.form.append(this.googleLoginButton))},rememberMe:function(){var e=document.getElementsByClassName("wp_google_login__button")[0];if(!0===this.checked){window.remember=!0;var o=e.getAttribute("href"),t=o.substring(o.indexOf("&state=")+7,o.indexOf("&scope")),n=JSON.parse(atob(t));n.remember=!0;var r=btoa(JSON.stringify(n));window.orignalParams=o,o=o.replace(t,r),e.setAttribute("href",o)}!1===this.checked&&!0===window.remember&&e.setAttribute("href",window.orignalParams)}}).init()},879:()=>{}},t={};function n(e){var r=t[e];if(void 0!==r)return r.exports;var i=t[e]={exports:{}};return o[e](i,i.exports,n),i.exports}n.m=o,e=[],n.O=(o,t,r,i)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){for(var[t,r,i]=e[d],l=!0,s=0;s<t.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](t[s])))?t.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(d--,1);var g=r();void 0!==g&&(o=g)}}return o}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[t,r,i]},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={112:0,229:0};n.O.j=o=>0===e[o];var o=(o,t)=>{var r,i,[a,l,s]=t,g=0;if(a.some((o=>0!==e[o]))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var d=s(n)}for(o&&o(t);g<a.length;g++)i=a[g],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})(),n.O(void 0,[229],(()=>n(525)));var r=n.O(void 0,[229],(()=>n(879)));r=n.O(r)})();