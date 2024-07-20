/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t='opt-in',o='opt-out',n='show--consent',a='show--preferences',s='disable--interaction',c='data-category',r='div',i='button',l='aria-hidden',d='btn-group',f='click',_='data-role',u='consentModal',p='preferencesModal';class m{constructor(){this.t={mode:t,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],v:!1,h:null,C:null,S:null,M:'',T:!0,D:!1,k:!1,A:!1,N:!1,H:[],I:!1,V:!0,j:[],L:!1,F:'',P:!1,O:[],R:[],B:[],G:[],J:!1,U:!1,$:!1,q:[],K:[],W:[],X:{},Y:{},Z:{},ee:{},te:{},oe:[]},this.ne={ae:{},se:{}},this.ce={},this.re={ie:'cc:onFirstConsent',le:'cc:onConsent',de:'cc:onChange',fe:'cc:onModalShow',_e:'cc:onModalHide',ue:'cc:onModalReady'}}}const g=new m,b=(e,t)=>e.indexOf(t),v=(e,t)=>-1!==b(e,t),y=e=>Array.isArray(e),h=e=>'string'==typeof e,C=e=>!!e&&'object'==typeof e&&!y(e),w=e=>'function'==typeof e,S=e=>Object.keys(e),x=e=>Array.from(new Set(e)),M=()=>document.activeElement,T=e=>e.preventDefault(),D=(e,t)=>e.querySelectorAll(t),k=e=>e.dispatchEvent(new Event('change')),A=e=>{const t=document.createElement(e);return e===i&&(t.type=e),t},E=(e,t,o)=>e.setAttribute(t,o),N=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},H=(e,t,o)=>e.getAttribute(o?'data-'+t:t),I=(e,t)=>e.appendChild(t),V=(e,t)=>e.classList.add(t),j=(e,t)=>V(e,'cm__'+t),L=(e,t)=>V(e,'pm__'+t),F=(e,t)=>e.classList.remove(t),P=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=P(n)}return t},O=()=>{const e={},{O:t,X:o,Y:n}=g.o;for(const a of t)e[a]=J(n[a],S(o[a]));return e},R=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),B=(e,t,o,n)=>{e.addEventListener(t,o),n&&g.o.m.push({pe:e,me:t,ge:o})},G=()=>{const e=g.t.cookie.expiresAfterDays;return w(e)?e(g.o.F):e},J=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!v(n,e))).concat(n.filter((e=>!v(o,e))))},U=e=>{g.o.R=x(e),g.o.F=(()=>{let e='custom';const{R:t,O:o,B:n}=g.o,a=t.length;return a===o.length?e='all':a===n.length&&(e='necessary'),e})()},$=(e,t,o,n)=>{const a='accept-',{show:s,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,d=e||document,_=e=>D(d,`[data-cc="${e}"]`),u=(e,t)=>{T(e),l(t),i(),r()},p=_('show-preferencesModal'),m=_('show-consentModal'),b=_(a+'all'),v=_(a+'necessary'),y=_(a+'custom'),h=g.t.lazyHtmlGeneration;for(const e of p)E(e,'aria-haspopup','dialog'),B(e,f,(e=>{T(e),c()})),h&&(B(e,'mouseenter',(e=>{T(e),g.o.N||o(t,n)}),!0),B(e,'focus',(()=>{g.o.N||o(t,n)})));for(let e of m)E(e,'aria-haspopup','dialog'),B(e,f,(e=>{T(e),s(!0)}),!0);for(let e of b)B(e,f,(e=>{u(e,'all')}),!0);for(let e of y)B(e,f,(e=>{u(e)}),!0);for(let e of v)B(e,f,(e=>{u(e,[])}),!0)},z=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},q=(e,t)=>{const o=n=>{n.target.removeEventListener('transitionend',o),'opacity'===n.propertyName&&'1'===getComputedStyle(e).opacity&&z((e=>1===e?g.ne.be:g.ne.ve)(t))};B(e,'transitionend',o)};let K;const Q=e=>{clearTimeout(K),e?V(g.ne.ye,s):K=setTimeout((()=>{F(g.ne.ye,s)}),500)},W=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],X=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${W[e]}"/></svg>`,Y=e=>{const t=g.ne,o=g.o;(e=>{const n=e===t.he,a=o.i.disablePageInteraction?t.ye:n?t.Ce:t.ye;B(a,'keydown',(t=>{if('Tab'!==t.key||!(n?o.k&&!o.A:o.A))return;const a=M(),s=n?o.q:o.K;0!==s.length&&(t.shiftKey?a!==s[0]&&e.contains(a)||(T(t),z(s[1])):a!==s[1]&&e.contains(a)||(T(t),z(s[0])))}),!0)})(e)},Z=['[href]',i,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),ee=e=>{const{o:t,ne:o}=g,n=(e,t)=>{const o=D(e,Z);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.D&&n(o.he,t.q),2===e&&t.N&&n(o.we,t.K)},te=(e,t,o)=>{const{de:n,le:a,ie:s,_e:c,ue:r,fe:i}=g.ce,l=g.re;if(t){const n={modalName:t};return e===l.fe?w(i)&&i(n):e===l._e?w(c)&&c(n):(n.modal=o,w(r)&&r(n)),R(e,n)}const d={cookie:g.o.p};e===l.ie?w(s)&&s(P(d)):e===l.le?w(a)&&a(P(d)):(d.changedCategories=g.o.j,d.changedServices=g.o.ee,w(n)&&n(P(d))),R(e,P(d))},oe=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},ne=e=>{const{Y:t,ee:o,O:n,X:a,oe:s,p:r,j:i}=g.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=a[e][o];if(!n)continue;const{onAccept:s,onReject:c}=n;!n.Se&&v(t[e],o)?(n.Se=!0,w(s)&&s()):n.Se&&!v(t[e],o)&&(n.Se=!1,w(c)&&c())}}if(!g.t.manageScriptTags)return;const l=s,d=e||r.categories||[],f=(e,n)=>{if(n>=e.length)return;const a=s[n];if(a.xe)return f(e,n+1);const r=a.Me,l=a.Te,_=a.De,u=v(d,l),p=!!_&&v(t[l],_);if(!_&&!a.ke&&u||!_&&a.ke&&!u&&v(i,l)||_&&!a.ke&&p||_&&a.ke&&!p&&v(o[l]||[],_)){a.xe=!0;const t=H(r,'type',!0);N(r,'type',!!t),N(r,c);let o=H(r,'src',!0);o&&N(r,'src',!0);const s=A('script');s.textContent=r.innerHTML;for(const{nodeName:e}of r.attributes)E(s,e,r[e]||H(r,e));t&&(s.type=t),o?s.src=o:o=r.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(s.onload=s.onerror=()=>{f(e,++n)}),r.replaceWith(s),i)return}f(e,++n)};f(l,0)},ae='bottom',se='left',ce='center',re='right',ie='inline',le='wide',de='pm--',fe='box',_e=['middle','top',ae],ue=[se,ce,re],pe={box:{Ae:[le,ie],Ee:_e,Ne:ue,He:ae,Ie:re},cloud:{Ae:[ie],Ee:_e,Ne:ue,He:ae,Ie:ce},bar:{Ae:[ie],Ee:_e.slice(1),Ne:[],He:ae,Ie:''}},me={box:{Ae:[],Ee:[],Ne:[],He:'',Ie:''},bar:{Ae:[le],Ee:[],Ne:[se,re],He:'',Ie:se}},ge=e=>{const t=g.o.i.guiOptions,o=t&&t.consentModal,n=t&&t.preferencesModal,a=t&&t.additionalInfoModal;0===e&&be(g.ne.he,pe,o,'cm--',fe,'cm'),1===e&&be(g.ne.we,me,n,de,fe,'pm'),2===e&&be(g.ne.Ve,me,a,'aim--',fe,'aim')},be=(e,t,o,n,a,s)=>{e.className=s;const c=o&&o.layout,r=o&&o.position,i=o&&o.flipButtons,l=!o||!1!==o.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],u=f in t?f:a,p=t[u],m=v(p.Ae,_)&&_,b=r&&r.split(' ')||[],y=b[0],h=n===de?b[0]:b[1],C=v(p.Ee,y)?y:p.He,w=v(p.Ne,h)?h:p.Ie,S=t=>{t&&V(e,n+t)};S(u),S(m),S(C),S(w),i&&S('flip');const x=s+'__btn--secondary';if('cm'===s){const{je:e,Le:t}=g.ne;e&&(l?F(e,x):V(e,x)),t&&(l?F(t,x):V(t,x))}else{const{Fe:e}=g.ne;e&&(l?F(e,x):V(e,x))}},ve=(e,t)=>{const o=g.o,n=g.ne,{hide:a,hidePreferences:s,acceptCategory:c}=e,u=e=>{c(e),s(),a()},m=o.u&&o.u.preferencesModal;if(!m)return;const b=m.title,v=m.closeIconLabel,y=m.acceptAllBtn,w=m.acceptNecessaryBtn,x=m.savePreferencesBtn,M=m.sections||[],T=y||w||x;if(n.Pe)n.Oe=A(r),L(n.Oe,'body');else{n.Pe=A(r),V(n.Pe,'pm-wrapper');const e=A('div');V(e,'pm-overlay'),I(n.Pe,e),B(e,f,s),n.we=A(r),V(n.we,'pm'),E(n.we,'role','dialog'),E(n.we,l,!0),E(n.we,'aria-modal',!0),E(n.we,'aria-labelledby','pm__title'),B(n.ye,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.Re=A(r),L(n.Re,'header'),n.Be=A('h2'),L(n.Be,'title'),n.Be.id='pm__title',n.Ge=A(i),L(n.Ge,'close-btn'),E(n.Ge,'aria-label',m.closeIconLabel||''),B(n.Ge,f,s),n.Je=A('span'),n.Je.innerHTML=X(),I(n.Ge,n.Je),n.Ue=A(r),L(n.Ue,'body'),n.$e=A(r),L(n.$e,'footer');var D=A(r);V(D,'btns');var k=A(r),N=A(r);L(k,d),L(N,d),I(n.$e,k),I(n.$e,N),I(n.Re,n.Be),I(n.Re,n.Ge),n.ve=A(r),E(n.ve,'tabIndex',-1),I(n.we,n.ve),I(n.we,n.Re),I(n.we,n.Ue),T&&I(n.we,n.$e),I(n.Pe,n.we)}let H;b&&(n.Be.innerHTML=b,v&&E(n.Ge,'aria-label',v)),M.forEach(((e,t)=>{const a=e.title,s=e.description,c=e.linkedCategory,d=c&&o.P[c],_=e.cookieTable,u=_&&_.body,p=_&&_.caption,g=u&&u.length>0,b=!!d,v=b&&o.X[c],y=C(v)&&S(v)||[],w=b&&(!!s||!!g||S(v).length>0);var x=A(r);if(L(x,'section'),w||s){var M=A(r);L(M,'section-desc-wrapper')}let T=y.length;if(w&&T>0){const e=A(r);L(e,'section-services');for(const t of y){const o=v[t],n=o&&o.label||t,a=A(r),s=A(r),i=A(r),l=A(r);L(a,'service'),L(l,'service-title'),L(s,'service-header'),L(i,'service-icon');const f=ye(n,t,d,!0,c);l.innerHTML=n,I(s,i),I(s,l),I(a,s),I(a,f),I(e,a)}I(M,e)}if(a){var D=A(r),k=A(b?i:r);if(L(D,'section-title-wrapper'),L(k,'section-title'),k.innerHTML=a,I(D,k),b){const e=A('span');e.innerHTML=X(2,3.5),L(e,'section-arrow'),I(D,e),x.className+='--toggle';const t=ye(a,c,d);let o=m.serviceCounterLabel;if(T>0&&h(o)){let e=A('span');L(e,'badge'),L(e,'service-counter'),E(e,l,!0),E(e,'data-servicecounter',T),o&&(o=o.split('|'),o=o.length>1&&T>1?o[1]:o[0],E(e,'data-counterlabel',o)),e.innerHTML=T+(o?' '+o:''),I(k,e)}if(w){L(x,'section--expandable');var N=c+'-desc';E(k,'aria-expanded',!1),E(k,'aria-controls',N)}I(D,t)}else E(k,'role','heading'),E(k,'aria-level','3');I(x,D)}if(s){var j=A('p');L(j,'section-desc'),j.innerHTML=s,I(M,j)}if(w&&(E(M,l,'true'),M.id=N,((e,t,o)=>{B(k,f,(()=>{t.classList.contains('is-expanded')?(F(t,'is-expanded'),E(o,'aria-expanded','false'),E(e,l,'true')):(V(t,'is-expanded'),E(o,'aria-expanded','true'),E(e,l,'false'))}))})(M,x,k),g)){const e=A('table'),o=A('thead'),a=A('tbody');if(p){const t=A('caption');L(t,'table-caption'),t.innerHTML=p,e.appendChild(t)}L(e,'section-table'),L(o,'table-head'),L(a,'table-body');const s=_.headers,c=S(s),i=n.ze.createDocumentFragment(),l=A('tr');for(const e of c){const o=s[e],n=A('th');n.id='cc__row-'+o+t,E(n,'scope','col'),L(n,'table-th'),n.innerHTML=o,I(i,n)}I(l,i),I(o,l);const d=n.ze.createDocumentFragment();for(const e of u){const o=A('tr');L(o,'table-tr');for(const n of c){const a=s[n],c=e[n],i=A('td'),l=A(r);L(i,'table-td'),E(i,'data-column',a),E(i,'headers','cc__row-'+a+t),l.insertAdjacentHTML('beforeend',c),I(i,l),I(o,i)}I(d,o)}I(a,d),I(e,o),I(e,a),I(M,e)}(w||s)&&I(x,M);const P=n.Oe||n.Ue;b?(H||(H=A(r),L(H,'section-toggles')),H.appendChild(x)):H=null,I(P,H||x)})),y&&(n.qe||(n.qe=A(i),L(n.qe,'btn'),E(n.qe,_,'all'),I(k,n.qe),B(n.qe,f,(()=>u('all')))),n.qe.innerHTML=y),w&&(n.Fe||(n.Fe=A(i),L(n.Fe,'btn'),E(n.Fe,_,'necessary'),I(k,n.Fe),B(n.Fe,f,(()=>u([])))),n.Fe.innerHTML=w),x&&(n.Ke||(n.Ke=A(i),L(n.Ke,'btn'),L(n.Ke,'btn--secondary'),E(n.Ke,_,'save'),I(N,n.Ke),B(n.Ke,f,(()=>u()))),n.Ke.innerHTML=x),n.Oe&&(n.we.replaceChild(n.Oe,n.Ue),n.Ue=n.Oe),ge(1),o.N||(o.N=!0,te(g.re.ue,p,n.we),t(e),I(n.Ce,n.Pe),Y(n.we),setTimeout((()=>V(n.Pe,'cc--anim')),100)),ee(2)};function ye(e,t,o,n,a){const s=g.o,r=g.ne,i=A('label'),d=A('input'),_=A('span'),u=A('span'),p=A('span'),m=A('span'),b=A('span');if(m.innerHTML=X(1,3),b.innerHTML=X(0,3),d.type='checkbox',V(i,'section__toggle-wrapper'),V(d,'section__toggle'),V(m,'toggle__icon-on'),V(b,'toggle__icon-off'),V(_,'toggle__icon'),V(u,'toggle__icon-circle'),V(p,'toggle__label'),E(_,l,'true'),n?(V(i,'toggle-service'),E(d,c,a),r.se[a][t]=d):r.ae[t]=d,n?(e=>{B(d,'change',(()=>{const t=r.se[e],o=r.ae[e];s.Z[e]=[];for(let o in t){const n=t[o];n.checked&&s.Z[e].push(n.value)}o.checked=s.Z[e].length>0}))})(a):(e=>{B(d,f,(()=>{const t=r.se[e],o=d.checked;s.Z[e]=[];for(let n in t)t[n].checked=o,o&&s.Z[e].push(n)}))})(t),d.value=t,p.textContent=e.replace(/<.*>.*<\/.*>/gm,''),I(u,b),I(u,m),I(_,u),s.T)(o.readOnly||o.enabled)&&(d.checked=!0);else if(n){const e=s.Y[a];d.checked=o.readOnly||v(e,t)}else v(s.R,t)&&(d.checked=!0);return o.readOnly&&(d.disabled=!0),I(i,d),I(i,_),I(i,p),i}const he=(e,t)=>{const o=g.o,n=g.ne,a=o.u&&o.u.additionalInfoModal;if(!a)return;const s=a.title,c=a.description,f=a.closeBtn;if(n.Qe)n.We=A(r),V(n.We,'body');else{n.Qe=A(r),V(n.Qe,'aim-wrapper');const e=A(r);V(e,'aim-overlay'),I(n.Qe,e),n.Ve=A(r),V(n.Ve,'aim'),E(n.Ve,'role','dialog'),E(n.we,l,!0),E(n.Ve,'aria-modal',!0),E(n.Ve,'aria-labelledby','aim__title'),n.Xe=A(r),V(n.Xe,'header'),n.Ye=A('h2'),V(n.Ye,'title'),n.Ye.id='aim__title',n.Ze=A(i),V(n.Ze,'close-btn'),E(n.Ze,'aria-label',f.ariaLabel||''),n.et=A('span'),n.et.innerHTML=X(),I(n.Ze,n.et),n.tt=A(r),V(n.tt,'body'),n.ot=A(r),V(n.ot,'footer');var _=A(r);V(_,d),I(n.ot,_),I(n.Xe,n.Ye),I(n.Xe,n.Ze),n.nt=A(r),E(n.nt,'tabindex',-1),I(n.Ve,n.nt),I(n.Ve,n.Xe),I(n.Ve,n.tt),f&&I(n.Ve,n.ot),I(n.Qe,n.Ve)}s&&(n.Ye.innerHTML=s,f&&E(n.Ze,'aria-label',f)),c&&(n.tt.innerHTML=c),f&&(n.st||(n.st=A(i),V(n.st,'btn'),I(_,n.st)),n.st.innerHTML=f),n.We&&(n.Ve.replaceChild(n.We,n.tt),n.tt=n.We),ge(2),o.ct||(o.ct=!0,t(),I(n.Ce,n.Qe),setTimeout((()=>V(n.Qe,'cc--anim')),100))},Ce=()=>{const e=A('span');return g.ne.rt||(g.ne.rt=e),e},we=(e,t)=>{const o=g.o,n=g.ne,{hide:a,showPreferences:s,showAdditionalInfo:c,acceptCategory:p}=e,m=o.u&&o.u.consentModal;if(!m)return;const b=m.acceptAllBtn,v=m.acceptNecessaryBtn,y=m.showPreferencesBtn,h=m.showAdditionalInfoBtn,C=m.closeIconLabel,w=m.footer,S=m.label,x=m.title,M=e=>{a(),p(e)};if(!n.it){n.it=A(r),n.he=A(r),n.lt=A(r),n.dt=A(r),n.ft=A(r),V(n.it,'cm-wrapper'),V(n.he,'cm'),j(n.lt,'body'),j(n.dt,'texts'),j(n.ft,'btns'),E(n.he,'role','dialog'),E(n.he,'aria-modal','true'),E(n.he,l,'false'),E(n.he,'aria-describedby','cm__desc'),S?E(n.he,'aria-label',S):x&&E(n.he,'aria-labelledby','cm__title');const e='box',t=o.i.guiOptions,a=t&&t.consentModal,s=(a&&a.layout||e).split(' ')[0]===e;x&&C&&s&&(n.Le||(n.Le=A(i),n.Le.innerHTML=X(),j(n.Le,'btn'),j(n.Le,'btn--close'),B(n.Le,f,(()=>{M([])})),I(n.lt,n.Le)),E(n.Le,'aria-label',C)),I(n.lt,n.dt),(b||v||y||h)&&I(n.lt,n.ft),n.be=A(r),E(n.be,'tabIndex',-1),I(n.he,n.be),I(n.he,n.lt),I(n.it,n.he)}x&&(n._t||(n._t=A('h2'),n._t.className=n._t.id='cm__title',I(n.dt,n._t)),n._t.innerHTML=x);let T=m.description;if(T&&(o.I&&(T=T.replace('{{revisionMessage}}',o.V?'':m.revisionMessage||'')),n.ut||(n.ut=A('p'),n.ut.className=n.ut.id='cm__desc',I(n.dt,n.ut)),n.ut.innerHTML=T),b&&(n.gt||(n.gt=A(i),I(n.gt,Ce()),j(n.gt,'btn'),E(n.gt,_,'all'),B(n.gt,f,(()=>{M('all')}))),n.gt.firstElementChild.innerHTML=b),v&&(n.je||(n.je=A(i),I(n.je,Ce()),j(n.je,'btn'),E(n.je,_,'necessary'),B(n.je,f,(()=>{M([])}))),n.je.firstElementChild.innerHTML=v),y&&(n.bt||(n.bt=A(i),I(n.bt,Ce()),j(n.bt,'btn'),j(n.bt,'btn--secondary'),E(n.bt,_,'show'),B(n.bt,'mouseenter',(()=>{o.N||ve(e,t)})),B(n.bt,f,s)),n.bt.firstElementChild.innerHTML=y),h&&(n.vt||(n.vt=A(i),I(n.vt,Ce()),j(n.vt,'btn'),j(n.vt,'btn--secondary'),E(n.vt,_,'show'),B(n.vt,'mouseenter',(()=>{o.N||he(0,t)})),B(n.vt,f,c)),n.vt.firstElementChild.innerHTML=h),n.yt||(n.yt=A(r),j(n.yt,d),b&&I(n.yt,n.gt),v&&I(n.yt,n.je),(b||v)&&I(n.lt,n.yt),I(n.ft,n.yt)),n.bt&&!n.ht&&(n.ht=A(r),n.je&&n.gt?(j(n.ht,d),I(n.ht,n.bt),I(n.ht,n.vt),I(n.ft,n.ht)):(I(n.yt,n.bt),I(n.yt,n.vt),j(n.yt,d+'--uneven'))),w){if(!n.Ct){let e=A(r),t=A(r);n.Ct=A(r),j(e,'footer'),j(t,'links'),j(n.Ct,'link-group'),I(t,n.Ct),I(e,t),I(n.he,e)}n.Ct.innerHTML=w}ge(0),o.D||(o.D=!0,te(g.re.ue,u,n.he),t(e),I(n.Ce,n.it),Y(n.he),setTimeout((()=>V(n.it,'cc--anim')),100)),ee(1),$(n.lt,e,ve,t)},Se=e=>{if(!h(e))return null;if(e in g.o._)return e;let t=e.slice(0,2);return t in g.o._?t:null},xe=()=>g.o.l||g.o.i.language.default,Me=e=>{e&&(g.o.l=e)},Te=async e=>{const t=g.o;let o=Se(e)?e:xe(),n=t._[o];return h(n)?n=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(n):w(n)&&(n=await n()),!!n&&(t.u=n,Me(o),!0)},De=()=>{let e=g.o.i.language.rtl,t=g.ne.Ce;e&&t&&(y(e)||(e=[e]),v(e,g.o.l)?V(t,'cc--rtl'):F(t,'cc--rtl'))},ke=()=>{const e=g.ne;if(e.Ce)return;e.Ce=A(r),e.Ce.id='cc-main',e.Ce.setAttribute('data-nosnippet',''),De();let t=g.o.i.root;t&&h(t)&&(t=document.querySelector(t)),(t||e.ze.body).appendChild(e.Ce)},Ae=e=>oe((()=>localStorage.removeItem(e))),Ee=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=b(e,t);return o>-1?[e[o]]:[]}},Ne=e=>{const{hostname:t,protocol:o}=location,{name:n,path:a,domain:s,sameSite:c,useLocalStorage:r}=g.t.cookie,i=e?(()=>{const e=g.o.S,t=e?new Date-e:0;return 864e5*G()-t})():864e5*G(),l=new Date;l.setTime(l.getTime()+i),g.o.p.expirationTime=l.getTime();const d=JSON.stringify(g.o.p);let f=n+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+c;v(t,'.')&&(f+='; Domain='+s),'https:'===o&&(f+='; Secure'),r?((e,t)=>{oe((()=>localStorage.setItem(e,t)))})(n,d):document.cookie=f,g.o.p},He=(e,t,o)=>{if(0===e.length)return;const n=o||g.t.cookie.domain,a=t||g.t.cookie.path,s='www.'===n.slice(0,4),c=s&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),s&&r(t,c)},Ie=e=>{const t=e||g.t.cookie.name,o=g.t.cookie.useLocalStorage;return((e,t)=>{let o;return o=oe((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},o})(o?(n=t,oe((()=>localStorage.getItem(n)))||''):Ve(t,!0),o);var n},Ve=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},je=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];e?oe((()=>{e.test(t)&&o.push(t)})):o.push(t)}return o},Le=(e,n=[])=>{((e,t)=>{const{O:o,R:n,B:a,N:s,Z:c,G:r,X:i}=g.o;let l=[];if(e){y(e)?l.push(...e):h(e)&&(l='all'===e?o:[e]);for(const e of o)c[e]=v(l,e)?S(i[e]):[]}else l=[...n,...r],s&&(l=(()=>{const e=g.ne.ae;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})());l=l.filter((e=>!v(o,e)||!v(t,e))),l.push(...a),U(l)})(e,n),(e=>{const t=g.o,{Z:o,B:n,Y:a,X:s,O:c}=t,r=c;t.te=P(a);for(const e of r){const c=s[e],r=S(c),i=o[e]&&o[e].length>0,l=v(n,e);if(0!==r.length){if(a[e]=[],l)a[e].push(...r);else if(i){const t=o[e];a[e].push(...t)}else a[e]=t.Z[e];a[e]=x(a[e])}}})(),(()=>{const e=g.o;e.j=g.t.mode===o&&e.T?J(e.G,e.R):J(e.R,e.p.categories);let n=e.j.length>0,a=!1;for(const t of e.O)e.ee[t]=J(e.Y[t],e.te[t]),e.ee[t].length>0&&(a=!0);const s=g.ne.ae;for(const t in s)s[t].checked=v(e.R,t);for(const t of e.O){const o=g.ne.se[t],n=e.Y[t];for(const e in o)o[e].checked=v(n,e)}e.C||(e.C=new Date),e.M||(e.M=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),e.p={categories:P(e.R),revision:g.t.revision,data:e.h,consentTimestamp:e.C.toISOString(),consentId:e.M,services:P(e.Y)},e.S&&(e.p.lastConsentTimestamp=e.S.toISOString());let c=!1;const r=n||a;(e.T||r)&&(e.T&&(e.T=!1,c=!0),e.S=e.S?new Date:e.C,e.p.lastConsentTimestamp=e.S.toISOString(),Ne(),g.t.autoClearCookies&&(c||r)&&(e=>{const t=g.o,o=je(),n=(e=>{const t=g.o;return(e?t.O:t.j).filter((e=>{const o=t.P[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.ee)for(const n of t.ee[e]){const a=t.X[e][n].cookies;if(!v(t.Y[e],n)&&a)for(const e of a){const t=Ee(o,e.name);He(t,e.path,e.domain)}}for(const a of n){const n=t.P[a].autoClear,s=n&&n.cookies||[],c=v(t.j,a),r=!v(t.R,a),i=c&&r;if(e?r:i){n.reloadPage&&i&&(t.L=!0);for(const e of s){const t=Ee(o,e.name);He(t,e.path,e.domain)}}}})(c),ne()),c&&(te(g.re.ie),te(g.re.le),g.t.mode===t)||(r&&te(g.re.de),e.L&&(e.L=!1,location.reload()))})()},Fe=e=>{const t=g.o.T?[]:g.o.R;return v(t,e)},Pe=(e,t)=>{const o=g.o.T?[]:g.o.Y[t]||[];return v(o,e)},Oe=(e,t,o)=>{let n=[];const a=e=>{if(h(e)){let t=Ve(e);''!==t&&n.push(t)}else n.push(...je(e))};if(y(e))for(let t of e)a(t);else a(e);He(n,t,o)},Re=e=>{const{ne:t,o:o}=g;if(!o.k){if(!o.D){if(!e)return;we(Ue,ke)}o.k=!0,o.U=M(),o.v&&Q(!0),q(t.he,1),V(t.ye,n),E(t.he,l,'false'),setTimeout((()=>{z(g.ne.be)}),100),te(g.re.fe,u)}},Be=()=>{const{ne:e,o:t,re:o}=g;t.k&&(t.k=!1,t.v&&Q(),z(e.rt,!0),F(e.ye,n),E(e.he,l,'true'),z(t.U),t.U=null,te(o._e,u))},Ge=()=>{const e=g.o;e.A||(e.N||ve(Ue,ke),e.A=!0,e.k?e.$=M():e.U=M(),q(g.ne.we,2),V(g.ne.ye,a),E(g.ne.we,l,'false'),setTimeout((()=>{z(g.ne.ve)}),100),te(g.re.fe,p))},Je=()=>{const e=g.o;e.A&&(e.A=!1,(()=>{const e=ze(),t=g.o.P,o=g.ne.ae,n=g.ne.se,a=e=>v(g.o.G,e);for(const s in o){const c=!!t[s].readOnly;o[s].checked=c||(e?Fe(s):a(s));for(const t in n[s])n[s][t].checked=c||(e?Pe(t,s):a(s))}})(),z(g.ne.Je,!0),F(g.ne.ye,a),E(g.ne.we,l,'true'),e.k?(z(e.$),e.$=null):(z(e.U),e.U=null),te(g.re._e,p))};var Ue={show:Re,hide:Be,showPreferences:Ge,hidePreferences:Je,acceptCategory:Le};const $e=(e,t)=>{const o=Ie(t);return e?o[e]:o},ze=()=>!g.o.T;e.acceptCategory=Le,e.acceptService=(e,t)=>{const{O:o,X:n}=g.o;if(!(e&&t&&h(t)&&v(o,t)&&0!==S(n[t]).length))return!1;((e,t)=>{const o=g.o,{X:n,Z:a,N:s}=o,c=g.ne.se[t]||{},r=g.ne.ae[t]||{},i=S(n[t]);if(a[t]=[],h(e)){if('all'===e){if(a[t].push(...i),s)for(let e in c)c[e].checked=!0,k(c[e])}else if(v(i,e)&&a[t].push(e),s)for(let t in c)c[t].checked=e===t,k(c[t])}else if(y(e))for(let o of i){const n=v(e,o);n&&a[t].push(o),s&&(c[o].checked=n,k(c[o]))}const l=0===a[t].length;o.R=l?o.R.filter((e=>e!==t)):x([...o.R,t]),s&&(r.checked=!l,k(r))})(e,t),Le()},e.acceptedCategory=Fe,e.acceptedService=Pe,e.eraseCookies=Oe,e.getConfig=e=>{const t=g.t,o=g.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},e.getCookie=$e,e.getUserPreferences=()=>{const{F:e,Y:t}=g.o,{accepted:o,rejected:n}=(()=>{const{T:e,R:t,O:o}=g.o;return{accepted:t,rejected:e?[]:o.filter((e=>!v(t,e)))}})();return P({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:O()})},e.hide=Be,e.hidePreferences=Je,e.loadScript=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=A('script'),C(t))for(const e in t)E(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,I(document.head,o)}))},e.reset=e=>{const{Ce:t,ye:o}=g.ne,{name:c,path:r,domain:i,useLocalStorage:l}=g.t.cookie;e&&(l?Ae(c):Oe(c,r,i));for(const{pe:e,me:t,ge:o}of g.o.m)e.removeEventListener(t,o);t&&t.remove(),o&&o.classList.remove(s,a,n);const d=new m;for(const e in g)g[e]=d[e];window._ccRun=!1},e.run=async e=>{const{o:t,t:n,re:a}=g,s=window;if(!s._ccRun){if(s._ccRun=!0,(e=>{const{ne:t,t:n,o:a}=g,s=n,r=a,{cookie:i}=s,l=g.ce,d=e.cookie,f=e.categories,_=S(f)||[],u=navigator,p=document;t.ze=p,t.ye=p.documentElement,i.domain=location.hostname,r.i=e,r.P=f,r.O=_,r._=e.language.translations,r.v=!!e.disablePageInteraction,l.ie=e.onFirstConsent,l.le=e.onConsent,l.de=e.onChange,l._e=e.onModalHide,l.fe=e.onModalShow,l.ue=e.onModalReady;const{mode:m,autoShow:b,lazyHtmlGeneration:y,autoClearCookies:h,revision:w,manageScriptTags:x,hideFromBots:M}=e;m===o&&(s.mode=m),'boolean'==typeof h&&(s.autoClearCookies=h),'boolean'==typeof x&&(s.manageScriptTags=x),'number'==typeof w&&w>=0&&(s.revision=w,r.I=!0),'boolean'==typeof b&&(s.autoShow=b),'boolean'==typeof y&&(s.lazyHtmlGeneration=y),!1===M&&(s.hideFromBots=!1),!0===s.hideFromBots&&u&&(r.J=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),C(d)&&(s.cookie={...i,...d}),s.autoClearCookies,r.I,s.manageScriptTags,(e=>{const{P:t,X:o,Y:n,Z:a,B:s}=g.o;for(let c of e){const e=t[c],r=e.services||{},i=C(r)&&S(r)||[];o[c]={},n[c]=[],a[c]=[],e.readOnly&&(s.push(c),n[c]=i),g.ne.se[c]={};for(let e of i){const t=r[e];t.Se=!1,o[c][e]=t}}})(_),(()=>{if(!g.t.manageScriptTags)return;const e=g.o,t=D(document,'script['+c+']');for(const o of t){let t=H(o,c),n=o.dataset.service||'',a=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),a=!0),'!'===n.charAt(0)&&(n=n.slice(1),a=!0),v(e.O,t)&&(e.oe.push({Me:o,xe:!1,ke:a,Te:t,De:n}),n)){const o=e.X[t];o[n]||(o[n]={Se:!1})}}})(),Me((()=>{const e=g.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},o=Se(t[e]);if(o)return o}return xe()})())})(e),t.J)return;(()=>{const e=g.o,t=g.t,n=Ie(),{categories:a,services:s,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=n,f=y(a);e.p=n,e.M=c;const _=!!c&&h(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.I&&_&&d!==t.revision&&(e.V=!1),e.T=!(_&&e.V&&e.C&&e.S&&f),t.cookie.useLocalStorage&&!e.T&&(e.T=(new Date).getTime()>(n.expirationTime||0),e.T&&Ae(t.cookie.name)),e.T,(()=>{const e=g.o;for(const t of e.O){const n=e.P[t];if(n.readOnly||n.enabled){e.G.push(t);const n=e.X[t]||{};for(let a in n)e.Z[t].push(a),e.i.mode===o&&e.Y[t].push(a)}}})(),e.T?t.mode===o&&(e.R=[...e.G]):(e.Y={...e.Y,...s},e.Z={...e.Y},U([...e.B,...a]))})();const i=ze();if(!await Te())return!1;if($(null,r=Ue,ve,ke),g.o.T&&we(r,ke),g.t.lazyHtmlGeneration||(ve(r,ke),he(0,ke)),n.autoShow&&!i&&Re(!0),i)return ne(),te(a.le);n.mode===o&&ne(t.G)}var r},e.setCookieData=e=>{let t,o=e.value,n=e.mode,a=!1;const s=g.o;if('update'===n){s.h=t=$e('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],a=!0)}else!e&&t||t===o||(t=o,a=!0)}else t=o,a=!0;return a&&(s.h=t,s.p.data=t,Ne(!0)),a},e.setLanguage=async(e,t)=>{if(!Se(e))return!1;const o=g.o;return!(e===xe()&&!0!==t||!await Te(e)||(Me(e),o.D&&we(Ue,ke),o.N&&ve(Ue,ke),De(),0))},e.show=Re,e.showPreferences=Ge,e.validConsent=ze,e.validCookie=e=>''!==Ve(e,!0)},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={});
