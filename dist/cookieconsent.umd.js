/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e,t){'use strict';const o='opt-in',n='opt-out',a='show--consent',s='show--preferences',c='show--additionalinfo',r='disable--interaction',i='data-category',l='div',d='button',f='aria-hidden',_='btn-group',u='click',p='data-role',m='consentModal',g='preferencesModal';class b{constructor(){this.t={mode:o,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],v:!1,h:null,C:null,S:null,M:'',T:!0,j:!1,A:!1,D:!1,k:!1,N:[],H:!1,V:!0,I:[],P:!1,L:'',O:!1,F:[],R:[],q:[],B:[],J:!1,G:!1,U:!1,$:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},oe:[]},this.ne={ae:{},se:{}},this.ce={},this.re={ie:'cc:onFirstConsent',le:'cc:onConsent',de:'cc:onChange',fe:'cc:onModalShow',_e:'cc:onModalHide',ue:'cc:onModalReady'}}}const v=new b,y=(e,t)=>e.indexOf(t),h=(e,t)=>-1!==y(e,t),w=e=>Array.isArray(e),C=e=>'string'==typeof e,S=e=>!!e&&'object'==typeof e&&!w(e),x=e=>'function'==typeof e,M=e=>Object.keys(e),T=e=>Array.from(new Set(e)),j=()=>document.activeElement,A=e=>e.preventDefault(),D=(e,t)=>e.querySelectorAll(t),k=e=>e.dispatchEvent(new Event('change')),N=e=>{const t=document.createElement(e);return e===d&&(t.type=e),t},E=(e,t,o)=>e.setAttribute(t,o),H=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},V=(e,t,o)=>e.getAttribute(o?'data-'+t:t),I=(e,t)=>e.appendChild(t),P=(e,t)=>e.classList.add(t),L=(e,t)=>P(e,'cm__'+t),O=(e,t)=>P(e,'pm__'+t),F=(e,t)=>P(e,'aim__'+t),R=(e,t)=>e.classList.remove(t),q=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=q(n)}return t},B=()=>{const e={},{F:t,X:o,Y:n}=v.o;for(const a of t)e[a]=$(n[a],M(o[a]));return e},J=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),G=(e,t,o,n)=>{e.addEventListener(t,o),n&&v.o.m.push({pe:e,me:t,ge:o})},U=()=>{const e=v.t.cookie.expiresAfterDays;return x(e)?e(v.o.L):e},$=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!h(n,e))).concat(n.filter((e=>!h(o,e))))},z=e=>{v.o.R=T(e),v.o.L=(()=>{let e='custom';const{R:t,F:o,q:n}=v.o,a=t.length;return a===o.length?e='all':a===n.length&&(e='necessary'),e})()},Q=(e,t,o,n)=>{const a='accept-',{show:s,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,d=e||document,f=e=>D(d,`[data-cc="${e}"]`),_=(e,t)=>{A(e),l(t),i(),r()},p=f('show-preferencesModal'),m=f('show-consentModal'),g=f(a+'all'),b=f(a+'necessary'),y=f(a+'custom'),h=v.t.lazyHtmlGeneration;for(const e of p)E(e,'aria-haspopup','dialog'),G(e,u,(e=>{A(e),c()})),h&&(G(e,'mouseenter',(e=>{A(e),v.o.k||o(t,n)}),!0),G(e,'focus',(()=>{v.o.k||o(t,n)})));for(let e of m)E(e,'aria-haspopup','dialog'),G(e,u,(e=>{A(e),s(!0)}),!0);for(let e of g)G(e,u,(e=>{_(e,'all')}),!0);for(let e of y)G(e,u,(e=>{_(e)}),!0);for(let e of b)G(e,u,(e=>{_(e,[])}),!0)},K=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},W=(e,t)=>{const o=n=>{n.target.removeEventListener('transitionend',o),'opacity'===n.propertyName&&'1'===getComputedStyle(e).opacity&&K((e=>1===e?v.ne.be:2===e?v.ne.ve:v.ne.ye)(t))};G(e,'transitionend',o)};let X;const Y=e=>{clearTimeout(X),e?P(v.ne.he,r):X=setTimeout((()=>{R(v.ne.he,r)}),500)},Z=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],ee=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${Z[e]}"/></svg>`,te=e=>{const t=v.ne,o=v.o;(e=>{const n=e===t.we,a=o.i.disablePageInteraction?t.he:n?t.Ce:t.he;G(a,'keydown',(t=>{if('Tab'!==t.key||!(n?o.A&&!o.D:o.D))return;const a=j(),s=n?o.$:o.K;0!==s.length&&(t.shiftKey?a!==s[0]&&e.contains(a)||(A(t),K(s[1])):a!==s[1]&&e.contains(a)||(A(t),K(s[0])))}),!0)})(e)},oe=['[href]',d,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),ne=e=>{const{o:t,ne:o}=v,n=(e,t)=>{const o=D(e,oe);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.j&&n(o.we,t.$),2===e&&t.k&&n(o.Se,t.K)},ae=(e,t,o)=>{const{de:n,le:a,ie:s,_e:c,ue:r,fe:i}=v.ce,l=v.re;if(t){const n={modalName:t};return e===l.fe?x(i)&&i(n):e===l._e?x(c)&&c(n):(n.modal=o,x(r)&&r(n)),J(e,n)}const d={cookie:v.o.p};e===l.ie?x(s)&&s(q(d)):e===l.le?x(a)&&a(q(d)):(d.changedCategories=v.o.I,d.changedServices=v.o.ee,x(n)&&n(q(d))),J(e,q(d))},se=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},ce=e=>{const{Y:t,ee:o,F:n,X:a,oe:s,p:c,I:r}=v.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=a[e][o];if(!n)continue;const{onAccept:s,onReject:c}=n;!n.xe&&h(t[e],o)?(n.xe=!0,x(s)&&s()):n.xe&&!h(t[e],o)&&(n.xe=!1,x(c)&&c())}}if(!v.t.manageScriptTags)return;const l=s,d=e||c.categories||[],f=(e,n)=>{if(n>=e.length)return;const a=s[n];if(a.Me)return f(e,n+1);const c=a.Te,l=a.je,_=a.Ae,u=h(d,l),p=!!_&&h(t[l],_);if(!_&&!a.De&&u||!_&&a.De&&!u&&h(r,l)||_&&!a.De&&p||_&&a.De&&!p&&h(o[l]||[],_)){a.Me=!0;const t=V(c,'type',!0);H(c,'type',!!t),H(c,i);let o=V(c,'src',!0);o&&H(c,'src',!0);const s=N('script');s.textContent=c.innerHTML;for(const{nodeName:e}of c.attributes)E(s,e,c[e]||V(c,e));t&&(s.type=t),o?s.src=o:o=c.src;const r=!!o&&(!t||['text/javascript','module'].includes(t));if(r&&(s.onload=s.onerror=()=>{f(e,++n)}),c.replaceWith(s),r)return}f(e,++n)};f(l,0)},re='bottom',ie='left',le='center',de='right',fe='inline',_e='wide',ue='pm--',pe='box',me=['middle','top',re],ge=[ie,le,de],be={box:{ke:[_e,fe],Ne:me,Ee:ge,He:re,Ve:de},cloud:{ke:[fe],Ne:me,Ee:ge,He:re,Ve:le},bar:{ke:[fe],Ne:me.slice(1),Ee:[],He:re,Ve:''}},ve={box:{ke:[],Ne:[],Ee:[],He:'',Ve:''},bar:{ke:[_e],Ne:[],Ee:[ie,de],He:'',Ve:ie}},ye={box:{ke:[],Ne:[],Ee:[],He:'',Ve:''},bar:{ke:[_e],Ne:[],Ee:[ie,de],He:'',Ve:ie}},he=e=>{const t=v.o.i.guiOptions,o=t&&t.consentModal,n=t&&t.preferencesModal,a=t&&t.additionalInfoModal;0===e&&we(v.ne.we,be,o,'cm--',pe,'cm'),1===e&&we(v.ne.Se,ve,n,ue,pe,'pm'),2===e&&we(v.ne.Ie,ye,a,'aim--',pe,'aim')},we=(e,t,o,n,a,s)=>{e.className=s;const c=o&&o.layout,r=o&&o.position,i=o&&o.flipButtons,l=!o||!1!==o.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],u=f in t?f:a,p=t[u],m=h(p.ke,_)&&_,g=r&&r.split(' ')||[],b=g[0],y=n===ue?g[0]:g[1],w=h(p.Ne,b)?b:p.He,C=h(p.Ee,y)?y:p.Ve,S=t=>{t&&P(e,n+t)};S(u),S(m),S(w),S(C),i&&S('flip');const x=s+'__btn--secondary';if('cm'===s){const{Pe:e,Le:t}=v.ne;e&&(l?R(e,x):P(e,x)),t&&(l?R(t,x):P(t,x))}else{const{Oe:e}=v.ne;e&&(l?R(e,x):P(e,x))}},Ce=(e,t)=>{const o=v.o,n=v.ne,{hide:a,hidePreferences:s,acceptCategory:c}=e,r=e=>{c(e),s(),a()},i=o.u&&o.u.preferencesModal;if(!i)return;const m=i.title,b=i.closeIconLabel,y=i.acceptAllBtn,h=i.acceptNecessaryBtn,w=i.savePreferencesBtn,x=i.sections||[],T=y||h||w;if(n.Fe)n.Re=N(l),O(n.Re,'body');else{n.Fe=N(l),P(n.Fe,'pm-wrapper');const e=N('div');P(e,'pm-overlay'),I(n.Fe,e),G(e,u,s),n.Se=N(l),P(n.Se,'pm'),E(n.Se,'role','dialog'),E(n.Se,f,!0),E(n.Se,'aria-modal',!0),E(n.Se,'aria-labelledby','pm__title'),G(n.he,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.qe=N(l),O(n.qe,'header'),n.Be=N('h2'),O(n.Be,'title'),n.Be.id='pm__title',n.Je=N(d),O(n.Je,'close-btn'),E(n.Je,'aria-label',i.closeIconLabel||''),G(n.Je,u,s),n.Ge=N('span'),n.Ge.innerHTML=ee(),I(n.Je,n.Ge),n.Ue=N(l),O(n.Ue,'body'),n.$e=N(l),O(n.$e,'footer');var j=N(l);P(j,'btns');var A=N(l),D=N(l);O(A,_),O(D,_),I(n.$e,A),I(n.$e,D),I(n.qe,n.Be),I(n.qe,n.Je),n.ve=N(l),E(n.ve,'tabIndex',-1),I(n.Se,n.ve),I(n.Se,n.qe),I(n.Se,n.Ue),T&&I(n.Se,n.$e),I(n.Fe,n.Se)}let k;m&&(n.Be.innerHTML=m,b&&E(n.Je,'aria-label',b)),x.forEach(((e,t)=>{const a=e.title,s=e.description,c=e.linkedCategory,r=c&&o.O[c],_=e.cookieTable,p=_&&_.body,m=_&&_.caption,g=p&&p.length>0,b=!!r,v=b&&o.X[c],y=S(v)&&M(v)||[],h=b&&(!!s||!!g||M(v).length>0);var w=N(l);if(O(w,'section'),h||s){var x=N(l);O(x,'section-desc-wrapper')}let T=y.length;if(h&&T>0){const e=N(l);O(e,'section-services');for(const t of y){const o=v[t],n=o&&o.label||t,a=N(l),s=N(l),i=N(l),d=N(l);O(a,'service'),O(d,'service-title'),O(s,'service-header'),O(i,'service-icon');const f=Se(n,t,r,!0,c);d.innerHTML=n,I(s,i),I(s,d),I(a,s),I(a,f),I(e,a)}I(x,e)}if(a){var j=N(l),A=N(b?d:l);if(O(j,'section-title-wrapper'),O(A,'section-title'),A.innerHTML=a,I(j,A),b){const e=N('span');e.innerHTML=ee(2,3.5),O(e,'section-arrow'),I(j,e),w.className+='--toggle';const t=Se(a,c,r);let o=i.serviceCounterLabel;if(T>0&&C(o)){let e=N('span');O(e,'badge'),O(e,'service-counter'),E(e,f,!0),E(e,'data-servicecounter',T),o&&(o=o.split('|'),o=o.length>1&&T>1?o[1]:o[0],E(e,'data-counterlabel',o)),e.innerHTML=T+(o?' '+o:''),I(A,e)}if(h){O(w,'section--expandable');var D=c+'-desc';E(A,'aria-expanded',!1),E(A,'aria-controls',D)}I(j,t)}else E(A,'role','heading'),E(A,'aria-level','3');I(w,j)}if(s){var H=N('p');O(H,'section-desc'),H.innerHTML=s,I(x,H)}if(h&&(E(x,f,'true'),x.id=D,((e,t,o)=>{G(A,u,(()=>{t.classList.contains('is-expanded')?(R(t,'is-expanded'),E(o,'aria-expanded','false'),E(e,f,'true')):(P(t,'is-expanded'),E(o,'aria-expanded','true'),E(e,f,'false'))}))})(x,w,A),g)){const e=N('table'),o=N('thead'),a=N('tbody');if(m){const t=N('caption');O(t,'table-caption'),t.innerHTML=m,e.appendChild(t)}O(e,'section-table'),O(o,'table-head'),O(a,'table-body');const s=_.headers,c=M(s),r=n.ze.createDocumentFragment(),i=N('tr');for(const e of c){const o=s[e],n=N('th');n.id='cc__row-'+o+t,E(n,'scope','col'),O(n,'table-th'),n.innerHTML=o,I(r,n)}I(i,r),I(o,i);const d=n.ze.createDocumentFragment();for(const e of p){const o=N('tr');O(o,'table-tr');for(const n of c){const a=s[n],c=e[n],r=N('td'),i=N(l);O(r,'table-td'),E(r,'data-column',a),E(r,'headers','cc__row-'+a+t),i.insertAdjacentHTML('beforeend',c),I(r,i),I(o,r)}I(d,o)}I(a,d),I(e,o),I(e,a),I(x,e)}(h||s)&&I(w,x);const V=n.Re||n.Ue;b?(k||(k=N(l),O(k,'section-toggles')),k.appendChild(w)):k=null,I(V,k||w)})),y&&(n.Qe||(n.Qe=N(d),O(n.Qe,'btn'),E(n.Qe,p,'all'),I(A,n.Qe),G(n.Qe,u,(()=>r('all')))),n.Qe.innerHTML=y),h&&(n.Oe||(n.Oe=N(d),O(n.Oe,'btn'),E(n.Oe,p,'necessary'),I(A,n.Oe),G(n.Oe,u,(()=>r([])))),n.Oe.innerHTML=h),w&&(n.Ke||(n.Ke=N(d),O(n.Ke,'btn'),O(n.Ke,'btn--secondary'),E(n.Ke,p,'save'),I(D,n.Ke),G(n.Ke,u,(()=>r()))),n.Ke.innerHTML=w),n.Re&&(n.Se.replaceChild(n.Re,n.Ue),n.Ue=n.Re),he(1),o.k||(o.k=!0,ae(v.re.ue,g,n.Se),t(e),I(n.Ce,n.Fe),te(n.Se),setTimeout((()=>P(n.Fe,'cc--anim')),100)),ne(2)};function Se(e,t,o,n,a){const s=v.o,c=v.ne,r=N('label'),l=N('input'),d=N('span'),_=N('span'),p=N('span'),m=N('span'),g=N('span');if(m.innerHTML=ee(1,3),g.innerHTML=ee(0,3),l.type='checkbox',P(r,'section__toggle-wrapper'),P(l,'section__toggle'),P(m,'toggle__icon-on'),P(g,'toggle__icon-off'),P(d,'toggle__icon'),P(_,'toggle__icon-circle'),P(p,'toggle__label'),E(d,f,'true'),n?(P(r,'toggle-service'),E(l,i,a),c.se[a][t]=l):c.ae[t]=l,n?(e=>{G(l,'change',(()=>{const t=c.se[e],o=c.ae[e];s.Z[e]=[];for(let o in t){const n=t[o];n.checked&&s.Z[e].push(n.value)}o.checked=s.Z[e].length>0}))})(a):(e=>{G(l,u,(()=>{const t=c.se[e],o=l.checked;s.Z[e]=[];for(let n in t)t[n].checked=o,o&&s.Z[e].push(n)}))})(t),l.value=t,p.textContent=e.replace(/<.*>.*<\/.*>/gm,''),I(_,g),I(_,m),I(d,_),s.T)(o.readOnly||o.enabled)&&(l.checked=!0);else if(n){const e=s.Y[a];l.checked=o.readOnly||h(e,t)}else h(s.R,t)&&(l.checked=!0);return o.readOnly&&(l.disabled=!0),I(r,l),I(r,d),I(r,p),r}const xe=async(e,t)=>{const o=v.o,n=v.ne,{hideAdditionalInfo:a}=e,s=o.u&&o.u.additionalInfoModal;if(!s)return;const c=s.title,r=s.description,i=s.closeBtn;if(!n.We){n.We=N(l),P(n.We,'aim-wrapper');const e=N(l);P(e,'aim-overlay'),I(n.We,e),G(e,u,a),n.Ie=N(l),P(n.Ie,'aim'),E(n.Ie,'role','dialog'),E(n.Ie,f,!0),E(n.Ie,'aria-modal',!0),E(n.Ie,'aria-labelledby','aim__title'),G(n.he,'keydown',(e=>{27===e.keyCode&&a()}),!0),n.Xe=N(l),F(n.Xe,'header'),n.Ye=N('h2'),F(n.Ye,'title'),n.Ye.id='aim__title',n.Ze=N(d),F(n.Ze,'close-btn'),E(n.Ze,'aria-label',i.ariaLabel||''),G(n.Ze,u,a),n.et=N('span'),n.et.innerHTML=ee(),I(n.Ze,n.et),n.tt=N(l),F(n.tt,'body'),n.ot=N(l),F(n.ot,'footer');var p=N(l);F(p,_),I(n.ot,p),I(n.Xe,n.Ye),I(n.Xe,n.Ze),n.ye=N(l),E(n.ye,'tabindex',-1),I(n.Ie,n.ye),I(n.Ie,n.Xe),I(n.Ie,n.tt),i&&I(n.Ie,n.ot),I(n.We,n.Ie)}if(c&&(n.Ye.innerHTML=c,i&&E(n.Ze,'aria-label',i)),r){const e=N(l);P(e,'aim-description'),e.innerHTML=r,I(n.tt,e)}(async()=>{const e=await async function(){const e=await fetch('https://669fa568b132e2c136fe9aba.mockapi.io/api/project-info/project-info');return await e.json()}(),t=JSON.parse(JSON.stringify(e[1])),o=N(l);P(o,'project-info');const a=N(l);P(a,'project-name');const s=N('span');s.innerHTML='Project Name: ',P(s,'project-name__label');const c=N('span');P(c,'project-name__value'),c.innerHTML=t.company,I(a,s),I(a,c),I(o,a);const r=N(l);P(r,'project-manager');const i=N('span');i.innerHTML='Project Manager: ',P(i,'project-manager__label');const d=N('span');P(d,'project-manager__value'),d.innerHTML=t.project_manager,I(r,i),I(r,d),I(o,r);const f=N(l);P(f,'project-developer');const _=N('span');_.innerHTML='Project Developer: ',P(_,'project-developer__label');const u=N('span');P(u,'project-developer__value'),u.innerHTML=t.developer,I(f,_),I(f,u),I(o,f);const p=N(l);P(p,'qr-code');const m=N('p');P(m,'qr-code__description'),m.innerHTML='Scan the QR code to get more information about the project';const g=N(l);P(g,'qr-code__img-container'),Me('https://github.com/orestbida/cookieconsent?tab=readme-ov-file').then((e=>{const t=N('img');E(t,'src',e),E(t,'alt','QR code'),P(t,'qr-code__img'),I(g,t)})),I(p,m),I(p,g),I(n.tt,o),I(n.tt,p)})(),i&&(n.nt||(n.nt=N(d),F(n.nt,'btn'),F(n.nt,'btn--secondary'),I(p,n.nt)),n.nt.innerHTML=i,G(n.nt,u,a)),he(2),o.st=!1,o.st||(o.st=!0,t(),I(n.Ce,n.We),te(n.Ie),setTimeout((()=>P(n.We,'cc--anim')),100))},Me=async e=>{try{return await t.toDataURL(e)}catch(e){console.error(e)}},Te=()=>{const e=N('span');return v.ne.ct||(v.ne.ct=e),e},je=(e,t)=>{const o=v.o,n=v.ne,{hide:a,showPreferences:s,showAdditionalInfo:c,acceptCategory:r}=e,i=o.u&&o.u.consentModal;if(!i)return;const g=i.acceptAllBtn,b=i.acceptNecessaryBtn,y=i.showPreferencesBtn,h=i.showAdditionalInfoBtn,w=i.closeIconLabel,C=i.footer,S=i.label,x=i.title,M=e=>{a(),r(e)};if(!n.rt){n.rt=N(l),n.we=N(l),n.it=N(l),n.lt=N(l),n.dt=N(l),P(n.rt,'cm-wrapper'),P(n.we,'cm'),L(n.it,'body'),L(n.lt,'texts'),L(n.dt,'btns'),E(n.we,'role','dialog'),E(n.we,'aria-modal','true'),E(n.we,f,'false'),E(n.we,'aria-describedby','cm__desc'),S?E(n.we,'aria-label',S):x&&E(n.we,'aria-labelledby','cm__title');const e='box',t=o.i.guiOptions,a=t&&t.consentModal,s=(a&&a.layout||e).split(' ')[0]===e;x&&w&&s&&(n.Le||(n.Le=N(d),n.Le.innerHTML=ee(),L(n.Le,'btn'),L(n.Le,'btn--close'),G(n.Le,u,(()=>{M([])})),I(n.it,n.Le)),E(n.Le,'aria-label',w)),I(n.it,n.lt),(g||b||y||h)&&I(n.it,n.dt),n.be=N(l),E(n.be,'tabIndex',-1),I(n.we,n.be),I(n.we,n.it),I(n.rt,n.we)}x&&(n.ft||(n.ft=N('h2'),n.ft.className=n.ft.id='cm__title',I(n.lt,n.ft)),n.ft.innerHTML=x);let T=i.description;if(T&&(o.H&&(T=T.replace('{{revisionMessage}}',o.V?'':i.revisionMessage||'')),n._t||(n._t=N('p'),n._t.className=n._t.id='cm__desc',I(n.lt,n._t)),n._t.innerHTML=T),g&&(n.ut||(n.ut=N(d),I(n.ut,Te()),L(n.ut,'btn'),E(n.ut,p,'all'),G(n.ut,u,(()=>{M('all')}))),n.ut.firstElementChild.innerHTML=g),b&&(n.Pe||(n.Pe=N(d),I(n.Pe,Te()),L(n.Pe,'btn'),E(n.Pe,p,'necessary'),G(n.Pe,u,(()=>{M([])}))),n.Pe.firstElementChild.innerHTML=b),y&&(n.gt||(n.gt=N(d),I(n.gt,Te()),L(n.gt,'btn'),L(n.gt,'btn--secondary'),E(n.gt,p,'show'),G(n.gt,'mouseenter',(()=>{o.k||Ce(e,t)})),G(n.gt,u,s)),n.gt.firstElementChild.innerHTML=y),h&&(n.bt||(n.bt=N(d),I(n.bt,Te()),L(n.bt,'btn'),L(n.bt,'btn--secondary'),E(n.bt,p,'show'),G(n.bt,'mouseenter',(()=>{o.st||xe(e,t)})),G(n.bt,u,c)),n.bt.firstElementChild.innerHTML=h),n.vt||(n.vt=N(l),L(n.vt,_),g&&I(n.vt,n.ut),b&&I(n.vt,n.Pe),(g||b)&&I(n.it,n.vt),I(n.dt,n.vt)),n.gt&&!n.yt&&(n.yt=N(l),n.Pe&&n.ut?(L(n.yt,_),I(n.yt,n.gt),I(n.yt,n.bt),I(n.dt,n.yt)):(I(n.vt,n.gt),I(n.vt,n.bt),L(n.vt,_+'--uneven'))),C){if(!n.ht){let e=N(l),t=N(l);n.ht=N(l),L(e,'footer'),L(t,'links'),L(n.ht,'link-group'),I(t,n.ht),I(e,t),I(n.we,e)}n.ht.innerHTML=C}he(0),o.j||(o.j=!0,ae(v.re.ue,m,n.we),t(e),I(n.Ce,n.rt),te(n.we),setTimeout((()=>P(n.rt,'cc--anim')),100)),ne(1),Q(n.it,e,Ce,t)},Ae=e=>{if(!C(e))return null;if(e in v.o._)return e;let t=e.slice(0,2);return t in v.o._?t:null},De=()=>v.o.l||v.o.i.language.default,ke=e=>{e&&(v.o.l=e)},Ne=async e=>{const t=v.o;let o=Ae(e)?e:De(),n=t._[o];return C(n)?n=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(n):x(n)&&(n=await n()),!!n&&(t.u=n,ke(o),!0)},Ee=()=>{let e=v.o.i.language.rtl,t=v.ne.Ce;e&&t&&(w(e)||(e=[e]),h(e,v.o.l)?P(t,'cc--rtl'):R(t,'cc--rtl'))},He=()=>{const e=v.ne;if(e.Ce)return;e.Ce=N(l),e.Ce.id='cc-main',e.Ce.setAttribute('data-nosnippet',''),Ee();let t=v.o.i.root;t&&C(t)&&(t=document.querySelector(t)),(t||e.ze.body).appendChild(e.Ce)},Ve=e=>se((()=>localStorage.removeItem(e))),Ie=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=y(e,t);return o>-1?[e[o]]:[]}},Pe=e=>{const{hostname:t,protocol:o}=location,{name:n,path:a,domain:s,sameSite:c,useLocalStorage:r}=v.t.cookie,i=e?(()=>{const e=v.o.S,t=e?new Date-e:0;return 864e5*U()-t})():864e5*U(),l=new Date;l.setTime(l.getTime()+i),v.o.p.expirationTime=l.getTime();const d=JSON.stringify(v.o.p);let f=n+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+c;h(t,'.')&&(f+='; Domain='+s),'https:'===o&&(f+='; Secure'),r?((e,t)=>{se((()=>localStorage.setItem(e,t)))})(n,d):document.cookie=f,v.o.p},Le=(e,t,o)=>{if(0===e.length)return;const n=o||v.t.cookie.domain,a=t||v.t.cookie.path,s='www.'===n.slice(0,4),c=s&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),s&&r(t,c)},Oe=e=>{const t=e||v.t.cookie.name,o=v.t.cookie.useLocalStorage;return((e,t)=>{let o;return o=se((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},o})(o?(n=t,se((()=>localStorage.getItem(n)))||''):Fe(t,!0),o);var n},Fe=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},Re=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];e?se((()=>{e.test(t)&&o.push(t)})):o.push(t)}return o},qe=(e,t=[])=>{((e,t)=>{const{F:o,R:n,q:a,k:s,Z:c,B:r,X:i}=v.o;let l=[];if(e){w(e)?l.push(...e):C(e)&&(l='all'===e?o:[e]);for(const e of o)c[e]=h(l,e)?M(i[e]):[]}else l=[...n,...r],s&&(l=(()=>{const e=v.ne.ae;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})());l=l.filter((e=>!h(o,e)||!h(t,e))),l.push(...a),z(l)})(e,t),(e=>{const t=v.o,{Z:o,q:n,Y:a,X:s,F:c}=t,r=c;t.te=q(a);for(const e of r){const c=s[e],r=M(c),i=o[e]&&o[e].length>0,l=h(n,e);if(0!==r.length){if(a[e]=[],l)a[e].push(...r);else if(i){const t=o[e];a[e].push(...t)}else a[e]=t.Z[e];a[e]=T(a[e])}}})(),(()=>{const e=v.o;e.I=v.t.mode===n&&e.T?$(e.B,e.R):$(e.R,e.p.categories);let t=e.I.length>0,a=!1;for(const t of e.F)e.ee[t]=$(e.Y[t],e.te[t]),e.ee[t].length>0&&(a=!0);const s=v.ne.ae;for(const t in s)s[t].checked=h(e.R,t);for(const t of e.F){const o=v.ne.se[t],n=e.Y[t];for(const e in o)o[e].checked=h(n,e)}e.C||(e.C=new Date),e.M||(e.M=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.p={categories:q(e.R),revision:v.t.revision,data:e.h,consentTimestamp:e.C.toISOString(),consentId:e.M,services:q(e.Y)},e.S&&(e.p.lastConsentTimestamp=e.S.toISOString());let c=!1;const r=t||a;(e.T||r)&&(e.T&&(e.T=!1,c=!0),e.S=e.S?new Date:e.C,e.p.lastConsentTimestamp=e.S.toISOString(),Pe(),v.t.autoClearCookies&&(c||r)&&(e=>{const t=v.o,o=Re(),n=(e=>{const t=v.o;return(e?t.F:t.I).filter((e=>{const o=t.O[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.ee)for(const n of t.ee[e]){const a=t.X[e][n].cookies;if(!h(t.Y[e],n)&&a)for(const e of a){const t=Ie(o,e.name);Le(t,e.path,e.domain)}}for(const a of n){const n=t.O[a].autoClear,s=n&&n.cookies||[],c=h(t.I,a),r=!h(t.R,a),i=c&&r;if(e?r:i){n.reloadPage&&i&&(t.P=!0);for(const e of s){const t=Ie(o,e.name);Le(t,e.path,e.domain)}}}})(c),ce()),c&&(ae(v.re.ie),ae(v.re.le),v.t.mode===o)||(r&&ae(v.re.de),e.P&&(e.P=!1,location.reload()))})()},Be=e=>{const t=v.o.T?[]:v.o.R;return h(t,e)},Je=(e,t)=>{const o=v.o.T?[]:v.o.Y[t]||[];return h(o,e)},Ge=(e,t,o)=>{let n=[];const a=e=>{if(C(e)){let t=Fe(e);''!==t&&n.push(t)}else n.push(...Re(e))};if(w(e))for(let t of e)a(t);else a(e);Le(n,t,o)},Ue=e=>{const{ne:t,o:o}=v;if(!o.A){if(!o.j){if(!e)return;je(Xe,He)}o.A=!0,o.G=j(),o.v&&Y(!0),W(t.we,1),P(t.he,a),E(t.we,f,'false'),setTimeout((()=>{K(v.ne.be)}),100),ae(v.re.fe,m)}},$e=()=>{const{ne:e,o:t,re:o}=v;t.A&&(t.A=!1,t.v&&Y(),K(e.ct,!0),R(e.he,a),E(e.we,f,'true'),K(t.G),t.G=null,ae(o._e,m))},ze=()=>{const e=v.o;e.D||(e.k||Ce(Xe,He),e.D=!0,e.A?e.U=j():e.G=j(),W(v.ne.Se,2),P(v.ne.he,s),E(v.ne.Se,f,'false'),setTimeout((()=>{K(v.ne.ve)}),100),ae(v.re.fe,g))},Qe=()=>{const e=v.o;e.wt||(e.st||xe(Xe,He),e.wt=!0,e.A?e.U=j():e.G=j(),W(v.ne.Ie,3),P(v.ne.he,c),E(v.ne.Ie,f,'false'),setTimeout((()=>{K(v.ne.ye)}),100))},Ke=()=>{const e=v.o;e.D&&(e.D=!1,(()=>{const e=Ze(),t=v.o.O,o=v.ne.ae,n=v.ne.se,a=e=>h(v.o.B,e);for(const s in o){const c=!!t[s].readOnly;o[s].checked=c||(e?Be(s):a(s));for(const t in n[s])n[s][t].checked=c||(e?Je(t,s):a(s))}})(),K(v.ne.Ge,!0),R(v.ne.he,s),E(v.ne.Se,f,'true'),e.A?(K(e.U),e.U=null):(K(e.G),e.G=null),ae(v.re._e,g))},We=()=>{const e=v.o;e.wt&&(e.wt=!1,K(v.ne.et,!0),R(v.ne.he,c),E(v.ne.Ie,f,'true'),e.A?(K(e.U),e.U=null):(K(e.G),e.G=null))};var Xe={show:Ue,hide:$e,showPreferences:ze,showAdditionalInfo:Qe,hidePreferences:Ke,hideAdditionalInfo:We,acceptCategory:qe};const Ye=(e,t)=>{const o=Oe(t);return e?o[e]:o},Ze=()=>!v.o.T;e.acceptCategory=qe,e.acceptService=(e,t)=>{const{F:o,X:n}=v.o;if(!(e&&t&&C(t)&&h(o,t)&&0!==M(n[t]).length))return!1;((e,t)=>{const o=v.o,{X:n,Z:a,k:s}=o,c=v.ne.se[t]||{},r=v.ne.ae[t]||{},i=M(n[t]);if(a[t]=[],C(e)){if('all'===e){if(a[t].push(...i),s)for(let e in c)c[e].checked=!0,k(c[e])}else if(h(i,e)&&a[t].push(e),s)for(let t in c)c[t].checked=e===t,k(c[t])}else if(w(e))for(let o of i){const n=h(e,o);n&&a[t].push(o),s&&(c[o].checked=n,k(c[o]))}const l=0===a[t].length;o.R=l?o.R.filter((e=>e!==t)):T([...o.R,t]),s&&(r.checked=!l,k(r))})(e,t),qe()},e.acceptedCategory=Be,e.acceptedService=Je,e.eraseCookies=Ge,e.getConfig=e=>{const t=v.t,o=v.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},e.getCookie=Ye,e.getUserPreferences=()=>{const{L:e,Y:t}=v.o,{accepted:o,rejected:n}=(()=>{const{T:e,R:t,F:o}=v.o;return{accepted:t,rejected:e?[]:o.filter((e=>!h(t,e)))}})();return q({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:B()})},e.hide=$e,e.hideAdditionalInfo=We,e.hidePreferences=Ke,e.loadScript=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=N('script'),S(t))for(const e in t)E(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,I(document.head,o)}))},e.reset=e=>{const{Ce:t,he:o}=v.ne,{name:n,path:c,domain:i,useLocalStorage:l}=v.t.cookie;e&&(l?Ve(n):Ge(n,c,i));for(const{pe:e,me:t,ge:o}of v.o.m)e.removeEventListener(t,o);t&&t.remove(),o&&o.classList.remove(r,s,a);const d=new b;for(const e in v)v[e]=d[e];window._ccRun=!1},e.run=async e=>{const{o:t,t:o,re:a}=v,s=window;if(!s._ccRun){if(s._ccRun=!0,(e=>{const{ne:t,t:o,o:a}=v,s=o,c=a,{cookie:r}=s,l=v.ce,d=e.cookie,f=e.categories,_=M(f)||[],u=navigator,p=document;t.ze=p,t.he=p.documentElement,r.domain=location.hostname,c.i=e,c.O=f,c.F=_,c._=e.language.translations,c.v=!!e.disablePageInteraction,l.ie=e.onFirstConsent,l.le=e.onConsent,l.de=e.onChange,l._e=e.onModalHide,l.fe=e.onModalShow,l.ue=e.onModalReady;const{mode:m,autoShow:g,lazyHtmlGeneration:b,autoClearCookies:y,revision:w,manageScriptTags:C,hideFromBots:x}=e;m===n&&(s.mode=m),'boolean'==typeof y&&(s.autoClearCookies=y),'boolean'==typeof C&&(s.manageScriptTags=C),'number'==typeof w&&w>=0&&(s.revision=w,c.H=!0),'boolean'==typeof g&&(s.autoShow=g),'boolean'==typeof b&&(s.lazyHtmlGeneration=b),!1===x&&(s.hideFromBots=!1),!0===s.hideFromBots&&u&&(c.J=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),S(d)&&(s.cookie={...r,...d}),s.autoClearCookies,c.H,s.manageScriptTags,(e=>{const{O:t,X:o,Y:n,Z:a,q:s}=v.o;for(let c of e){const e=t[c],r=e.services||{},i=S(r)&&M(r)||[];o[c]={},n[c]=[],a[c]=[],e.readOnly&&(s.push(c),n[c]=i),v.ne.se[c]={};for(let e of i){const t=r[e];t.xe=!1,o[c][e]=t}}})(_),(()=>{if(!v.t.manageScriptTags)return;const e=v.o,t=D(document,'script['+i+']');for(const o of t){let t=V(o,i),n=o.dataset.service||'',a=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),a=!0),'!'===n.charAt(0)&&(n=n.slice(1),a=!0),h(e.F,t)&&(e.oe.push({Te:o,Me:!1,De:a,je:t,Ae:n}),n)){const o=e.X[t];o[n]||(o[n]={xe:!1})}}})(),ke((()=>{const e=v.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},o=Ae(t[e]);if(o)return o}return De()})())})(e),t.J)return;(()=>{const e=v.o,t=v.t,o=Oe(),{categories:a,services:s,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=o,f=w(a);e.p=o,e.M=c;const _=!!c&&C(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.H&&_&&d!==t.revision&&(e.V=!1),e.T=!(_&&e.V&&e.C&&e.S&&f),t.cookie.useLocalStorage&&!e.T&&(e.T=(new Date).getTime()>(o.expirationTime||0),e.T&&Ve(t.cookie.name)),e.T,(()=>{const e=v.o;for(const t of e.F){const o=e.O[t];if(o.readOnly||o.enabled){e.B.push(t);const o=e.X[t]||{};for(let a in o)e.Z[t].push(a),e.i.mode===n&&e.Y[t].push(a)}}})(),e.T?t.mode===n&&(e.R=[...e.B]):(e.Y={...e.Y,...s},e.Z={...e.Y},z([...e.q,...a]))})();const r=Ze();if(!await Ne())return!1;if(Q(null,c=Xe,Ce,He),v.o.T&&je(c,He),v.t.lazyHtmlGeneration||(Ce(c,He),xe(c,He)),o.autoShow&&!r&&Ue(!0),r)return ce(),ae(a.le);o.mode===n&&ce(t.B)}var c},e.setCookieData=e=>{let t,o=e.value,n=e.mode,a=!1;const s=v.o;if('update'===n){s.h=t=Ye('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],a=!0)}else!e&&t||t===o||(t=o,a=!0)}else t=o,a=!0;return a&&(s.h=t,s.p.data=t,Pe(!0)),a},e.setLanguage=async(e,t)=>{if(!Ae(e))return!1;const o=v.o;return!(e===De()&&!0!==t||!await Ne(e)||(ke(e),o.j&&je(Xe,He),o.k&&Ce(Xe,He),Ee(),0))},e.show=Ue,e.showAdditionalInfo=Qe,e.showPreferences=ze,e.validConsent=Ze,e.validCookie=e=>''!==Fe(e,!0)},'object'==typeof exports&&'undefined'!=typeof module?t(exports,require('qrcode')):'function'==typeof define&&define.amd?define(['exports','qrcode'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={},e.QRCode);
