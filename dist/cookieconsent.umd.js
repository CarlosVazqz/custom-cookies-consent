/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t='opt-in',o='opt-out',n='show--consent',a='show--preferences',s='show--additionalinfo',c='disable--interaction',r='data-category',i='div',l='button',d='aria-hidden',f='btn-group',_='click',u='data-role',p='consentModal',m='preferencesModal';class g{constructor(){this.t={mode:t,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],v:!1,h:null,C:null,S:null,M:'',T:!0,j:!1,A:!1,D:!1,k:!1,N:[],H:!1,V:!0,I:[],P:!1,L:'',O:!1,F:[],R:[],B:[],J:[],q:!1,G:!1,U:!1,$:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},oe:[]},this.ne={ae:{},se:{}},this.ce={},this.re={ie:'cc:onFirstConsent',le:'cc:onConsent',de:'cc:onChange',fe:'cc:onModalShow',_e:'cc:onModalHide',ue:'cc:onModalReady'}}}const b=new g,v=(e,t)=>e.indexOf(t),y=(e,t)=>-1!==v(e,t),h=e=>Array.isArray(e),w=e=>'string'==typeof e,C=e=>!!e&&'object'==typeof e&&!h(e),S=e=>'function'==typeof e,x=e=>Object.keys(e),M=e=>Array.from(new Set(e)),T=()=>document.activeElement,j=e=>e.preventDefault(),A=(e,t)=>e.querySelectorAll(t),D=e=>e.dispatchEvent(new Event('change')),k=e=>{const t=document.createElement(e);return e===l&&(t.type=e),t},N=(e,t,o)=>e.setAttribute(t,o),E=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},H=(e,t,o)=>e.getAttribute(o?'data-'+t:t),V=(e,t)=>e.appendChild(t),I=(e,t)=>e.classList.add(t),P=(e,t)=>I(e,'cm__'+t),L=(e,t)=>I(e,'pm__'+t),O=(e,t)=>I(e,'aim__'+t),F=(e,t)=>e.classList.remove(t),R=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=R(n)}return t},B=()=>{const e={},{F:t,X:o,Y:n}=b.o;for(const a of t)e[a]=U(n[a],x(o[a]));return e},J=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),q=(e,t,o,n)=>{e.addEventListener(t,o),n&&b.o.m.push({pe:e,me:t,ge:o})},G=()=>{const e=b.t.cookie.expiresAfterDays;return S(e)?e(b.o.L):e},U=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!y(n,e))).concat(n.filter((e=>!y(o,e))))},$=e=>{b.o.R=M(e),b.o.L=(()=>{let e='custom';const{R:t,F:o,B:n}=b.o,a=t.length;return a===o.length?e='all':a===n.length&&(e='necessary'),e})()},z=(e,t,o,n)=>{const a='accept-',{show:s,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,d=e||document,f=e=>A(d,`[data-cc="${e}"]`),u=(e,t)=>{j(e),l(t),i(),r()},p=f('show-preferencesModal'),m=f('show-consentModal'),g=f(a+'all'),v=f(a+'necessary'),y=f(a+'custom'),h=b.t.lazyHtmlGeneration;for(const e of p)N(e,'aria-haspopup','dialog'),q(e,_,(e=>{j(e),c()})),h&&(q(e,'mouseenter',(e=>{j(e),b.o.k||o(t,n)}),!0),q(e,'focus',(()=>{b.o.k||o(t,n)})));for(let e of m)N(e,'aria-haspopup','dialog'),q(e,_,(e=>{j(e),s(!0)}),!0);for(let e of g)q(e,_,(e=>{u(e,'all')}),!0);for(let e of y)q(e,_,(e=>{u(e)}),!0);for(let e of v)q(e,_,(e=>{u(e,[])}),!0)},Q=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},K=(e,t)=>{const o=n=>{n.target.removeEventListener('transitionend',o),'opacity'===n.propertyName&&'1'===getComputedStyle(e).opacity&&Q((e=>1===e?b.ne.be:2===e?b.ne.ve:b.ne.ye)(t))};q(e,'transitionend',o)};let W;const X=e=>{clearTimeout(W),e?I(b.ne.he,c):W=setTimeout((()=>{F(b.ne.he,c)}),500)},Y=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],Z=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${Y[e]}"/></svg>`,ee=e=>{const t=b.ne,o=b.o;(e=>{const n=e===t.we,a=o.i.disablePageInteraction?t.he:n?t.Ce:t.he;q(a,'keydown',(t=>{if('Tab'!==t.key||!(n?o.A&&!o.D:o.D))return;const a=T(),s=n?o.$:o.K;0!==s.length&&(t.shiftKey?a!==s[0]&&e.contains(a)||(j(t),Q(s[1])):a!==s[1]&&e.contains(a)||(j(t),Q(s[0])))}),!0)})(e)},te=['[href]',l,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),oe=e=>{const{o:t,ne:o}=b,n=(e,t)=>{const o=A(e,te);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.j&&n(o.we,t.$),2===e&&t.k&&n(o.Se,t.K)},ne=(e,t,o)=>{const{de:n,le:a,ie:s,_e:c,ue:r,fe:i}=b.ce,l=b.re;if(t){const n={modalName:t};return e===l.fe?S(i)&&i(n):e===l._e?S(c)&&c(n):(n.modal=o,S(r)&&r(n)),J(e,n)}const d={cookie:b.o.p};e===l.ie?S(s)&&s(R(d)):e===l.le?S(a)&&a(R(d)):(d.changedCategories=b.o.I,d.changedServices=b.o.ee,S(n)&&n(R(d))),J(e,R(d))},ae=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},se=e=>{const{Y:t,ee:o,F:n,X:a,oe:s,p:c,I:i}=b.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=a[e][o];if(!n)continue;const{onAccept:s,onReject:c}=n;!n.xe&&y(t[e],o)?(n.xe=!0,S(s)&&s()):n.xe&&!y(t[e],o)&&(n.xe=!1,S(c)&&c())}}if(!b.t.manageScriptTags)return;const l=s,d=e||c.categories||[],f=(e,n)=>{if(n>=e.length)return;const a=s[n];if(a.Me)return f(e,n+1);const c=a.Te,l=a.je,_=a.Ae,u=y(d,l),p=!!_&&y(t[l],_);if(!_&&!a.De&&u||!_&&a.De&&!u&&y(i,l)||_&&!a.De&&p||_&&a.De&&!p&&y(o[l]||[],_)){a.Me=!0;const t=H(c,'type',!0);E(c,'type',!!t),E(c,r);let o=H(c,'src',!0);o&&E(c,'src',!0);const s=k('script');s.textContent=c.innerHTML;for(const{nodeName:e}of c.attributes)N(s,e,c[e]||H(c,e));t&&(s.type=t),o?s.src=o:o=c.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(s.onload=s.onerror=()=>{f(e,++n)}),c.replaceWith(s),i)return}f(e,++n)};f(l,0)},ce='bottom',re='left',ie='center',le='right',de='inline',fe='wide',_e='pm--',ue='box',pe=['middle','top',ce],me=[re,ie,le],ge={box:{ke:[fe,de],Ne:pe,Ee:me,He:ce,Ve:le},cloud:{ke:[de],Ne:pe,Ee:me,He:ce,Ve:ie},bar:{ke:[de],Ne:pe.slice(1),Ee:[],He:ce,Ve:''}},be={box:{ke:[],Ne:[],Ee:[],He:'',Ve:''},bar:{ke:[fe],Ne:[],Ee:[re,le],He:'',Ve:re}},ve={box:{ke:[],Ne:[],Ee:[],He:'',Ve:''},bar:{ke:[fe],Ne:[],Ee:[re,le],He:'',Ve:re}},ye=e=>{const t=b.o.i.guiOptions,o=t&&t.consentModal,n=t&&t.preferencesModal,a=t&&t.additionalInfoModal;0===e&&he(b.ne.we,ge,o,'cm--',ue,'cm'),1===e&&he(b.ne.Se,be,n,_e,ue,'pm'),2===e&&he(b.ne.Ie,ve,a,'aim--',ue,'aim')},he=(e,t,o,n,a,s)=>{e.className=s;const c=o&&o.layout,r=o&&o.position,i=o&&o.flipButtons,l=!o||!1!==o.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],u=f in t?f:a,p=t[u],m=y(p.ke,_)&&_,g=r&&r.split(' ')||[],v=g[0],h=n===_e?g[0]:g[1],w=y(p.Ne,v)?v:p.He,C=y(p.Ee,h)?h:p.Ve,S=t=>{t&&I(e,n+t)};S(u),S(m),S(w),S(C),i&&S('flip');const x=s+'__btn--secondary';if('cm'===s){const{Pe:e,Le:t}=b.ne;e&&(l?F(e,x):I(e,x)),t&&(l?F(t,x):I(t,x))}else{const{Oe:e}=b.ne;e&&(l?F(e,x):I(e,x))}},we=(e,t)=>{const o=b.o,n=b.ne,{hide:a,hidePreferences:s,acceptCategory:c}=e,r=e=>{c(e),s(),a()},p=o.u&&o.u.preferencesModal;if(!p)return;const g=p.title,v=p.closeIconLabel,y=p.acceptAllBtn,h=p.acceptNecessaryBtn,S=p.savePreferencesBtn,M=p.sections||[],T=y||h||S;if(n.Fe)n.Re=k(i),L(n.Re,'body');else{n.Fe=k(i),I(n.Fe,'pm-wrapper');const e=k('div');I(e,'pm-overlay'),V(n.Fe,e),q(e,_,s),n.Se=k(i),I(n.Se,'pm'),N(n.Se,'role','dialog'),N(n.Se,d,!0),N(n.Se,'aria-modal',!0),N(n.Se,'aria-labelledby','pm__title'),q(n.he,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.Be=k(i),L(n.Be,'header'),n.Je=k('h2'),L(n.Je,'title'),n.Je.id='pm__title',n.qe=k(l),L(n.qe,'close-btn'),N(n.qe,'aria-label',p.closeIconLabel||''),q(n.qe,_,s),n.Ge=k('span'),n.Ge.innerHTML=Z(),V(n.qe,n.Ge),n.Ue=k(i),L(n.Ue,'body'),n.$e=k(i),L(n.$e,'footer');var j=k(i);I(j,'btns');var A=k(i),D=k(i);L(A,f),L(D,f),V(n.$e,A),V(n.$e,D),V(n.Be,n.Je),V(n.Be,n.qe),n.ve=k(i),N(n.ve,'tabIndex',-1),V(n.Se,n.ve),V(n.Se,n.Be),V(n.Se,n.Ue),T&&V(n.Se,n.$e),V(n.Fe,n.Se)}let E;g&&(n.Je.innerHTML=g,v&&N(n.qe,'aria-label',v)),M.forEach(((e,t)=>{const a=e.title,s=e.description,c=e.linkedCategory,r=c&&o.O[c],f=e.cookieTable,u=f&&f.body,m=f&&f.caption,g=u&&u.length>0,b=!!r,v=b&&o.X[c],y=C(v)&&x(v)||[],h=b&&(!!s||!!g||x(v).length>0);var S=k(i);if(L(S,'section'),h||s){var M=k(i);L(M,'section-desc-wrapper')}let T=y.length;if(h&&T>0){const e=k(i);L(e,'section-services');for(const t of y){const o=v[t],n=o&&o.label||t,a=k(i),s=k(i),l=k(i),d=k(i);L(a,'service'),L(d,'service-title'),L(s,'service-header'),L(l,'service-icon');const f=Ce(n,t,r,!0,c);d.innerHTML=n,V(s,l),V(s,d),V(a,s),V(a,f),V(e,a)}V(M,e)}if(a){var j=k(i),A=k(b?l:i);if(L(j,'section-title-wrapper'),L(A,'section-title'),A.innerHTML=a,V(j,A),b){const e=k('span');e.innerHTML=Z(2,3.5),L(e,'section-arrow'),V(j,e),S.className+='--toggle';const t=Ce(a,c,r);let o=p.serviceCounterLabel;if(T>0&&w(o)){let e=k('span');L(e,'badge'),L(e,'service-counter'),N(e,d,!0),N(e,'data-servicecounter',T),o&&(o=o.split('|'),o=o.length>1&&T>1?o[1]:o[0],N(e,'data-counterlabel',o)),e.innerHTML=T+(o?' '+o:''),V(A,e)}if(h){L(S,'section--expandable');var D=c+'-desc';N(A,'aria-expanded',!1),N(A,'aria-controls',D)}V(j,t)}else N(A,'role','heading'),N(A,'aria-level','3');V(S,j)}if(s){var H=k('p');L(H,'section-desc'),H.innerHTML=s,V(M,H)}if(h&&(N(M,d,'true'),M.id=D,((e,t,o)=>{q(A,_,(()=>{t.classList.contains('is-expanded')?(F(t,'is-expanded'),N(o,'aria-expanded','false'),N(e,d,'true')):(I(t,'is-expanded'),N(o,'aria-expanded','true'),N(e,d,'false'))}))})(M,S,A),g)){const e=k('table'),o=k('thead'),a=k('tbody');if(m){const t=k('caption');L(t,'table-caption'),t.innerHTML=m,e.appendChild(t)}L(e,'section-table'),L(o,'table-head'),L(a,'table-body');const s=f.headers,c=x(s),r=n.ze.createDocumentFragment(),l=k('tr');for(const e of c){const o=s[e],n=k('th');n.id='cc__row-'+o+t,N(n,'scope','col'),L(n,'table-th'),n.innerHTML=o,V(r,n)}V(l,r),V(o,l);const d=n.ze.createDocumentFragment();for(const e of u){const o=k('tr');L(o,'table-tr');for(const n of c){const a=s[n],c=e[n],r=k('td'),l=k(i);L(r,'table-td'),N(r,'data-column',a),N(r,'headers','cc__row-'+a+t),l.insertAdjacentHTML('beforeend',c),V(r,l),V(o,r)}V(d,o)}V(a,d),V(e,o),V(e,a),V(M,e)}(h||s)&&V(S,M);const P=n.Re||n.Ue;b?(E||(E=k(i),L(E,'section-toggles')),E.appendChild(S)):E=null,V(P,E||S)})),y&&(n.Qe||(n.Qe=k(l),L(n.Qe,'btn'),N(n.Qe,u,'all'),V(A,n.Qe),q(n.Qe,_,(()=>r('all')))),n.Qe.innerHTML=y),h&&(n.Oe||(n.Oe=k(l),L(n.Oe,'btn'),N(n.Oe,u,'necessary'),V(A,n.Oe),q(n.Oe,_,(()=>r([])))),n.Oe.innerHTML=h),S&&(n.Ke||(n.Ke=k(l),L(n.Ke,'btn'),L(n.Ke,'btn--secondary'),N(n.Ke,u,'save'),V(D,n.Ke),q(n.Ke,_,(()=>r()))),n.Ke.innerHTML=S),n.Re&&(n.Se.replaceChild(n.Re,n.Ue),n.Ue=n.Re),ye(1),o.k||(o.k=!0,ne(b.re.ue,m,n.Se),t(e),V(n.Ce,n.Fe),ee(n.Se),setTimeout((()=>I(n.Fe,'cc--anim')),100)),oe(2)};function Ce(e,t,o,n,a){const s=b.o,c=b.ne,i=k('label'),l=k('input'),f=k('span'),u=k('span'),p=k('span'),m=k('span'),g=k('span');if(m.innerHTML=Z(1,3),g.innerHTML=Z(0,3),l.type='checkbox',I(i,'section__toggle-wrapper'),I(l,'section__toggle'),I(m,'toggle__icon-on'),I(g,'toggle__icon-off'),I(f,'toggle__icon'),I(u,'toggle__icon-circle'),I(p,'toggle__label'),N(f,d,'true'),n?(I(i,'toggle-service'),N(l,r,a),c.se[a][t]=l):c.ae[t]=l,n?(e=>{q(l,'change',(()=>{const t=c.se[e],o=c.ae[e];s.Z[e]=[];for(let o in t){const n=t[o];n.checked&&s.Z[e].push(n.value)}o.checked=s.Z[e].length>0}))})(a):(e=>{q(l,_,(()=>{const t=c.se[e],o=l.checked;s.Z[e]=[];for(let n in t)t[n].checked=o,o&&s.Z[e].push(n)}))})(t),l.value=t,p.textContent=e.replace(/<.*>.*<\/.*>/gm,''),V(u,g),V(u,m),V(f,u),s.T)(o.readOnly||o.enabled)&&(l.checked=!0);else if(n){const e=s.Y[a];l.checked=o.readOnly||y(e,t)}else y(s.R,t)&&(l.checked=!0);return o.readOnly&&(l.disabled=!0),V(i,l),V(i,f),V(i,p),i}const Se=async(e,t)=>{const o=b.o,n=b.ne,{hideAdditionalInfo:a}=e,s=o.u&&o.u.additionalInfoModal;if(!s)return;const c=s.title,r=s.description,u=s.closeBtn;if(!n.We){n.We=k(i),I(n.We,'aim-wrapper');const e=k(i);I(e,'aim-overlay'),V(n.We,e),q(e,_,a),n.Ie=k(i),I(n.Ie,'aim'),N(n.Ie,'role','dialog'),N(n.Ie,d,!0),N(n.Ie,'aria-modal',!0),N(n.Ie,'aria-labelledby','aim__title'),q(n.he,'keydown',(e=>{27===e.keyCode&&a()}),!0),n.Xe=k(i),O(n.Xe,'header'),n.Ye=k('h2'),O(n.Ye,'title'),n.Ye.id='aim__title',n.Ze=k(l),O(n.Ze,'close-btn'),N(n.Ze,'aria-label',u.ariaLabel||''),q(n.Ze,_,a),n.et=k('span'),n.et.innerHTML=Z(),V(n.Ze,n.et),n.tt=k(i),O(n.tt,'body'),n.ot=k(i),O(n.ot,'footer');var p=k(i);O(p,f),V(n.ot,p),V(n.Xe,n.Ye),V(n.Xe,n.Ze),n.ye=k(i),N(n.ye,'tabindex',-1),V(n.Ie,n.ye),V(n.Ie,n.Xe),V(n.Ie,n.tt),u&&V(n.Ie,n.ot),V(n.We,n.Ie)}if(c&&(n.Ye.innerHTML=c,u&&N(n.Ze,'aria-label',u)),r){const e=k(i);I(e,'aim-description'),e.innerHTML=r,V(n.tt,e)}(async()=>{const e=await async function(){const e=await fetch('https://669fa568b132e2c136fe9aba.mockapi.io/api/project-info/project-info');return await e.json()}(),t=JSON.parse(JSON.stringify(e[1])),o=k(i);I(o,'project-info');const a=k(i);I(a,'project-name');const s=k('span');s.innerHTML='Project Name: ',I(s,'project-name__label');const c=k('span');I(c,'project-name__value'),c.innerHTML=t.company,V(a,s),V(a,c),V(o,a);const r=k(i);I(r,'project-manager');const l=k('span');l.innerHTML='Project Manager: ',I(l,'project-manager__label');const d=k('span');I(d,'project-manager__value'),d.innerHTML=t.project_manager,V(r,l),V(r,d),V(o,r);const f=k(i);I(f,'project-developer');const _=k('span');_.innerHTML='Project Developer: ',I(_,'project-developer__label');const u=k('span');I(u,'project-developer__value'),u.innerHTML=t.developer,V(f,_),V(f,u),V(o,f);const p=k(i);I(p,'qr-code');const m=k('p');I(m,'qr-code__description'),m.innerHTML='Scan the QR code to get more information about the project';const g=k('img');I(g,'qr-code__img'),N(g,'src',t.qr_code),N(g,'alt','QR Code'),V(p,m),V(p,g),V(o,p),V(n.tt,o)})(),u&&(n.nt||(n.nt=k(l),O(n.nt,'btn'),O(n.nt,'btn--secondary'),V(p,n.nt)),n.nt.innerHTML=u,q(n.nt,_,a)),ye(2),o.st=!1,o.st||(o.st=!0,t(),V(n.Ce,n.We),ee(n.Ie),setTimeout((()=>I(n.We,'cc--anim')),100))},xe=()=>{const e=k('span');return b.ne.ct||(b.ne.ct=e),e},Me=(e,t)=>{const o=b.o,n=b.ne,{hide:a,showPreferences:s,showAdditionalInfo:c,acceptCategory:r}=e,m=o.u&&o.u.consentModal;if(!m)return;const g=m.acceptAllBtn,v=m.acceptNecessaryBtn,y=m.showPreferencesBtn,h=m.showAdditionalInfoBtn,w=m.closeIconLabel,C=m.footer,S=m.label,x=m.title,M=e=>{a(),r(e)};if(!n.rt){n.rt=k(i),n.we=k(i),n.it=k(i),n.lt=k(i),n.dt=k(i),I(n.rt,'cm-wrapper'),I(n.we,'cm'),P(n.it,'body'),P(n.lt,'texts'),P(n.dt,'btns'),N(n.we,'role','dialog'),N(n.we,'aria-modal','true'),N(n.we,d,'false'),N(n.we,'aria-describedby','cm__desc'),S?N(n.we,'aria-label',S):x&&N(n.we,'aria-labelledby','cm__title');const e='box',t=o.i.guiOptions,a=t&&t.consentModal,s=(a&&a.layout||e).split(' ')[0]===e;x&&w&&s&&(n.Le||(n.Le=k(l),n.Le.innerHTML=Z(),P(n.Le,'btn'),P(n.Le,'btn--close'),q(n.Le,_,(()=>{M([])})),V(n.it,n.Le)),N(n.Le,'aria-label',w)),V(n.it,n.lt),(g||v||y||h)&&V(n.it,n.dt),n.be=k(i),N(n.be,'tabIndex',-1),V(n.we,n.be),V(n.we,n.it),V(n.rt,n.we)}x&&(n.ft||(n.ft=k('h2'),n.ft.className=n.ft.id='cm__title',V(n.lt,n.ft)),n.ft.innerHTML=x);let T=m.description;if(T&&(o.H&&(T=T.replace('{{revisionMessage}}',o.V?'':m.revisionMessage||'')),n._t||(n._t=k('p'),n._t.className=n._t.id='cm__desc',V(n.lt,n._t)),n._t.innerHTML=T),g&&(n.ut||(n.ut=k(l),V(n.ut,xe()),P(n.ut,'btn'),N(n.ut,u,'all'),q(n.ut,_,(()=>{M('all')}))),n.ut.firstElementChild.innerHTML=g),v&&(n.Pe||(n.Pe=k(l),V(n.Pe,xe()),P(n.Pe,'btn'),N(n.Pe,u,'necessary'),q(n.Pe,_,(()=>{M([])}))),n.Pe.firstElementChild.innerHTML=v),y&&(n.gt||(n.gt=k(l),V(n.gt,xe()),P(n.gt,'btn'),P(n.gt,'btn--secondary'),N(n.gt,u,'show'),q(n.gt,'mouseenter',(()=>{o.k||we(e,t)})),q(n.gt,_,s)),n.gt.firstElementChild.innerHTML=y),h&&(n.bt||(n.bt=k(l),V(n.bt,xe()),P(n.bt,'btn'),P(n.bt,'btn--secondary'),N(n.bt,u,'show'),q(n.bt,'mouseenter',(()=>{o.st||Se(e,t)})),q(n.bt,_,c)),n.bt.firstElementChild.innerHTML=h),n.vt||(n.vt=k(i),P(n.vt,f),g&&V(n.vt,n.ut),v&&V(n.vt,n.Pe),(g||v)&&V(n.it,n.vt),V(n.dt,n.vt)),n.gt&&!n.yt&&(n.yt=k(i),n.Pe&&n.ut?(P(n.yt,f),V(n.yt,n.gt),V(n.yt,n.bt),V(n.dt,n.yt)):(V(n.vt,n.gt),V(n.vt,n.bt),P(n.vt,f+'--uneven'))),C){if(!n.ht){let e=k(i),t=k(i);n.ht=k(i),P(e,'footer'),P(t,'links'),P(n.ht,'link-group'),V(t,n.ht),V(e,t),V(n.we,e)}n.ht.innerHTML=C}ye(0),o.j||(o.j=!0,ne(b.re.ue,p,n.we),t(e),V(n.Ce,n.rt),ee(n.we),setTimeout((()=>I(n.rt,'cc--anim')),100)),oe(1),z(n.it,e,we,t)},Te=e=>{if(!w(e))return null;if(e in b.o._)return e;let t=e.slice(0,2);return t in b.o._?t:null},je=()=>b.o.l||b.o.i.language.default,Ae=e=>{e&&(b.o.l=e)},De=async e=>{const t=b.o;let o=Te(e)?e:je(),n=t._[o];return w(n)?n=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(n):S(n)&&(n=await n()),!!n&&(t.u=n,Ae(o),!0)},ke=()=>{let e=b.o.i.language.rtl,t=b.ne.Ce;e&&t&&(h(e)||(e=[e]),y(e,b.o.l)?I(t,'cc--rtl'):F(t,'cc--rtl'))},Ne=()=>{const e=b.ne;if(e.Ce)return;e.Ce=k(i),e.Ce.id='cc-main',e.Ce.setAttribute('data-nosnippet',''),ke();let t=b.o.i.root;t&&w(t)&&(t=document.querySelector(t)),(t||e.ze.body).appendChild(e.Ce)},Ee=e=>ae((()=>localStorage.removeItem(e))),He=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=v(e,t);return o>-1?[e[o]]:[]}},Ve=e=>{const{hostname:t,protocol:o}=location,{name:n,path:a,domain:s,sameSite:c,useLocalStorage:r}=b.t.cookie,i=e?(()=>{const e=b.o.S,t=e?new Date-e:0;return 864e5*G()-t})():864e5*G(),l=new Date;l.setTime(l.getTime()+i),b.o.p.expirationTime=l.getTime();const d=JSON.stringify(b.o.p);let f=n+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+c;y(t,'.')&&(f+='; Domain='+s),'https:'===o&&(f+='; Secure'),r?((e,t)=>{ae((()=>localStorage.setItem(e,t)))})(n,d):document.cookie=f,b.o.p},Ie=(e,t,o)=>{if(0===e.length)return;const n=o||b.t.cookie.domain,a=t||b.t.cookie.path,s='www.'===n.slice(0,4),c=s&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),s&&r(t,c)},Pe=e=>{const t=e||b.t.cookie.name,o=b.t.cookie.useLocalStorage;return((e,t)=>{let o;return o=ae((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},o})(o?(n=t,ae((()=>localStorage.getItem(n)))||''):Le(t,!0),o);var n},Le=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},Oe=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];e?ae((()=>{e.test(t)&&o.push(t)})):o.push(t)}return o},Fe=(e,n=[])=>{((e,t)=>{const{F:o,R:n,B:a,k:s,Z:c,J:r,X:i}=b.o;let l=[];if(e){h(e)?l.push(...e):w(e)&&(l='all'===e?o:[e]);for(const e of o)c[e]=y(l,e)?x(i[e]):[]}else l=[...n,...r],s&&(l=(()=>{const e=b.ne.ae;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})());l=l.filter((e=>!y(o,e)||!y(t,e))),l.push(...a),$(l)})(e,n),(e=>{const t=b.o,{Z:o,B:n,Y:a,X:s,F:c}=t,r=c;t.te=R(a);for(const e of r){const c=s[e],r=x(c),i=o[e]&&o[e].length>0,l=y(n,e);if(0!==r.length){if(a[e]=[],l)a[e].push(...r);else if(i){const t=o[e];a[e].push(...t)}else a[e]=t.Z[e];a[e]=M(a[e])}}})(),(()=>{const e=b.o;e.I=b.t.mode===o&&e.T?U(e.J,e.R):U(e.R,e.p.categories);let n=e.I.length>0,a=!1;for(const t of e.F)e.ee[t]=U(e.Y[t],e.te[t]),e.ee[t].length>0&&(a=!0);const s=b.ne.ae;for(const t in s)s[t].checked=y(e.R,t);for(const t of e.F){const o=b.ne.se[t],n=e.Y[t];for(const e in o)o[e].checked=y(n,e)}e.C||(e.C=new Date),e.M||(e.M=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.p={categories:R(e.R),revision:b.t.revision,data:e.h,consentTimestamp:e.C.toISOString(),consentId:e.M,services:R(e.Y)},e.S&&(e.p.lastConsentTimestamp=e.S.toISOString());let c=!1;const r=n||a;(e.T||r)&&(e.T&&(e.T=!1,c=!0),e.S=e.S?new Date:e.C,e.p.lastConsentTimestamp=e.S.toISOString(),Ve(),b.t.autoClearCookies&&(c||r)&&(e=>{const t=b.o,o=Oe(),n=(e=>{const t=b.o;return(e?t.F:t.I).filter((e=>{const o=t.O[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.ee)for(const n of t.ee[e]){const a=t.X[e][n].cookies;if(!y(t.Y[e],n)&&a)for(const e of a){const t=He(o,e.name);Ie(t,e.path,e.domain)}}for(const a of n){const n=t.O[a].autoClear,s=n&&n.cookies||[],c=y(t.I,a),r=!y(t.R,a),i=c&&r;if(e?r:i){n.reloadPage&&i&&(t.P=!0);for(const e of s){const t=He(o,e.name);Ie(t,e.path,e.domain)}}}})(c),se()),c&&(ne(b.re.ie),ne(b.re.le),b.t.mode===t)||(r&&ne(b.re.de),e.P&&(e.P=!1,location.reload()))})()},Re=e=>{const t=b.o.T?[]:b.o.R;return y(t,e)},Be=(e,t)=>{const o=b.o.T?[]:b.o.Y[t]||[];return y(o,e)},Je=(e,t,o)=>{let n=[];const a=e=>{if(w(e)){let t=Le(e);''!==t&&n.push(t)}else n.push(...Oe(e))};if(h(e))for(let t of e)a(t);else a(e);Ie(n,t,o)},qe=e=>{const{ne:t,o:o}=b;if(!o.A){if(!o.j){if(!e)return;Me(Ke,Ne)}o.A=!0,o.G=T(),o.v&&X(!0),K(t.we,1),I(t.he,n),N(t.we,d,'false'),setTimeout((()=>{Q(b.ne.be)}),100),ne(b.re.fe,p)}},Ge=()=>{const{ne:e,o:t,re:o}=b;t.A&&(t.A=!1,t.v&&X(),Q(e.ct,!0),F(e.he,n),N(e.we,d,'true'),Q(t.G),t.G=null,ne(o._e,p))},Ue=()=>{const e=b.o;e.D||(e.k||we(Ke,Ne),e.D=!0,e.A?e.U=T():e.G=T(),K(b.ne.Se,2),I(b.ne.he,a),N(b.ne.Se,d,'false'),setTimeout((()=>{Q(b.ne.ve)}),100),ne(b.re.fe,m))},$e=()=>{const e=b.o;e.wt||(e.st||Se(Ke,Ne),e.wt=!0,e.A?e.U=T():e.G=T(),K(b.ne.Ie,3),I(b.ne.he,s),N(b.ne.Ie,d,'false'),setTimeout((()=>{Q(b.ne.ye)}),100))},ze=()=>{const e=b.o;e.D&&(e.D=!1,(()=>{const e=Xe(),t=b.o.O,o=b.ne.ae,n=b.ne.se,a=e=>y(b.o.J,e);for(const s in o){const c=!!t[s].readOnly;o[s].checked=c||(e?Re(s):a(s));for(const t in n[s])n[s][t].checked=c||(e?Be(t,s):a(s))}})(),Q(b.ne.Ge,!0),F(b.ne.he,a),N(b.ne.Se,d,'true'),e.A?(Q(e.U),e.U=null):(Q(e.G),e.G=null),ne(b.re._e,m))},Qe=()=>{const e=b.o;e.wt&&(e.wt=!1,Q(b.ne.et,!0),F(b.ne.he,s),N(b.ne.Ie,d,'true'),e.A?(Q(e.U),e.U=null):(Q(e.G),e.G=null))};var Ke={show:qe,hide:Ge,showPreferences:Ue,showAdditionalInfo:$e,hidePreferences:ze,hideAdditionalInfo:Qe,acceptCategory:Fe};const We=(e,t)=>{const o=Pe(t);return e?o[e]:o},Xe=()=>!b.o.T;e.acceptCategory=Fe,e.acceptService=(e,t)=>{const{F:o,X:n}=b.o;if(!(e&&t&&w(t)&&y(o,t)&&0!==x(n[t]).length))return!1;((e,t)=>{const o=b.o,{X:n,Z:a,k:s}=o,c=b.ne.se[t]||{},r=b.ne.ae[t]||{},i=x(n[t]);if(a[t]=[],w(e)){if('all'===e){if(a[t].push(...i),s)for(let e in c)c[e].checked=!0,D(c[e])}else if(y(i,e)&&a[t].push(e),s)for(let t in c)c[t].checked=e===t,D(c[t])}else if(h(e))for(let o of i){const n=y(e,o);n&&a[t].push(o),s&&(c[o].checked=n,D(c[o]))}const l=0===a[t].length;o.R=l?o.R.filter((e=>e!==t)):M([...o.R,t]),s&&(r.checked=!l,D(r))})(e,t),Fe()},e.acceptedCategory=Re,e.acceptedService=Be,e.eraseCookies=Je,e.getConfig=e=>{const t=b.t,o=b.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},e.getCookie=We,e.getUserPreferences=()=>{const{L:e,Y:t}=b.o,{accepted:o,rejected:n}=(()=>{const{T:e,R:t,F:o}=b.o;return{accepted:t,rejected:e?[]:o.filter((e=>!y(t,e)))}})();return R({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:B()})},e.hide=Ge,e.hideAdditionalInfo=Qe,e.hidePreferences=ze,e.loadScript=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=k('script'),C(t))for(const e in t)N(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,V(document.head,o)}))},e.reset=e=>{const{Ce:t,he:o}=b.ne,{name:s,path:r,domain:i,useLocalStorage:l}=b.t.cookie;e&&(l?Ee(s):Je(s,r,i));for(const{pe:e,me:t,ge:o}of b.o.m)e.removeEventListener(t,o);t&&t.remove(),o&&o.classList.remove(c,a,n);const d=new g;for(const e in b)b[e]=d[e];window._ccRun=!1},e.run=async e=>{const{o:t,t:n,re:a}=b,s=window;if(!s._ccRun){if(s._ccRun=!0,(e=>{const{ne:t,t:n,o:a}=b,s=n,c=a,{cookie:i}=s,l=b.ce,d=e.cookie,f=e.categories,_=x(f)||[],u=navigator,p=document;t.ze=p,t.he=p.documentElement,i.domain=location.hostname,c.i=e,c.O=f,c.F=_,c._=e.language.translations,c.v=!!e.disablePageInteraction,l.ie=e.onFirstConsent,l.le=e.onConsent,l.de=e.onChange,l._e=e.onModalHide,l.fe=e.onModalShow,l.ue=e.onModalReady;const{mode:m,autoShow:g,lazyHtmlGeneration:v,autoClearCookies:h,revision:w,manageScriptTags:S,hideFromBots:M}=e;m===o&&(s.mode=m),'boolean'==typeof h&&(s.autoClearCookies=h),'boolean'==typeof S&&(s.manageScriptTags=S),'number'==typeof w&&w>=0&&(s.revision=w,c.H=!0),'boolean'==typeof g&&(s.autoShow=g),'boolean'==typeof v&&(s.lazyHtmlGeneration=v),!1===M&&(s.hideFromBots=!1),!0===s.hideFromBots&&u&&(c.q=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),C(d)&&(s.cookie={...i,...d}),s.autoClearCookies,c.H,s.manageScriptTags,(e=>{const{O:t,X:o,Y:n,Z:a,B:s}=b.o;for(let c of e){const e=t[c],r=e.services||{},i=C(r)&&x(r)||[];o[c]={},n[c]=[],a[c]=[],e.readOnly&&(s.push(c),n[c]=i),b.ne.se[c]={};for(let e of i){const t=r[e];t.xe=!1,o[c][e]=t}}})(_),(()=>{if(!b.t.manageScriptTags)return;const e=b.o,t=A(document,'script['+r+']');for(const o of t){let t=H(o,r),n=o.dataset.service||'',a=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),a=!0),'!'===n.charAt(0)&&(n=n.slice(1),a=!0),y(e.F,t)&&(e.oe.push({Te:o,Me:!1,De:a,je:t,Ae:n}),n)){const o=e.X[t];o[n]||(o[n]={xe:!1})}}})(),Ae((()=>{const e=b.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},o=Te(t[e]);if(o)return o}return je()})())})(e),t.q)return;(()=>{const e=b.o,t=b.t,n=Pe(),{categories:a,services:s,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=n,f=h(a);e.p=n,e.M=c;const _=!!c&&w(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.H&&_&&d!==t.revision&&(e.V=!1),e.T=!(_&&e.V&&e.C&&e.S&&f),t.cookie.useLocalStorage&&!e.T&&(e.T=(new Date).getTime()>(n.expirationTime||0),e.T&&Ee(t.cookie.name)),e.T,(()=>{const e=b.o;for(const t of e.F){const n=e.O[t];if(n.readOnly||n.enabled){e.J.push(t);const n=e.X[t]||{};for(let a in n)e.Z[t].push(a),e.i.mode===o&&e.Y[t].push(a)}}})(),e.T?t.mode===o&&(e.R=[...e.J]):(e.Y={...e.Y,...s},e.Z={...e.Y},$([...e.B,...a]))})();const i=Xe();if(!await De())return!1;if(z(null,c=Ke,we,Ne),b.o.T&&Me(c,Ne),b.t.lazyHtmlGeneration||(we(c,Ne),Se(c,Ne)),n.autoShow&&!i&&qe(!0),i)return se(),ne(a.le);n.mode===o&&se(t.J)}var c},e.setCookieData=e=>{let t,o=e.value,n=e.mode,a=!1;const s=b.o;if('update'===n){s.h=t=We('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],a=!0)}else!e&&t||t===o||(t=o,a=!0)}else t=o,a=!0;return a&&(s.h=t,s.p.data=t,Ve(!0)),a},e.setLanguage=async(e,t)=>{if(!Te(e))return!1;const o=b.o;return!(e===je()&&!0!==t||!await De(e)||(Ae(e),o.j&&Me(Ke,Ne),o.k&&we(Ke,Ne),ke(),0))},e.show=qe,e.showAdditionalInfo=$e,e.showPreferences=Ue,e.validConsent=Xe,e.validCookie=e=>''!==Le(e,!0)},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={});
