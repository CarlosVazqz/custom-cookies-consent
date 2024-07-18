/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const e='opt-in',t='opt-out',o='show--consent',n='show--preferences',s='disable--interaction',a='data-category',c='div',r='button',i='aria-hidden',l='btn-group',d='click',f='data-role',_='consentModal',u='preferencesModal';class p{constructor(){this.t={mode:e,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],v:!1,h:null,C:null,S:null,M:'',D:!0,T:!1,k:!1,A:!1,N:!1,H:[],V:!1,I:!0,L:[],j:!1,F:'',P:!1,O:[],R:[],B:[],G:[],J:!1,U:!1,$:!1,q:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},oe:[]},this.ne={se:{},ae:{}},this.ce={},this.re={ie:'cc:onFirstConsent',le:'cc:onConsent',de:'cc:onChange',fe:'cc:onModalShow',_e:'cc:onModalHide',ue:'cc:onModalReady'}}}const m=new p,g=(e,t)=>e.indexOf(t),b=(e,t)=>-1!==g(e,t),v=e=>Array.isArray(e),y=e=>'string'==typeof e,h=e=>!!e&&'object'==typeof e&&!v(e),C=e=>'function'==typeof e,w=e=>Object.keys(e),S=e=>Array.from(new Set(e)),x=()=>document.activeElement,M=e=>e.preventDefault(),D=(e,t)=>e.querySelectorAll(t),T=e=>e.dispatchEvent(new Event('change')),k=e=>{const t=document.createElement(e);return e===r&&(t.type=e),t},E=(e,t,o)=>e.setAttribute(t,o),A=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},N=(e,t,o)=>e.getAttribute(o?'data-'+t:t),H=(e,t)=>e.appendChild(t),V=(e,t)=>e.classList.add(t),I=(e,t)=>V(e,'cm__'+t),L=(e,t)=>V(e,'pm__'+t),j=(e,t)=>e.classList.remove(t),F=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=F(n)}return t},P=()=>{const e={},{O:t,X:o,Y:n}=m.o;for(const s of t)e[s]=G(n[s],w(o[s]));return e},O=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),R=(e,t,o,n)=>{e.addEventListener(t,o),n&&m.o.m.push({pe:e,me:t,ge:o})},B=()=>{const e=m.t.cookie.expiresAfterDays;return C(e)?e(m.o.F):e},G=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!b(n,e))).concat(n.filter((e=>!b(o,e))))},J=e=>{m.o.R=S(e),m.o.F=(()=>{let e='custom';const{R:t,O:o,B:n}=m.o,s=t.length;return s===o.length?e='all':s===n.length&&(e='necessary'),e})()},U=(e,t,o,n)=>{const s='accept-',{show:a,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,f=e||document,_=e=>D(f,`[data-cc="${e}"]`),u=(e,t)=>{M(e),l(t),i(),r()},p=_('show-preferencesModal'),g=_('show-consentModal'),b=_(s+'all'),v=_(s+'necessary'),y=_(s+'custom'),h=m.t.lazyHtmlGeneration;for(const e of p)E(e,'aria-haspopup','dialog'),R(e,d,(e=>{M(e),c()})),h&&(R(e,'mouseenter',(e=>{M(e),m.o.N||o(t,n)}),!0),R(e,'focus',(()=>{m.o.N||o(t,n)})));for(let e of g)E(e,'aria-haspopup','dialog'),R(e,d,(e=>{M(e),a(!0)}),!0);for(let e of b)R(e,d,(e=>{u(e,'all')}),!0);for(let e of y)R(e,d,(e=>{u(e)}),!0);for(let e of v)R(e,d,(e=>{u(e,[])}),!0)},$=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},z=(e,t)=>{const o=n=>{n.target.removeEventListener('transitionend',o),'opacity'===n.propertyName&&'1'===getComputedStyle(e).opacity&&$((e=>1===e?m.ne.be:m.ne.ve)(t))};R(e,'transitionend',o)};let q;const K=e=>{clearTimeout(q),e?V(m.ne.ye,s):q=setTimeout((()=>{j(m.ne.ye,s)}),500)},Q=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],W=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${Q[e]}"/></svg>`,X=e=>{const t=m.ne,o=m.o;(e=>{const n=e===t.he,s=o.i.disablePageInteraction?t.ye:n?t.Ce:t.ye;R(s,'keydown',(t=>{if('Tab'!==t.key||!(n?o.k&&!o.A:o.A))return;const s=x(),a=n?o.q:o.K;0!==a.length&&(t.shiftKey?s!==a[0]&&e.contains(s)||(M(t),$(a[1])):s!==a[1]&&e.contains(s)||(M(t),$(a[0])))}),!0)})(e)},Y=['[href]',r,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),Z=e=>{const{o:t,ne:o}=m,n=(e,t)=>{const o=D(e,Y);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.T&&n(o.he,t.q),2===e&&t.N&&n(o.we,t.K)},ee=(e,t,o)=>{const{de:n,le:s,ie:a,_e:c,ue:r,fe:i}=m.ce,l=m.re;if(t){const n={modalName:t};return e===l.fe?C(i)&&i(n):e===l._e?C(c)&&c(n):(n.modal=o,C(r)&&r(n)),O(e,n)}const d={cookie:m.o.p};e===l.ie?C(a)&&a(F(d)):e===l.le?C(s)&&s(F(d)):(d.changedCategories=m.o.L,d.changedServices=m.o.ee,C(n)&&n(F(d))),O(e,F(d))},te=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},oe=e=>{const{Y:t,ee:o,O:n,X:s,oe:c,p:r,L:i}=m.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=s[e][o];if(!n)continue;const{onAccept:a,onReject:c}=n;!n.Se&&b(t[e],o)?(n.Se=!0,C(a)&&a()):n.Se&&!b(t[e],o)&&(n.Se=!1,C(c)&&c())}}if(!m.t.manageScriptTags)return;const l=c,d=e||r.categories||[],f=(e,n)=>{if(n>=e.length)return;const s=c[n];if(s.xe)return f(e,n+1);const r=s.Me,l=s.De,_=s.Te,u=b(d,l),p=!!_&&b(t[l],_);if(!_&&!s.ke&&u||!_&&s.ke&&!u&&b(i,l)||_&&!s.ke&&p||_&&s.ke&&!p&&b(o[l]||[],_)){s.xe=!0;const t=N(r,'type',!0);A(r,'type',!!t),A(r,a);let o=N(r,'src',!0);o&&A(r,'src',!0);const c=k('script');c.textContent=r.innerHTML;for(const{nodeName:e}of r.attributes)E(c,e,r[e]||N(r,e));t&&(c.type=t),o?c.src=o:o=r.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(c.onload=c.onerror=()=>{f(e,++n)}),r.replaceWith(c),i)return}f(e,++n)};f(l,0)},ne='bottom',se='left',ae='center',ce='right',re='inline',ie='wide',le='pm--',de=['middle','top',ne],fe=[se,ae,ce],_e={box:{Ee:[ie,re],Ae:de,Ne:fe,He:ne,Ve:ce},cloud:{Ee:[re],Ae:de,Ne:fe,He:ne,Ve:ae},bar:{Ee:[re],Ae:de.slice(1),Ne:[],He:ne,Ve:''}},ue={box:{Ee:[],Ae:[],Ne:[],He:'',Ve:''},bar:{Ee:[ie],Ae:[],Ne:[se,ce],He:'',Ve:se}},pe=e=>{const t=m.o.i.guiOptions,o=t&&t.consentModal,n=t&&t.preferencesModal;0===e&&me(m.ne.he,_e,o,'cm--','box','cm'),1===e&&me(m.ne.we,ue,n,le,'box','pm')},me=(e,t,o,n,s,a)=>{e.className=a;const c=o&&o.layout,r=o&&o.position,i=o&&o.flipButtons,l=!o||!1!==o.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],u=f in t?f:s,p=t[u],g=b(p.Ee,_)&&_,v=r&&r.split(' ')||[],y=v[0],h=n===le?v[0]:v[1],C=b(p.Ae,y)?y:p.He,w=b(p.Ne,h)?h:p.Ve,S=t=>{t&&V(e,n+t)};S(u),S(g),S(C),S(w),i&&S('flip');const x=a+'__btn--secondary';if('cm'===a){const{Ie:e,Le:t}=m.ne;e&&(l?j(e,x):V(e,x)),t&&(l?j(t,x):V(t,x))}else{const{je:e}=m.ne;e&&(l?j(e,x):V(e,x))}},ge=(e,t)=>{const o=m.o,n=m.ne,{hide:s,hidePreferences:a,acceptCategory:_}=e,p=e=>{_(e),a(),s()},g=o.u&&o.u.preferencesModal;if(!g)return;const b=g.title,v=g.closeIconLabel,C=g.acceptAllBtn,S=g.acceptNecessaryBtn,x=g.savePreferencesBtn,M=g.sections||[],D=C||S||x;if(n.Fe)n.Pe=k(c),L(n.Pe,'body');else{n.Fe=k(c),V(n.Fe,'pm-wrapper');const e=k('div');V(e,'pm-overlay'),H(n.Fe,e),R(e,d,a),n.we=k(c),V(n.we,'pm'),E(n.we,'role','dialog'),E(n.we,i,!0),E(n.we,'aria-modal',!0),E(n.we,'aria-labelledby','pm__title'),R(n.ye,'keydown',(e=>{27===e.keyCode&&a()}),!0),n.Oe=k(c),L(n.Oe,'header'),n.Re=k('h2'),L(n.Re,'title'),n.Re.id='pm__title',n.Be=k(r),L(n.Be,'close-btn'),E(n.Be,'aria-label',g.closeIconLabel||''),R(n.Be,d,a),n.Ge=k('span'),n.Ge.innerHTML=W(),H(n.Be,n.Ge),n.Je=k(c),L(n.Je,'body'),n.Ue=k(c),L(n.Ue,'footer');var T=k(c);V(T,'btns');var A=k(c),N=k(c);L(A,l),L(N,l),H(n.Ue,A),H(n.Ue,N),H(n.Oe,n.Re),H(n.Oe,n.Be),n.ve=k(c),E(n.ve,'tabIndex',-1),H(n.we,n.ve),H(n.we,n.Oe),H(n.we,n.Je),D&&H(n.we,n.Ue),H(n.Fe,n.we)}let I;b&&(n.Re.innerHTML=b,v&&E(n.Be,'aria-label',v)),M.forEach(((e,t)=>{const s=e.title,a=e.description,l=e.linkedCategory,f=l&&o.P[l],_=e.cookieTable,u=_&&_.body,p=_&&_.caption,m=u&&u.length>0,b=!!f,v=b&&o.X[l],C=h(v)&&w(v)||[],S=b&&(!!a||!!m||w(v).length>0);var x=k(c);if(L(x,'section'),S||a){var M=k(c);L(M,'section-desc-wrapper')}let D=C.length;if(S&&D>0){const e=k(c);L(e,'section-services');for(const t of C){const o=v[t],n=o&&o.label||t,s=k(c),a=k(c),r=k(c),i=k(c);L(s,'service'),L(i,'service-title'),L(a,'service-header'),L(r,'service-icon');const d=be(n,t,f,!0,l);i.innerHTML=n,H(a,r),H(a,i),H(s,a),H(s,d),H(e,s)}H(M,e)}if(s){var T=k(c),A=k(b?r:c);if(L(T,'section-title-wrapper'),L(A,'section-title'),A.innerHTML=s,H(T,A),b){const e=k('span');e.innerHTML=W(2,3.5),L(e,'section-arrow'),H(T,e),x.className+='--toggle';const t=be(s,l,f);let o=g.serviceCounterLabel;if(D>0&&y(o)){let e=k('span');L(e,'badge'),L(e,'service-counter'),E(e,i,!0),E(e,'data-servicecounter',D),o&&(o=o.split('|'),o=o.length>1&&D>1?o[1]:o[0],E(e,'data-counterlabel',o)),e.innerHTML=D+(o?' '+o:''),H(A,e)}if(S){L(x,'section--expandable');var N=l+'-desc';E(A,'aria-expanded',!1),E(A,'aria-controls',N)}H(T,t)}else E(A,'role','heading'),E(A,'aria-level','3');H(x,T)}if(a){var F=k('p');L(F,'section-desc'),F.innerHTML=a,H(M,F)}if(S&&(E(M,i,'true'),M.id=N,((e,t,o)=>{R(A,d,(()=>{t.classList.contains('is-expanded')?(j(t,'is-expanded'),E(o,'aria-expanded','false'),E(e,i,'true')):(V(t,'is-expanded'),E(o,'aria-expanded','true'),E(e,i,'false'))}))})(M,x,A),m)){const e=k('table'),o=k('thead'),s=k('tbody');if(p){const t=k('caption');L(t,'table-caption'),t.innerHTML=p,e.appendChild(t)}L(e,'section-table'),L(o,'table-head'),L(s,'table-body');const a=_.headers,r=w(a),i=n.$e.createDocumentFragment(),l=k('tr');for(const e of r){const o=a[e],n=k('th');n.id='cc__row-'+o+t,E(n,'scope','col'),L(n,'table-th'),n.innerHTML=o,H(i,n)}H(l,i),H(o,l);const d=n.$e.createDocumentFragment();for(const e of u){const o=k('tr');L(o,'table-tr');for(const n of r){const s=a[n],r=e[n],i=k('td'),l=k(c);L(i,'table-td'),E(i,'data-column',s),E(i,'headers','cc__row-'+s+t),l.insertAdjacentHTML('beforeend',r),H(i,l),H(o,i)}H(d,o)}H(s,d),H(e,o),H(e,s),H(M,e)}(S||a)&&H(x,M);const P=n.Pe||n.Je;b?(I||(I=k(c),L(I,'section-toggles')),I.appendChild(x)):I=null,H(P,I||x)})),C&&(n.ze||(n.ze=k(r),L(n.ze,'btn'),E(n.ze,f,'all'),H(A,n.ze),R(n.ze,d,(()=>p('all')))),n.ze.innerHTML=C),S&&(n.je||(n.je=k(r),L(n.je,'btn'),E(n.je,f,'necessary'),H(A,n.je),R(n.je,d,(()=>p([])))),n.je.innerHTML=S),x&&(n.qe||(n.qe=k(r),L(n.qe,'btn'),L(n.qe,'btn--secondary'),E(n.qe,f,'save'),H(N,n.qe),R(n.qe,d,(()=>p()))),n.qe.innerHTML=x),n.Pe&&(n.we.replaceChild(n.Pe,n.Je),n.Je=n.Pe),pe(1),o.N||(o.N=!0,ee(m.re.ue,u,n.we),t(e),H(n.Ce,n.Fe),X(n.we),setTimeout((()=>V(n.Fe,'cc--anim')),100)),Z(2)};function be(e,t,o,n,s){const c=m.o,r=m.ne,l=k('label'),f=k('input'),_=k('span'),u=k('span'),p=k('span'),g=k('span'),v=k('span');if(g.innerHTML=W(1,3),v.innerHTML=W(0,3),f.type='checkbox',V(l,'section__toggle-wrapper'),V(f,'section__toggle'),V(g,'toggle__icon-on'),V(v,'toggle__icon-off'),V(_,'toggle__icon'),V(u,'toggle__icon-circle'),V(p,'toggle__label'),E(_,i,'true'),n?(V(l,'toggle-service'),E(f,a,s),r.ae[s][t]=f):r.se[t]=f,n?(e=>{R(f,'change',(()=>{const t=r.ae[e],o=r.se[e];c.Z[e]=[];for(let o in t){const n=t[o];n.checked&&c.Z[e].push(n.value)}o.checked=c.Z[e].length>0}))})(s):(e=>{R(f,d,(()=>{const t=r.ae[e],o=f.checked;c.Z[e]=[];for(let n in t)t[n].checked=o,o&&c.Z[e].push(n)}))})(t),f.value=t,p.textContent=e.replace(/<.*>.*<\/.*>/gm,''),H(u,v),H(u,g),H(_,u),c.D)(o.readOnly||o.enabled)&&(f.checked=!0);else if(n){const e=c.Y[s];f.checked=o.readOnly||b(e,t)}else b(c.R,t)&&(f.checked=!0);return o.readOnly&&(f.disabled=!0),H(l,f),H(l,_),H(l,p),l}const ve=()=>{const e=k('span');return m.ne.Ke||(m.ne.Ke=e),e},ye=(e,t)=>{const o=m.o,n=m.ne,{hide:s,showPreferences:a,acceptCategory:u}=e,p=o.u&&o.u.consentModal;if(!p)return;const g=p.acceptAllBtn,b=p.acceptNecessaryBtn,v=p.showPreferencesBtn,y=p.showAdditionalInfoBtn,h=p.closeIconLabel,C=p.footer,w=p.label,S=p.title,x=e=>{s(),u(e)};if(!n.Qe){n.Qe=k(c),n.he=k(c),n.We=k(c),n.Xe=k(c),n.Ye=k(c),V(n.Qe,'cm-wrapper'),V(n.he,'cm'),I(n.We,'body'),I(n.Xe,'texts'),I(n.Ye,'btns'),E(n.he,'role','dialog'),E(n.he,'aria-modal','true'),E(n.he,i,'false'),E(n.he,'aria-describedby','cm__desc'),w?E(n.he,'aria-label',w):S&&E(n.he,'aria-labelledby','cm__title');const e='box',t=o.i.guiOptions,s=t&&t.consentModal,a=(s&&s.layout||e).split(' ')[0]===e;S&&h&&a&&(n.Le||(n.Le=k(r),n.Le.innerHTML=W(),I(n.Le,'btn'),I(n.Le,'btn--close'),R(n.Le,d,(()=>{x([])})),H(n.We,n.Le)),E(n.Le,'aria-label',h)),H(n.We,n.Xe),(g||b||v||y)&&H(n.We,n.Ye),n.be=k(c),E(n.be,'tabIndex',-1),H(n.he,n.be),H(n.he,n.We),H(n.Qe,n.he)}S&&(n.Ze||(n.Ze=k('h2'),n.Ze.className=n.Ze.id='cm__title',H(n.Xe,n.Ze)),n.Ze.innerHTML=S);let M=p.description;if(M&&(o.V&&(M=M.replace('{{revisionMessage}}',o.I?'':p.revisionMessage||'')),n.et||(n.et=k('p'),n.et.className=n.et.id='cm__desc',H(n.Xe,n.et)),n.et.innerHTML=M),g&&(n.tt||(n.tt=k(r),H(n.tt,ve()),I(n.tt,'btn'),E(n.tt,f,'all'),R(n.tt,d,(()=>{x('all')}))),n.tt.firstElementChild.innerHTML=g),b&&(n.Ie||(n.Ie=k(r),H(n.Ie,ve()),I(n.Ie,'btn'),E(n.Ie,f,'necessary'),R(n.Ie,d,(()=>{x([])}))),n.Ie.firstElementChild.innerHTML=b),v&&(n.ot||(n.ot=k(r),H(n.ot,ve()),I(n.ot,'btn'),I(n.ot,'btn--secondary'),E(n.ot,f,'show'),R(n.ot,'mouseenter',(()=>{o.N||ge(e,t)})),R(n.ot,d,a)),n.ot.firstElementChild.innerHTML=v),y&&(n.nt||(n.nt=k(r),H(n.nt,ve()),I(n.nt,'btn'),I(n.nt,'btn--secondary'),E(n.nt,f,'show'),R(n.nt,'mouseenter',(()=>{o.N||ge(e,t)})),R(n.nt,d,a)),n.nt.firstElementChild.innerHTML=y),n.st||(n.st=k(c),I(n.st,l),g&&H(n.st,n.tt),b&&H(n.st,n.Ie),(g||b)&&H(n.We,n.st),H(n.Ye,n.st)),n.ot&&!n.ct&&(n.ct=k(c),n.Ie&&n.tt?(I(n.ct,l),H(n.ct,n.ot),H(n.ct,n.nt),H(n.Ye,n.ct)):(H(n.st,n.ot),H(n.st,n.nt),I(n.st,l+'--uneven'))),C){if(!n.rt){let e=k(c),t=k(c);n.rt=k(c),I(e,'footer'),I(t,'links'),I(n.rt,'link-group'),H(t,n.rt),H(e,t),H(n.he,e)}n.rt.innerHTML=C}pe(0),o.T||(o.T=!0,ee(m.re.ue,_,n.he),t(e),H(n.Ce,n.Qe),X(n.he),setTimeout((()=>V(n.Qe,'cc--anim')),100)),Z(1),U(n.We,e,ge,t)},he=e=>{if(!y(e))return null;if(e in m.o._)return e;let t=e.slice(0,2);return t in m.o._?t:null},Ce=()=>m.o.l||m.o.i.language.default,we=e=>{e&&(m.o.l=e)},Se=async e=>{const t=m.o;let o=he(e)?e:Ce(),n=t._[o];return y(n)?n=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(n):C(n)&&(n=await n()),!!n&&(t.u=n,we(o),!0)},xe=()=>{let e=m.o.i.language.rtl,t=m.ne.Ce;e&&t&&(v(e)||(e=[e]),b(e,m.o.l)?V(t,'cc--rtl'):j(t,'cc--rtl'))},Me=()=>{const e=m.ne;if(e.Ce)return;e.Ce=k(c),e.Ce.id='cc-main',e.Ce.setAttribute('data-nosnippet',''),xe();let t=m.o.i.root;t&&y(t)&&(t=document.querySelector(t)),(t||e.$e.body).appendChild(e.Ce)},De=e=>te((()=>localStorage.removeItem(e))),Te=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=g(e,t);return o>-1?[e[o]]:[]}},ke=e=>{const{hostname:t,protocol:o}=location,{name:n,path:s,domain:a,sameSite:c,useLocalStorage:r}=m.t.cookie,i=e?(()=>{const e=m.o.S,t=e?new Date-e:0;return 864e5*B()-t})():864e5*B(),l=new Date;l.setTime(l.getTime()+i),m.o.p.expirationTime=l.getTime();const d=JSON.stringify(m.o.p);let f=n+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+s+'; SameSite='+c;b(t,'.')&&(f+='; Domain='+a),'https:'===o&&(f+='; Secure'),r?((e,t)=>{te((()=>localStorage.setItem(e,t)))})(n,d):document.cookie=f,m.o.p},Ee=(e,t,o)=>{if(0===e.length)return;const n=o||m.t.cookie.domain,s=t||m.t.cookie.path,a='www.'===n.slice(0,4),c=a&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+s+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),a&&r(t,c)},Ae=e=>{const t=e||m.t.cookie.name,o=m.t.cookie.useLocalStorage;return((e,t)=>{let o;return o=te((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},o})(o?(n=t,te((()=>localStorage.getItem(n)))||''):Ne(t,!0),o);var n},Ne=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},He=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];e?te((()=>{e.test(t)&&o.push(t)})):o.push(t)}return o},Ve=(o,n=[])=>{((e,t)=>{const{O:o,R:n,B:s,N:a,Z:c,G:r,X:i}=m.o;let l=[];if(e){v(e)?l.push(...e):y(e)&&(l='all'===e?o:[e]);for(const e of o)c[e]=b(l,e)?w(i[e]):[]}else l=[...n,...r],a&&(l=(()=>{const e=m.ne.se;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})());l=l.filter((e=>!b(o,e)||!b(t,e))),l.push(...s),J(l)})(o,n),(e=>{const t=m.o,{Z:o,B:n,Y:s,X:a,O:c}=t,r=c;t.te=F(s);for(const e of r){const c=a[e],r=w(c),i=o[e]&&o[e].length>0,l=b(n,e);if(0!==r.length){if(s[e]=[],l)s[e].push(...r);else if(i){const t=o[e];s[e].push(...t)}else s[e]=t.Z[e];s[e]=S(s[e])}}})(),(()=>{const o=m.o;o.L=m.t.mode===t&&o.D?G(o.G,o.R):G(o.R,o.p.categories);let n=o.L.length>0,s=!1;for(const e of o.O)o.ee[e]=G(o.Y[e],o.te[e]),o.ee[e].length>0&&(s=!0);const a=m.ne.se;for(const e in a)a[e].checked=b(o.R,e);for(const e of o.O){const t=m.ne.ae[e],n=o.Y[e];for(const e in t)t[e].checked=b(n,e)}o.C||(o.C=new Date),o.M||(o.M=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),o.p={categories:F(o.R),revision:m.t.revision,data:o.h,consentTimestamp:o.C.toISOString(),consentId:o.M,services:F(o.Y)},o.S&&(o.p.lastConsentTimestamp=o.S.toISOString());let c=!1;const r=n||s;(o.D||r)&&(o.D&&(o.D=!1,c=!0),o.S=o.S?new Date:o.C,o.p.lastConsentTimestamp=o.S.toISOString(),ke(),m.t.autoClearCookies&&(c||r)&&(e=>{const t=m.o,o=He(),n=(e=>{const t=m.o;return(e?t.O:t.L).filter((e=>{const o=t.P[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.ee)for(const n of t.ee[e]){const s=t.X[e][n].cookies;if(!b(t.Y[e],n)&&s)for(const e of s){const t=Te(o,e.name);Ee(t,e.path,e.domain)}}for(const s of n){const n=t.P[s].autoClear,a=n&&n.cookies||[],c=b(t.L,s),r=!b(t.R,s),i=c&&r;if(e?r:i){n.reloadPage&&i&&(t.j=!0);for(const e of a){const t=Te(o,e.name);Ee(t,e.path,e.domain)}}}})(c),oe()),c&&(ee(m.re.ie),ee(m.re.le),m.t.mode===e)||(r&&ee(m.re.de),o.j&&(o.j=!1,location.reload()))})()},Ie=e=>{const t=m.o.D?[]:m.o.R;return b(t,e)},Le=(e,t)=>{const{O:o,X:n}=m.o;if(!(e&&t&&y(t)&&b(o,t)&&0!==w(n[t]).length))return!1;((e,t)=>{const o=m.o,{X:n,Z:s,N:a}=o,c=m.ne.ae[t]||{},r=m.ne.se[t]||{},i=w(n[t]);if(s[t]=[],y(e)){if('all'===e){if(s[t].push(...i),a)for(let e in c)c[e].checked=!0,T(c[e])}else if(b(i,e)&&s[t].push(e),a)for(let t in c)c[t].checked=e===t,T(c[t])}else if(v(e))for(let o of i){const n=b(e,o);n&&s[t].push(o),a&&(c[o].checked=n,T(c[o]))}const l=0===s[t].length;o.R=l?o.R.filter((e=>e!==t)):S([...o.R,t]),a&&(r.checked=!l,T(r))})(e,t),Ve()},je=(e,t)=>{const o=m.o.D?[]:m.o.Y[t]||[];return b(o,e)},Fe=e=>''!==Ne(e,!0),Pe=(e,t,o)=>{let n=[];const s=e=>{if(y(e)){let t=Ne(e);''!==t&&n.push(t)}else n.push(...He(e))};if(v(e))for(let t of e)s(t);else s(e);Ee(n,t,o)},Oe=e=>{const{ne:t,o:n}=m;if(!n.k){if(!n.T){if(!e)return;ye(Je,Me)}n.k=!0,n.U=x(),n.v&&K(!0),z(t.he,1),V(t.ye,o),E(t.he,i,'false'),setTimeout((()=>{$(m.ne.be)}),100),ee(m.re.fe,_)}},Re=()=>{const{ne:e,o:t,re:n}=m;t.k&&(t.k=!1,t.v&&K(),$(e.Ke,!0),j(e.ye,o),E(e.he,i,'true'),$(t.U),t.U=null,ee(n._e,_))},Be=()=>{const e=m.o;e.A||(e.N||ge(Je,Me),e.A=!0,e.k?e.$=x():e.U=x(),z(m.ne.we,2),V(m.ne.ye,n),E(m.ne.we,i,'false'),setTimeout((()=>{$(m.ne.ve)}),100),ee(m.re.fe,u))},Ge=()=>{const e=m.o;e.A&&(e.A=!1,(()=>{const e=We(),t=m.o.P,o=m.ne.se,n=m.ne.ae,s=e=>b(m.o.G,e);for(const a in o){const c=!!t[a].readOnly;o[a].checked=c||(e?Ie(a):s(a));for(const t in n[a])n[a][t].checked=c||(e?je(t,a):s(a))}})(),$(m.ne.Ge,!0),j(m.ne.ye,n),E(m.ne.we,i,'true'),e.k?($(e.$),e.$=null):($(e.U),e.U=null),ee(m.re._e,u))};var Je={show:Oe,hide:Re,showPreferences:Be,hidePreferences:Ge,acceptCategory:Ve};const Ue=async(e,t)=>{if(!he(e))return!1;const o=m.o;return!(e===Ce()&&!0!==t||!await Se(e)||(we(e),o.T&&ye(Je,Me),o.N&&ge(Je,Me),xe(),0))},$e=()=>{const{F:e,Y:t}=m.o,{accepted:o,rejected:n}=(()=>{const{D:e,R:t,O:o}=m.o;return{accepted:t,rejected:e?[]:o.filter((e=>!b(t,e)))}})();return F({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:P()})},ze=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=k('script'),h(t))for(const e in t)E(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,H(document.head,o)}))},qe=e=>{let t,o=e.value,n=e.mode,s=!1;const a=m.o;if('update'===n){a.h=t=Ke('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],s=!0)}else!e&&t||t===o||(t=o,s=!0)}else t=o,s=!0;return s&&(a.h=t,a.p.data=t,ke(!0)),s},Ke=(e,t)=>{const o=Ae(t);return e?o[e]:o},Qe=e=>{const t=m.t,o=m.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},We=()=>!m.o.D,Xe=async e=>{const{o:o,t:n,re:s}=m,c=window;if(!c._ccRun){if(c._ccRun=!0,(e=>{const{ne:o,t:n,o:s}=m,c=n,r=s,{cookie:i}=c,l=m.ce,d=e.cookie,f=e.categories,_=w(f)||[],u=navigator,p=document;o.$e=p,o.ye=p.documentElement,i.domain=location.hostname,r.i=e,r.P=f,r.O=_,r._=e.language.translations,r.v=!!e.disablePageInteraction,l.ie=e.onFirstConsent,l.le=e.onConsent,l.de=e.onChange,l._e=e.onModalHide,l.fe=e.onModalShow,l.ue=e.onModalReady;const{mode:g,autoShow:v,lazyHtmlGeneration:y,autoClearCookies:C,revision:S,manageScriptTags:x,hideFromBots:M}=e;g===t&&(c.mode=g),'boolean'==typeof C&&(c.autoClearCookies=C),'boolean'==typeof x&&(c.manageScriptTags=x),'number'==typeof S&&S>=0&&(c.revision=S,r.V=!0),'boolean'==typeof v&&(c.autoShow=v),'boolean'==typeof y&&(c.lazyHtmlGeneration=y),!1===M&&(c.hideFromBots=!1),!0===c.hideFromBots&&u&&(r.J=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),h(d)&&(c.cookie={...i,...d}),c.autoClearCookies,r.V,c.manageScriptTags,(e=>{const{P:t,X:o,Y:n,Z:s,B:a}=m.o;for(let c of e){const e=t[c],r=e.services||{},i=h(r)&&w(r)||[];o[c]={},n[c]=[],s[c]=[],e.readOnly&&(a.push(c),n[c]=i),m.ne.ae[c]={};for(let e of i){const t=r[e];t.Se=!1,o[c][e]=t}}})(_),(()=>{if(!m.t.manageScriptTags)return;const e=m.o,t=D(document,'script['+a+']');for(const o of t){let t=N(o,a),n=o.dataset.service||'',s=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),s=!0),'!'===n.charAt(0)&&(n=n.slice(1),s=!0),b(e.O,t)&&(e.oe.push({Me:o,xe:!1,ke:s,De:t,Te:n}),n)){const o=e.X[t];o[n]||(o[n]={Se:!1})}}})(),we((()=>{const e=m.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},o=he(t[e]);if(o)return o}return Ce()})())})(e),o.J)return;(()=>{const e=m.o,o=m.t,n=Ae(),{categories:s,services:a,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=n,f=v(s);e.p=n,e.M=c;const _=!!c&&y(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.V&&_&&d!==o.revision&&(e.I=!1),e.D=!(_&&e.I&&e.C&&e.S&&f),o.cookie.useLocalStorage&&!e.D&&(e.D=(new Date).getTime()>(n.expirationTime||0),e.D&&De(o.cookie.name)),e.D,(()=>{const e=m.o;for(const o of e.O){const n=e.P[o];if(n.readOnly||n.enabled){e.G.push(o);const n=e.X[o]||{};for(let s in n)e.Z[o].push(s),e.i.mode===t&&e.Y[o].push(s)}}})(),e.D?o.mode===t&&(e.R=[...e.G]):(e.Y={...e.Y,...a},e.Z={...e.Y},J([...e.B,...s]))})();const i=We();if(!await Se())return!1;if(U(null,r=Je,ge,Me),m.o.D&&ye(r,Me),m.t.lazyHtmlGeneration||ge(r,Me),n.autoShow&&!i&&Oe(!0),i)return oe(),ee(s.le);n.mode===t&&oe(o.G)}var r},Ye=e=>{const{Ce:t,ye:a}=m.ne,{name:c,path:r,domain:i,useLocalStorage:l}=m.t.cookie;e&&(l?De(c):Pe(c,r,i));for(const{pe:e,me:t,ge:o}of m.o.m)e.removeEventListener(t,o);t&&t.remove(),a&&a.classList.remove(s,n,o);const d=new p;for(const e in m)m[e]=d[e];window._ccRun=!1};export{Ve as acceptCategory,Le as acceptService,Ie as acceptedCategory,je as acceptedService,Pe as eraseCookies,Qe as getConfig,Ke as getCookie,$e as getUserPreferences,Re as hide,Ge as hidePreferences,ze as loadScript,Ye as reset,Xe as run,qe as setCookieData,Ue as setLanguage,Oe as show,Be as showPreferences,We as validConsent,Fe as validCookie};
