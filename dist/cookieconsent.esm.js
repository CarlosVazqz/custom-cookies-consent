/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const e='opt-in',t='opt-out',o='show--consent',n='show--preferences',a='disable--interaction',s='data-category',c='div',r='button',i='aria-hidden',l='btn-group',d='click',f='data-role',_='consentModal',u='preferencesModal';class p{constructor(){this.t={mode:e,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],v:!1,h:null,C:null,S:null,M:'',D:!0,T:!1,k:!1,A:!1,N:!1,H:[],V:!1,I:!0,L:[],j:!1,F:'',P:!1,O:[],R:[],B:[],G:[],J:!1,U:!1,$:!1,q:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},oe:[]},this.ne={ae:{},se:{}},this.ce={},this.re={ie:'cc:onFirstConsent',le:'cc:onConsent',de:'cc:onChange',fe:'cc:onModalShow',_e:'cc:onModalHide',ue:'cc:onModalReady'}}}const m=new p,g=(e,t)=>e.indexOf(t),b=(e,t)=>-1!==g(e,t),v=e=>Array.isArray(e),y=e=>'string'==typeof e,h=e=>!!e&&'object'==typeof e&&!v(e),C=e=>'function'==typeof e,w=e=>Object.keys(e),S=e=>Array.from(new Set(e)),x=()=>document.activeElement,M=e=>e.preventDefault(),D=(e,t)=>e.querySelectorAll(t),T=e=>e.dispatchEvent(new Event('change')),k=e=>{const t=document.createElement(e);return e===r&&(t.type=e),t},E=(e,t,o)=>e.setAttribute(t,o),A=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},N=(e,t,o)=>e.getAttribute(o?'data-'+t:t),H=(e,t)=>e.appendChild(t),V=(e,t)=>e.classList.add(t),I=(e,t)=>V(e,'cm__'+t),L=(e,t)=>V(e,'pm__'+t),j=(e,t)=>e.classList.remove(t),F=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=F(n)}return t},P=()=>{const e={},{O:t,X:o,Y:n}=m.o;for(const a of t)e[a]=G(n[a],w(o[a]));return e},O=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),R=(e,t,o,n)=>{e.addEventListener(t,o),n&&m.o.m.push({pe:e,me:t,ge:o})},B=()=>{const e=m.t.cookie.expiresAfterDays;return C(e)?e(m.o.F):e},G=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!b(n,e))).concat(n.filter((e=>!b(o,e))))},J=e=>{m.o.R=S(e),m.o.F=(()=>{let e='custom';const{R:t,O:o,B:n}=m.o,a=t.length;return a===o.length?e='all':a===n.length&&(e='necessary'),e})()},U=(e,t,o,n)=>{const a='accept-',{show:s,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,f=e||document,_=e=>D(f,`[data-cc="${e}"]`),u=(e,t)=>{M(e),l(t),i(),r()},p=_('show-preferencesModal'),g=_('show-consentModal'),b=_(a+'all'),v=_(a+'necessary'),y=_(a+'custom'),h=m.t.lazyHtmlGeneration;for(const e of p)E(e,'aria-haspopup','dialog'),R(e,d,(e=>{M(e),c()})),h&&(R(e,'mouseenter',(e=>{M(e),m.o.N||o(t,n)}),!0),R(e,'focus',(()=>{m.o.N||o(t,n)})));for(let e of g)E(e,'aria-haspopup','dialog'),R(e,d,(e=>{M(e),s(!0)}),!0);for(let e of b)R(e,d,(e=>{u(e,'all')}),!0);for(let e of y)R(e,d,(e=>{u(e)}),!0);for(let e of v)R(e,d,(e=>{u(e,[])}),!0)},$=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},z=(e,t)=>{const o=n=>{n.target.removeEventListener('transitionend',o),'opacity'===n.propertyName&&'1'===getComputedStyle(e).opacity&&$((e=>1===e?m.ne.be:m.ne.ve)(t))};R(e,'transitionend',o)};let q;const K=e=>{clearTimeout(q),e?V(m.ne.ye,a):q=setTimeout((()=>{j(m.ne.ye,a)}),500)},Q=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],W=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${Q[e]}"/></svg>`,X=e=>{const t=m.ne,o=m.o;(e=>{const n=e===t.he,a=o.i.disablePageInteraction?t.ye:n?t.Ce:t.ye;R(a,'keydown',(t=>{if('Tab'!==t.key||!(n?o.k&&!o.A:o.A))return;const a=x(),s=n?o.q:o.K;0!==s.length&&(t.shiftKey?a!==s[0]&&e.contains(a)||(M(t),$(s[1])):a!==s[1]&&e.contains(a)||(M(t),$(s[0])))}),!0)})(e)},Y=['[href]',r,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),Z=e=>{const{o:t,ne:o}=m,n=(e,t)=>{const o=D(e,Y);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.T&&n(o.he,t.q),2===e&&t.N&&n(o.we,t.K)},ee=(e,t,o)=>{const{de:n,le:a,ie:s,_e:c,ue:r,fe:i}=m.ce,l=m.re;if(t){const n={modalName:t};return e===l.fe?C(i)&&i(n):e===l._e?C(c)&&c(n):(n.modal=o,C(r)&&r(n)),O(e,n)}const d={cookie:m.o.p};e===l.ie?C(s)&&s(F(d)):e===l.le?C(a)&&a(F(d)):(d.changedCategories=m.o.L,d.changedServices=m.o.ee,C(n)&&n(F(d))),O(e,F(d))},te=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},oe=e=>{const{Y:t,ee:o,O:n,X:a,oe:c,p:r,L:i}=m.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=a[e][o];if(!n)continue;const{onAccept:s,onReject:c}=n;!n.Se&&b(t[e],o)?(n.Se=!0,C(s)&&s()):n.Se&&!b(t[e],o)&&(n.Se=!1,C(c)&&c())}}if(!m.t.manageScriptTags)return;const l=c,d=e||r.categories||[],f=(e,n)=>{if(n>=e.length)return;const a=c[n];if(a.xe)return f(e,n+1);const r=a.Me,l=a.De,_=a.Te,u=b(d,l),p=!!_&&b(t[l],_);if(!_&&!a.ke&&u||!_&&a.ke&&!u&&b(i,l)||_&&!a.ke&&p||_&&a.ke&&!p&&b(o[l]||[],_)){a.xe=!0;const t=N(r,'type',!0);A(r,'type',!!t),A(r,s);let o=N(r,'src',!0);o&&A(r,'src',!0);const c=k('script');c.textContent=r.innerHTML;for(const{nodeName:e}of r.attributes)E(c,e,r[e]||N(r,e));t&&(c.type=t),o?c.src=o:o=r.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(c.onload=c.onerror=()=>{f(e,++n)}),r.replaceWith(c),i)return}f(e,++n)};f(l,0)},ne='bottom',ae='left',se='center',ce='right',re='inline',ie='wide',le='pm--',de='box',fe=['middle','top',ne],_e=[ae,se,ce],ue={box:{Ee:[ie,re],Ae:fe,Ne:_e,He:ne,Ve:ce},cloud:{Ee:[re],Ae:fe,Ne:_e,He:ne,Ve:se},bar:{Ee:[re],Ae:fe.slice(1),Ne:[],He:ne,Ve:''}},pe={box:{Ee:[],Ae:[],Ne:[],He:'',Ve:''},bar:{Ee:[ie],Ae:[],Ne:[ae,ce],He:'',Ve:ae}},me=e=>{const t=m.o.i.guiOptions,o=t&&t.consentModal,n=t&&t.preferencesModal,a=t&&t.additionalInfoModal;0===e&&ge(m.ne.he,ue,o,'cm--',de,'cm'),1===e&&ge(m.ne.we,pe,n,le,de,'pm'),2===e&&ge(m.ne.Ie,pe,a,'aim--',de,'aim')},ge=(e,t,o,n,a,s)=>{e.className=s;const c=o&&o.layout,r=o&&o.position,i=o&&o.flipButtons,l=!o||!1!==o.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],u=f in t?f:a,p=t[u],g=b(p.Ee,_)&&_,v=r&&r.split(' ')||[],y=v[0],h=n===le?v[0]:v[1],C=b(p.Ae,y)?y:p.He,w=b(p.Ne,h)?h:p.Ve,S=t=>{t&&V(e,n+t)};S(u),S(g),S(C),S(w),i&&S('flip');const x=s+'__btn--secondary';if('cm'===s){const{Le:e,je:t}=m.ne;e&&(l?j(e,x):V(e,x)),t&&(l?j(t,x):V(t,x))}else{const{Fe:e}=m.ne;e&&(l?j(e,x):V(e,x))}},be=(e,t)=>{const o=m.o,n=m.ne,{hide:a,hidePreferences:s,acceptCategory:_}=e,p=e=>{_(e),s(),a()},g=o.u&&o.u.preferencesModal;if(!g)return;const b=g.title,v=g.closeIconLabel,C=g.acceptAllBtn,S=g.acceptNecessaryBtn,x=g.savePreferencesBtn,M=g.sections||[],D=C||S||x;if(n.Pe)n.Oe=k(c),L(n.Oe,'body');else{n.Pe=k(c),V(n.Pe,'pm-wrapper');const e=k('div');V(e,'pm-overlay'),H(n.Pe,e),R(e,d,s),n.we=k(c),V(n.we,'pm'),E(n.we,'role','dialog'),E(n.we,i,!0),E(n.we,'aria-modal',!0),E(n.we,'aria-labelledby','pm__title'),R(n.ye,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.Re=k(c),L(n.Re,'header'),n.Be=k('h2'),L(n.Be,'title'),n.Be.id='pm__title',n.Ge=k(r),L(n.Ge,'close-btn'),E(n.Ge,'aria-label',g.closeIconLabel||''),R(n.Ge,d,s),n.Je=k('span'),n.Je.innerHTML=W(),H(n.Ge,n.Je),n.Ue=k(c),L(n.Ue,'body'),n.$e=k(c),L(n.$e,'footer');var T=k(c);V(T,'btns');var A=k(c),N=k(c);L(A,l),L(N,l),H(n.$e,A),H(n.$e,N),H(n.Re,n.Be),H(n.Re,n.Ge),n.ve=k(c),E(n.ve,'tabIndex',-1),H(n.we,n.ve),H(n.we,n.Re),H(n.we,n.Ue),D&&H(n.we,n.$e),H(n.Pe,n.we)}let I;b&&(n.Be.innerHTML=b,v&&E(n.Ge,'aria-label',v)),M.forEach(((e,t)=>{const a=e.title,s=e.description,l=e.linkedCategory,f=l&&o.P[l],_=e.cookieTable,u=_&&_.body,p=_&&_.caption,m=u&&u.length>0,b=!!f,v=b&&o.X[l],C=h(v)&&w(v)||[],S=b&&(!!s||!!m||w(v).length>0);var x=k(c);if(L(x,'section'),S||s){var M=k(c);L(M,'section-desc-wrapper')}let D=C.length;if(S&&D>0){const e=k(c);L(e,'section-services');for(const t of C){const o=v[t],n=o&&o.label||t,a=k(c),s=k(c),r=k(c),i=k(c);L(a,'service'),L(i,'service-title'),L(s,'service-header'),L(r,'service-icon');const d=ve(n,t,f,!0,l);i.innerHTML=n,H(s,r),H(s,i),H(a,s),H(a,d),H(e,a)}H(M,e)}if(a){var T=k(c),A=k(b?r:c);if(L(T,'section-title-wrapper'),L(A,'section-title'),A.innerHTML=a,H(T,A),b){const e=k('span');e.innerHTML=W(2,3.5),L(e,'section-arrow'),H(T,e),x.className+='--toggle';const t=ve(a,l,f);let o=g.serviceCounterLabel;if(D>0&&y(o)){let e=k('span');L(e,'badge'),L(e,'service-counter'),E(e,i,!0),E(e,'data-servicecounter',D),o&&(o=o.split('|'),o=o.length>1&&D>1?o[1]:o[0],E(e,'data-counterlabel',o)),e.innerHTML=D+(o?' '+o:''),H(A,e)}if(S){L(x,'section--expandable');var N=l+'-desc';E(A,'aria-expanded',!1),E(A,'aria-controls',N)}H(T,t)}else E(A,'role','heading'),E(A,'aria-level','3');H(x,T)}if(s){var F=k('p');L(F,'section-desc'),F.innerHTML=s,H(M,F)}if(S&&(E(M,i,'true'),M.id=N,((e,t,o)=>{R(A,d,(()=>{t.classList.contains('is-expanded')?(j(t,'is-expanded'),E(o,'aria-expanded','false'),E(e,i,'true')):(V(t,'is-expanded'),E(o,'aria-expanded','true'),E(e,i,'false'))}))})(M,x,A),m)){const e=k('table'),o=k('thead'),a=k('tbody');if(p){const t=k('caption');L(t,'table-caption'),t.innerHTML=p,e.appendChild(t)}L(e,'section-table'),L(o,'table-head'),L(a,'table-body');const s=_.headers,r=w(s),i=n.ze.createDocumentFragment(),l=k('tr');for(const e of r){const o=s[e],n=k('th');n.id='cc__row-'+o+t,E(n,'scope','col'),L(n,'table-th'),n.innerHTML=o,H(i,n)}H(l,i),H(o,l);const d=n.ze.createDocumentFragment();for(const e of u){const o=k('tr');L(o,'table-tr');for(const n of r){const a=s[n],r=e[n],i=k('td'),l=k(c);L(i,'table-td'),E(i,'data-column',a),E(i,'headers','cc__row-'+a+t),l.insertAdjacentHTML('beforeend',r),H(i,l),H(o,i)}H(d,o)}H(a,d),H(e,o),H(e,a),H(M,e)}(S||s)&&H(x,M);const P=n.Oe||n.Ue;b?(I||(I=k(c),L(I,'section-toggles')),I.appendChild(x)):I=null,H(P,I||x)})),C&&(n.qe||(n.qe=k(r),L(n.qe,'btn'),E(n.qe,f,'all'),H(A,n.qe),R(n.qe,d,(()=>p('all')))),n.qe.innerHTML=C),S&&(n.Fe||(n.Fe=k(r),L(n.Fe,'btn'),E(n.Fe,f,'necessary'),H(A,n.Fe),R(n.Fe,d,(()=>p([])))),n.Fe.innerHTML=S),x&&(n.Ke||(n.Ke=k(r),L(n.Ke,'btn'),L(n.Ke,'btn--secondary'),E(n.Ke,f,'save'),H(N,n.Ke),R(n.Ke,d,(()=>p()))),n.Ke.innerHTML=x),n.Oe&&(n.we.replaceChild(n.Oe,n.Ue),n.Ue=n.Oe),me(1),o.N||(o.N=!0,ee(m.re.ue,u,n.we),t(e),H(n.Ce,n.Pe),X(n.we),setTimeout((()=>V(n.Pe,'cc--anim')),100)),Z(2)};function ve(e,t,o,n,a){const c=m.o,r=m.ne,l=k('label'),f=k('input'),_=k('span'),u=k('span'),p=k('span'),g=k('span'),v=k('span');if(g.innerHTML=W(1,3),v.innerHTML=W(0,3),f.type='checkbox',V(l,'section__toggle-wrapper'),V(f,'section__toggle'),V(g,'toggle__icon-on'),V(v,'toggle__icon-off'),V(_,'toggle__icon'),V(u,'toggle__icon-circle'),V(p,'toggle__label'),E(_,i,'true'),n?(V(l,'toggle-service'),E(f,s,a),r.se[a][t]=f):r.ae[t]=f,n?(e=>{R(f,'change',(()=>{const t=r.se[e],o=r.ae[e];c.Z[e]=[];for(let o in t){const n=t[o];n.checked&&c.Z[e].push(n.value)}o.checked=c.Z[e].length>0}))})(a):(e=>{R(f,d,(()=>{const t=r.se[e],o=f.checked;c.Z[e]=[];for(let n in t)t[n].checked=o,o&&c.Z[e].push(n)}))})(t),f.value=t,p.textContent=e.replace(/<.*>.*<\/.*>/gm,''),H(u,v),H(u,g),H(_,u),c.D)(o.readOnly||o.enabled)&&(f.checked=!0);else if(n){const e=c.Y[a];f.checked=o.readOnly||b(e,t)}else b(c.R,t)&&(f.checked=!0);return o.readOnly&&(f.disabled=!0),H(l,f),H(l,_),H(l,p),l}const ye=(e,t)=>{const o=m.o,n=m.ne,a=o.u&&o.u.additionalInfoModal;if(!a)return;const s=a.title,d=a.description,f=a.closeBtn;if(!n.Qe){n.Qe=k(c),V(n.Qe,'aim-wrapper');const e=k(c);V(e,'aim-overlay'),H(n.Qe,e),n.Ie=k(c),V(n.Ie,'aim'),E(n.Ie,'role','dialog'),E(n.we,i,!0),E(n.Ie,'aria-modal',!0),E(n.Ie,'aria-labelledby','aim__title'),n.We=k(c),V(n.We,'header'),n.Xe=k('h2'),V(n.Xe,'title'),n.Xe.id='aim__title',n.Ye=k(r),V(n.Ye,'close-btn'),E(n.Ye,'aria-label',f.ariaLabel||''),n.Ze=k('span'),n.Ze.innerHTML=W(),H(n.Ye,n.Ze),n.et=k(c),V(n.et,'body'),n.tt=k(c),V(n.tt,'footer');var _=k(c);V(_,l),H(n.tt,_),H(n.We,n.Xe),H(n.We,n.Ye),n.ot=k(c),E(n.ot,'tabindex',-1),H(n.Ie,n.ot),H(n.Ie,n.We),H(n.Ie,n.et),f&&H(n.Ie,n.tt),H(n.Qe,n.Ie)}s&&(n.Xe.innerHTML=s,f&&E(n.Ye,'aria-label',f)),d&&(n.et.innerHTML=d),f&&(n.nt||(n.nt=k(r),V(n.nt,'btn'),H(_,n.nt)),n.nt.innerHTML=f),me(2),o.st=!1,o.st||(o.st=!0,t(),H(n.Ce,n.Qe),setTimeout((()=>V(n.Pe,'cc--anim')),100))},he=()=>{const e=k('span');return m.ne.ct||(m.ne.ct=e),e},Ce=(e,t)=>{const o=m.o,n=m.ne,{hide:a,showPreferences:s,acceptCategory:u}=e,p=o.u&&o.u.consentModal;if(!p)return;const g=p.acceptAllBtn,b=p.acceptNecessaryBtn,v=p.showPreferencesBtn,y=p.showAdditionalInfoBtn,h=p.closeIconLabel,C=p.footer,w=p.label,S=p.title,x=e=>{a(),u(e)};if(!n.rt){n.rt=k(c),n.he=k(c),n.it=k(c),n.lt=k(c),n.dt=k(c),V(n.rt,'cm-wrapper'),V(n.he,'cm'),I(n.it,'body'),I(n.lt,'texts'),I(n.dt,'btns'),E(n.he,'role','dialog'),E(n.he,'aria-modal','true'),E(n.he,i,'false'),E(n.he,'aria-describedby','cm__desc'),w?E(n.he,'aria-label',w):S&&E(n.he,'aria-labelledby','cm__title');const e='box',t=o.i.guiOptions,a=t&&t.consentModal,s=(a&&a.layout||e).split(' ')[0]===e;S&&h&&s&&(n.je||(n.je=k(r),n.je.innerHTML=W(),I(n.je,'btn'),I(n.je,'btn--close'),R(n.je,d,(()=>{x([])})),H(n.it,n.je)),E(n.je,'aria-label',h)),H(n.it,n.lt),(g||b||v||y)&&H(n.it,n.dt),n.be=k(c),E(n.be,'tabIndex',-1),H(n.he,n.be),H(n.he,n.it),H(n.rt,n.he)}S&&(n.ft||(n.ft=k('h2'),n.ft.className=n.ft.id='cm__title',H(n.lt,n.ft)),n.ft.innerHTML=S);let M=p.description;if(M&&(o.V&&(M=M.replace('{{revisionMessage}}',o.I?'':p.revisionMessage||'')),n._t||(n._t=k('p'),n._t.className=n._t.id='cm__desc',H(n.lt,n._t)),n._t.innerHTML=M),g&&(n.ut||(n.ut=k(r),H(n.ut,he()),I(n.ut,'btn'),E(n.ut,f,'all'),R(n.ut,d,(()=>{x('all')}))),n.ut.firstElementChild.innerHTML=g),b&&(n.Le||(n.Le=k(r),H(n.Le,he()),I(n.Le,'btn'),E(n.Le,f,'necessary'),R(n.Le,d,(()=>{x([])}))),n.Le.firstElementChild.innerHTML=b),v&&(n.gt||(n.gt=k(r),H(n.gt,he()),I(n.gt,'btn'),I(n.gt,'btn--secondary'),E(n.gt,f,'show'),R(n.gt,'mouseenter',(()=>{o.N||be(e,t)})),R(n.gt,d,s)),n.gt.firstElementChild.innerHTML=v),y&&(n.bt||(n.bt=k(r),H(n.bt,he()),I(n.bt,'btn'),I(n.bt,'btn--secondary'),E(n.bt,f,'show'),R(n.bt,'mouseenter',(()=>{o.N||ye(0,t)}))),n.bt.firstElementChild.innerHTML=y),n.vt||(n.vt=k(c),I(n.vt,l),g&&H(n.vt,n.ut),b&&H(n.vt,n.Le),(g||b)&&H(n.it,n.vt),H(n.dt,n.vt)),n.gt&&!n.yt&&(n.yt=k(c),n.Le&&n.ut?(I(n.yt,l),H(n.yt,n.gt),H(n.yt,n.bt),H(n.dt,n.yt)):(H(n.vt,n.gt),H(n.vt,n.bt),I(n.vt,l+'--uneven'))),C){if(!n.ht){let e=k(c),t=k(c);n.ht=k(c),I(e,'footer'),I(t,'links'),I(n.ht,'link-group'),H(t,n.ht),H(e,t),H(n.he,e)}n.ht.innerHTML=C}me(0),o.T||(o.T=!0,ee(m.re.ue,_,n.he),t(e),H(n.Ce,n.rt),X(n.he),setTimeout((()=>V(n.rt,'cc--anim')),100)),Z(1),U(n.it,e,be,t)},we=e=>{if(!y(e))return null;if(e in m.o._)return e;let t=e.slice(0,2);return t in m.o._?t:null},Se=()=>m.o.l||m.o.i.language.default,xe=e=>{e&&(m.o.l=e)},Me=async e=>{const t=m.o;let o=we(e)?e:Se(),n=t._[o];return y(n)?n=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(n):C(n)&&(n=await n()),!!n&&(t.u=n,xe(o),!0)},De=()=>{let e=m.o.i.language.rtl,t=m.ne.Ce;e&&t&&(v(e)||(e=[e]),b(e,m.o.l)?V(t,'cc--rtl'):j(t,'cc--rtl'))},Te=()=>{const e=m.ne;if(e.Ce)return;e.Ce=k(c),e.Ce.id='cc-main',e.Ce.setAttribute('data-nosnippet',''),De();let t=m.o.i.root;t&&y(t)&&(t=document.querySelector(t)),(t||e.ze.body).appendChild(e.Ce)},ke=e=>te((()=>localStorage.removeItem(e))),Ee=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=g(e,t);return o>-1?[e[o]]:[]}},Ae=e=>{const{hostname:t,protocol:o}=location,{name:n,path:a,domain:s,sameSite:c,useLocalStorage:r}=m.t.cookie,i=e?(()=>{const e=m.o.S,t=e?new Date-e:0;return 864e5*B()-t})():864e5*B(),l=new Date;l.setTime(l.getTime()+i),m.o.p.expirationTime=l.getTime();const d=JSON.stringify(m.o.p);let f=n+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+c;b(t,'.')&&(f+='; Domain='+s),'https:'===o&&(f+='; Secure'),r?((e,t)=>{te((()=>localStorage.setItem(e,t)))})(n,d):document.cookie=f,m.o.p},Ne=(e,t,o)=>{if(0===e.length)return;const n=o||m.t.cookie.domain,a=t||m.t.cookie.path,s='www.'===n.slice(0,4),c=s&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),s&&r(t,c)},He=e=>{const t=e||m.t.cookie.name,o=m.t.cookie.useLocalStorage;return((e,t)=>{let o;return o=te((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},o})(o?(n=t,te((()=>localStorage.getItem(n)))||''):Ve(t,!0),o);var n},Ve=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},Ie=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];e?te((()=>{e.test(t)&&o.push(t)})):o.push(t)}return o},Le=(o,n=[])=>{((e,t)=>{const{O:o,R:n,B:a,N:s,Z:c,G:r,X:i}=m.o;let l=[];if(e){v(e)?l.push(...e):y(e)&&(l='all'===e?o:[e]);for(const e of o)c[e]=b(l,e)?w(i[e]):[]}else l=[...n,...r],s&&(l=(()=>{const e=m.ne.ae;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})());l=l.filter((e=>!b(o,e)||!b(t,e))),l.push(...a),J(l)})(o,n),(e=>{const t=m.o,{Z:o,B:n,Y:a,X:s,O:c}=t,r=c;t.te=F(a);for(const e of r){const c=s[e],r=w(c),i=o[e]&&o[e].length>0,l=b(n,e);if(0!==r.length){if(a[e]=[],l)a[e].push(...r);else if(i){const t=o[e];a[e].push(...t)}else a[e]=t.Z[e];a[e]=S(a[e])}}})(),(()=>{const o=m.o;o.L=m.t.mode===t&&o.D?G(o.G,o.R):G(o.R,o.p.categories);let n=o.L.length>0,a=!1;for(const e of o.O)o.ee[e]=G(o.Y[e],o.te[e]),o.ee[e].length>0&&(a=!0);const s=m.ne.ae;for(const e in s)s[e].checked=b(o.R,e);for(const e of o.O){const t=m.ne.se[e],n=o.Y[e];for(const e in t)t[e].checked=b(n,e)}o.C||(o.C=new Date),o.M||(o.M=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),o.p={categories:F(o.R),revision:m.t.revision,data:o.h,consentTimestamp:o.C.toISOString(),consentId:o.M,services:F(o.Y)},o.S&&(o.p.lastConsentTimestamp=o.S.toISOString());let c=!1;const r=n||a;(o.D||r)&&(o.D&&(o.D=!1,c=!0),o.S=o.S?new Date:o.C,o.p.lastConsentTimestamp=o.S.toISOString(),Ae(),m.t.autoClearCookies&&(c||r)&&(e=>{const t=m.o,o=Ie(),n=(e=>{const t=m.o;return(e?t.O:t.L).filter((e=>{const o=t.P[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.ee)for(const n of t.ee[e]){const a=t.X[e][n].cookies;if(!b(t.Y[e],n)&&a)for(const e of a){const t=Ee(o,e.name);Ne(t,e.path,e.domain)}}for(const a of n){const n=t.P[a].autoClear,s=n&&n.cookies||[],c=b(t.L,a),r=!b(t.R,a),i=c&&r;if(e?r:i){n.reloadPage&&i&&(t.j=!0);for(const e of s){const t=Ee(o,e.name);Ne(t,e.path,e.domain)}}}})(c),oe()),c&&(ee(m.re.ie),ee(m.re.le),m.t.mode===e)||(r&&ee(m.re.de),o.j&&(o.j=!1,location.reload()))})()},je=e=>{const t=m.o.D?[]:m.o.R;return b(t,e)},Fe=(e,t)=>{const{O:o,X:n}=m.o;if(!(e&&t&&y(t)&&b(o,t)&&0!==w(n[t]).length))return!1;((e,t)=>{const o=m.o,{X:n,Z:a,N:s}=o,c=m.ne.se[t]||{},r=m.ne.ae[t]||{},i=w(n[t]);if(a[t]=[],y(e)){if('all'===e){if(a[t].push(...i),s)for(let e in c)c[e].checked=!0,T(c[e])}else if(b(i,e)&&a[t].push(e),s)for(let t in c)c[t].checked=e===t,T(c[t])}else if(v(e))for(let o of i){const n=b(e,o);n&&a[t].push(o),s&&(c[o].checked=n,T(c[o]))}const l=0===a[t].length;o.R=l?o.R.filter((e=>e!==t)):S([...o.R,t]),s&&(r.checked=!l,T(r))})(e,t),Le()},Pe=(e,t)=>{const o=m.o.D?[]:m.o.Y[t]||[];return b(o,e)},Oe=e=>''!==Ve(e,!0),Re=(e,t,o)=>{let n=[];const a=e=>{if(y(e)){let t=Ve(e);''!==t&&n.push(t)}else n.push(...Ie(e))};if(v(e))for(let t of e)a(t);else a(e);Ne(n,t,o)},Be=e=>{const{ne:t,o:n}=m;if(!n.k){if(!n.T){if(!e)return;Ce($e,Te)}n.k=!0,n.U=x(),n.v&&K(!0),z(t.he,1),V(t.ye,o),E(t.he,i,'false'),setTimeout((()=>{$(m.ne.be)}),100),ee(m.re.fe,_)}},Ge=()=>{const{ne:e,o:t,re:n}=m;t.k&&(t.k=!1,t.v&&K(),$(e.ct,!0),j(e.ye,o),E(e.he,i,'true'),$(t.U),t.U=null,ee(n._e,_))},Je=()=>{const e=m.o;e.A||(e.N||be($e,Te),e.A=!0,e.k?e.$=x():e.U=x(),z(m.ne.we,2),V(m.ne.ye,n),E(m.ne.we,i,'false'),setTimeout((()=>{$(m.ne.ve)}),100),ee(m.re.fe,u))},Ue=()=>{const e=m.o;e.A&&(e.A=!1,(()=>{const e=Ye(),t=m.o.P,o=m.ne.ae,n=m.ne.se,a=e=>b(m.o.G,e);for(const s in o){const c=!!t[s].readOnly;o[s].checked=c||(e?je(s):a(s));for(const t in n[s])n[s][t].checked=c||(e?Pe(t,s):a(s))}})(),$(m.ne.Je,!0),j(m.ne.ye,n),E(m.ne.we,i,'true'),e.k?($(e.$),e.$=null):($(e.U),e.U=null),ee(m.re._e,u))};var $e={show:Be,hide:Ge,showPreferences:Je,hidePreferences:Ue,acceptCategory:Le};const ze=async(e,t)=>{if(!we(e))return!1;const o=m.o;return!(e===Se()&&!0!==t||!await Me(e)||(xe(e),o.T&&Ce($e,Te),o.N&&be($e,Te),De(),0))},qe=()=>{const{F:e,Y:t}=m.o,{accepted:o,rejected:n}=(()=>{const{D:e,R:t,O:o}=m.o;return{accepted:t,rejected:e?[]:o.filter((e=>!b(t,e)))}})();return F({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:P()})},Ke=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=k('script'),h(t))for(const e in t)E(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,H(document.head,o)}))},Qe=e=>{let t,o=e.value,n=e.mode,a=!1;const s=m.o;if('update'===n){s.h=t=We('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],a=!0)}else!e&&t||t===o||(t=o,a=!0)}else t=o,a=!0;return a&&(s.h=t,s.p.data=t,Ae(!0)),a},We=(e,t)=>{const o=He(t);return e?o[e]:o},Xe=e=>{const t=m.t,o=m.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},Ye=()=>!m.o.D,Ze=async e=>{const{o:o,t:n,re:a}=m,c=window;if(!c._ccRun){if(c._ccRun=!0,(e=>{const{ne:o,t:n,o:a}=m,c=n,r=a,{cookie:i}=c,l=m.ce,d=e.cookie,f=e.categories,_=w(f)||[],u=navigator,p=document;o.ze=p,o.ye=p.documentElement,i.domain=location.hostname,r.i=e,r.P=f,r.O=_,r._=e.language.translations,r.v=!!e.disablePageInteraction,l.ie=e.onFirstConsent,l.le=e.onConsent,l.de=e.onChange,l._e=e.onModalHide,l.fe=e.onModalShow,l.ue=e.onModalReady;const{mode:g,autoShow:v,lazyHtmlGeneration:y,autoClearCookies:C,revision:S,manageScriptTags:x,hideFromBots:M}=e;g===t&&(c.mode=g),'boolean'==typeof C&&(c.autoClearCookies=C),'boolean'==typeof x&&(c.manageScriptTags=x),'number'==typeof S&&S>=0&&(c.revision=S,r.V=!0),'boolean'==typeof v&&(c.autoShow=v),'boolean'==typeof y&&(c.lazyHtmlGeneration=y),!1===M&&(c.hideFromBots=!1),!0===c.hideFromBots&&u&&(r.J=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),h(d)&&(c.cookie={...i,...d}),c.autoClearCookies,r.V,c.manageScriptTags,(e=>{const{P:t,X:o,Y:n,Z:a,B:s}=m.o;for(let c of e){const e=t[c],r=e.services||{},i=h(r)&&w(r)||[];o[c]={},n[c]=[],a[c]=[],e.readOnly&&(s.push(c),n[c]=i),m.ne.se[c]={};for(let e of i){const t=r[e];t.Se=!1,o[c][e]=t}}})(_),(()=>{if(!m.t.manageScriptTags)return;const e=m.o,t=D(document,'script['+s+']');for(const o of t){let t=N(o,s),n=o.dataset.service||'',a=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),a=!0),'!'===n.charAt(0)&&(n=n.slice(1),a=!0),b(e.O,t)&&(e.oe.push({Me:o,xe:!1,ke:a,De:t,Te:n}),n)){const o=e.X[t];o[n]||(o[n]={Se:!1})}}})(),xe((()=>{const e=m.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},o=we(t[e]);if(o)return o}return Se()})())})(e),o.J)return;(()=>{const e=m.o,o=m.t,n=He(),{categories:a,services:s,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=n,f=v(a);e.p=n,e.M=c;const _=!!c&&y(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.V&&_&&d!==o.revision&&(e.I=!1),e.D=!(_&&e.I&&e.C&&e.S&&f),o.cookie.useLocalStorage&&!e.D&&(e.D=(new Date).getTime()>(n.expirationTime||0),e.D&&ke(o.cookie.name)),e.D,(()=>{const e=m.o;for(const o of e.O){const n=e.P[o];if(n.readOnly||n.enabled){e.G.push(o);const n=e.X[o]||{};for(let a in n)e.Z[o].push(a),e.i.mode===t&&e.Y[o].push(a)}}})(),e.D?o.mode===t&&(e.R=[...e.G]):(e.Y={...e.Y,...s},e.Z={...e.Y},J([...e.B,...a]))})();const i=Ye();if(!await Me())return!1;if(U(null,r=$e,be,Te),m.o.D&&Ce(r,Te),m.t.lazyHtmlGeneration||(be(r,Te),ye(0,Te)),n.autoShow&&!i&&Be(!0),i)return oe(),ee(a.le);n.mode===t&&oe(o.G)}var r},et=e=>{const{Ce:t,ye:s}=m.ne,{name:c,path:r,domain:i,useLocalStorage:l}=m.t.cookie;e&&(l?ke(c):Re(c,r,i));for(const{pe:e,me:t,ge:o}of m.o.m)e.removeEventListener(t,o);t&&t.remove(),s&&s.classList.remove(a,n,o);const d=new p;for(const e in m)m[e]=d[e];window._ccRun=!1};export{Le as acceptCategory,Fe as acceptService,je as acceptedCategory,Pe as acceptedService,Re as eraseCookies,Xe as getConfig,We as getCookie,qe as getUserPreferences,Ge as hide,Ue as hidePreferences,Ke as loadScript,et as reset,Ze as run,Qe as setCookieData,ze as setLanguage,Be as show,Je as showPreferences,Ye as validConsent,Oe as validCookie};
