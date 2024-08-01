/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e,t){'use strict';const o='opt-in',n='opt-out',a='show--consent',s='show--preferences',c='show--additionalinfo',r='disable--interaction',i='data-category',l='div',d='button',f='aria-hidden',_='btn-group',u='click',p='data-role',m='consentModal',g='preferencesModal';class b{constructor(){this.t={mode:o,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],v:!1,h:null,C:null,S:null,M:'',j:!0,D:!1,T:!1,A:!1,N:!1,k:[],H:!1,V:!0,I:[],O:!1,P:'',L:!1,F:[],R:[],q:[],B:[],J:!1,U:!1,G:!1,$:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},oe:[]},this.ne={ae:{},se:{}},this.ce={},this.re={ie:'cc:onFirstConsent',le:'cc:onConsent',de:'cc:onChange',fe:'cc:onModalShow',_e:'cc:onModalHide',ue:'cc:onModalReady'}}}const v=new b,y=(e,t)=>e.indexOf(t),h=(e,t)=>-1!==y(e,t),w=e=>Array.isArray(e),C=e=>'string'==typeof e,S=e=>!!e&&'object'==typeof e&&!w(e),x=e=>'function'==typeof e,M=e=>Object.keys(e),j=e=>Array.from(new Set(e)),D=()=>document.activeElement,T=e=>e.preventDefault(),A=(e,t)=>e.querySelectorAll(t),N=e=>e.dispatchEvent(new Event('change')),k=e=>{const t=document.createElement(e);return e===d&&(t.type=e),t},E=(e,t,o)=>e.setAttribute(t,o),H=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},V=(e,t,o)=>e.getAttribute(o?'data-'+t:t),I=(e,t)=>e.appendChild(t),O=(e,t)=>e.classList.add(t),P=(e,t)=>O(e,'cm__'+t),L=(e,t)=>O(e,'pm__'+t),F=(e,t)=>O(e,'aim__'+t),R=(e,t)=>e.classList.remove(t),q=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=q(n)}return t},B=()=>{const e={},{F:t,X:o,Y:n}=v.o;for(const a of t)e[a]=$(n[a],M(o[a]));return e},J=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),U=(e,t,o,n)=>{e.addEventListener(t,o),n&&v.o.m.push({pe:e,me:t,ge:o})},G=()=>{const e=v.t.cookie.expiresAfterDays;return x(e)?e(v.o.P):e},$=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!h(n,e))).concat(n.filter((e=>!h(o,e))))},z=e=>{v.o.R=j(e),v.o.P=(()=>{let e='custom';const{R:t,F:o,q:n}=v.o,a=t.length;return a===o.length?e='all':a===n.length&&(e='necessary'),e})()},Q=(e,t,o,n)=>{const a='accept-',{show:s,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,d=e||document,f=e=>A(d,`[data-cc="${e}"]`),_=(e,t)=>{T(e),l(t),i(),r()},p=f('show-preferencesModal'),m=f('show-consentModal'),g=f(a+'all'),b=f(a+'necessary'),y=f(a+'custom'),h=v.t.lazyHtmlGeneration;for(const e of p)E(e,'aria-haspopup','dialog'),U(e,u,(e=>{T(e),c()})),h&&(U(e,'mouseenter',(e=>{T(e),v.o.N||o(t,n)}),!0),U(e,'focus',(()=>{v.o.N||o(t,n)})));for(let e of m)E(e,'aria-haspopup','dialog'),U(e,u,(e=>{T(e),s(!0)}),!0);for(let e of g)U(e,u,(e=>{_(e,'all')}),!0);for(let e of y)U(e,u,(e=>{_(e)}),!0);for(let e of b)U(e,u,(e=>{_(e,[])}),!0)},K=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},W=(e,t)=>{const o=n=>{n.target.removeEventListener('transitionend',o),'opacity'===n.propertyName&&'1'===getComputedStyle(e).opacity&&K((e=>1===e?v.ne.be:2===e?v.ne.ve:v.ne.ye)(t))};U(e,'transitionend',o)};let X;const Y=e=>{clearTimeout(X),e?O(v.ne.he,r):X=setTimeout((()=>{R(v.ne.he,r)}),500)},Z=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],ee=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${Z[e]}"/></svg>`,te=e=>{const t=v.ne,o=v.o;(e=>{const n=e===t.we,a=o.i.disablePageInteraction?t.he:n?t.Ce:t.he;U(a,'keydown',(t=>{if('Tab'!==t.key||!(n?o.T&&!o.A:o.A))return;const a=D(),s=n?o.$:o.K;0!==s.length&&(t.shiftKey?a!==s[0]&&e.contains(a)||(T(t),K(s[1])):a!==s[1]&&e.contains(a)||(T(t),K(s[0])))}),!0)})(e)},oe=['[href]',d,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),ne=e=>{const{o:t,ne:o}=v,n=(e,t)=>{const o=A(e,oe);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.D&&n(o.we,t.$),2===e&&t.N&&n(o.Se,t.K)},ae=(e,t,o)=>{const{de:n,le:a,ie:s,_e:c,ue:r,fe:i}=v.ce,l=v.re;if(t){const n={modalName:t};return e===l.fe?x(i)&&i(n):e===l._e?x(c)&&c(n):(n.modal=o,x(r)&&r(n)),J(e,n)}const d={cookie:v.o.p};e===l.ie?x(s)&&s(q(d)):e===l.le?x(a)&&a(q(d)):(d.changedCategories=v.o.I,d.changedServices=v.o.ee,x(n)&&n(q(d))),J(e,q(d))},se=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},ce=e=>{const{Y:t,ee:o,F:n,X:a,oe:s,p:c,I:r}=v.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=a[e][o];if(!n)continue;const{onAccept:s,onReject:c}=n;!n.xe&&h(t[e],o)?(n.xe=!0,x(s)&&s()):n.xe&&!h(t[e],o)&&(n.xe=!1,x(c)&&c())}}if(!v.t.manageScriptTags)return;const l=s,d=e||c.categories||[],f=(e,n)=>{if(n>=e.length)return;const a=s[n];if(a.Me)return f(e,n+1);const c=a.je,l=a.De,_=a.Te,u=h(d,l),p=!!_&&h(t[l],_);if(!_&&!a.Ae&&u||!_&&a.Ae&&!u&&h(r,l)||_&&!a.Ae&&p||_&&a.Ae&&!p&&h(o[l]||[],_)){a.Me=!0;const t=V(c,'type',!0);H(c,'type',!!t),H(c,i);let o=V(c,'src',!0);o&&H(c,'src',!0);const s=k('script');s.textContent=c.innerHTML;for(const{nodeName:e}of c.attributes)E(s,e,c[e]||V(c,e));t&&(s.type=t),o?s.src=o:o=c.src;const r=!!o&&(!t||['text/javascript','module'].includes(t));if(r&&(s.onload=s.onerror=()=>{f(e,++n)}),c.replaceWith(s),r)return}f(e,++n)};f(l,0)},re='bottom',ie='left',le='center',de='right',fe='inline',_e='wide',ue='pm--',pe='box',me=['middle','top',re],ge=[ie,le,de],be={box:{Ne:[_e,fe],ke:me,Ee:ge,He:re,Ve:de},cloud:{Ne:[fe],ke:me,Ee:ge,He:re,Ve:le},bar:{Ne:[fe],ke:me.slice(1),Ee:[],He:re,Ve:''}},ve={box:{Ne:[],ke:[],Ee:[],He:'',Ve:''},bar:{Ne:[_e],ke:[],Ee:[ie,de],He:'',Ve:ie}},ye={box:{Ne:[],ke:[],Ee:[],He:'',Ve:''},bar:{Ne:[_e],ke:[],Ee:[ie,de],He:'',Ve:ie}},he=e=>{const t=v.o.i.guiOptions,o=t&&t.consentModal,n=t&&t.preferencesModal,a=t&&t.additionalInfoModal;0===e&&we(v.ne.we,be,o,'cm--',pe,'cm'),1===e&&we(v.ne.Se,ve,n,ue,pe,'pm'),2===e&&we(v.ne.Ie,ye,a,'aim--',pe,'aim')},we=(e,t,o,n,a,s)=>{e.className=s;const c=o&&o.layout,r=o&&o.position,i=o&&o.flipButtons,l=!o||!1!==o.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],u=f in t?f:a,p=t[u],m=h(p.Ne,_)&&_,g=r&&r.split(' ')||[],b=g[0],y=n===ue?g[0]:g[1],w=h(p.ke,b)?b:p.He,C=h(p.Ee,y)?y:p.Ve,S=t=>{t&&O(e,n+t)};S(u),S(m),S(w),S(C),i&&S('flip');const x=s+'__btn--secondary';if('cm'===s){const{Oe:e,Pe:t}=v.ne;e&&(l?R(e,x):O(e,x)),t&&(l?R(t,x):O(t,x))}else{const{Le:e}=v.ne;e&&(l?R(e,x):O(e,x))}},Ce=(e,t)=>{const o=v.o,n=v.ne,{hide:a,hidePreferences:s,acceptCategory:c}=e,r=e=>{c(e),s(),a()},i=o.u&&o.u.preferencesModal;if(!i)return;const m=i.title,b=i.closeIconLabel,y=i.acceptAllBtn,h=i.acceptNecessaryBtn,w=i.savePreferencesBtn,x=i.sections||[],j=y||h||w;if(n.Fe)n.Re=k(l),L(n.Re,'body');else{n.Fe=k(l),O(n.Fe,'pm-wrapper');const e=k('div');O(e,'pm-overlay'),I(n.Fe,e),U(e,u,s),n.Se=k(l),O(n.Se,'pm'),E(n.Se,'role','dialog'),E(n.Se,f,!0),E(n.Se,'aria-modal',!0),E(n.Se,'aria-labelledby','pm__title'),U(n.he,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.qe=k(l),L(n.qe,'header'),n.Be=k('h2'),L(n.Be,'title'),n.Be.id='pm__title',n.Je=k(d),L(n.Je,'close-btn'),E(n.Je,'aria-label',i.closeIconLabel||''),U(n.Je,u,s),n.Ue=k('span'),n.Ue.innerHTML=ee(),I(n.Je,n.Ue),n.Ge=k(l),L(n.Ge,'body'),n.$e=k(l),L(n.$e,'footer');var D=k(l);O(D,'btns');var T=k(l),A=k(l);L(T,_),L(A,_),I(n.$e,T),I(n.$e,A),I(n.qe,n.Be),I(n.qe,n.Je),n.ve=k(l),E(n.ve,'tabIndex',-1),I(n.Se,n.ve),I(n.Se,n.qe),I(n.Se,n.Ge),j&&I(n.Se,n.$e),I(n.Fe,n.Se)}let N;m&&(n.Be.innerHTML=m,b&&E(n.Je,'aria-label',b)),x.forEach(((e,t)=>{const a=e.title,s=e.description,c=e.linkedCategory,r=c&&o.L[c],_=e.cookieTable,p=_&&_.body,m=_&&_.caption,g=p&&p.length>0,b=!!r,v=b&&o.X[c],y=S(v)&&M(v)||[],h=b&&(!!s||!!g||M(v).length>0);var w=k(l);if(L(w,'section'),h||s){var x=k(l);L(x,'section-desc-wrapper')}let j=y.length;if(h&&j>0){const e=k(l);L(e,'section-services');for(const t of y){const o=v[t],n=o&&o.label||t,a=k(l),s=k(l),i=k(l),d=k(l);L(a,'service'),L(d,'service-title'),L(s,'service-header'),L(i,'service-icon');const f=Se(n,t,r,!0,c);d.innerHTML=n,I(s,i),I(s,d),I(a,s),I(a,f),I(e,a)}I(x,e)}if(a){var D=k(l),T=k(b?d:l);if(L(D,'section-title-wrapper'),L(T,'section-title'),T.innerHTML=a,I(D,T),b){const e=k('span');e.innerHTML=ee(2,3.5),L(e,'section-arrow'),I(D,e),w.className+='--toggle';const t=Se(a,c,r);let o=i.serviceCounterLabel;if(j>0&&C(o)){let e=k('span');L(e,'badge'),L(e,'service-counter'),E(e,f,!0),E(e,'data-servicecounter',j),o&&(o=o.split('|'),o=o.length>1&&j>1?o[1]:o[0],E(e,'data-counterlabel',o)),e.innerHTML=j+(o?' '+o:''),I(T,e)}if(h){L(w,'section--expandable');var A=c+'-desc';E(T,'aria-expanded',!1),E(T,'aria-controls',A)}I(D,t)}else E(T,'role','heading'),E(T,'aria-level','3');I(w,D)}if(s){var H=k('p');L(H,'section-desc'),H.innerHTML=s,I(x,H)}if(h&&(E(x,f,'true'),x.id=A,((e,t,o)=>{U(T,u,(()=>{t.classList.contains('is-expanded')?(R(t,'is-expanded'),E(o,'aria-expanded','false'),E(e,f,'true')):(O(t,'is-expanded'),E(o,'aria-expanded','true'),E(e,f,'false'))}))})(x,w,T),g)){const e=k('table'),o=k('thead'),a=k('tbody');if(m){const t=k('caption');L(t,'table-caption'),t.innerHTML=m,e.appendChild(t)}L(e,'section-table'),L(o,'table-head'),L(a,'table-body');const s=_.headers,c=M(s),r=n.ze.createDocumentFragment(),i=k('tr');for(const e of c){const o=s[e],n=k('th');n.id='cc__row-'+o+t,E(n,'scope','col'),L(n,'table-th'),n.innerHTML=o,I(r,n)}I(i,r),I(o,i);const d=n.ze.createDocumentFragment();for(const e of p){const o=k('tr');L(o,'table-tr');for(const n of c){const a=s[n],c=e[n],r=k('td'),i=k(l);L(r,'table-td'),E(r,'data-column',a),E(r,'headers','cc__row-'+a+t),i.insertAdjacentHTML('beforeend',c),I(r,i),I(o,r)}I(d,o)}I(a,d),I(e,o),I(e,a),I(x,e)}(h||s)&&I(w,x);const V=n.Re||n.Ge;b?(N||(N=k(l),L(N,'section-toggles')),N.appendChild(w)):N=null,I(V,N||w)})),y&&(n.Qe||(n.Qe=k(d),L(n.Qe,'btn'),E(n.Qe,p,'all'),I(T,n.Qe),U(n.Qe,u,(()=>r('all')))),n.Qe.innerHTML=y),h&&(n.Le||(n.Le=k(d),L(n.Le,'btn'),E(n.Le,p,'necessary'),I(T,n.Le),U(n.Le,u,(()=>r([])))),n.Le.innerHTML=h),w&&(n.Ke||(n.Ke=k(d),L(n.Ke,'btn'),L(n.Ke,'btn--secondary'),E(n.Ke,p,'save'),I(A,n.Ke),U(n.Ke,u,(()=>r()))),n.Ke.innerHTML=w),n.Re&&(n.Se.replaceChild(n.Re,n.Ge),n.Ge=n.Re),he(1),o.N||(o.N=!0,ae(v.re.ue,g,n.Se),t(e),I(n.Ce,n.Fe),te(n.Se),setTimeout((()=>O(n.Fe,'cc--anim')),100)),ne(2)};function Se(e,t,o,n,a){const s=v.o,c=v.ne,r=k('label'),l=k('input'),d=k('span'),_=k('span'),p=k('span'),m=k('span'),g=k('span');if(m.innerHTML=ee(1,3),g.innerHTML=ee(0,3),l.type='checkbox',O(r,'section__toggle-wrapper'),O(l,'section__toggle'),O(m,'toggle__icon-on'),O(g,'toggle__icon-off'),O(d,'toggle__icon'),O(_,'toggle__icon-circle'),O(p,'toggle__label'),E(d,f,'true'),n?(O(r,'toggle-service'),E(l,i,a),c.se[a][t]=l):c.ae[t]=l,n?(e=>{U(l,'change',(()=>{const t=c.se[e],o=c.ae[e];s.Z[e]=[];for(let o in t){const n=t[o];n.checked&&s.Z[e].push(n.value)}o.checked=s.Z[e].length>0}))})(a):(e=>{U(l,u,(()=>{const t=c.se[e],o=l.checked;s.Z[e]=[];for(let n in t)t[n].checked=o,o&&s.Z[e].push(n)}))})(t),l.value=t,p.textContent=e.replace(/<.*>.*<\/.*>/gm,''),I(_,g),I(_,m),I(d,_),s.j)(o.readOnly||o.enabled)&&(l.checked=!0);else if(n){const e=s.Y[a];l.checked=o.readOnly||h(e,t)}else h(s.R,t)&&(l.checked=!0);return o.readOnly&&(l.disabled=!0),I(r,l),I(r,d),I(r,p),r}const xe=async(e,t)=>{const o=v.o,n=v.ne,{hideAdditionalInfo:a}=e,s=o.u&&o.u.additionalInfoModal;if(!s)return;const c=s.title,r=s.description,i=s.closeBtn;if(!n.We){n.We=k(l),O(n.We,'aim-wrapper');const e=k(l);O(e,'aim-overlay'),I(n.We,e),U(e,u,a),n.Ie=k(l),O(n.Ie,'aim'),E(n.Ie,'role','dialog'),E(n.Ie,f,!0),E(n.Ie,'aria-modal',!0),E(n.Ie,'aria-labelledby','aim__title'),U(n.he,'keydown',(e=>{27===e.keyCode&&a()}),!0),n.Xe=k(l),F(n.Xe,'header'),n.Ye=k('h2'),F(n.Ye,'title'),n.Ye.id='aim__title',n.Ze=k(d),F(n.Ze,'close-btn'),E(n.Ze,'aria-label',i.ariaLabel||''),U(n.Ze,u,a),n.et=k('span'),n.et.innerHTML=ee(),I(n.Ze,n.et),n.tt=k(l),F(n.tt,'body'),n.ot=k(l),F(n.ot,'footer');var p=k(l);F(p,_),I(n.ot,p),I(n.Xe,n.Ye),I(n.Xe,n.Ze),n.ye=k(l),E(n.ye,'tabindex',-1),I(n.Ie,n.ye),I(n.Ie,n.Xe),I(n.Ie,n.tt),i&&I(n.Ie,n.ot),I(n.We,n.Ie)}if(c&&(n.Ye.innerHTML=c,i&&E(n.Ze,'aria-label',i)),r){const e=k(l);O(e,'aim-description'),e.innerHTML=r,I(n.tt,e)}(async()=>{const e=await async function(){const e='https://669fa568b132e2c136fe9aba.mockapi.io/api/project-info',t=e+'/project-info',o=e+'/users',n=await fetch(t),a=await n.json(),s=await fetch(o),c=await s.json();return{projectData:a[1],usersData:c}}(),t=JSON.parse(JSON.stringify(e)),o=t.projectData,a=k(l);O(a,'project-info');const s=k(l);O(s,'project-name');const c=k('span');c.innerHTML='Project Name: ',O(c,'project-name__label');const r=k('span');O(r,'project-name__value'),r.innerHTML=o.company,I(s,c),I(s,r),I(a,s);const i=k(l);O(i,'project-manager');const d=k('span');d.innerHTML='Project Manager: ',O(d,'project-manager__label');const f=k('span');O(f,'project-manager__value'),f.innerHTML=o.project_manager,I(i,d),I(i,f),I(a,i);const _=k(l);O(_,'project-developer');const u=k('span');u.innerHTML='Project Developer: ',O(u,'project-developer__label');const p=k('span');O(p,'project-developer__value'),p.innerHTML=o.developer,I(_,u),I(_,p),I(a,_);const m=t.usersData,g=k(l);O(g,'users');const b=k('h3');O(b,'users__title'),b.innerHTML='Users',I(g,b);const v=k('ul');O(v,'users__list'),m.forEach((e=>{const t=k('li');O(t,'users__item');const o=k('span');O(o,'users__item-name'),o.innerHTML=e.name,I(t,o),I(v,t)})),I(g,v),I(a,g);const y=k(l);O(y,'qr-code');const h=k('p');O(h,'qr-code__description'),h.innerHTML='Scan the QR code to get more information about the project';const w=k(l);O(w,'qr-code__img-container'),Me(JSON.stringify(t)).then((e=>{const o=k('img');E(o,'src',e),E(o,'alt','QR code'),E(o,'title',JSON.stringify(t)),O(o,'qr-code__img'),I(w,o)})),I(y,h),I(y,w),I(n.tt,a),I(n.tt,y)})(),i&&(n.nt||(n.nt=k(d),F(n.nt,'btn'),F(n.nt,'btn--secondary'),I(p,n.nt)),n.nt.innerHTML=i,U(n.nt,u,a)),he(2),o.st=!1,o.st||(o.st=!0,t(),I(n.Ce,n.We),te(n.Ie),setTimeout((()=>O(n.We,'cc--anim')),100))},Me=async e=>{try{return await t.toDataURL(e)}catch(e){console.error(e)}},je=()=>{const e=k('span');return v.ne.ct||(v.ne.ct=e),e},De=(e,t)=>{const o=v.o,n=v.ne,{hide:a,showPreferences:s,showAdditionalInfo:c,acceptCategory:r}=e,i=o.u&&o.u.consentModal;if(!i)return;const g=i.acceptAllBtn,b=i.acceptNecessaryBtn,y=i.showPreferencesBtn,h=i.showAdditionalInfoBtn,w=i.closeIconLabel,C=i.footer,S=i.label,x=i.title,M=e=>{a(),r(e)};if(!n.rt){n.rt=k(l),n.we=k(l),n.it=k(l),n.lt=k(l),n.dt=k(l),O(n.rt,'cm-wrapper'),O(n.we,'cm'),P(n.it,'body'),P(n.lt,'texts'),P(n.dt,'btns'),E(n.we,'role','dialog'),E(n.we,'aria-modal','true'),E(n.we,f,'false'),E(n.we,'aria-describedby','cm__desc'),S?E(n.we,'aria-label',S):x&&E(n.we,'aria-labelledby','cm__title');const e='box',t=o.i.guiOptions,a=t&&t.consentModal,s=(a&&a.layout||e).split(' ')[0]===e;x&&w&&s&&(n.Pe||(n.Pe=k(d),n.Pe.innerHTML=ee(),P(n.Pe,'btn'),P(n.Pe,'btn--close'),U(n.Pe,u,(()=>{M([])})),I(n.it,n.Pe)),E(n.Pe,'aria-label',w)),I(n.it,n.lt),(g||b||y||h)&&I(n.it,n.dt),n.be=k(l),E(n.be,'tabIndex',-1),I(n.we,n.be),I(n.we,n.it),I(n.rt,n.we)}x&&(n.ft||(n.ft=k('h2'),n.ft.className=n.ft.id='cm__title',I(n.lt,n.ft)),n.ft.innerHTML=x);let j=i.description;if(j&&(o.H&&(j=j.replace('{{revisionMessage}}',o.V?'':i.revisionMessage||'')),n._t||(n._t=k('p'),n._t.className=n._t.id='cm__desc',I(n.lt,n._t)),n._t.innerHTML=j),g&&(n.ut||(n.ut=k(d),I(n.ut,je()),P(n.ut,'btn'),E(n.ut,p,'all'),U(n.ut,u,(()=>{M('all')}))),n.ut.firstElementChild.innerHTML=g),b&&(n.Oe||(n.Oe=k(d),I(n.Oe,je()),P(n.Oe,'btn'),E(n.Oe,p,'necessary'),U(n.Oe,u,(()=>{M([])}))),n.Oe.firstElementChild.innerHTML=b),y&&(n.gt||(n.gt=k(d),I(n.gt,je()),P(n.gt,'btn'),P(n.gt,'btn--secondary'),E(n.gt,p,'show'),U(n.gt,'mouseenter',(()=>{o.N||Ce(e,t)})),U(n.gt,u,s)),n.gt.firstElementChild.innerHTML=y),h&&(n.bt||(n.bt=k(d),I(n.bt,je()),P(n.bt,'btn'),P(n.bt,'btn--secondary'),E(n.bt,p,'show'),U(n.bt,'mouseenter',(()=>{o.st||xe(e,t)})),U(n.bt,u,c)),n.bt.firstElementChild.innerHTML=h),n.vt||(n.vt=k(l),P(n.vt,_),g&&I(n.vt,n.ut),b&&I(n.vt,n.Oe),(g||b)&&I(n.it,n.vt),I(n.dt,n.vt)),n.gt&&!n.yt&&(n.yt=k(l),n.Oe&&n.ut?(P(n.yt,_),I(n.yt,n.gt),I(n.yt,n.bt),I(n.dt,n.yt)):(I(n.vt,n.gt),I(n.vt,n.bt),P(n.vt,_+'--uneven'))),C){if(!n.ht){let e=k(l),t=k(l);n.ht=k(l),P(e,'footer'),P(t,'links'),P(n.ht,'link-group'),I(t,n.ht),I(e,t),I(n.we,e)}n.ht.innerHTML=C}he(0),o.D||(o.D=!0,ae(v.re.ue,m,n.we),t(e),I(n.Ce,n.rt),te(n.we),setTimeout((()=>O(n.rt,'cc--anim')),100)),ne(1),Q(n.it,e,Ce,t)},Te=e=>{if(!C(e))return null;if(e in v.o._)return e;let t=e.slice(0,2);return t in v.o._?t:null},Ae=()=>v.o.l||v.o.i.language.default,Ne=e=>{e&&(v.o.l=e)},ke=async e=>{const t=v.o;let o=Te(e)?e:Ae(),n=t._[o];return C(n)?n=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(n):x(n)&&(n=await n()),!!n&&(t.u=n,Ne(o),!0)},Ee=()=>{let e=v.o.i.language.rtl,t=v.ne.Ce;e&&t&&(w(e)||(e=[e]),h(e,v.o.l)?O(t,'cc--rtl'):R(t,'cc--rtl'))},He=()=>{const e=v.ne;if(e.Ce)return;e.Ce=k(l),e.Ce.id='cc-main',e.Ce.setAttribute('data-nosnippet',''),Ee();let t=v.o.i.root;t&&C(t)&&(t=document.querySelector(t)),(t||e.ze.body).appendChild(e.Ce)},Ve=e=>se((()=>localStorage.removeItem(e))),Ie=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=y(e,t);return o>-1?[e[o]]:[]}},Oe=e=>{const{hostname:t,protocol:o}=location,{name:n,path:a,domain:s,sameSite:c,useLocalStorage:r}=v.t.cookie,i=e?(()=>{const e=v.o.S,t=e?new Date-e:0;return 864e5*G()-t})():864e5*G(),l=new Date;l.setTime(l.getTime()+i),v.o.p.expirationTime=l.getTime();const d=JSON.stringify(v.o.p);let f=n+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+c;h(t,'.')&&(f+='; Domain='+s),'https:'===o&&(f+='; Secure'),r?((e,t)=>{se((()=>localStorage.setItem(e,t)))})(n,d):document.cookie=f,v.o.p},Pe=(e,t,o)=>{if(0===e.length)return;const n=o||v.t.cookie.domain,a=t||v.t.cookie.path,s='www.'===n.slice(0,4),c=s&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),s&&r(t,c)},Le=e=>{const t=e||v.t.cookie.name,o=v.t.cookie.useLocalStorage;return((e,t)=>{let o;return o=se((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},o})(o?(n=t,se((()=>localStorage.getItem(n)))||''):Fe(t,!0),o);var n},Fe=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},Re=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];e?se((()=>{e.test(t)&&o.push(t)})):o.push(t)}return o},qe=(e,t=[])=>{((e,t)=>{const{F:o,R:n,q:a,N:s,Z:c,B:r,X:i}=v.o;let l=[];if(e){w(e)?l.push(...e):C(e)&&(l='all'===e?o:[e]);for(const e of o)c[e]=h(l,e)?M(i[e]):[]}else l=[...n,...r],s&&(l=(()=>{const e=v.ne.ae;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})());l=l.filter((e=>!h(o,e)||!h(t,e))),l.push(...a),z(l)})(e,t),(e=>{const t=v.o,{Z:o,q:n,Y:a,X:s,F:c}=t,r=c;t.te=q(a);for(const e of r){const c=s[e],r=M(c),i=o[e]&&o[e].length>0,l=h(n,e);if(0!==r.length){if(a[e]=[],l)a[e].push(...r);else if(i){const t=o[e];a[e].push(...t)}else a[e]=t.Z[e];a[e]=j(a[e])}}})(),(()=>{const e=v.o;e.I=v.t.mode===n&&e.j?$(e.B,e.R):$(e.R,e.p.categories);let t=e.I.length>0,a=!1;for(const t of e.F)e.ee[t]=$(e.Y[t],e.te[t]),e.ee[t].length>0&&(a=!0);const s=v.ne.ae;for(const t in s)s[t].checked=h(e.R,t);for(const t of e.F){const o=v.ne.se[t],n=e.Y[t];for(const e in o)o[e].checked=h(n,e)}e.C||(e.C=new Date),e.M||(e.M=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.p={categories:q(e.R),revision:v.t.revision,data:e.h,consentTimestamp:e.C.toISOString(),consentId:e.M,services:q(e.Y)},e.S&&(e.p.lastConsentTimestamp=e.S.toISOString());let c=!1;const r=t||a;(e.j||r)&&(e.j&&(e.j=!1,c=!0),e.S=e.S?new Date:e.C,e.p.lastConsentTimestamp=e.S.toISOString(),Oe(),v.t.autoClearCookies&&(c||r)&&(e=>{const t=v.o,o=Re(),n=(e=>{const t=v.o;return(e?t.F:t.I).filter((e=>{const o=t.L[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.ee)for(const n of t.ee[e]){const a=t.X[e][n].cookies;if(!h(t.Y[e],n)&&a)for(const e of a){const t=Ie(o,e.name);Pe(t,e.path,e.domain)}}for(const a of n){const n=t.L[a].autoClear,s=n&&n.cookies||[],c=h(t.I,a),r=!h(t.R,a),i=c&&r;if(e?r:i){n.reloadPage&&i&&(t.O=!0);for(const e of s){const t=Ie(o,e.name);Pe(t,e.path,e.domain)}}}})(c),ce()),c&&(ae(v.re.ie),ae(v.re.le),v.t.mode===o)||(r&&ae(v.re.de),e.O&&(e.O=!1,location.reload()))})()},Be=e=>{const t=v.o.j?[]:v.o.R;return h(t,e)},Je=(e,t)=>{const o=v.o.j?[]:v.o.Y[t]||[];return h(o,e)},Ue=(e,t,o)=>{let n=[];const a=e=>{if(C(e)){let t=Fe(e);''!==t&&n.push(t)}else n.push(...Re(e))};if(w(e))for(let t of e)a(t);else a(e);Pe(n,t,o)},Ge=e=>{const{ne:t,o:o}=v;if(!o.T){if(!o.D){if(!e)return;De(Xe,He)}o.T=!0,o.U=D(),o.v&&Y(!0),W(t.we,1),O(t.he,a),E(t.we,f,'false'),setTimeout((()=>{K(v.ne.be)}),100),ae(v.re.fe,m)}},$e=()=>{const{ne:e,o:t,re:o}=v;t.T&&(t.T=!1,t.v&&Y(),K(e.ct,!0),R(e.he,a),E(e.we,f,'true'),K(t.U),t.U=null,ae(o._e,m))},ze=()=>{const e=v.o;e.A||(e.N||Ce(Xe,He),e.A=!0,e.T?e.G=D():e.U=D(),W(v.ne.Se,2),O(v.ne.he,s),E(v.ne.Se,f,'false'),setTimeout((()=>{K(v.ne.ve)}),100),ae(v.re.fe,g))},Qe=()=>{const e=v.o;e.wt||(e.st||xe(Xe,He),e.wt=!0,e.T?e.G=D():e.U=D(),W(v.ne.Ie,3),O(v.ne.he,c),E(v.ne.Ie,f,'false'),setTimeout((()=>{K(v.ne.ye)}),100))},Ke=()=>{const e=v.o;e.A&&(e.A=!1,(()=>{const e=Ze(),t=v.o.L,o=v.ne.ae,n=v.ne.se,a=e=>h(v.o.B,e);for(const s in o){const c=!!t[s].readOnly;o[s].checked=c||(e?Be(s):a(s));for(const t in n[s])n[s][t].checked=c||(e?Je(t,s):a(s))}})(),K(v.ne.Ue,!0),R(v.ne.he,s),E(v.ne.Se,f,'true'),e.T?(K(e.G),e.G=null):(K(e.U),e.U=null),ae(v.re._e,g))},We=()=>{const e=v.o;e.wt&&(e.wt=!1,K(v.ne.et,!0),R(v.ne.he,c),E(v.ne.Ie,f,'true'),e.T?(K(e.G),e.G=null):(K(e.U),e.U=null))};var Xe={show:Ge,hide:$e,showPreferences:ze,showAdditionalInfo:Qe,hidePreferences:Ke,hideAdditionalInfo:We,acceptCategory:qe};const Ye=(e,t)=>{const o=Le(t);return e?o[e]:o},Ze=()=>!v.o.j;e.acceptCategory=qe,e.acceptService=(e,t)=>{const{F:o,X:n}=v.o;if(!(e&&t&&C(t)&&h(o,t)&&0!==M(n[t]).length))return!1;((e,t)=>{const o=v.o,{X:n,Z:a,N:s}=o,c=v.ne.se[t]||{},r=v.ne.ae[t]||{},i=M(n[t]);if(a[t]=[],C(e)){if('all'===e){if(a[t].push(...i),s)for(let e in c)c[e].checked=!0,N(c[e])}else if(h(i,e)&&a[t].push(e),s)for(let t in c)c[t].checked=e===t,N(c[t])}else if(w(e))for(let o of i){const n=h(e,o);n&&a[t].push(o),s&&(c[o].checked=n,N(c[o]))}const l=0===a[t].length;o.R=l?o.R.filter((e=>e!==t)):j([...o.R,t]),s&&(r.checked=!l,N(r))})(e,t),qe()},e.acceptedCategory=Be,e.acceptedService=Je,e.eraseCookies=Ue,e.getConfig=e=>{const t=v.t,o=v.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},e.getCookie=Ye,e.getUserPreferences=()=>{const{P:e,Y:t}=v.o,{accepted:o,rejected:n}=(()=>{const{j:e,R:t,F:o}=v.o;return{accepted:t,rejected:e?[]:o.filter((e=>!h(t,e)))}})();return q({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:B()})},e.hide=$e,e.hideAdditionalInfo=We,e.hidePreferences=Ke,e.loadScript=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=k('script'),S(t))for(const e in t)E(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,I(document.head,o)}))},e.reset=e=>{const{Ce:t,he:o}=v.ne,{name:n,path:c,domain:i,useLocalStorage:l}=v.t.cookie;e&&(l?Ve(n):Ue(n,c,i));for(const{pe:e,me:t,ge:o}of v.o.m)e.removeEventListener(t,o);t&&t.remove(),o&&o.classList.remove(r,s,a);const d=new b;for(const e in v)v[e]=d[e];window._ccRun=!1},e.run=async e=>{const{o:t,t:o,re:a}=v,s=window;if(!s._ccRun){if(s._ccRun=!0,(e=>{const{ne:t,t:o,o:a}=v,s=o,c=a,{cookie:r}=s,l=v.ce,d=e.cookie,f=e.categories,_=M(f)||[],u=navigator,p=document;t.ze=p,t.he=p.documentElement,r.domain=location.hostname,c.i=e,c.L=f,c.F=_,c._=e.language.translations,c.v=!!e.disablePageInteraction,l.ie=e.onFirstConsent,l.le=e.onConsent,l.de=e.onChange,l._e=e.onModalHide,l.fe=e.onModalShow,l.ue=e.onModalReady;const{mode:m,autoShow:g,lazyHtmlGeneration:b,autoClearCookies:y,revision:w,manageScriptTags:C,hideFromBots:x}=e;m===n&&(s.mode=m),'boolean'==typeof y&&(s.autoClearCookies=y),'boolean'==typeof C&&(s.manageScriptTags=C),'number'==typeof w&&w>=0&&(s.revision=w,c.H=!0),'boolean'==typeof g&&(s.autoShow=g),'boolean'==typeof b&&(s.lazyHtmlGeneration=b),!1===x&&(s.hideFromBots=!1),!0===s.hideFromBots&&u&&(c.J=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),S(d)&&(s.cookie={...r,...d}),s.autoClearCookies,c.H,s.manageScriptTags,(e=>{const{L:t,X:o,Y:n,Z:a,q:s}=v.o;for(let c of e){const e=t[c],r=e.services||{},i=S(r)&&M(r)||[];o[c]={},n[c]=[],a[c]=[],e.readOnly&&(s.push(c),n[c]=i),v.ne.se[c]={};for(let e of i){const t=r[e];t.xe=!1,o[c][e]=t}}})(_),(()=>{if(!v.t.manageScriptTags)return;const e=v.o,t=A(document,'script['+i+']');for(const o of t){let t=V(o,i),n=o.dataset.service||'',a=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),a=!0),'!'===n.charAt(0)&&(n=n.slice(1),a=!0),h(e.F,t)&&(e.oe.push({je:o,Me:!1,Ae:a,De:t,Te:n}),n)){const o=e.X[t];o[n]||(o[n]={xe:!1})}}})(),Ne((()=>{const e=v.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},o=Te(t[e]);if(o)return o}return Ae()})())})(e),t.J)return;(()=>{const e=v.o,t=v.t,o=Le(),{categories:a,services:s,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=o,f=w(a);e.p=o,e.M=c;const _=!!c&&C(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.H&&_&&d!==t.revision&&(e.V=!1),e.j=!(_&&e.V&&e.C&&e.S&&f),t.cookie.useLocalStorage&&!e.j&&(e.j=(new Date).getTime()>(o.expirationTime||0),e.j&&Ve(t.cookie.name)),e.j,(()=>{const e=v.o;for(const t of e.F){const o=e.L[t];if(o.readOnly||o.enabled){e.B.push(t);const o=e.X[t]||{};for(let a in o)e.Z[t].push(a),e.i.mode===n&&e.Y[t].push(a)}}})(),e.j?t.mode===n&&(e.R=[...e.B]):(e.Y={...e.Y,...s},e.Z={...e.Y},z([...e.q,...a]))})();const r=Ze();if(!await ke())return!1;if(Q(null,c=Xe,Ce,He),v.o.j&&De(c,He),v.t.lazyHtmlGeneration||(Ce(c,He),xe(c,He)),o.autoShow&&!r&&Ge(!0),r)return ce(),ae(a.le);o.mode===n&&ce(t.B)}var c},e.setCookieData=e=>{let t,o=e.value,n=e.mode,a=!1;const s=v.o;if('update'===n){s.h=t=Ye('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],a=!0)}else!e&&t||t===o||(t=o,a=!0)}else t=o,a=!0;return a&&(s.h=t,s.p.data=t,Oe(!0)),a},e.setLanguage=async(e,t)=>{if(!Te(e))return!1;const o=v.o;return!(e===Ae()&&!0!==t||!await ke(e)||(Ne(e),o.D&&De(Xe,He),o.N&&Ce(Xe,He),Ee(),0))},e.show=Ge,e.showAdditionalInfo=Qe,e.showPreferences=ze,e.validConsent=Ze,e.validCookie=e=>''!==Fe(e,!0)},'object'==typeof exports&&'undefined'!=typeof module?t(exports,require('qrcode')):'function'==typeof define&&define.amd?define(['exports','qrcode'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={},e.QRCode);
