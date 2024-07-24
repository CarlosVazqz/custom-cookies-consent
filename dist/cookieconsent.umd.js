/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t='opt-in',n='opt-out',o='show--consent',a='show--preferences',s='show--additionalinfo',c='disable--interaction',r='data-category',i='div',l='button',d='aria-hidden',f='btn-group',_='click',u='data-role',p='consentModal',m='preferencesModal';class g{constructor(){this.t={mode:t,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],v:!1,h:null,C:null,S:null,M:'',T:!0,A:!1,D:!1,k:!1,H:!1,N:[],V:!1,I:!0,j:[],L:!1,F:'',P:!1,O:[],R:[],B:[],G:[],J:!1,U:!1,$:!1,q:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},ne:[]},this.oe={ae:{},se:{}},this.ce={},this.re={ie:'cc:onFirstConsent',le:'cc:onConsent',de:'cc:onChange',fe:'cc:onModalShow',_e:'cc:onModalHide',ue:'cc:onModalReady'}}}const b=new g,y=(e,t)=>e.indexOf(t),v=(e,t)=>-1!==y(e,t),h=e=>Array.isArray(e),w=e=>'string'==typeof e,C=e=>!!e&&'object'==typeof e&&!h(e),S=e=>'function'==typeof e,x=e=>Object.keys(e),M=e=>Array.from(new Set(e)),T=()=>document.activeElement,A=e=>e.preventDefault(),D=(e,t)=>e.querySelectorAll(t),k=e=>e.dispatchEvent(new Event('change')),E=e=>{const t=document.createElement(e);return e===l&&(t.type=e),t},H=(e,t,n)=>e.setAttribute(t,n),N=(e,t,n)=>{e.removeAttribute(n?'data-'+t:t)},V=(e,t,n)=>e.getAttribute(n?'data-'+t:t),I=(e,t)=>e.appendChild(t),j=(e,t)=>e.classList.add(t),L=(e,t)=>j(e,'cm__'+t),F=(e,t)=>j(e,'pm__'+t),P=(e,t)=>j(e,'aim__'+t),O=(e,t)=>e.classList.remove(t),R=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let n in e){let o=e[n];t[n]=R(o)}return t},B=()=>{const e={},{O:t,X:n,Y:o}=b.o;for(const a of t)e[a]=$(o[a],x(n[a]));return e},G=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),J=(e,t,n,o)=>{e.addEventListener(t,n),o&&b.o.m.push({pe:e,me:t,ge:n})},U=()=>{const e=b.t.cookie.expiresAfterDays;return S(e)?e(b.o.F):e},$=(e,t)=>{const n=e||[],o=t||[];return n.filter((e=>!v(o,e))).concat(o.filter((e=>!v(n,e))))},z=e=>{b.o.R=M(e),b.o.F=(()=>{let e='custom';const{R:t,O:n,B:o}=b.o,a=t.length;return a===n.length?e='all':a===o.length&&(e='necessary'),e})()},q=(e,t,n,o)=>{const a='accept-',{show:s,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,d=e||document,f=e=>D(d,`[data-cc="${e}"]`),u=(e,t)=>{A(e),l(t),i(),r()},p=f('show-preferencesModal'),m=f('show-consentModal'),g=f(a+'all'),y=f(a+'necessary'),v=f(a+'custom'),h=b.t.lazyHtmlGeneration;for(const e of p)H(e,'aria-haspopup','dialog'),J(e,_,(e=>{A(e),c()})),h&&(J(e,'mouseenter',(e=>{A(e),b.o.H||n(t,o)}),!0),J(e,'focus',(()=>{b.o.H||n(t,o)})));for(let e of m)H(e,'aria-haspopup','dialog'),J(e,_,(e=>{A(e),s(!0)}),!0);for(let e of g)J(e,_,(e=>{u(e,'all')}),!0);for(let e of v)J(e,_,(e=>{u(e)}),!0);for(let e of y)J(e,_,(e=>{u(e,[])}),!0)},K=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},Q=(e,t)=>{const n=o=>{o.target.removeEventListener('transitionend',n),'opacity'===o.propertyName&&'1'===getComputedStyle(e).opacity&&K((e=>1===e?b.oe.be:2===e?b.oe.ye:b.oe.ve)(t))};J(e,'transitionend',n)};let W;const X=e=>{clearTimeout(W),e?j(b.oe.he,c):W=setTimeout((()=>{O(b.oe.he,c)}),500)},Y=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],Z=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${Y[e]}"/></svg>`,ee=e=>{const t=b.oe,n=b.o;(e=>{const o=e===t.we,a=n.i.disablePageInteraction?t.he:o?t.Ce:t.he;J(a,'keydown',(t=>{if('Tab'!==t.key||!(o?n.D&&!n.k:n.k))return;const a=T(),s=o?n.q:n.K;0!==s.length&&(t.shiftKey?a!==s[0]&&e.contains(a)||(A(t),K(s[1])):a!==s[1]&&e.contains(a)||(A(t),K(s[0])))}),!0)})(e)},te=['[href]',l,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),ne=e=>{const{o:t,oe:n}=b,o=(e,t)=>{const n=D(e,te);t[0]=n[0],t[1]=n[n.length-1]};1===e&&t.A&&o(n.we,t.q),2===e&&t.H&&o(n.Se,t.K)},oe=(e,t,n)=>{const{de:o,le:a,ie:s,_e:c,ue:r,fe:i}=b.ce,l=b.re;if(t){const o={modalName:t};return e===l.fe?S(i)&&i(o):e===l._e?S(c)&&c(o):(o.modal=n,S(r)&&r(o)),G(e,o)}const d={cookie:b.o.p};e===l.ie?S(s)&&s(R(d)):e===l.le?S(a)&&a(R(d)):(d.changedCategories=b.o.j,d.changedServices=b.o.ee,S(o)&&o(R(d))),G(e,R(d))},ae=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},se=e=>{const{Y:t,ee:n,O:o,X:a,ne:s,p:c,j:i}=b.o;for(const e of o){const o=n[e]||t[e]||[];for(const n of o){const o=a[e][n];if(!o)continue;const{onAccept:s,onReject:c}=o;!o.xe&&v(t[e],n)?(o.xe=!0,S(s)&&s()):o.xe&&!v(t[e],n)&&(o.xe=!1,S(c)&&c())}}if(!b.t.manageScriptTags)return;const l=s,d=e||c.categories||[],f=(e,o)=>{if(o>=e.length)return;const a=s[o];if(a.Me)return f(e,o+1);const c=a.Te,l=a.Ae,_=a.De,u=v(d,l),p=!!_&&v(t[l],_);if(!_&&!a.ke&&u||!_&&a.ke&&!u&&v(i,l)||_&&!a.ke&&p||_&&a.ke&&!p&&v(n[l]||[],_)){a.Me=!0;const t=V(c,'type',!0);N(c,'type',!!t),N(c,r);let n=V(c,'src',!0);n&&N(c,'src',!0);const s=E('script');s.textContent=c.innerHTML;for(const{nodeName:e}of c.attributes)H(s,e,c[e]||V(c,e));t&&(s.type=t),n?s.src=n:n=c.src;const i=!!n&&(!t||['text/javascript','module'].includes(t));if(i&&(s.onload=s.onerror=()=>{f(e,++o)}),c.replaceWith(s),i)return}f(e,++o)};f(l,0)},ce='bottom',re='left',ie='center',le='right',de='inline',fe='wide',_e='pm--',ue='box',pe=['middle','top',ce],me=[re,ie,le],ge={box:{Ee:[fe,de],He:pe,Ne:me,Ve:ce,Ie:le},cloud:{Ee:[de],He:pe,Ne:me,Ve:ce,Ie:ie},bar:{Ee:[de],He:pe.slice(1),Ne:[],Ve:ce,Ie:''}},be={box:{Ee:[],He:[],Ne:[],Ve:'',Ie:''},bar:{Ee:[fe],He:[],Ne:[re,le],Ve:'',Ie:re}},ye={box:{Ee:[],He:[],Ne:[],Ve:'',Ie:''},bar:{Ee:[fe],He:[],Ne:[re,le],Ve:'',Ie:re}},ve=e=>{const t=b.o.i.guiOptions,n=t&&t.consentModal,o=t&&t.preferencesModal,a=t&&t.additionalInfoModal;0===e&&he(b.oe.we,ge,n,'cm--',ue,'cm'),1===e&&he(b.oe.Se,be,o,_e,ue,'pm'),2===e&&he(b.oe.je,ye,a,'aim--',ue,'aim')},he=(e,t,n,o,a,s)=>{e.className=s;const c=n&&n.layout,r=n&&n.position,i=n&&n.flipButtons,l=!n||!1!==n.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],u=f in t?f:a,p=t[u],m=v(p.Ee,_)&&_,g=r&&r.split(' ')||[],y=g[0],h=o===_e?g[0]:g[1],w=v(p.He,y)?y:p.Ve,C=v(p.Ne,h)?h:p.Ie,S=t=>{t&&j(e,o+t)};S(u),S(m),S(w),S(C),i&&S('flip');const x=s+'__btn--secondary';if('cm'===s){const{Le:e,Fe:t}=b.oe;e&&(l?O(e,x):j(e,x)),t&&(l?O(t,x):j(t,x))}else{const{Pe:e}=b.oe;e&&(l?O(e,x):j(e,x))}},we=(e,t)=>{const n=b.o,o=b.oe,{hide:a,hidePreferences:s,acceptCategory:c}=e,r=e=>{c(e),s(),a()},p=n.u&&n.u.preferencesModal;if(!p)return;const g=p.title,y=p.closeIconLabel,v=p.acceptAllBtn,h=p.acceptNecessaryBtn,S=p.savePreferencesBtn,M=p.sections||[],T=v||h||S;if(o.Oe)o.Re=E(i),F(o.Re,'body');else{o.Oe=E(i),j(o.Oe,'pm-wrapper');const e=E('div');j(e,'pm-overlay'),I(o.Oe,e),J(e,_,s),o.Se=E(i),j(o.Se,'pm'),H(o.Se,'role','dialog'),H(o.Se,d,!0),H(o.Se,'aria-modal',!0),H(o.Se,'aria-labelledby','pm__title'),J(o.he,'keydown',(e=>{27===e.keyCode&&s()}),!0),o.Be=E(i),F(o.Be,'header'),o.Ge=E('h2'),F(o.Ge,'title'),o.Ge.id='pm__title',o.Je=E(l),F(o.Je,'close-btn'),H(o.Je,'aria-label',p.closeIconLabel||''),J(o.Je,_,s),o.Ue=E('span'),o.Ue.innerHTML=Z(),I(o.Je,o.Ue),o.$e=E(i),F(o.$e,'body'),o.ze=E(i),F(o.ze,'footer');var A=E(i);j(A,'btns');var D=E(i),k=E(i);F(D,f),F(k,f),I(o.ze,D),I(o.ze,k),I(o.Be,o.Ge),I(o.Be,o.Je),o.ye=E(i),H(o.ye,'tabIndex',-1),I(o.Se,o.ye),I(o.Se,o.Be),I(o.Se,o.$e),T&&I(o.Se,o.ze),I(o.Oe,o.Se)}let N;g&&(o.Ge.innerHTML=g,y&&H(o.Je,'aria-label',y)),M.forEach(((e,t)=>{const a=e.title,s=e.description,c=e.linkedCategory,r=c&&n.P[c],f=e.cookieTable,u=f&&f.body,m=f&&f.caption,g=u&&u.length>0,b=!!r,y=b&&n.X[c],v=C(y)&&x(y)||[],h=b&&(!!s||!!g||x(y).length>0);var S=E(i);if(F(S,'section'),h||s){var M=E(i);F(M,'section-desc-wrapper')}let T=v.length;if(h&&T>0){const e=E(i);F(e,'section-services');for(const t of v){const n=y[t],o=n&&n.label||t,a=E(i),s=E(i),l=E(i),d=E(i);F(a,'service'),F(d,'service-title'),F(s,'service-header'),F(l,'service-icon');const f=Ce(o,t,r,!0,c);d.innerHTML=o,I(s,l),I(s,d),I(a,s),I(a,f),I(e,a)}I(M,e)}if(a){var A=E(i),D=E(b?l:i);if(F(A,'section-title-wrapper'),F(D,'section-title'),D.innerHTML=a,I(A,D),b){const e=E('span');e.innerHTML=Z(2,3.5),F(e,'section-arrow'),I(A,e),S.className+='--toggle';const t=Ce(a,c,r);let n=p.serviceCounterLabel;if(T>0&&w(n)){let e=E('span');F(e,'badge'),F(e,'service-counter'),H(e,d,!0),H(e,'data-servicecounter',T),n&&(n=n.split('|'),n=n.length>1&&T>1?n[1]:n[0],H(e,'data-counterlabel',n)),e.innerHTML=T+(n?' '+n:''),I(D,e)}if(h){F(S,'section--expandable');var k=c+'-desc';H(D,'aria-expanded',!1),H(D,'aria-controls',k)}I(A,t)}else H(D,'role','heading'),H(D,'aria-level','3');I(S,A)}if(s){var V=E('p');F(V,'section-desc'),V.innerHTML=s,I(M,V)}if(h&&(H(M,d,'true'),M.id=k,((e,t,n)=>{J(D,_,(()=>{t.classList.contains('is-expanded')?(O(t,'is-expanded'),H(n,'aria-expanded','false'),H(e,d,'true')):(j(t,'is-expanded'),H(n,'aria-expanded','true'),H(e,d,'false'))}))})(M,S,D),g)){const e=E('table'),n=E('thead'),a=E('tbody');if(m){const t=E('caption');F(t,'table-caption'),t.innerHTML=m,e.appendChild(t)}F(e,'section-table'),F(n,'table-head'),F(a,'table-body');const s=f.headers,c=x(s),r=o.qe.createDocumentFragment(),l=E('tr');for(const e of c){const n=s[e],o=E('th');o.id='cc__row-'+n+t,H(o,'scope','col'),F(o,'table-th'),o.innerHTML=n,I(r,o)}I(l,r),I(n,l);const d=o.qe.createDocumentFragment();for(const e of u){const n=E('tr');F(n,'table-tr');for(const o of c){const a=s[o],c=e[o],r=E('td'),l=E(i);F(r,'table-td'),H(r,'data-column',a),H(r,'headers','cc__row-'+a+t),l.insertAdjacentHTML('beforeend',c),I(r,l),I(n,r)}I(d,n)}I(a,d),I(e,n),I(e,a),I(M,e)}(h||s)&&I(S,M);const L=o.Re||o.$e;b?(N||(N=E(i),F(N,'section-toggles')),N.appendChild(S)):N=null,I(L,N||S)})),v&&(o.Ke||(o.Ke=E(l),F(o.Ke,'btn'),H(o.Ke,u,'all'),I(D,o.Ke),J(o.Ke,_,(()=>r('all')))),o.Ke.innerHTML=v),h&&(o.Pe||(o.Pe=E(l),F(o.Pe,'btn'),H(o.Pe,u,'necessary'),I(D,o.Pe),J(o.Pe,_,(()=>r([])))),o.Pe.innerHTML=h),S&&(o.Qe||(o.Qe=E(l),F(o.Qe,'btn'),F(o.Qe,'btn--secondary'),H(o.Qe,u,'save'),I(k,o.Qe),J(o.Qe,_,(()=>r()))),o.Qe.innerHTML=S),o.Re&&(o.Se.replaceChild(o.Re,o.$e),o.$e=o.Re),ve(1),n.H||(n.H=!0,oe(b.re.ue,m,o.Se),t(e),I(o.Ce,o.Oe),ee(o.Se),setTimeout((()=>j(o.Oe,'cc--anim')),100)),ne(2)};function Ce(e,t,n,o,a){const s=b.o,c=b.oe,i=E('label'),l=E('input'),f=E('span'),u=E('span'),p=E('span'),m=E('span'),g=E('span');if(m.innerHTML=Z(1,3),g.innerHTML=Z(0,3),l.type='checkbox',j(i,'section__toggle-wrapper'),j(l,'section__toggle'),j(m,'toggle__icon-on'),j(g,'toggle__icon-off'),j(f,'toggle__icon'),j(u,'toggle__icon-circle'),j(p,'toggle__label'),H(f,d,'true'),o?(j(i,'toggle-service'),H(l,r,a),c.se[a][t]=l):c.ae[t]=l,o?(e=>{J(l,'change',(()=>{const t=c.se[e],n=c.ae[e];s.Z[e]=[];for(let n in t){const o=t[n];o.checked&&s.Z[e].push(o.value)}n.checked=s.Z[e].length>0}))})(a):(e=>{J(l,_,(()=>{const t=c.se[e],n=l.checked;s.Z[e]=[];for(let o in t)t[o].checked=n,n&&s.Z[e].push(o)}))})(t),l.value=t,p.textContent=e.replace(/<.*>.*<\/.*>/gm,''),I(u,g),I(u,m),I(f,u),s.T)(n.readOnly||n.enabled)&&(l.checked=!0);else if(o){const e=s.Y[a];l.checked=n.readOnly||v(e,t)}else v(s.R,t)&&(l.checked=!0);return n.readOnly&&(l.disabled=!0),I(i,l),I(i,f),I(i,p),i}const Se=async(e,t)=>{const n=b.o,o=b.oe,{hideAdditionalInfo:a}=e,s=n.u&&n.u.additionalInfoModal;if(!s)return;const c=s.title,r=s.description,u=s.closeBtn;if(!o.We){o.We=E(i),j(o.We,'aim-wrapper');const e=E(i);j(e,'aim-overlay'),I(o.We,e),J(e,_,a),o.je=E(i),j(o.je,'aim'),H(o.je,'role','dialog'),H(o.je,d,!0),H(o.je,'aria-modal',!0),H(o.je,'aria-labelledby','aim__title'),J(o.he,'keydown',(e=>{27===e.keyCode&&a()}),!0),o.Xe=E(i),P(o.Xe,'header'),o.Ye=E('h2'),P(o.Ye,'title'),o.Ye.id='aim__title',o.Ze=E(l),P(o.Ze,'close-btn'),H(o.Ze,'aria-label',u.ariaLabel||''),J(o.Ze,_,a),o.et=E('span'),o.et.innerHTML=Z(),I(o.Ze,o.et),o.tt=E(i),P(o.tt,'body'),o.nt=E(i),P(o.nt,'footer');var p=E(i);P(p,f),I(o.nt,p),I(o.Xe,o.Ye),I(o.Xe,o.Ze),o.ve=E(i),H(o.ve,'tabindex',-1),I(o.je,o.ve),I(o.je,o.Xe),I(o.je,o.tt),u&&I(o.je,o.nt),I(o.We,o.je)}c&&(o.Ye.innerHTML=c,u&&H(o.Ze,'aria-label',u)),r&&(o.tt.innerHTML=r);const m=await async function(){const e=await fetch('https://669fa568b132e2c136fe9aba.mockapi.io/api/project-info/project-info');return await e.json()}();if(m){const e=E(i);e.innerHTML=m.projectInfo[0].company,I(o.tt,e)}u&&(o.ot||(o.ot=E(l),P(o.ot,'btn'),P(o.ot,'btn--secondary'),I(p,o.ot)),o.ot.innerHTML=u,J(o.ot,_,a)),ve(2),n.st=!1,n.st||(n.st=!0,t(),I(o.Ce,o.We),ee(o.je),setTimeout((()=>j(o.We,'cc--anim')),100))},xe=()=>{const e=E('span');return b.oe.ct||(b.oe.ct=e),e},Me=(e,t)=>{const n=b.o,o=b.oe,{hide:a,showPreferences:s,showAdditionalInfo:c,acceptCategory:r}=e,m=n.u&&n.u.consentModal;if(!m)return;const g=m.acceptAllBtn,y=m.acceptNecessaryBtn,v=m.showPreferencesBtn,h=m.showAdditionalInfoBtn,w=m.closeIconLabel,C=m.footer,S=m.label,x=m.title,M=e=>{a(),r(e)};if(!o.rt){o.rt=E(i),o.we=E(i),o.it=E(i),o.lt=E(i),o.dt=E(i),j(o.rt,'cm-wrapper'),j(o.we,'cm'),L(o.it,'body'),L(o.lt,'texts'),L(o.dt,'btns'),H(o.we,'role','dialog'),H(o.we,'aria-modal','true'),H(o.we,d,'false'),H(o.we,'aria-describedby','cm__desc'),S?H(o.we,'aria-label',S):x&&H(o.we,'aria-labelledby','cm__title');const e='box',t=n.i.guiOptions,a=t&&t.consentModal,s=(a&&a.layout||e).split(' ')[0]===e;x&&w&&s&&(o.Fe||(o.Fe=E(l),o.Fe.innerHTML=Z(),L(o.Fe,'btn'),L(o.Fe,'btn--close'),J(o.Fe,_,(()=>{M([])})),I(o.it,o.Fe)),H(o.Fe,'aria-label',w)),I(o.it,o.lt),(g||y||v||h)&&I(o.it,o.dt),o.be=E(i),H(o.be,'tabIndex',-1),I(o.we,o.be),I(o.we,o.it),I(o.rt,o.we)}x&&(o.ft||(o.ft=E('h2'),o.ft.className=o.ft.id='cm__title',I(o.lt,o.ft)),o.ft.innerHTML=x);let T=m.description;if(T&&(n.V&&(T=T.replace('{{revisionMessage}}',n.I?'':m.revisionMessage||'')),o._t||(o._t=E('p'),o._t.className=o._t.id='cm__desc',I(o.lt,o._t)),o._t.innerHTML=T),g&&(o.ut||(o.ut=E(l),I(o.ut,xe()),L(o.ut,'btn'),H(o.ut,u,'all'),J(o.ut,_,(()=>{M('all')}))),o.ut.firstElementChild.innerHTML=g),y&&(o.Le||(o.Le=E(l),I(o.Le,xe()),L(o.Le,'btn'),H(o.Le,u,'necessary'),J(o.Le,_,(()=>{M([])}))),o.Le.firstElementChild.innerHTML=y),v&&(o.gt||(o.gt=E(l),I(o.gt,xe()),L(o.gt,'btn'),L(o.gt,'btn--secondary'),H(o.gt,u,'show'),J(o.gt,'mouseenter',(()=>{n.H||we(e,t)})),J(o.gt,_,s)),o.gt.firstElementChild.innerHTML=v),h&&(o.bt||(o.bt=E(l),I(o.bt,xe()),L(o.bt,'btn'),L(o.bt,'btn--secondary'),H(o.bt,u,'show'),J(o.bt,'mouseenter',(()=>{n.st||Se(e,t)})),J(o.bt,_,c)),o.bt.firstElementChild.innerHTML=h),o.yt||(o.yt=E(i),L(o.yt,f),g&&I(o.yt,o.ut),y&&I(o.yt,o.Le),(g||y)&&I(o.it,o.yt),I(o.dt,o.yt)),o.gt&&!o.vt&&(o.vt=E(i),o.Le&&o.ut?(L(o.vt,f),I(o.vt,o.gt),I(o.vt,o.bt),I(o.dt,o.vt)):(I(o.yt,o.gt),I(o.yt,o.bt),L(o.yt,f+'--uneven'))),C){if(!o.ht){let e=E(i),t=E(i);o.ht=E(i),L(e,'footer'),L(t,'links'),L(o.ht,'link-group'),I(t,o.ht),I(e,t),I(o.we,e)}o.ht.innerHTML=C}ve(0),n.A||(n.A=!0,oe(b.re.ue,p,o.we),t(e),I(o.Ce,o.rt),ee(o.we),setTimeout((()=>j(o.rt,'cc--anim')),100)),ne(1),q(o.it,e,we,t)},Te=e=>{if(!w(e))return null;if(e in b.o._)return e;let t=e.slice(0,2);return t in b.o._?t:null},Ae=()=>b.o.l||b.o.i.language.default,De=e=>{e&&(b.o.l=e)},ke=async e=>{const t=b.o;let n=Te(e)?e:Ae(),o=t._[n];return w(o)?o=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(o):S(o)&&(o=await o()),!!o&&(t.u=o,De(n),!0)},Ee=()=>{let e=b.o.i.language.rtl,t=b.oe.Ce;e&&t&&(h(e)||(e=[e]),v(e,b.o.l)?j(t,'cc--rtl'):O(t,'cc--rtl'))},He=()=>{const e=b.oe;if(e.Ce)return;e.Ce=E(i),e.Ce.id='cc-main',e.Ce.setAttribute('data-nosnippet',''),Ee();let t=b.o.i.root;t&&w(t)&&(t=document.querySelector(t)),(t||e.qe.body).appendChild(e.Ce)},Ne=e=>ae((()=>localStorage.removeItem(e))),Ve=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const n=y(e,t);return n>-1?[e[n]]:[]}},Ie=e=>{const{hostname:t,protocol:n}=location,{name:o,path:a,domain:s,sameSite:c,useLocalStorage:r}=b.t.cookie,i=e?(()=>{const e=b.o.S,t=e?new Date-e:0;return 864e5*U()-t})():864e5*U(),l=new Date;l.setTime(l.getTime()+i),b.o.p.expirationTime=l.getTime();const d=JSON.stringify(b.o.p);let f=o+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+c;v(t,'.')&&(f+='; Domain='+s),'https:'===n&&(f+='; Secure'),r?((e,t)=>{ae((()=>localStorage.setItem(e,t)))})(o,d):document.cookie=f,b.o.p},je=(e,t,n)=>{if(0===e.length)return;const o=n||b.t.cookie.domain,a=t||b.t.cookie.path,s='www.'===o.slice(0,4),c=s&&o.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,o),s&&r(t,c)},Le=e=>{const t=e||b.t.cookie.name,n=b.t.cookie.useLocalStorage;return((e,t)=>{let n;return n=ae((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},n})(n?(o=t,ae((()=>localStorage.getItem(o)))||''):Fe(t,!0),n);var o},Fe=(e,t)=>{const n=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return n?t?n.pop():e:''},Pe=e=>{const t=document.cookie.split(/;\s*/),n=[];for(const o of t){let t=o.split('=')[0];e?ae((()=>{e.test(t)&&n.push(t)})):n.push(t)}return n},Oe=(e,o=[])=>{((e,t)=>{const{O:n,R:o,B:a,H:s,Z:c,G:r,X:i}=b.o;let l=[];if(e){h(e)?l.push(...e):w(e)&&(l='all'===e?n:[e]);for(const e of n)c[e]=v(l,e)?x(i[e]):[]}else l=[...o,...r],s&&(l=(()=>{const e=b.oe.ae;if(!e)return[];let t=[];for(let n in e)e[n].checked&&t.push(n);return t})());l=l.filter((e=>!v(n,e)||!v(t,e))),l.push(...a),z(l)})(e,o),(e=>{const t=b.o,{Z:n,B:o,Y:a,X:s,O:c}=t,r=c;t.te=R(a);for(const e of r){const c=s[e],r=x(c),i=n[e]&&n[e].length>0,l=v(o,e);if(0!==r.length){if(a[e]=[],l)a[e].push(...r);else if(i){const t=n[e];a[e].push(...t)}else a[e]=t.Z[e];a[e]=M(a[e])}}})(),(()=>{const e=b.o;e.j=b.t.mode===n&&e.T?$(e.G,e.R):$(e.R,e.p.categories);let o=e.j.length>0,a=!1;for(const t of e.O)e.ee[t]=$(e.Y[t],e.te[t]),e.ee[t].length>0&&(a=!0);const s=b.oe.ae;for(const t in s)s[t].checked=v(e.R,t);for(const t of e.O){const n=b.oe.se[t],o=e.Y[t];for(const e in n)n[e].checked=v(o,e)}e.C||(e.C=new Date),e.M||(e.M=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.p={categories:R(e.R),revision:b.t.revision,data:e.h,consentTimestamp:e.C.toISOString(),consentId:e.M,services:R(e.Y)},e.S&&(e.p.lastConsentTimestamp=e.S.toISOString());let c=!1;const r=o||a;(e.T||r)&&(e.T&&(e.T=!1,c=!0),e.S=e.S?new Date:e.C,e.p.lastConsentTimestamp=e.S.toISOString(),Ie(),b.t.autoClearCookies&&(c||r)&&(e=>{const t=b.o,n=Pe(),o=(e=>{const t=b.o;return(e?t.O:t.j).filter((e=>{const n=t.P[e];return!!n&&!n.readOnly&&!!n.autoClear}))})(e);for(const e in t.ee)for(const o of t.ee[e]){const a=t.X[e][o].cookies;if(!v(t.Y[e],o)&&a)for(const e of a){const t=Ve(n,e.name);je(t,e.path,e.domain)}}for(const a of o){const o=t.P[a].autoClear,s=o&&o.cookies||[],c=v(t.j,a),r=!v(t.R,a),i=c&&r;if(e?r:i){o.reloadPage&&i&&(t.L=!0);for(const e of s){const t=Ve(n,e.name);je(t,e.path,e.domain)}}}})(c),se()),c&&(oe(b.re.ie),oe(b.re.le),b.t.mode===t)||(r&&oe(b.re.de),e.L&&(e.L=!1,location.reload()))})()},Re=e=>{const t=b.o.T?[]:b.o.R;return v(t,e)},Be=(e,t)=>{const n=b.o.T?[]:b.o.Y[t]||[];return v(n,e)},Ge=(e,t,n)=>{let o=[];const a=e=>{if(w(e)){let t=Fe(e);''!==t&&o.push(t)}else o.push(...Pe(e))};if(h(e))for(let t of e)a(t);else a(e);je(o,t,n)},Je=e=>{const{oe:t,o:n}=b;if(!n.D){if(!n.A){if(!e)return;Me(Qe,He)}n.D=!0,n.U=T(),n.v&&X(!0),Q(t.we,1),j(t.he,o),H(t.we,d,'false'),setTimeout((()=>{K(b.oe.be)}),100),oe(b.re.fe,p)}},Ue=()=>{const{oe:e,o:t,re:n}=b;t.D&&(t.D=!1,t.v&&X(),K(e.ct,!0),O(e.he,o),H(e.we,d,'true'),K(t.U),t.U=null,oe(n._e,p))},$e=()=>{const e=b.o;e.k||(e.H||we(Qe,He),e.k=!0,e.D?e.$=T():e.U=T(),Q(b.oe.Se,2),j(b.oe.he,a),H(b.oe.Se,d,'false'),setTimeout((()=>{K(b.oe.ye)}),100),oe(b.re.fe,m))},ze=()=>{const e=b.o;e.wt||(e.st||Se(Qe,He),e.wt=!0,e.D?e.$=T():e.U=T(),Q(b.oe.je,3),j(b.oe.he,s),H(b.oe.je,d,'false'),setTimeout((()=>{K(b.oe.ve)}),100))},qe=()=>{const e=b.o;e.k&&(e.k=!1,(()=>{const e=Xe(),t=b.o.P,n=b.oe.ae,o=b.oe.se,a=e=>v(b.o.G,e);for(const s in n){const c=!!t[s].readOnly;n[s].checked=c||(e?Re(s):a(s));for(const t in o[s])o[s][t].checked=c||(e?Be(t,s):a(s))}})(),K(b.oe.Ue,!0),O(b.oe.he,a),H(b.oe.Se,d,'true'),e.D?(K(e.$),e.$=null):(K(e.U),e.U=null),oe(b.re._e,m))},Ke=()=>{const e=b.o;e.wt&&(e.wt=!1,K(b.oe.et,!0),O(b.oe.he,s),H(b.oe.je,d,'true'),e.D?(K(e.$),e.$=null):(K(e.U),e.U=null))};var Qe={show:Je,hide:Ue,showPreferences:$e,showAdditionalInfo:ze,hidePreferences:qe,hideAdditionalInfo:Ke,acceptCategory:Oe};const We=(e,t)=>{const n=Le(t);return e?n[e]:n},Xe=()=>!b.o.T;e.acceptCategory=Oe,e.acceptService=(e,t)=>{const{O:n,X:o}=b.o;if(!(e&&t&&w(t)&&v(n,t)&&0!==x(o[t]).length))return!1;((e,t)=>{const n=b.o,{X:o,Z:a,H:s}=n,c=b.oe.se[t]||{},r=b.oe.ae[t]||{},i=x(o[t]);if(a[t]=[],w(e)){if('all'===e){if(a[t].push(...i),s)for(let e in c)c[e].checked=!0,k(c[e])}else if(v(i,e)&&a[t].push(e),s)for(let t in c)c[t].checked=e===t,k(c[t])}else if(h(e))for(let n of i){const o=v(e,n);o&&a[t].push(n),s&&(c[n].checked=o,k(c[n]))}const l=0===a[t].length;n.R=l?n.R.filter((e=>e!==t)):M([...n.R,t]),s&&(r.checked=!l,k(r))})(e,t),Oe()},e.acceptedCategory=Re,e.acceptedService=Be,e.eraseCookies=Ge,e.getConfig=e=>{const t=b.t,n=b.o.i;return e?t[e]||n[e]:{...t,...n,cookie:{...t.cookie}}},e.getCookie=We,e.getUserPreferences=()=>{const{F:e,Y:t}=b.o,{accepted:n,rejected:o}=(()=>{const{T:e,R:t,O:n}=b.o;return{accepted:t,rejected:e?[]:n.filter((e=>!v(t,e)))}})();return R({acceptType:e,acceptedCategories:n,rejectedCategories:o,acceptedServices:t,rejectedServices:B()})},e.hide=Ue,e.hideAdditionalInfo=Ke,e.hidePreferences=qe,e.loadScript=(e,t)=>{let n=document.querySelector('script[src="'+e+'"]');return new Promise((o=>{if(n)return o(!0);if(n=E('script'),C(t))for(const e in t)H(n,e,t[e]);n.onload=()=>o(!0),n.onerror=()=>{n.remove(),o(!1)},n.src=e,I(document.head,n)}))},e.reset=e=>{const{Ce:t,he:n}=b.oe,{name:s,path:r,domain:i,useLocalStorage:l}=b.t.cookie;e&&(l?Ne(s):Ge(s,r,i));for(const{pe:e,me:t,ge:n}of b.o.m)e.removeEventListener(t,n);t&&t.remove(),n&&n.classList.remove(c,a,o);const d=new g;for(const e in b)b[e]=d[e];window._ccRun=!1},e.run=async e=>{const{o:t,t:o,re:a}=b,s=window;if(!s._ccRun){if(s._ccRun=!0,(e=>{const{oe:t,t:o,o:a}=b,s=o,c=a,{cookie:i}=s,l=b.ce,d=e.cookie,f=e.categories,_=x(f)||[],u=navigator,p=document;t.qe=p,t.he=p.documentElement,i.domain=location.hostname,c.i=e,c.P=f,c.O=_,c._=e.language.translations,c.v=!!e.disablePageInteraction,l.ie=e.onFirstConsent,l.le=e.onConsent,l.de=e.onChange,l._e=e.onModalHide,l.fe=e.onModalShow,l.ue=e.onModalReady;const{mode:m,autoShow:g,lazyHtmlGeneration:y,autoClearCookies:h,revision:w,manageScriptTags:S,hideFromBots:M}=e;m===n&&(s.mode=m),'boolean'==typeof h&&(s.autoClearCookies=h),'boolean'==typeof S&&(s.manageScriptTags=S),'number'==typeof w&&w>=0&&(s.revision=w,c.V=!0),'boolean'==typeof g&&(s.autoShow=g),'boolean'==typeof y&&(s.lazyHtmlGeneration=y),!1===M&&(s.hideFromBots=!1),!0===s.hideFromBots&&u&&(c.J=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),C(d)&&(s.cookie={...i,...d}),s.autoClearCookies,c.V,s.manageScriptTags,(e=>{const{P:t,X:n,Y:o,Z:a,B:s}=b.o;for(let c of e){const e=t[c],r=e.services||{},i=C(r)&&x(r)||[];n[c]={},o[c]=[],a[c]=[],e.readOnly&&(s.push(c),o[c]=i),b.oe.se[c]={};for(let e of i){const t=r[e];t.xe=!1,n[c][e]=t}}})(_),(()=>{if(!b.t.manageScriptTags)return;const e=b.o,t=D(document,'script['+r+']');for(const n of t){let t=V(n,r),o=n.dataset.service||'',a=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),a=!0),'!'===o.charAt(0)&&(o=o.slice(1),a=!0),v(e.O,t)&&(e.ne.push({Te:n,Me:!1,ke:a,Ae:t,De:o}),o)){const n=e.X[t];n[o]||(n[o]={xe:!1})}}})(),De((()=>{const e=b.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},n=Te(t[e]);if(n)return n}return Ae()})())})(e),t.J)return;(()=>{const e=b.o,t=b.t,o=Le(),{categories:a,services:s,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=o,f=h(a);e.p=o,e.M=c;const _=!!c&&w(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.V&&_&&d!==t.revision&&(e.I=!1),e.T=!(_&&e.I&&e.C&&e.S&&f),t.cookie.useLocalStorage&&!e.T&&(e.T=(new Date).getTime()>(o.expirationTime||0),e.T&&Ne(t.cookie.name)),e.T,(()=>{const e=b.o;for(const t of e.O){const o=e.P[t];if(o.readOnly||o.enabled){e.G.push(t);const o=e.X[t]||{};for(let a in o)e.Z[t].push(a),e.i.mode===n&&e.Y[t].push(a)}}})(),e.T?t.mode===n&&(e.R=[...e.G]):(e.Y={...e.Y,...s},e.Z={...e.Y},z([...e.B,...a]))})();const i=Xe();if(!await ke())return!1;if(q(null,c=Qe,we,He),b.o.T&&Me(c,He),b.t.lazyHtmlGeneration||(we(c,He),Se(c,He)),o.autoShow&&!i&&Je(!0),i)return se(),oe(a.le);o.mode===n&&se(t.G)}var c},e.setCookieData=e=>{let t,n=e.value,o=e.mode,a=!1;const s=b.o;if('update'===o){s.h=t=We('data');const e=typeof t==typeof n;if(e&&'object'==typeof t){!t&&(t={});for(let e in n)t[e]!==n[e]&&(t[e]=n[e],a=!0)}else!e&&t||t===n||(t=n,a=!0)}else t=n,a=!0;return a&&(s.h=t,s.p.data=t,Ie(!0)),a},e.setLanguage=async(e,t)=>{if(!Te(e))return!1;const n=b.o;return!(e===Ae()&&!0!==t||!await ke(e)||(De(e),n.A&&Me(Qe,He),n.H&&we(Qe,He),Ee(),0))},e.show=Je,e.showAdditionalInfo=ze,e.showPreferences=$e,e.validConsent=Xe,e.validCookie=e=>''!==Fe(e,!0)},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={});
