/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t='opt-in',o='opt-out',n='show--consent',a='show--preferences',s='disable--interaction',c='data-category',r='div',i='button',l='aria-hidden',d='btn-group',f='click',_='data-role',p='consentModal',u='preferencesModal';class g{constructor(){this.t={mode:t,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},p:{},u:{},m:[],v:!1,h:null,C:null,S:null,M:'',T:!0,D:!1,k:!1,A:!1,N:!1,H:[],I:!1,V:!0,j:[],L:!1,P:'',F:!1,O:[],R:[],B:[],G:[],J:!1,U:!1,$:!1,q:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},oe:[]},this.ne={ae:{},se:{}},this.ce={},this.re={ie:'cc:onFirstConsent',le:'cc:onConsent',de:'cc:onChange',fe:'cc:onModalShow',_e:'cc:onModalHide',pe:'cc:onModalReady'}}}const m=new g,b=(e,t)=>e.indexOf(t),v=(e,t)=>-1!==b(e,t),y=e=>Array.isArray(e),h=e=>'string'==typeof e,w=e=>!!e&&'object'==typeof e&&!y(e),C=e=>'function'==typeof e,S=e=>Object.keys(e),x=e=>Array.from(new Set(e)),M=()=>document.activeElement,T=e=>e.preventDefault(),D=(e,t)=>e.querySelectorAll(t),k=e=>e.dispatchEvent(new Event('change')),A=e=>{const t=document.createElement(e);return e===i&&(t.type=e),t},E=(e,t,o)=>e.setAttribute(t,o),N=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},H=(e,t,o)=>e.getAttribute(o?'data-'+t:t),I=(e,t)=>e.appendChild(t),V=(e,t)=>e.classList.add(t),j=(e,t)=>V(e,'cm__'+t),L=(e,t)=>V(e,'pm__'+t),P=(e,t)=>e.classList.remove(t),F=(e,t)=>e.classList.contains(t),O=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=O(n)}return t},R=()=>{const e={},{O:t,X:o,Y:n}=m.o;for(const a of t)e[a]=U(n[a],S(o[a]));return e},B=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),G=(e,t,o,n)=>{e.addEventListener(t,o),n&&m.o.m.push({ue:e,ge:t,me:o})},J=()=>{const e=m.t.cookie.expiresAfterDays;return C(e)?e(m.o.P):e},U=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!v(n,e))).concat(n.filter((e=>!v(o,e))))},$=e=>{m.o.R=x(e),m.o.P=(()=>{let e='custom';const{R:t,O:o,B:n}=m.o,a=t.length;return a===o.length?e='all':a===n.length&&(e='necessary'),e})()},z=(e,t,o,n)=>{const a='accept-',{show:s,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,d=e||document,_=e=>D(d,`[data-cc="${e}"]`),p=(e,t)=>{T(e),l(t),i(),r()},u=_('show-preferencesModal'),g=_('show-consentModal'),b=_(a+'all'),v=_(a+'necessary'),y=_(a+'custom'),h=m.t.lazyHtmlGeneration;for(const e of u)E(e,'aria-haspopup','dialog'),G(e,f,(e=>{T(e),c()})),h&&(G(e,'mouseenter',(e=>{T(e),m.o.N||o(t,n)}),!0),G(e,'focus',(()=>{m.o.N||o(t,n)})));for(let e of g)E(e,'aria-haspopup','dialog'),G(e,f,(e=>{T(e),s(!0)}),!0);for(let e of b)G(e,f,(e=>{p(e,'all')}),!0);for(let e of y)G(e,f,(e=>{p(e)}),!0);for(let e of v)G(e,f,(e=>{p(e,[])}),!0)},q=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},K=(e,t)=>{const o=n=>{n.target.removeEventListener('transitionend',o),'opacity'===n.propertyName&&'1'===getComputedStyle(e).opacity&&q((e=>1===e?m.ne.be:m.ne.ve)(t))};G(e,'transitionend',o)};let Q;const W=e=>{clearTimeout(Q),e?V(m.ne.ye,s):Q=setTimeout((()=>{P(m.ne.ye,s)}),500)},X=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],Y=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${X[e]}"/></svg>`,Z=e=>{const t=m.ne,o=m.o;(e=>{const n=e===t.he,a=o.i.disablePageInteraction?t.ye:n?t.we:t.ye;G(a,'keydown',(t=>{if('Tab'!==t.key||!(n?o.k&&!o.A:o.A))return;const a=M(),s=n?o.q:o.K;0!==s.length&&(t.shiftKey?a!==s[0]&&e.contains(a)||(T(t),q(s[1])):a!==s[1]&&e.contains(a)||(T(t),q(s[0])))}),!0)})(e)},ee=['[href]',i,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),te=e=>{const{o:t,ne:o}=m,n=(e,t)=>{const o=D(e,ee);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.D&&n(o.he,t.q),2===e&&t.N&&n(o.Ce,t.K)},oe=(e,t,o)=>{const{de:n,le:a,ie:s,_e:c,pe:r,fe:i}=m.ce,l=m.re;if(t){const n={modalName:t};return e===l.fe?C(i)&&i(n):e===l._e?C(c)&&c(n):(n.modal=o,C(r)&&r(n)),B(e,n)}const d={cookie:m.o.u};e===l.ie?C(s)&&s(O(d)):e===l.le?C(a)&&a(O(d)):(d.changedCategories=m.o.j,d.changedServices=m.o.ee,C(n)&&n(O(d))),B(e,O(d))},ne=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},ae=e=>{const{Y:t,ee:o,O:n,X:a,oe:s,u:r,j:i}=m.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=a[e][o];if(!n)continue;const{onAccept:s,onReject:c}=n;!n.Se&&v(t[e],o)?(n.Se=!0,C(s)&&s()):n.Se&&!v(t[e],o)&&(n.Se=!1,C(c)&&c())}}if(!m.t.manageScriptTags)return;const l=s,d=e||r.categories||[],f=(e,n)=>{if(n>=e.length)return;const a=s[n];if(a.xe)return f(e,n+1);const r=a.Me,l=a.Te,_=a.De,p=v(d,l),u=!!_&&v(t[l],_);if(!_&&!a.ke&&p||!_&&a.ke&&!p&&v(i,l)||_&&!a.ke&&u||_&&a.ke&&!u&&v(o[l]||[],_)){a.xe=!0;const t=H(r,'type',!0);N(r,'type',!!t),N(r,c);let o=H(r,'src',!0);o&&N(r,'src',!0);const s=A('script');s.textContent=r.innerHTML;for(const{nodeName:e}of r.attributes)E(s,e,r[e]||H(r,e));t&&(s.type=t),o?s.src=o:o=r.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(s.onload=s.onerror=()=>{f(e,++n)}),r.replaceWith(s),i)return}f(e,++n)};f(l,0)},se='bottom',ce='left',re='center',ie='right',le='inline',de='wide',fe='pm--',_e=['middle','top',se],pe=[ce,re,ie],ue={box:{Ae:[de,le],Ee:_e,Ne:pe,He:se,Ie:ie},cloud:{Ae:[le],Ee:_e,Ne:pe,He:se,Ie:re},bar:{Ae:[le],Ee:_e.slice(1),Ne:[],He:se,Ie:''}},ge={box:{Ae:[],Ee:[],Ne:[],He:'',Ie:''},bar:{Ae:[de],Ee:[],Ne:[ce,ie],He:'',Ie:ce}},me=e=>{const t=m.o.i.guiOptions,o=t&&t.consentModal,n=t&&t.preferencesModal;0===e&&be(m.ne.he,ue,o,'cm--','box','cm'),1===e&&be(m.ne.Ce,ge,n,fe,'box','pm')},be=(e,t,o,n,a,s)=>{e.className=s;const c=o&&o.layout,r=o&&o.position,i=o&&o.flipButtons,l=!o||!1!==o.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],p=f in t?f:a,u=t[p],g=v(u.Ae,_)&&_,b=r&&r.split(' ')||[],y=b[0],h=n===fe?b[0]:b[1],w=v(u.Ee,y)?y:u.He,C=v(u.Ne,h)?h:u.Ie,S=t=>{t&&V(e,n+t)};S(p),S(g),S(w),S(C),i&&S('flip');const x=s+'__btn--secondary';if('cm'===s){const{Ve:e,je:t}=m.ne;e&&(l?P(e,x):V(e,x)),t&&(l?P(t,x):V(t,x))}else{const{Le:e}=m.ne;e&&(l?P(e,x):V(e,x))}},ve=(e,t)=>{const o=m.o,n=m.ne,{hide:a,hidePreferences:s,acceptCategory:c}=e,p=e=>{c(e),s(),a()},g=o.p&&o.p.preferencesModal;if(!g)return;const b=g.title,v=g.closeIconLabel,y=g.acceptAllBtn,C=g.acceptNecessaryBtn,x=g.savePreferencesBtn,M=g.sections||[],T=y||C||x;if(n.Pe)n.Fe=A(r),L(n.Fe,'body');else{n.Pe=A(r),V(n.Pe,'pm-wrapper');const e=A('div');V(e,'pm-overlay'),I(n.Pe,e),G(e,f,s),n.Ce=A(r),V(n.Ce,'pm'),E(n.Ce,'role','dialog'),E(n.Ce,l,!0),E(n.Ce,'aria-modal',!0),E(n.Ce,'aria-labelledby','pm__title'),G(n.ye,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.Oe=A(r),L(n.Oe,'header'),n.Re=A('h2'),L(n.Re,'title'),n.Re.id='pm__title',n.Be=A(i),L(n.Be,'close-btn'),E(n.Be,'aria-label',g.closeIconLabel||''),G(n.Be,f,s),n.Ge=A('span'),n.Ge.innerHTML=Y(),I(n.Be,n.Ge),n.Je=A(r),L(n.Je,'body'),n.Ue=A(r),L(n.Ue,'footer');var D=A(r);V(D,'btns');var k=A(r),N=A(r);L(k,d),L(N,d),I(n.Ue,k),I(n.Ue,N),I(n.Oe,n.Re),I(n.Oe,n.Be),n.ve=A(r),E(n.ve,'tabIndex',-1),I(n.Ce,n.ve),I(n.Ce,n.Oe),I(n.Ce,n.Je),T&&I(n.Ce,n.Ue),I(n.Pe,n.Ce)}let H;b&&(n.Re.innerHTML=b,v&&E(n.Be,'aria-label',v)),M.forEach(((e,t)=>{const a=e.title,s=e.description,c=e.linkedCategory,d=c&&o.F[c],_=e.cookieTable,p=_&&_.body,u=_&&_.caption,m=p&&p.length>0,b=!!d,v=b&&o.X[c],y=w(v)&&S(v)||[],C=b&&(!!s||!!m||S(v).length>0);var x=A(r);if(L(x,'section'),C||s){var M=A(r);L(M,'section-desc-wrapper')}let T=y.length;if(C&&T>0){const e=A(r);L(e,'section-services');for(const t of y){const o=v[t],n=o&&o.label||t,a=A(r),s=A(r),i=A(r),l=A(r);L(a,'service'),L(l,'service-title'),L(s,'service-header'),L(i,'service-icon');const f=ye(n,t,d,!0,c);l.innerHTML=n,I(s,i),I(s,l),I(a,s),I(a,f),I(e,a)}I(M,e)}if(a){var D=A(r),k=A(b?i:r);if(L(D,'section-title-wrapper'),L(k,'section-title'),k.innerHTML=a,I(D,k),b){const e=A('span');e.innerHTML=Y(2,3.5),L(e,'section-arrow'),I(D,e),x.className+='--toggle';const t=ye(a,c,d);let o=g.serviceCounterLabel;if(T>0&&h(o)){let e=A('span');L(e,'badge'),L(e,'service-counter'),E(e,l,!0),E(e,'data-servicecounter',T),o&&(o=o.split('|'),o=o.length>1&&T>1?o[1]:o[0],E(e,'data-counterlabel',o)),e.innerHTML=T+(o?' '+o:''),I(k,e)}if(C){L(x,'section--expandable');var N=c+'-desc';E(k,'aria-expanded',!1),E(k,'aria-controls',N)}I(D,t)}else E(k,'role','heading'),E(k,'aria-level','3');I(x,D)}if(s){var j=A('p');L(j,'section-desc'),j.innerHTML=s,I(M,j)}if(C&&(E(M,l,'true'),M.id=N,((e,t,o)=>{G(k,f,(()=>{F(t,'is-expanded')?(P(t,'is-expanded'),E(o,'aria-expanded','false'),E(e,l,'true')):(V(t,'is-expanded'),E(o,'aria-expanded','true'),E(e,l,'false'))}))})(M,x,k),m)){const e=A('table'),o=A('thead'),a=A('tbody');if(u){const t=A('caption');L(t,'table-caption'),t.innerHTML=u,e.appendChild(t)}L(e,'section-table'),L(o,'table-head'),L(a,'table-body');const s=_.headers,c=S(s),i=n.$e.createDocumentFragment(),l=A('tr');for(const e of c){const o=s[e],n=A('th');n.id='cc__row-'+o+t,E(n,'scope','col'),L(n,'table-th'),n.innerHTML=o,I(i,n)}I(l,i),I(o,l);const d=n.$e.createDocumentFragment();for(const e of p){const o=A('tr');L(o,'table-tr');for(const n of c){const a=s[n],c=e[n],i=A('td'),l=A(r);L(i,'table-td'),E(i,'data-column',a),E(i,'headers','cc__row-'+a+t),l.insertAdjacentHTML('beforeend',c),I(i,l),I(o,i)}I(d,o)}I(a,d),I(e,o),I(e,a),I(M,e)}(C||s)&&I(x,M);const O=n.Fe||n.Je;b?(H||(H=A(r),L(H,'section-toggles')),H.appendChild(x)):H=null,I(O,H||x)})),y&&(n.ze||(n.ze=A(i),L(n.ze,'btn'),E(n.ze,_,'all'),I(k,n.ze),G(n.ze,f,(()=>p('all')))),n.ze.innerHTML=y),C&&(n.Le||(n.Le=A(i),L(n.Le,'btn'),E(n.Le,_,'necessary'),I(k,n.Le),G(n.Le,f,(()=>p([])))),n.Le.innerHTML=C),x&&(n.qe||(n.qe=A(i),L(n.qe,'btn'),L(n.qe,'btn--secondary'),E(n.qe,_,'save'),I(N,n.qe),G(n.qe,f,(()=>p()))),n.qe.innerHTML=x),n.Fe&&(n.Ce.replaceChild(n.Fe,n.Je),n.Je=n.Fe),me(1),o.N||(o.N=!0,oe(m.re.pe,u,n.Ce),t(e),I(n.we,n.Pe),Z(n.Ce),setTimeout((()=>V(n.Pe,'cc--anim')),100)),te(2)};function ye(e,t,o,n,a){const s=m.o,r=m.ne,i=A('label'),d=A('input'),_=A('span'),p=A('span'),u=A('span'),g=A('span'),b=A('span');if(g.innerHTML=Y(1,3),b.innerHTML=Y(0,3),d.type='checkbox',V(i,'section__toggle-wrapper'),V(d,'section__toggle'),V(g,'toggle__icon-on'),V(b,'toggle__icon-off'),V(_,'toggle__icon'),V(p,'toggle__icon-circle'),V(u,'toggle__label'),E(_,l,'true'),n?(V(i,'toggle-service'),E(d,c,a),r.se[a][t]=d):r.ae[t]=d,n?(e=>{G(d,'change',(()=>{const t=r.se[e],o=r.ae[e];s.Z[e]=[];for(let o in t){const n=t[o];n.checked&&s.Z[e].push(n.value)}o.checked=s.Z[e].length>0}))})(a):(e=>{G(d,f,(()=>{const t=r.se[e],o=d.checked;s.Z[e]=[];for(let n in t)t[n].checked=o,o&&s.Z[e].push(n)}))})(t),d.value=t,u.textContent=e.replace(/<.*>.*<\/.*>/gm,''),I(p,b),I(p,g),I(_,p),s.T)(o.readOnly||o.enabled)&&(d.checked=!0);else if(n){const e=s.Y[a];d.checked=o.readOnly||v(e,t)}else v(s.R,t)&&(d.checked=!0);return o.readOnly&&(d.disabled=!0),I(i,d),I(i,_),I(i,u),i}const he=(e,t)=>{const o=m.o,n=m.ne,{hide:a,hidePreferences:s,acceptCategory:c}=e,p=e=>{c(e),s(),a()},g=o.p&&o.p.additionalInfoModal;if(!g)return;const b=g.title,v=g.closeIconLabel,y=g.acceptAllBtn,C=g.acceptNecessaryBtn,x=g.savePreferencesBtn,M=g.sections||[],T=y||C||x;if(n.Pe)n.Fe=A(r),L(n.Fe,'body');else{n.Pe=A(r),V(n.Pe,'pm-wrapper');const e=A('div');V(e,'pm-overlay'),I(n.Pe,e),G(e,f,s),n.Ce=A(r),V(n.Ce,'pm'),E(n.Ce,'role','dialog'),E(n.Ce,l,!0),E(n.Ce,'aria-modal',!0),E(n.Ce,'aria-labelledby','pm__title'),G(n.ye,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.Oe=A(r),L(n.Oe,'header'),n.Re=A('h2'),L(n.Re,'title'),n.Re.id='pm__title',n.Be=A(i),L(n.Be,'close-btn'),E(n.Be,'aria-label',g.closeIconLabel||''),G(n.Be,f,s),n.Ge=A('span'),n.Ge.innerHTML=Y(),I(n.Be,n.Ge),n.Je=A(r),L(n.Je,'body'),n.Ue=A(r),L(n.Ue,'footer');var D=A(r);V(D,'btns');var k=A(r),N=A(r);L(k,d),L(N,d),I(n.Ue,k),I(n.Ue,N),I(n.Oe,n.Re),I(n.Oe,n.Be),n.ve=A(r),E(n.ve,'tabIndex',-1),I(n.Ce,n.ve),I(n.Ce,n.Oe),I(n.Ce,n.Je),T&&I(n.Ce,n.Ue),I(n.Pe,n.Ce)}let H;b&&(n.Re.innerHTML=b,v&&E(n.Be,'aria-label',v)),M.forEach(((e,t)=>{const a=e.title,s=e.description,c=e.linkedCategory,d=c&&o.F[c],_=e.cookieTable,p=_&&_.body,u=_&&_.caption,m=p&&p.length>0,b=!!d,v=b&&o.X[c],y=w(v)&&S(v)||[],C=b&&(!!s||!!m||S(v).length>0);var x=A(r);if(L(x,'section'),C||s){var M=A(r);L(M,'section-desc-wrapper')}let T=y.length;if(C&&T>0){const e=A(r);L(e,'section-services');for(const t of y){const o=v[t],n=o&&o.label||t,a=A(r),s=A(r),i=A(r),l=A(r);L(a,'service'),L(l,'service-title'),L(s,'service-header'),L(i,'service-icon');const f=we(n,t,d,!0,c);l.innerHTML=n,I(s,i),I(s,l),I(a,s),I(a,f),I(e,a)}I(M,e)}if(a){var D=A(r),k=A(b?i:r);if(L(D,'section-title-wrapper'),L(k,'section-title'),k.innerHTML=a,I(D,k),b){const e=A('span');e.innerHTML=Y(2,3.5),L(e,'section-arrow'),I(D,e),x.className+='--toggle';const t=we(a,c,d);let o=g.serviceCounterLabel;if(T>0&&h(o)){let e=A('span');L(e,'badge'),L(e,'service-counter'),E(e,l,!0),E(e,'data-servicecounter',T),o&&(o=o.split('|'),o=o.length>1&&T>1?o[1]:o[0],E(e,'data-counterlabel',o)),e.innerHTML=T+(o?' '+o:''),I(k,e)}if(C){L(x,'section--expandable');var N=c+'-desc';E(k,'aria-expanded',!1),E(k,'aria-controls',N)}I(D,t)}else E(k,'role','heading'),E(k,'aria-level','3');I(x,D)}if(s){var j=A('p');L(j,'section-desc'),j.innerHTML=s,I(M,j)}if(C&&(E(M,l,'true'),M.id=N,((e,t,o)=>{G(k,f,(()=>{F(t,'is-expanded')?(P(t,'is-expanded'),E(o,'aria-expanded','false'),E(e,l,'true')):(V(t,'is-expanded'),E(o,'aria-expanded','true'),E(e,l,'false'))}))})(M,x,k),m)){const e=A('table'),o=A('thead'),a=A('tbody');if(u){const t=A('caption');L(t,'table-caption'),t.innerHTML=u,e.appendChild(t)}L(e,'section-table'),L(o,'table-head'),L(a,'table-body');const s=_.headers,c=S(s),i=n.$e.createDocumentFragment(),l=A('tr');for(const e of c){const o=s[e],n=A('th');n.id='cc__row-'+o+t,E(n,'scope','col'),L(n,'table-th'),n.innerHTML=o,I(i,n)}I(l,i),I(o,l);const d=n.$e.createDocumentFragment();for(const e of p){const o=A('tr');L(o,'table-tr');for(const n of c){const a=s[n],c=e[n],i=A('td'),l=A(r);L(i,'table-td'),E(i,'data-column',a),E(i,'headers','cc__row-'+a+t),l.insertAdjacentHTML('beforeend',c),I(i,l),I(o,i)}I(d,o)}I(a,d),I(e,o),I(e,a),I(M,e)}(C||s)&&I(x,M);const O=n.Fe||n.Je;b?(H||(H=A(r),L(H,'section-toggles')),H.appendChild(x)):H=null,I(O,H||x)})),y&&(n.ze||(n.ze=A(i),L(n.ze,'btn'),E(n.ze,_,'all'),I(k,n.ze),G(n.ze,f,(()=>p('all')))),n.ze.innerHTML=y),C&&(n.Le||(n.Le=A(i),L(n.Le,'btn'),E(n.Le,_,'necessary'),I(k,n.Le),G(n.Le,f,(()=>p([])))),n.Le.innerHTML=C),x&&(n.qe||(n.qe=A(i),L(n.qe,'btn'),L(n.qe,'btn--secondary'),E(n.qe,_,'save'),I(N,n.qe),G(n.qe,f,(()=>p()))),n.qe.innerHTML=x),n.Fe&&(n.Ce.replaceChild(n.Fe,n.Je),n.Je=n.Fe),me(1),o.Ke||(o.Ke=!0,oe(m.re.pe,u,n.Ce),t(e),I(n.we,n.Pe),Z(n.Ce),setTimeout((()=>V(n.Pe,'cc--anim')),100)),te(2)};function we(e,t,o,n,a){const s=m.o,r=m.ne,i=A('label'),d=A('input'),_=A('span'),p=A('span'),u=A('span'),g=A('span'),b=A('span');if(g.innerHTML=Y(1,3),b.innerHTML=Y(0,3),d.type='checkbox',V(i,'section__toggle-wrapper'),V(d,'section__toggle'),V(g,'toggle__icon-on'),V(b,'toggle__icon-off'),V(_,'toggle__icon'),V(p,'toggle__icon-circle'),V(u,'toggle__label'),E(_,l,'true'),n?(V(i,'toggle-service'),E(d,c,a),r.se[a][t]=d):r.ae[t]=d,n?(e=>{G(d,'change',(()=>{const t=r.se[e],o=r.ae[e];s.Z[e]=[];for(let o in t){const n=t[o];n.checked&&s.Z[e].push(n.value)}o.checked=s.Z[e].length>0}))})(a):(e=>{G(d,f,(()=>{const t=r.se[e],o=d.checked;s.Z[e]=[];for(let n in t)t[n].checked=o,o&&s.Z[e].push(n)}))})(t),d.value=t,u.textContent=e.replace(/<.*>.*<\/.*>/gm,''),I(p,b),I(p,g),I(_,p),s.T)(o.readOnly||o.enabled)&&(d.checked=!0);else if(n){const e=s.Y[a];d.checked=o.readOnly||v(e,t)}else v(s.R,t)&&(d.checked=!0);return o.readOnly&&(d.disabled=!0),I(i,d),I(i,_),I(i,u),i}const Ce=()=>{const e=A('span');return m.ne.Qe||(m.ne.Qe=e),e},Se=(e,t)=>{const o=m.o,n=m.ne,{hide:a,showPreferences:s,showAdditionalInfo:c,acceptCategory:u}=e,g=o.p&&o.p.consentModal;if(!g)return;const b=g.acceptAllBtn,v=g.acceptNecessaryBtn,y=g.showPreferencesBtn,h=g.showAdditionalInfoBtn,w=g.closeIconLabel,C=g.footer,S=g.label,x=g.title,M=e=>{a(),u(e)};if(!n.We){n.We=A(r),n.he=A(r),n.Xe=A(r),n.Ye=A(r),n.Ze=A(r),V(n.We,'cm-wrapper'),V(n.he,'cm'),j(n.Xe,'body'),j(n.Ye,'texts'),j(n.Ze,'btns'),E(n.he,'role','dialog'),E(n.he,'aria-modal','true'),E(n.he,l,'false'),E(n.he,'aria-describedby','cm__desc'),S?E(n.he,'aria-label',S):x&&E(n.he,'aria-labelledby','cm__title');const e='box',t=o.i.guiOptions,a=t&&t.consentModal,s=(a&&a.layout||e).split(' ')[0]===e;x&&w&&s&&(n.je||(n.je=A(i),n.je.innerHTML=Y(),j(n.je,'btn'),j(n.je,'btn--close'),G(n.je,f,(()=>{M([])})),I(n.Xe,n.je)),E(n.je,'aria-label',w)),I(n.Xe,n.Ye),(b||v||y||h)&&I(n.Xe,n.Ze),n.be=A(r),E(n.be,'tabIndex',-1),I(n.he,n.be),I(n.he,n.Xe),I(n.We,n.he)}x&&(n.et||(n.et=A('h2'),n.et.className=n.et.id='cm__title',I(n.Ye,n.et)),n.et.innerHTML=x);let T=g.description;if(T&&(o.I&&(T=T.replace('{{revisionMessage}}',o.V?'':g.revisionMessage||'')),n.tt||(n.tt=A('p'),n.tt.className=n.tt.id='cm__desc',I(n.Ye,n.tt)),n.tt.innerHTML=T),b&&(n.ot||(n.ot=A(i),I(n.ot,Ce()),j(n.ot,'btn'),E(n.ot,_,'all'),G(n.ot,f,(()=>{M('all')}))),n.ot.firstElementChild.innerHTML=b),v&&(n.Ve||(n.Ve=A(i),I(n.Ve,Ce()),j(n.Ve,'btn'),E(n.Ve,_,'necessary'),G(n.Ve,f,(()=>{M([])}))),n.Ve.firstElementChild.innerHTML=v),y&&(n.nt||(n.nt=A(i),I(n.nt,Ce()),j(n.nt,'btn'),j(n.nt,'btn--secondary'),E(n.nt,_,'show'),G(n.nt,'mouseenter',(()=>{o.N||ve(e,t)})),G(n.nt,f,s)),n.nt.firstElementChild.innerHTML=y),h&&(n.st||(n.st=A(i),I(n.st,Ce()),j(n.st,'btn'),j(n.st,'btn--secondary'),E(n.st,_,'show'),G(n.st,'mouseenter',(()=>{o.N||he(e,t)})),G(n.st,f,c)),n.st.firstElementChild.innerHTML=h),n.ct||(n.ct=A(r),j(n.ct,d),b&&I(n.ct,n.ot),v&&I(n.ct,n.Ve),(b||v)&&I(n.Xe,n.ct),I(n.Ze,n.ct)),n.nt&&!n.rt&&(n.rt=A(r),n.Ve&&n.ot?(j(n.rt,d),I(n.rt,n.nt),I(n.rt,n.st),I(n.Ze,n.rt)):(I(n.ct,n.nt),I(n.ct,n.st),j(n.ct,d+'--uneven'))),C){if(!n.it){let e=A(r),t=A(r);n.it=A(r),j(e,'footer'),j(t,'links'),j(n.it,'link-group'),I(t,n.it),I(e,t),I(n.he,e)}n.it.innerHTML=C}me(0),o.D||(o.D=!0,oe(m.re.pe,p,n.he),t(e),I(n.we,n.We),Z(n.he),setTimeout((()=>V(n.We,'cc--anim')),100)),te(1),z(n.Xe,e,ve,t)},xe=e=>{if(!h(e))return null;if(e in m.o._)return e;let t=e.slice(0,2);return t in m.o._?t:null},Me=()=>m.o.l||m.o.i.language.default,Te=e=>{e&&(m.o.l=e)},De=async e=>{const t=m.o;let o=xe(e)?e:Me(),n=t._[o];return h(n)?n=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(n):C(n)&&(n=await n()),!!n&&(t.p=n,Te(o),!0)},ke=()=>{let e=m.o.i.language.rtl,t=m.ne.we;e&&t&&(y(e)||(e=[e]),v(e,m.o.l)?V(t,'cc--rtl'):P(t,'cc--rtl'))},Ae=()=>{const e=m.ne;if(e.we)return;e.we=A(r),e.we.id='cc-main',e.we.setAttribute('data-nosnippet',''),ke();let t=m.o.i.root;t&&h(t)&&(t=document.querySelector(t)),(t||e.$e.body).appendChild(e.we)},Ee=e=>ne((()=>localStorage.removeItem(e))),Ne=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=b(e,t);return o>-1?[e[o]]:[]}},He=e=>{const{hostname:t,protocol:o}=location,{name:n,path:a,domain:s,sameSite:c,useLocalStorage:r}=m.t.cookie,i=e?(()=>{const e=m.o.S,t=e?new Date-e:0;return 864e5*J()-t})():864e5*J(),l=new Date;l.setTime(l.getTime()+i),m.o.u.expirationTime=l.getTime();const d=JSON.stringify(m.o.u);let f=n+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+c;v(t,'.')&&(f+='; Domain='+s),'https:'===o&&(f+='; Secure'),r?((e,t)=>{ne((()=>localStorage.setItem(e,t)))})(n,d):document.cookie=f,m.o.u},Ie=(e,t,o)=>{if(0===e.length)return;const n=o||m.t.cookie.domain,a=t||m.t.cookie.path,s='www.'===n.slice(0,4),c=s&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),s&&r(t,c)},Ve=e=>{const t=e||m.t.cookie.name,o=m.t.cookie.useLocalStorage;return((e,t)=>{let o;return o=ne((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},o})(o?(n=t,ne((()=>localStorage.getItem(n)))||''):je(t,!0),o);var n},je=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},Le=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];e?ne((()=>{e.test(t)&&o.push(t)})):o.push(t)}return o},Pe=(e,n=[])=>{((e,t)=>{const{O:o,R:n,B:a,N:s,Z:c,G:r,X:i}=m.o;let l=[];if(e){y(e)?l.push(...e):h(e)&&(l='all'===e?o:[e]);for(const e of o)c[e]=v(l,e)?S(i[e]):[]}else l=[...n,...r],s&&(l=(()=>{const e=m.ne.ae;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})());l=l.filter((e=>!v(o,e)||!v(t,e))),l.push(...a),$(l)})(e,n),(e=>{const t=m.o,{Z:o,B:n,Y:a,X:s,O:c}=t,r=c;t.te=O(a);for(const e of r){const c=s[e],r=S(c),i=o[e]&&o[e].length>0,l=v(n,e);if(0!==r.length){if(a[e]=[],l)a[e].push(...r);else if(i){const t=o[e];a[e].push(...t)}else a[e]=t.Z[e];a[e]=x(a[e])}}})(),(()=>{const e=m.o;e.j=m.t.mode===o&&e.T?U(e.G,e.R):U(e.R,e.u.categories);let n=e.j.length>0,a=!1;for(const t of e.O)e.ee[t]=U(e.Y[t],e.te[t]),e.ee[t].length>0&&(a=!0);const s=m.ne.ae;for(const t in s)s[t].checked=v(e.R,t);for(const t of e.O){const o=m.ne.se[t],n=e.Y[t];for(const e in o)o[e].checked=v(n,e)}e.C||(e.C=new Date),e.M||(e.M=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.u={categories:O(e.R),revision:m.t.revision,data:e.h,consentTimestamp:e.C.toISOString(),consentId:e.M,services:O(e.Y)},e.S&&(e.u.lastConsentTimestamp=e.S.toISOString());let c=!1;const r=n||a;(e.T||r)&&(e.T&&(e.T=!1,c=!0),e.S=e.S?new Date:e.C,e.u.lastConsentTimestamp=e.S.toISOString(),He(),m.t.autoClearCookies&&(c||r)&&(e=>{const t=m.o,o=Le(),n=(e=>{const t=m.o;return(e?t.O:t.j).filter((e=>{const o=t.F[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.ee)for(const n of t.ee[e]){const a=t.X[e][n].cookies;if(!v(t.Y[e],n)&&a)for(const e of a){const t=Ne(o,e.name);Ie(t,e.path,e.domain)}}for(const a of n){const n=t.F[a].autoClear,s=n&&n.cookies||[],c=v(t.j,a),r=!v(t.R,a),i=c&&r;if(e?r:i){n.reloadPage&&i&&(t.L=!0);for(const e of s){const t=Ne(o,e.name);Ie(t,e.path,e.domain)}}}})(c),ae()),c&&(oe(m.re.ie),oe(m.re.le),m.t.mode===t)||(r&&oe(m.re.de),e.L&&(e.L=!1,location.reload()))})()},Fe=e=>{const t=m.o.T?[]:m.o.R;return v(t,e)},Oe=(e,t)=>{const o=m.o.T?[]:m.o.Y[t]||[];return v(o,e)},Re=(e,t,o)=>{let n=[];const a=e=>{if(h(e)){let t=je(e);''!==t&&n.push(t)}else n.push(...Le(e))};if(y(e))for(let t of e)a(t);else a(e);Ie(n,t,o)},Be=e=>{const{ne:t,o:o}=m;if(!o.k){if(!o.D){if(!e)return;Se(ze,Ae)}o.k=!0,o.U=M(),o.v&&W(!0),K(t.he,1),V(t.ye,n),E(t.he,l,'false'),setTimeout((()=>{q(m.ne.be)}),100),oe(m.re.fe,p)}},Ge=()=>{const{ne:e,o:t,re:o}=m;t.k&&(t.k=!1,t.v&&W(),q(e.Qe,!0),P(e.ye,n),E(e.he,l,'true'),q(t.U),t.U=null,oe(o._e,p))},Je=()=>{const e=m.o;e.A||(e.N||ve(ze,Ae),e.A=!0,e.k?e.$=M():e.U=M(),K(m.ne.Ce,2),V(m.ne.ye,a),E(m.ne.Ce,l,'false'),setTimeout((()=>{q(m.ne.ve)}),100),oe(m.re.fe,u))},Ue=()=>{const e=m.o;e.lt||(e.Ke||he(ze,Ae),e.lt=!0,e.k?e.$=M():e.U=M(),K(m.ne.Ce,2),V(m.ne.ye,a),E(m.ne.Ce,l,'false'),setTimeout((()=>{q(m.ne.ve)}),100),oe(m.re.fe,u))},$e=()=>{const e=m.o;e.A&&(e.A=!1,(()=>{const e=Ke(),t=m.o.F,o=m.ne.ae,n=m.ne.se,a=e=>v(m.o.G,e);for(const s in o){const c=!!t[s].readOnly;o[s].checked=c||(e?Fe(s):a(s));for(const t in n[s])n[s][t].checked=c||(e?Oe(t,s):a(s))}})(),q(m.ne.Ge,!0),P(m.ne.ye,a),E(m.ne.Ce,l,'true'),e.k?(q(e.$),e.$=null):(q(e.U),e.U=null),oe(m.re._e,u))};var ze={show:Be,hide:Ge,showPreferences:Je,showAdditionalInfo:Ue,hidePreferences:$e,acceptCategory:Pe};const qe=(e,t)=>{const o=Ve(t);return e?o[e]:o},Ke=()=>!m.o.T;e.acceptCategory=Pe,e.acceptService=(e,t)=>{const{O:o,X:n}=m.o;if(!(e&&t&&h(t)&&v(o,t)&&0!==S(n[t]).length))return!1;((e,t)=>{const o=m.o,{X:n,Z:a,N:s}=o,c=m.ne.se[t]||{},r=m.ne.ae[t]||{},i=S(n[t]);if(a[t]=[],h(e)){if('all'===e){if(a[t].push(...i),s)for(let e in c)c[e].checked=!0,k(c[e])}else if(v(i,e)&&a[t].push(e),s)for(let t in c)c[t].checked=e===t,k(c[t])}else if(y(e))for(let o of i){const n=v(e,o);n&&a[t].push(o),s&&(c[o].checked=n,k(c[o]))}const l=0===a[t].length;o.R=l?o.R.filter((e=>e!==t)):x([...o.R,t]),s&&(r.checked=!l,k(r))})(e,t),Pe()},e.acceptedCategory=Fe,e.acceptedService=Oe,e.eraseCookies=Re,e.getConfig=e=>{const t=m.t,o=m.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},e.getCookie=qe,e.getUserPreferences=()=>{const{P:e,Y:t}=m.o,{accepted:o,rejected:n}=(()=>{const{T:e,R:t,O:o}=m.o;return{accepted:t,rejected:e?[]:o.filter((e=>!v(t,e)))}})();return O({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:R()})},e.hide=Ge,e.hidePreferences=$e,e.loadScript=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=A('script'),w(t))for(const e in t)E(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,I(document.head,o)}))},e.reset=e=>{const{we:t,ye:o}=m.ne,{name:c,path:r,domain:i,useLocalStorage:l}=m.t.cookie;e&&(l?Ee(c):Re(c,r,i));for(const{ue:e,ge:t,me:o}of m.o.m)e.removeEventListener(t,o);t&&t.remove(),o&&o.classList.remove(s,a,n);const d=new g;for(const e in m)m[e]=d[e];window._ccRun=!1},e.run=async e=>{const{o:t,t:n,re:a}=m,s=window;if(!s._ccRun){if(s._ccRun=!0,(e=>{const{ne:t,t:n,o:a}=m,s=n,r=a,{cookie:i}=s,l=m.ce,d=e.cookie,f=e.categories,_=S(f)||[],p=navigator,u=document;t.$e=u,t.ye=u.documentElement,i.domain=location.hostname,r.i=e,r.F=f,r.O=_,r._=e.language.translations,r.v=!!e.disablePageInteraction,l.ie=e.onFirstConsent,l.le=e.onConsent,l.de=e.onChange,l._e=e.onModalHide,l.fe=e.onModalShow,l.pe=e.onModalReady;const{mode:g,autoShow:b,lazyHtmlGeneration:y,autoClearCookies:h,revision:C,manageScriptTags:x,hideFromBots:M}=e;g===o&&(s.mode=g),'boolean'==typeof h&&(s.autoClearCookies=h),'boolean'==typeof x&&(s.manageScriptTags=x),'number'==typeof C&&C>=0&&(s.revision=C,r.I=!0),'boolean'==typeof b&&(s.autoShow=b),'boolean'==typeof y&&(s.lazyHtmlGeneration=y),!1===M&&(s.hideFromBots=!1),!0===s.hideFromBots&&p&&(r.J=p.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(p.userAgent)||p.webdriver),w(d)&&(s.cookie={...i,...d}),s.autoClearCookies,r.I,s.manageScriptTags,(e=>{const{F:t,X:o,Y:n,Z:a,B:s}=m.o;for(let c of e){const e=t[c],r=e.services||{},i=w(r)&&S(r)||[];o[c]={},n[c]=[],a[c]=[],e.readOnly&&(s.push(c),n[c]=i),m.ne.se[c]={};for(let e of i){const t=r[e];t.Se=!1,o[c][e]=t}}})(_),(()=>{if(!m.t.manageScriptTags)return;const e=m.o,t=D(document,'script['+c+']');for(const o of t){let t=H(o,c),n=o.dataset.service||'',a=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),a=!0),'!'===n.charAt(0)&&(n=n.slice(1),a=!0),v(e.O,t)&&(e.oe.push({Me:o,xe:!1,ke:a,Te:t,De:n}),n)){const o=e.X[t];o[n]||(o[n]={Se:!1})}}})(),Te((()=>{const e=m.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},o=xe(t[e]);if(o)return o}return Me()})())})(e),t.J)return;(()=>{const e=m.o,t=m.t,n=Ve(),{categories:a,services:s,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=n,f=y(a);e.u=n,e.M=c;const _=!!c&&h(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.I&&_&&d!==t.revision&&(e.V=!1),e.T=!(_&&e.V&&e.C&&e.S&&f),t.cookie.useLocalStorage&&!e.T&&(e.T=(new Date).getTime()>(n.expirationTime||0),e.T&&Ee(t.cookie.name)),e.T,(()=>{const e=m.o;for(const t of e.O){const n=e.F[t];if(n.readOnly||n.enabled){e.G.push(t);const n=e.X[t]||{};for(let a in n)e.Z[t].push(a),e.i.mode===o&&e.Y[t].push(a)}}})(),e.T?t.mode===o&&(e.R=[...e.G]):(e.Y={...e.Y,...s},e.Z={...e.Y},$([...e.B,...a]))})();const i=Ke();if(!await De())return!1;if(z(null,r=ze,ve,Ae),m.o.T&&Se(r,Ae),m.t.lazyHtmlGeneration||(ve(r,Ae),he(r,Ae)),n.autoShow&&!i&&Be(!0),i)return ae(),oe(a.le);n.mode===o&&ae(t.G)}var r},e.setCookieData=e=>{let t,o=e.value,n=e.mode,a=!1;const s=m.o;if('update'===n){s.h=t=qe('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],a=!0)}else!e&&t||t===o||(t=o,a=!0)}else t=o,a=!0;return a&&(s.h=t,s.u.data=t,He(!0)),a},e.setLanguage=async(e,t)=>{if(!xe(e))return!1;const o=m.o;return!(e===Me()&&!0!==t||!await De(e)||(Te(e),o.D&&Se(ze,Ae),o.N&&ve(ze,Ae),ke(),0))},e.show=Be,e.showAdditionalInfo=Ue,e.showPreferences=Je,e.validConsent=Ke,e.validCookie=e=>''!==je(e,!0)},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={});
