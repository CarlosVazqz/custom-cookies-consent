/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const e='opt-in',t='opt-out',n='show--consent',o='show--preferences',a='show--additionalinfo',s='disable--interaction',c='data-category',r='div',i='button',l='aria-hidden',d='btn-group',f='click',_='data-role',u='consentModal',p='preferencesModal';class m{constructor(){this.t={mode:e,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],v:!1,h:null,C:null,S:null,M:'',A:!0,T:!1,D:!1,k:!1,H:!1,N:[],V:!1,I:!0,j:[],L:!1,F:'',P:!1,O:[],R:[],B:[],G:[],J:!1,U:!1,$:!1,q:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},ne:[]},this.oe={ae:{},se:{}},this.ce={},this.re={ie:'cc:onFirstConsent',le:'cc:onConsent',de:'cc:onChange',fe:'cc:onModalShow',_e:'cc:onModalHide',ue:'cc:onModalReady'}}}const g=new m,b=(e,t)=>e.indexOf(t),v=(e,t)=>-1!==b(e,t),y=e=>Array.isArray(e),h=e=>'string'==typeof e,w=e=>!!e&&'object'==typeof e&&!y(e),C=e=>'function'==typeof e,S=e=>Object.keys(e),x=e=>Array.from(new Set(e)),M=()=>document.activeElement,A=e=>e.preventDefault(),T=(e,t)=>e.querySelectorAll(t),D=e=>e.dispatchEvent(new Event('change')),k=e=>{const t=document.createElement(e);return e===i&&(t.type=e),t},E=(e,t,n)=>e.setAttribute(t,n),H=(e,t,n)=>{e.removeAttribute(n?'data-'+t:t)},N=(e,t,n)=>e.getAttribute(n?'data-'+t:t),V=(e,t)=>e.appendChild(t),I=(e,t)=>e.classList.add(t),j=(e,t)=>I(e,'cm__'+t),L=(e,t)=>I(e,'pm__'+t),F=(e,t)=>I(e,'aim__'+t),P=(e,t)=>e.classList.remove(t),O=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let n in e){let o=e[n];t[n]=O(o)}return t},R=()=>{const e={},{O:t,X:n,Y:o}=g.o;for(const a of t)e[a]=U(o[a],S(n[a]));return e},B=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),G=(e,t,n,o)=>{e.addEventListener(t,n),o&&g.o.m.push({pe:e,me:t,ge:n})},J=()=>{const e=g.t.cookie.expiresAfterDays;return C(e)?e(g.o.F):e},U=(e,t)=>{const n=e||[],o=t||[];return n.filter((e=>!v(o,e))).concat(o.filter((e=>!v(n,e))))},$=e=>{g.o.R=x(e),g.o.F=(()=>{let e='custom';const{R:t,O:n,B:o}=g.o,a=t.length;return a===n.length?e='all':a===o.length&&(e='necessary'),e})()},z=(e,t,n,o)=>{const a='accept-',{show:s,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,d=e||document,_=e=>T(d,`[data-cc="${e}"]`),u=(e,t)=>{A(e),l(t),i(),r()},p=_('show-preferencesModal'),m=_('show-consentModal'),b=_(a+'all'),v=_(a+'necessary'),y=_(a+'custom'),h=g.t.lazyHtmlGeneration;for(const e of p)E(e,'aria-haspopup','dialog'),G(e,f,(e=>{A(e),c()})),h&&(G(e,'mouseenter',(e=>{A(e),g.o.H||n(t,o)}),!0),G(e,'focus',(()=>{g.o.H||n(t,o)})));for(let e of m)E(e,'aria-haspopup','dialog'),G(e,f,(e=>{A(e),s(!0)}),!0);for(let e of b)G(e,f,(e=>{u(e,'all')}),!0);for(let e of y)G(e,f,(e=>{u(e)}),!0);for(let e of v)G(e,f,(e=>{u(e,[])}),!0)},q=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},K=(e,t)=>{const n=o=>{o.target.removeEventListener('transitionend',n),'opacity'===o.propertyName&&'1'===getComputedStyle(e).opacity&&q((e=>1===e?g.oe.be:2===e?g.oe.ve:g.oe.ye)(t))};G(e,'transitionend',n)};let Q;const W=e=>{clearTimeout(Q),e?I(g.oe.he,s):Q=setTimeout((()=>{P(g.oe.he,s)}),500)},X=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],Y=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${X[e]}"/></svg>`,Z=e=>{const t=g.oe,n=g.o;(e=>{const o=e===t.we,a=n.i.disablePageInteraction?t.he:o?t.Ce:t.he;G(a,'keydown',(t=>{if('Tab'!==t.key||!(o?n.D&&!n.k:n.k))return;const a=M(),s=o?n.q:n.K;0!==s.length&&(t.shiftKey?a!==s[0]&&e.contains(a)||(A(t),q(s[1])):a!==s[1]&&e.contains(a)||(A(t),q(s[0])))}),!0)})(e)},ee=['[href]',i,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),te=e=>{const{o:t,oe:n}=g,o=(e,t)=>{const n=T(e,ee);t[0]=n[0],t[1]=n[n.length-1]};1===e&&t.T&&o(n.we,t.q),2===e&&t.H&&o(n.Se,t.K)},ne=(e,t,n)=>{const{de:o,le:a,ie:s,_e:c,ue:r,fe:i}=g.ce,l=g.re;if(t){const o={modalName:t};return e===l.fe?C(i)&&i(o):e===l._e?C(c)&&c(o):(o.modal=n,C(r)&&r(o)),B(e,o)}const d={cookie:g.o.p};e===l.ie?C(s)&&s(O(d)):e===l.le?C(a)&&a(O(d)):(d.changedCategories=g.o.j,d.changedServices=g.o.ee,C(o)&&o(O(d))),B(e,O(d))},oe=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},ae=e=>{const{Y:t,ee:n,O:o,X:a,ne:s,p:r,j:i}=g.o;for(const e of o){const o=n[e]||t[e]||[];for(const n of o){const o=a[e][n];if(!o)continue;const{onAccept:s,onReject:c}=o;!o.xe&&v(t[e],n)?(o.xe=!0,C(s)&&s()):o.xe&&!v(t[e],n)&&(o.xe=!1,C(c)&&c())}}if(!g.t.manageScriptTags)return;const l=s,d=e||r.categories||[],f=(e,o)=>{if(o>=e.length)return;const a=s[o];if(a.Me)return f(e,o+1);const r=a.Ae,l=a.Te,_=a.De,u=v(d,l),p=!!_&&v(t[l],_);if(!_&&!a.ke&&u||!_&&a.ke&&!u&&v(i,l)||_&&!a.ke&&p||_&&a.ke&&!p&&v(n[l]||[],_)){a.Me=!0;const t=N(r,'type',!0);H(r,'type',!!t),H(r,c);let n=N(r,'src',!0);n&&H(r,'src',!0);const s=k('script');s.textContent=r.innerHTML;for(const{nodeName:e}of r.attributes)E(s,e,r[e]||N(r,e));t&&(s.type=t),n?s.src=n:n=r.src;const i=!!n&&(!t||['text/javascript','module'].includes(t));if(i&&(s.onload=s.onerror=()=>{f(e,++o)}),r.replaceWith(s),i)return}f(e,++o)};f(l,0)},se='bottom',ce='left',re='center',ie='right',le='inline',de='wide',fe='pm--',_e='box',ue=['middle','top',se],pe=[ce,re,ie],me={box:{Ee:[de,le],He:ue,Ne:pe,Ve:se,Ie:ie},cloud:{Ee:[le],He:ue,Ne:pe,Ve:se,Ie:re},bar:{Ee:[le],He:ue.slice(1),Ne:[],Ve:se,Ie:''}},ge={box:{Ee:[],He:[],Ne:[],Ve:'',Ie:''},bar:{Ee:[de],He:[],Ne:[ce,ie],Ve:'',Ie:ce}},be={box:{Ee:[],He:[],Ne:[],Ve:'',Ie:''},bar:{Ee:[de],He:[],Ne:[ce,ie],Ve:'',Ie:ce}},ve=e=>{const t=g.o.i.guiOptions,n=t&&t.consentModal,o=t&&t.preferencesModal,a=t&&t.additionalInfoModal;0===e&&ye(g.oe.we,me,n,'cm--',_e,'cm'),1===e&&ye(g.oe.Se,ge,o,fe,_e,'pm'),2===e&&ye(g.oe.je,be,a,'aim--',_e,'aim')},ye=(e,t,n,o,a,s)=>{e.className=s;const c=n&&n.layout,r=n&&n.position,i=n&&n.flipButtons,l=!n||!1!==n.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],u=f in t?f:a,p=t[u],m=v(p.Ee,_)&&_,b=r&&r.split(' ')||[],y=b[0],h=o===fe?b[0]:b[1],w=v(p.He,y)?y:p.Ve,C=v(p.Ne,h)?h:p.Ie,S=t=>{t&&I(e,o+t)};S(u),S(m),S(w),S(C),i&&S('flip');const x=s+'__btn--secondary';if('cm'===s){const{Le:e,Fe:t}=g.oe;e&&(l?P(e,x):I(e,x)),t&&(l?P(t,x):I(t,x))}else{const{Pe:e}=g.oe;e&&(l?P(e,x):I(e,x))}},he=(e,t)=>{const n=g.o,o=g.oe,{hide:a,hidePreferences:s,acceptCategory:c}=e,u=e=>{c(e),s(),a()},m=n.u&&n.u.preferencesModal;if(!m)return;const b=m.title,v=m.closeIconLabel,y=m.acceptAllBtn,C=m.acceptNecessaryBtn,x=m.savePreferencesBtn,M=m.sections||[],A=y||C||x;if(o.Oe)o.Re=k(r),L(o.Re,'body');else{o.Oe=k(r),I(o.Oe,'pm-wrapper');const e=k('div');I(e,'pm-overlay'),V(o.Oe,e),G(e,f,s),o.Se=k(r),I(o.Se,'pm'),E(o.Se,'role','dialog'),E(o.Se,l,!0),E(o.Se,'aria-modal',!0),E(o.Se,'aria-labelledby','pm__title'),G(o.he,'keydown',(e=>{27===e.keyCode&&s()}),!0),o.Be=k(r),L(o.Be,'header'),o.Ge=k('h2'),L(o.Ge,'title'),o.Ge.id='pm__title',o.Je=k(i),L(o.Je,'close-btn'),E(o.Je,'aria-label',m.closeIconLabel||''),G(o.Je,f,s),o.Ue=k('span'),o.Ue.innerHTML=Y(),V(o.Je,o.Ue),o.$e=k(r),L(o.$e,'body'),o.ze=k(r),L(o.ze,'footer');var T=k(r);I(T,'btns');var D=k(r),H=k(r);L(D,d),L(H,d),V(o.ze,D),V(o.ze,H),V(o.Be,o.Ge),V(o.Be,o.Je),o.ve=k(r),E(o.ve,'tabIndex',-1),V(o.Se,o.ve),V(o.Se,o.Be),V(o.Se,o.$e),A&&V(o.Se,o.ze),V(o.Oe,o.Se)}let N;b&&(o.Ge.innerHTML=b,v&&E(o.Je,'aria-label',v)),M.forEach(((e,t)=>{const a=e.title,s=e.description,c=e.linkedCategory,d=c&&n.P[c],_=e.cookieTable,u=_&&_.body,p=_&&_.caption,g=u&&u.length>0,b=!!d,v=b&&n.X[c],y=w(v)&&S(v)||[],C=b&&(!!s||!!g||S(v).length>0);var x=k(r);if(L(x,'section'),C||s){var M=k(r);L(M,'section-desc-wrapper')}let A=y.length;if(C&&A>0){const e=k(r);L(e,'section-services');for(const t of y){const n=v[t],o=n&&n.label||t,a=k(r),s=k(r),i=k(r),l=k(r);L(a,'service'),L(l,'service-title'),L(s,'service-header'),L(i,'service-icon');const f=we(o,t,d,!0,c);l.innerHTML=o,V(s,i),V(s,l),V(a,s),V(a,f),V(e,a)}V(M,e)}if(a){var T=k(r),D=k(b?i:r);if(L(T,'section-title-wrapper'),L(D,'section-title'),D.innerHTML=a,V(T,D),b){const e=k('span');e.innerHTML=Y(2,3.5),L(e,'section-arrow'),V(T,e),x.className+='--toggle';const t=we(a,c,d);let n=m.serviceCounterLabel;if(A>0&&h(n)){let e=k('span');L(e,'badge'),L(e,'service-counter'),E(e,l,!0),E(e,'data-servicecounter',A),n&&(n=n.split('|'),n=n.length>1&&A>1?n[1]:n[0],E(e,'data-counterlabel',n)),e.innerHTML=A+(n?' '+n:''),V(D,e)}if(C){L(x,'section--expandable');var H=c+'-desc';E(D,'aria-expanded',!1),E(D,'aria-controls',H)}V(T,t)}else E(D,'role','heading'),E(D,'aria-level','3');V(x,T)}if(s){var j=k('p');L(j,'section-desc'),j.innerHTML=s,V(M,j)}if(C&&(E(M,l,'true'),M.id=H,((e,t,n)=>{G(D,f,(()=>{t.classList.contains('is-expanded')?(P(t,'is-expanded'),E(n,'aria-expanded','false'),E(e,l,'true')):(I(t,'is-expanded'),E(n,'aria-expanded','true'),E(e,l,'false'))}))})(M,x,D),g)){const e=k('table'),n=k('thead'),a=k('tbody');if(p){const t=k('caption');L(t,'table-caption'),t.innerHTML=p,e.appendChild(t)}L(e,'section-table'),L(n,'table-head'),L(a,'table-body');const s=_.headers,c=S(s),i=o.qe.createDocumentFragment(),l=k('tr');for(const e of c){const n=s[e],o=k('th');o.id='cc__row-'+n+t,E(o,'scope','col'),L(o,'table-th'),o.innerHTML=n,V(i,o)}V(l,i),V(n,l);const d=o.qe.createDocumentFragment();for(const e of u){const n=k('tr');L(n,'table-tr');for(const o of c){const a=s[o],c=e[o],i=k('td'),l=k(r);L(i,'table-td'),E(i,'data-column',a),E(i,'headers','cc__row-'+a+t),l.insertAdjacentHTML('beforeend',c),V(i,l),V(n,i)}V(d,n)}V(a,d),V(e,n),V(e,a),V(M,e)}(C||s)&&V(x,M);const F=o.Re||o.$e;b?(N||(N=k(r),L(N,'section-toggles')),N.appendChild(x)):N=null,V(F,N||x)})),y&&(o.Ke||(o.Ke=k(i),L(o.Ke,'btn'),E(o.Ke,_,'all'),V(D,o.Ke),G(o.Ke,f,(()=>u('all')))),o.Ke.innerHTML=y),C&&(o.Pe||(o.Pe=k(i),L(o.Pe,'btn'),E(o.Pe,_,'necessary'),V(D,o.Pe),G(o.Pe,f,(()=>u([])))),o.Pe.innerHTML=C),x&&(o.Qe||(o.Qe=k(i),L(o.Qe,'btn'),L(o.Qe,'btn--secondary'),E(o.Qe,_,'save'),V(H,o.Qe),G(o.Qe,f,(()=>u()))),o.Qe.innerHTML=x),o.Re&&(o.Se.replaceChild(o.Re,o.$e),o.$e=o.Re),ve(1),n.H||(n.H=!0,ne(g.re.ue,p,o.Se),t(e),V(o.Ce,o.Oe),Z(o.Se),setTimeout((()=>I(o.Oe,'cc--anim')),100)),te(2)};function we(e,t,n,o,a){const s=g.o,r=g.oe,i=k('label'),d=k('input'),_=k('span'),u=k('span'),p=k('span'),m=k('span'),b=k('span');if(m.innerHTML=Y(1,3),b.innerHTML=Y(0,3),d.type='checkbox',I(i,'section__toggle-wrapper'),I(d,'section__toggle'),I(m,'toggle__icon-on'),I(b,'toggle__icon-off'),I(_,'toggle__icon'),I(u,'toggle__icon-circle'),I(p,'toggle__label'),E(_,l,'true'),o?(I(i,'toggle-service'),E(d,c,a),r.se[a][t]=d):r.ae[t]=d,o?(e=>{G(d,'change',(()=>{const t=r.se[e],n=r.ae[e];s.Z[e]=[];for(let n in t){const o=t[n];o.checked&&s.Z[e].push(o.value)}n.checked=s.Z[e].length>0}))})(a):(e=>{G(d,f,(()=>{const t=r.se[e],n=d.checked;s.Z[e]=[];for(let o in t)t[o].checked=n,n&&s.Z[e].push(o)}))})(t),d.value=t,p.textContent=e.replace(/<.*>.*<\/.*>/gm,''),V(u,b),V(u,m),V(_,u),s.A)(n.readOnly||n.enabled)&&(d.checked=!0);else if(o){const e=s.Y[a];d.checked=n.readOnly||v(e,t)}else v(s.R,t)&&(d.checked=!0);return n.readOnly&&(d.disabled=!0),V(i,d),V(i,_),V(i,p),i}const Ce=async(e,t)=>{const n=g.o,o=g.oe,{hideAdditionalInfo:a}=e,s=n.u&&n.u.additionalInfoModal;if(!s)return;const c=s.title,_=s.description,u=s.closeBtn;if(!o.We){o.We=k(r),I(o.We,'aim-wrapper');const e=k(r);I(e,'aim-overlay'),V(o.We,e),G(e,f,a),o.je=k(r),I(o.je,'aim'),E(o.je,'role','dialog'),E(o.je,l,!0),E(o.je,'aria-modal',!0),E(o.je,'aria-labelledby','aim__title'),G(o.he,'keydown',(e=>{27===e.keyCode&&a()}),!0),o.Xe=k(r),F(o.Xe,'header'),o.Ye=k('h2'),F(o.Ye,'title'),o.Ye.id='aim__title',o.Ze=k(i),F(o.Ze,'close-btn'),E(o.Ze,'aria-label',u.ariaLabel||''),G(o.Ze,f,a),o.et=k('span'),o.et.innerHTML=Y(),V(o.Ze,o.et),o.tt=k(r),F(o.tt,'body'),o.nt=k(r),F(o.nt,'footer');var p=k(r);F(p,d),V(o.nt,p),V(o.Xe,o.Ye),V(o.Xe,o.Ze),o.ye=k(r),E(o.ye,'tabindex',-1),V(o.je,o.ye),V(o.je,o.Xe),V(o.je,o.tt),u&&V(o.je,o.nt),V(o.We,o.je)}c&&(o.Ye.innerHTML=c,u&&E(o.Ze,'aria-label',u)),_&&(o.tt.innerHTML=_);const m=await async function(){const e=await fetch('https://669fa568b132e2c136fe9aba.mockapi.io/api/project-info/project-info');return await e.json()}();if(m){const e=k(r);e.innerHTML=m.projectInfo,V(o.tt,e)}u&&(o.ot||(o.ot=k(i),F(o.ot,'btn'),F(o.ot,'btn--secondary'),V(p,o.ot)),o.ot.innerHTML=u,G(o.ot,f,a)),ve(2),n.st=!1,n.st||(n.st=!0,t(),V(o.Ce,o.We),Z(o.je),setTimeout((()=>I(o.We,'cc--anim')),100))},Se=()=>{const e=k('span');return g.oe.ct||(g.oe.ct=e),e},xe=(e,t)=>{const n=g.o,o=g.oe,{hide:a,showPreferences:s,showAdditionalInfo:c,acceptCategory:p}=e,m=n.u&&n.u.consentModal;if(!m)return;const b=m.acceptAllBtn,v=m.acceptNecessaryBtn,y=m.showPreferencesBtn,h=m.showAdditionalInfoBtn,w=m.closeIconLabel,C=m.footer,S=m.label,x=m.title,M=e=>{a(),p(e)};if(!o.rt){o.rt=k(r),o.we=k(r),o.it=k(r),o.lt=k(r),o.dt=k(r),I(o.rt,'cm-wrapper'),I(o.we,'cm'),j(o.it,'body'),j(o.lt,'texts'),j(o.dt,'btns'),E(o.we,'role','dialog'),E(o.we,'aria-modal','true'),E(o.we,l,'false'),E(o.we,'aria-describedby','cm__desc'),S?E(o.we,'aria-label',S):x&&E(o.we,'aria-labelledby','cm__title');const e='box',t=n.i.guiOptions,a=t&&t.consentModal,s=(a&&a.layout||e).split(' ')[0]===e;x&&w&&s&&(o.Fe||(o.Fe=k(i),o.Fe.innerHTML=Y(),j(o.Fe,'btn'),j(o.Fe,'btn--close'),G(o.Fe,f,(()=>{M([])})),V(o.it,o.Fe)),E(o.Fe,'aria-label',w)),V(o.it,o.lt),(b||v||y||h)&&V(o.it,o.dt),o.be=k(r),E(o.be,'tabIndex',-1),V(o.we,o.be),V(o.we,o.it),V(o.rt,o.we)}x&&(o.ft||(o.ft=k('h2'),o.ft.className=o.ft.id='cm__title',V(o.lt,o.ft)),o.ft.innerHTML=x);let A=m.description;if(A&&(n.V&&(A=A.replace('{{revisionMessage}}',n.I?'':m.revisionMessage||'')),o._t||(o._t=k('p'),o._t.className=o._t.id='cm__desc',V(o.lt,o._t)),o._t.innerHTML=A),b&&(o.ut||(o.ut=k(i),V(o.ut,Se()),j(o.ut,'btn'),E(o.ut,_,'all'),G(o.ut,f,(()=>{M('all')}))),o.ut.firstElementChild.innerHTML=b),v&&(o.Le||(o.Le=k(i),V(o.Le,Se()),j(o.Le,'btn'),E(o.Le,_,'necessary'),G(o.Le,f,(()=>{M([])}))),o.Le.firstElementChild.innerHTML=v),y&&(o.gt||(o.gt=k(i),V(o.gt,Se()),j(o.gt,'btn'),j(o.gt,'btn--secondary'),E(o.gt,_,'show'),G(o.gt,'mouseenter',(()=>{n.H||he(e,t)})),G(o.gt,f,s)),o.gt.firstElementChild.innerHTML=y),h&&(o.bt||(o.bt=k(i),V(o.bt,Se()),j(o.bt,'btn'),j(o.bt,'btn--secondary'),E(o.bt,_,'show'),G(o.bt,'mouseenter',(()=>{n.st||Ce(e,t)})),G(o.bt,f,c)),o.bt.firstElementChild.innerHTML=h),o.vt||(o.vt=k(r),j(o.vt,d),b&&V(o.vt,o.ut),v&&V(o.vt,o.Le),(b||v)&&V(o.it,o.vt),V(o.dt,o.vt)),o.gt&&!o.yt&&(o.yt=k(r),o.Le&&o.ut?(j(o.yt,d),V(o.yt,o.gt),V(o.yt,o.bt),V(o.dt,o.yt)):(V(o.vt,o.gt),V(o.vt,o.bt),j(o.vt,d+'--uneven'))),C){if(!o.ht){let e=k(r),t=k(r);o.ht=k(r),j(e,'footer'),j(t,'links'),j(o.ht,'link-group'),V(t,o.ht),V(e,t),V(o.we,e)}o.ht.innerHTML=C}ve(0),n.T||(n.T=!0,ne(g.re.ue,u,o.we),t(e),V(o.Ce,o.rt),Z(o.we),setTimeout((()=>I(o.rt,'cc--anim')),100)),te(1),z(o.it,e,he,t)},Me=e=>{if(!h(e))return null;if(e in g.o._)return e;let t=e.slice(0,2);return t in g.o._?t:null},Ae=()=>g.o.l||g.o.i.language.default,Te=e=>{e&&(g.o.l=e)},De=async e=>{const t=g.o;let n=Me(e)?e:Ae(),o=t._[n];return h(o)?o=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(o):C(o)&&(o=await o()),!!o&&(t.u=o,Te(n),!0)},ke=()=>{let e=g.o.i.language.rtl,t=g.oe.Ce;e&&t&&(y(e)||(e=[e]),v(e,g.o.l)?I(t,'cc--rtl'):P(t,'cc--rtl'))},Ee=()=>{const e=g.oe;if(e.Ce)return;e.Ce=k(r),e.Ce.id='cc-main',e.Ce.setAttribute('data-nosnippet',''),ke();let t=g.o.i.root;t&&h(t)&&(t=document.querySelector(t)),(t||e.qe.body).appendChild(e.Ce)},He=e=>oe((()=>localStorage.removeItem(e))),Ne=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const n=b(e,t);return n>-1?[e[n]]:[]}},Ve=e=>{const{hostname:t,protocol:n}=location,{name:o,path:a,domain:s,sameSite:c,useLocalStorage:r}=g.t.cookie,i=e?(()=>{const e=g.o.S,t=e?new Date-e:0;return 864e5*J()-t})():864e5*J(),l=new Date;l.setTime(l.getTime()+i),g.o.p.expirationTime=l.getTime();const d=JSON.stringify(g.o.p);let f=o+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+c;v(t,'.')&&(f+='; Domain='+s),'https:'===n&&(f+='; Secure'),r?((e,t)=>{oe((()=>localStorage.setItem(e,t)))})(o,d):document.cookie=f,g.o.p},Ie=(e,t,n)=>{if(0===e.length)return;const o=n||g.t.cookie.domain,a=t||g.t.cookie.path,s='www.'===o.slice(0,4),c=s&&o.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,o),s&&r(t,c)},je=e=>{const t=e||g.t.cookie.name,n=g.t.cookie.useLocalStorage;return((e,t)=>{let n;return n=oe((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},n})(n?(o=t,oe((()=>localStorage.getItem(o)))||''):Le(t,!0),n);var o},Le=(e,t)=>{const n=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return n?t?n.pop():e:''},Fe=e=>{const t=document.cookie.split(/;\s*/),n=[];for(const o of t){let t=o.split('=')[0];e?oe((()=>{e.test(t)&&n.push(t)})):n.push(t)}return n},Pe=(n,o=[])=>{((e,t)=>{const{O:n,R:o,B:a,H:s,Z:c,G:r,X:i}=g.o;let l=[];if(e){y(e)?l.push(...e):h(e)&&(l='all'===e?n:[e]);for(const e of n)c[e]=v(l,e)?S(i[e]):[]}else l=[...o,...r],s&&(l=(()=>{const e=g.oe.ae;if(!e)return[];let t=[];for(let n in e)e[n].checked&&t.push(n);return t})());l=l.filter((e=>!v(n,e)||!v(t,e))),l.push(...a),$(l)})(n,o),(e=>{const t=g.o,{Z:n,B:o,Y:a,X:s,O:c}=t,r=c;t.te=O(a);for(const e of r){const c=s[e],r=S(c),i=n[e]&&n[e].length>0,l=v(o,e);if(0!==r.length){if(a[e]=[],l)a[e].push(...r);else if(i){const t=n[e];a[e].push(...t)}else a[e]=t.Z[e];a[e]=x(a[e])}}})(),(()=>{const n=g.o;n.j=g.t.mode===t&&n.A?U(n.G,n.R):U(n.R,n.p.categories);let o=n.j.length>0,a=!1;for(const e of n.O)n.ee[e]=U(n.Y[e],n.te[e]),n.ee[e].length>0&&(a=!0);const s=g.oe.ae;for(const e in s)s[e].checked=v(n.R,e);for(const e of n.O){const t=g.oe.se[e],o=n.Y[e];for(const e in t)t[e].checked=v(o,e)}n.C||(n.C=new Date),n.M||(n.M=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),n.p={categories:O(n.R),revision:g.t.revision,data:n.h,consentTimestamp:n.C.toISOString(),consentId:n.M,services:O(n.Y)},n.S&&(n.p.lastConsentTimestamp=n.S.toISOString());let c=!1;const r=o||a;(n.A||r)&&(n.A&&(n.A=!1,c=!0),n.S=n.S?new Date:n.C,n.p.lastConsentTimestamp=n.S.toISOString(),Ve(),g.t.autoClearCookies&&(c||r)&&(e=>{const t=g.o,n=Fe(),o=(e=>{const t=g.o;return(e?t.O:t.j).filter((e=>{const n=t.P[e];return!!n&&!n.readOnly&&!!n.autoClear}))})(e);for(const e in t.ee)for(const o of t.ee[e]){const a=t.X[e][o].cookies;if(!v(t.Y[e],o)&&a)for(const e of a){const t=Ne(n,e.name);Ie(t,e.path,e.domain)}}for(const a of o){const o=t.P[a].autoClear,s=o&&o.cookies||[],c=v(t.j,a),r=!v(t.R,a),i=c&&r;if(e?r:i){o.reloadPage&&i&&(t.L=!0);for(const e of s){const t=Ne(n,e.name);Ie(t,e.path,e.domain)}}}})(c),ae()),c&&(ne(g.re.ie),ne(g.re.le),g.t.mode===e)||(r&&ne(g.re.de),n.L&&(n.L=!1,location.reload()))})()},Oe=e=>{const t=g.o.A?[]:g.o.R;return v(t,e)},Re=(e,t)=>{const{O:n,X:o}=g.o;if(!(e&&t&&h(t)&&v(n,t)&&0!==S(o[t]).length))return!1;((e,t)=>{const n=g.o,{X:o,Z:a,H:s}=n,c=g.oe.se[t]||{},r=g.oe.ae[t]||{},i=S(o[t]);if(a[t]=[],h(e)){if('all'===e){if(a[t].push(...i),s)for(let e in c)c[e].checked=!0,D(c[e])}else if(v(i,e)&&a[t].push(e),s)for(let t in c)c[t].checked=e===t,D(c[t])}else if(y(e))for(let n of i){const o=v(e,n);o&&a[t].push(n),s&&(c[n].checked=o,D(c[n]))}const l=0===a[t].length;n.R=l?n.R.filter((e=>e!==t)):x([...n.R,t]),s&&(r.checked=!l,D(r))})(e,t),Pe()},Be=(e,t)=>{const n=g.o.A?[]:g.o.Y[t]||[];return v(n,e)},Ge=e=>''!==Le(e,!0),Je=(e,t,n)=>{let o=[];const a=e=>{if(h(e)){let t=Le(e);''!==t&&o.push(t)}else o.push(...Fe(e))};if(y(e))for(let t of e)a(t);else a(e);Ie(o,t,n)},Ue=e=>{const{oe:t,o:o}=g;if(!o.D){if(!o.T){if(!e)return;xe(We,Ee)}o.D=!0,o.U=M(),o.v&&W(!0),K(t.we,1),I(t.he,n),E(t.we,l,'false'),setTimeout((()=>{q(g.oe.be)}),100),ne(g.re.fe,u)}},$e=()=>{const{oe:e,o:t,re:o}=g;t.D&&(t.D=!1,t.v&&W(),q(e.ct,!0),P(e.he,n),E(e.we,l,'true'),q(t.U),t.U=null,ne(o._e,u))},ze=()=>{const e=g.o;e.k||(e.H||he(We,Ee),e.k=!0,e.D?e.$=M():e.U=M(),K(g.oe.Se,2),I(g.oe.he,o),E(g.oe.Se,l,'false'),setTimeout((()=>{q(g.oe.ve)}),100),ne(g.re.fe,p))},qe=()=>{const e=g.o;e.wt||(e.st||Ce(We,Ee),e.wt=!0,e.D?e.$=M():e.U=M(),K(g.oe.je,3),I(g.oe.he,a),E(g.oe.je,l,'false'),setTimeout((()=>{q(g.oe.ye)}),100))},Ke=()=>{const e=g.o;e.k&&(e.k=!1,(()=>{const e=ot(),t=g.o.P,n=g.oe.ae,o=g.oe.se,a=e=>v(g.o.G,e);for(const s in n){const c=!!t[s].readOnly;n[s].checked=c||(e?Oe(s):a(s));for(const t in o[s])o[s][t].checked=c||(e?Be(t,s):a(s))}})(),q(g.oe.Ue,!0),P(g.oe.he,o),E(g.oe.Se,l,'true'),e.D?(q(e.$),e.$=null):(q(e.U),e.U=null),ne(g.re._e,p))},Qe=()=>{const e=g.o;e.wt&&(e.wt=!1,q(g.oe.et,!0),P(g.oe.he,a),E(g.oe.je,l,'true'),e.D?(q(e.$),e.$=null):(q(e.U),e.U=null))};var We={show:Ue,hide:$e,showPreferences:ze,showAdditionalInfo:qe,hidePreferences:Ke,hideAdditionalInfo:Qe,acceptCategory:Pe};const Xe=async(e,t)=>{if(!Me(e))return!1;const n=g.o;return!(e===Ae()&&!0!==t||!await De(e)||(Te(e),n.T&&xe(We,Ee),n.H&&he(We,Ee),ke(),0))},Ye=()=>{const{F:e,Y:t}=g.o,{accepted:n,rejected:o}=(()=>{const{A:e,R:t,O:n}=g.o;return{accepted:t,rejected:e?[]:n.filter((e=>!v(t,e)))}})();return O({acceptType:e,acceptedCategories:n,rejectedCategories:o,acceptedServices:t,rejectedServices:R()})},Ze=(e,t)=>{let n=document.querySelector('script[src="'+e+'"]');return new Promise((o=>{if(n)return o(!0);if(n=k('script'),w(t))for(const e in t)E(n,e,t[e]);n.onload=()=>o(!0),n.onerror=()=>{n.remove(),o(!1)},n.src=e,V(document.head,n)}))},et=e=>{let t,n=e.value,o=e.mode,a=!1;const s=g.o;if('update'===o){s.h=t=tt('data');const e=typeof t==typeof n;if(e&&'object'==typeof t){!t&&(t={});for(let e in n)t[e]!==n[e]&&(t[e]=n[e],a=!0)}else!e&&t||t===n||(t=n,a=!0)}else t=n,a=!0;return a&&(s.h=t,s.p.data=t,Ve(!0)),a},tt=(e,t)=>{const n=je(t);return e?n[e]:n},nt=e=>{const t=g.t,n=g.o.i;return e?t[e]||n[e]:{...t,...n,cookie:{...t.cookie}}},ot=()=>!g.o.A,at=async e=>{const{o:n,t:o,re:a}=g,s=window;if(!s._ccRun){if(s._ccRun=!0,(e=>{const{oe:n,t:o,o:a}=g,s=o,r=a,{cookie:i}=s,l=g.ce,d=e.cookie,f=e.categories,_=S(f)||[],u=navigator,p=document;n.qe=p,n.he=p.documentElement,i.domain=location.hostname,r.i=e,r.P=f,r.O=_,r._=e.language.translations,r.v=!!e.disablePageInteraction,l.ie=e.onFirstConsent,l.le=e.onConsent,l.de=e.onChange,l._e=e.onModalHide,l.fe=e.onModalShow,l.ue=e.onModalReady;const{mode:m,autoShow:b,lazyHtmlGeneration:y,autoClearCookies:h,revision:C,manageScriptTags:x,hideFromBots:M}=e;m===t&&(s.mode=m),'boolean'==typeof h&&(s.autoClearCookies=h),'boolean'==typeof x&&(s.manageScriptTags=x),'number'==typeof C&&C>=0&&(s.revision=C,r.V=!0),'boolean'==typeof b&&(s.autoShow=b),'boolean'==typeof y&&(s.lazyHtmlGeneration=y),!1===M&&(s.hideFromBots=!1),!0===s.hideFromBots&&u&&(r.J=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),w(d)&&(s.cookie={...i,...d}),s.autoClearCookies,r.V,s.manageScriptTags,(e=>{const{P:t,X:n,Y:o,Z:a,B:s}=g.o;for(let c of e){const e=t[c],r=e.services||{},i=w(r)&&S(r)||[];n[c]={},o[c]=[],a[c]=[],e.readOnly&&(s.push(c),o[c]=i),g.oe.se[c]={};for(let e of i){const t=r[e];t.xe=!1,n[c][e]=t}}})(_),(()=>{if(!g.t.manageScriptTags)return;const e=g.o,t=T(document,'script['+c+']');for(const n of t){let t=N(n,c),o=n.dataset.service||'',a=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),a=!0),'!'===o.charAt(0)&&(o=o.slice(1),a=!0),v(e.O,t)&&(e.ne.push({Ae:n,Me:!1,ke:a,Te:t,De:o}),o)){const n=e.X[t];n[o]||(n[o]={xe:!1})}}})(),Te((()=>{const e=g.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},n=Me(t[e]);if(n)return n}return Ae()})())})(e),n.J)return;(()=>{const e=g.o,n=g.t,o=je(),{categories:a,services:s,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=o,f=y(a);e.p=o,e.M=c;const _=!!c&&h(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.V&&_&&d!==n.revision&&(e.I=!1),e.A=!(_&&e.I&&e.C&&e.S&&f),n.cookie.useLocalStorage&&!e.A&&(e.A=(new Date).getTime()>(o.expirationTime||0),e.A&&He(n.cookie.name)),e.A,(()=>{const e=g.o;for(const n of e.O){const o=e.P[n];if(o.readOnly||o.enabled){e.G.push(n);const o=e.X[n]||{};for(let a in o)e.Z[n].push(a),e.i.mode===t&&e.Y[n].push(a)}}})(),e.A?n.mode===t&&(e.R=[...e.G]):(e.Y={...e.Y,...s},e.Z={...e.Y},$([...e.B,...a]))})();const i=ot();if(!await De())return!1;if(z(null,r=We,he,Ee),g.o.A&&xe(r,Ee),g.t.lazyHtmlGeneration||(he(r,Ee),Ce(r,Ee)),o.autoShow&&!i&&Ue(!0),i)return ae(),ne(a.le);o.mode===t&&ae(n.G)}var r},st=e=>{const{Ce:t,he:a}=g.oe,{name:c,path:r,domain:i,useLocalStorage:l}=g.t.cookie;e&&(l?He(c):Je(c,r,i));for(const{pe:e,me:t,ge:n}of g.o.m)e.removeEventListener(t,n);t&&t.remove(),a&&a.classList.remove(s,o,n);const d=new m;for(const e in g)g[e]=d[e];window._ccRun=!1};export{Pe as acceptCategory,Re as acceptService,Oe as acceptedCategory,Be as acceptedService,Je as eraseCookies,nt as getConfig,tt as getCookie,Ye as getUserPreferences,$e as hide,Qe as hideAdditionalInfo,Ke as hidePreferences,Ze as loadScript,st as reset,at as run,et as setCookieData,Xe as setLanguage,Ue as show,qe as showAdditionalInfo,ze as showPreferences,ot as validConsent,Ge as validCookie};
